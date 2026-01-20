let sayi = Number(prompt("Lütfen 1'den büyük bir sayı giriniz: "));
let sonuc = true;

if (sayi <= 1) {
    alert("Lütfen 1'den büyük bir sayı giriniz.");
} else {
    for (let i = 2; i <= Math.floor(sayi / 2); i++) {
        if (sayi % i === 0) {
            sonuc = false;
            break;
        }
    }

    if (sonuc) {
        alert(sayi + " asaldır.");
    } else {
        alert(sayi + " asal değildir.");
    }
}


