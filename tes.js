// Mengimpor fungsi dari URL
import { tnyim } from 'https://raw.githubusercontent.com/kaze-aja/kaze-support/refs/heads/main/tnyshort-esm.js';

// Menggunakan fungsi untuk memperpendek URL
async function main() {
    const url = 'https://tanakasenn.com';
    const shortUrl = await tnyim(url);
    
    if (shortUrl) {
        console.log(`URL pendek: ${shortUrl}`);
    } else {
        console.log('Gagal memperpendek URL.');
    }
}

// Menjalankan fungsi utama
main();
