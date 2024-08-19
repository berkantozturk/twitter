const fs = require('fs');
const readline = require('readline');
const path = require('path');

// CLI üzerinden kullanıcıdan veri almak için readline arayüzünü oluşturun
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Kullanıcıdan alınacak verileri tutacak bir obje oluşturun
const kullaniciBilgisi = {};

// Soru sorma fonksiyonu
function soruSor(soru) {
  return new Promise((cevap) => rl.question(soru, cevap));
}

async function kullaniciVerisiAl() {
  kullaniciBilgisi.firstName = await soruSor('Adınız: ');
  kullaniciBilgisi.lastName = await soruSor('Soyadınız: ');
  kullaniciBilgisi.email = await soruSor('Email: ');
  kullaniciBilgisi.telefon = await soruSor('Telefon: ');
  kullaniciBilgisi.sifre = await soruSor('Şifre: ');

  // Veriyi JSON formatına çevirin
  const veri = JSON.stringify(kullaniciBilgisi, null, 2);

  // JSON dosyasına yazma işlemi
  const dosyaYolu = path.join(__dirname, 'kullanicibilgisi.json');
  fs.writeFileSync(dosyaYolu, veri);

  console.log('Veri başarıyla kaydedildi!');

  // Readline arayüzünü kapatın
  rl.close();
}

// Fonksiyonu çalıştırın
kullaniciVerisiAl();
