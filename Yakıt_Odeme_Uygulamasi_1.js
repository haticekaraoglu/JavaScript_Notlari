let yakit_tipi= prompt("Yakıt Tipini Giriniz:")
let yakit_miktari=Number(prompt("Yakıt Miktarını Giriniz:"))
let odenecek_tutar=1
if(yakit_tipi==="Dizel"){
    odenecek_tutar=24.53*yakit_miktari;
    alert("Ödenecek Tutar: "+odenecek_tutar)
}
else if(yakit_tipi==="Benzin"){
    odenecek_tutar=22.25*yakit_miktari;
    alert("Ödenecek Tutar: "+odenecek_tutar)
}
else if(yakit_tipi==="LPG"){
    odenecek_tutar=11.1*yakit_miktari;
    alert("Ödenecek Tutar: "+odenecek_tutar)
}
else{
    alert("Hatalı İslem ......")
}