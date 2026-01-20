let boy=Number (prompt("Boyunuzu girin: "))
let kilo=Number (prompt("Kilonuzu girin: "))
let vucut_kitle_indeksi=kilo/boy**2

if (vucut_kitle_indeksi<18.5){
    console.log("Zayıf", vucut_kitle_indeksi);
}
else if (vucut_kitle_indeksi>=18.5 && vucut_kitle_indeksi<=24.9){
    console.log("Sağlıklı", vucut_kitle_indeksi);
}
else if (vucut_kitle_indeksi>=25 && vucut_kitle_indeksi<=29.9){
    console.log("Şişman", vucut_kitle_indeksi);
}
else if (vucut_kitle_indeksi>=30 && vucut_kitle_indeksi<=39.9){
    console.log("Obez", vucut_kitle_indeksi);    
}
else if (vucut_kitle_indeksi>= 40){
    console.log("Aşırı Obez", vucut_kitle_indeksi)
}
else{
    console.log("Hatalı islem ")
}