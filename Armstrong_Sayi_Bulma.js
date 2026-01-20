let sayi = prompt("Bir sayı giriniz:");
let orijinalSayi = Number(sayi);
let geciciSayi = Number(sayi);
let toplam = 0;
let basamakSayisi = sayi.length;

while (geciciSayi > 0) {
    let basamak = geciciSayi % 10;
    toplam += basamak ** basamakSayisi;
    geciciSayi = Math.floor(geciciSayi / 10);
}

if (toplam === orijinalSayi) {
    console.log("Armstrong sayıdır");
} else {
    console.log("Armstrong sayı değildir");
}
