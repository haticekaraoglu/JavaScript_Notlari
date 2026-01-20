// A harfinin cümle de kaç kez geçtiğini hesaplama örneği

//Harf Sayısı Bulma 1
function kacASayisi(cümle,harfUzunlugu){
   let sayac=0;
    for (let i=0;i<=harfUzunlugu;i++){
        if( cümle[i]==="a" || cümle[i]==="A"){
            sayac++;
        }  
   }
   return sayac;
}
let cümle=prompt("Bir cümle giriniz: ");
let harfUzunlugu=cümle.length;
confirm(kacASayisi(cümle,harfUzunlugu));


// Harf Sayısı Bulma 2 

function harf_Sayi_Bulma(cumle){
    return cumle.split("").filter(h=>h.toLowerCase()==="a").length;
}
let cumle=prompt("Bir cümle giriniz: ");
confirm(harf_Sayi_Bulma(cumle));

// harf harf diziye çevirir split 
// filter dizideki elemanları şarta göre filtreler
// h dizideki her harfi temsil eder 
// toLowerCase() harfleri küçültür
