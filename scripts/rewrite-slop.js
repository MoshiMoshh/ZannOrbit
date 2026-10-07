import fs from 'fs';
import path from 'path';

// Setup API Configuration
const API_KEY = 'sk-129f2389480657c8-4s56ra-2303721e';
const ENDPOINT = 'https://seren.up.railway.app/v1/chat/completions'; // Assuming OpenAI-compatible proxy endpoint for Claude

async function rewriteSlop(filePath) {
  const absolutePath = path.resolve(filePath);
  
  if (!fs.existsSync(absolutePath)) {
    console.error(`File tidak ditemukan: ${absolutePath}`);
    process.exit(1);
  }

  console.log(`\n📄 Membaca file: ${filePath}`);
  const content = fs.readFileSync(absolutePath, 'utf8');

  console.log(`🤖 Meminta Claude untuk mereview dan memperbaiki AI Slop...`);
  
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20240620', // Most proxies map this correctly, change if needed
        messages: [
          {
            role: 'system',
            content: `Kamu adalah Senior Frontend Developer. Tugasmu adalah memperbaiki "AI Slop" (teks yang terlalu generik, kaku, buzzwords berlebihan, atau gaya bahasa template AI) di dalam kode sumber website portfolio berbahasa Indonesia.
            
Aturan:
1. Ubah teks yang terasa seperti "AI Slop" menjadi bahasa Indonesia yang lebih natural, kasual namun profesional (style anak tech/startup Jakarta, misalnya pakai "gue/lu" atau "saya/kamu" yang santai).
2. JANGAN ubah logika kode, nama variabel, atau struktur komponen. HANYA ubah string teks/konten.
3. Kembalikan FULL CODE dari file tersebut agar bisa langsung di-overwrite, TANPA markdown formatting \`\`\`tsx atau penjelasan apapun. Hanya output kodenya saja.`
          },
          {
            role: 'user',
            content: `Tolong perbaiki AI slop di file ini:\n\n${content}`
          }
        ],
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    let newContent = data.choices[0].message.content;
    
    // Clean up if Claude accidentally wrapped it in markdown code blocks
    newContent = newContent.replace(/^```[a-z]*\n/i, '').replace(/\n```$/i, '');

    fs.writeFileSync(absolutePath, newContent, 'utf8');
    console.log(`✅ Berhasil memperbaiki dan menyimpan: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Gagal memproses ${filePath}:`, error.message);
    
    // Fallback if it's actually an Anthropic native endpoint (not OpenAI compatible)
    console.log(`\n⚠️ Mencoba menggunakan format native Anthropic /messages...`);
    await tryAnthropicNative(absolutePath, content);
  }
}

async function tryAnthropicNative(absolutePath, content) {
  const ANTHROPIC_ENDPOINT = 'https://seren.up.railway.app/v1/messages';
  try {
    const response = await fetch(ANTHROPIC_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20240620',
        max_tokens: 4000,
        system: `Kamu adalah Senior Frontend Developer. Tugasmu adalah memperbaiki "AI Slop" (teks yang terlalu generik, kaku, buzzwords berlebihan, atau gaya bahasa template AI) di dalam kode sumber website portfolio berbahasa Indonesia. 
Aturan: 
1. Ubah teks AI Slop menjadi bahasa Indonesia yang natural, kasual tapi profesional (tech startup vibe). 
2. JANGAN ubah logika kode, hanya string teks. 
3. Kembalikan FULL CODE tanpa markdown \`\`\`tsx dan tanpa basa-basi.`,
        messages: [
          {
            role: 'user',
            content: `Tolong perbaiki AI slop di file ini:\n\n${content}`
          }
        ],
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    let newContent = data.content[0].text;
    newContent = newContent.replace(/^```[a-z]*\n/i, '').replace(/\n```$/i, '');

    fs.writeFileSync(absolutePath, newContent, 'utf8');
    console.log(`✅ Berhasil memperbaiki dan menyimpan (via Native Anthropic): ${absolutePath}`);
  } catch (error) {
    console.error(`❌ Gagal memproses dengan format Native Anthropic:`, error.message);
  }
}

// Get file from arguments
const targetFile = process.argv[2];
if (!targetFile) {
  console.log('Cara penggunaan: node scripts/rewrite-slop.js <path-ke-file>');
  console.log('Contoh: node scripts/rewrite-slop.js src/sections/Hero.tsx');
  process.exit(1);
}

rewriteSlop(targetFile);
