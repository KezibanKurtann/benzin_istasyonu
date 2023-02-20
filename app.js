/* 

1-Dizel : 24.53 
2-Benzin: 22.25
3-Lpg : 11.1

Gelen müşterilerden alacağımız bilgiler;
1-yakıt tipi 
2- yüklenecek yakıt litresi 

*/

let dizel = 24.53,
    benzin = 22.25,
    lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" + yeniSatir +
    "2-Benzin" + yeniSatir +
    "3-LPG" + yeniSatir +
    "Yakıt tipini seçiniz";

let yakitTipi = prompt(yakitMetni);


function hesapla(odenecekTutar,bakiye) {

    if (odenecekTutar <= bakiye) {
        //bakiyeniz yeterli 
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı" + yeniSatir + "Kalan bakiye : " + bakiye);

    } else {
        //bakiye yeterli değil 
        alert("Bakiyeni yeterli değildir" + yeniSatir +
            "Ödenecek tutar : " + odenecekTutar + yeniSatir +
            "Bakiye : " + bakiye + yeniSatir +
            "Eksik tutar : " + (odenecekTutar - bakiye));
    }
}

if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
    let yakitLitresi = Number(prompt("yakıt litresini giriniz"));
    let bakiye = Number(prompt("Bakiyenizi giriniz"));

    let odenecekTutar;


    if (yakitTipi == "1") {
        //DİZEL
        odenecekTutar = dizel * yakitLitresi;
        
    } else if (yakitTipi == "2") {
        //BENZİN
       odenecekTutar = benzin * yakitLitresi;
        
    } else if (yakitTipi == "3") {
        //LPG
       odenecekTutar = lpg * yakitLitresi;
    
    }

    hesapla(odenecekTutar,bakiye);

} else {
    alert(" Lütfen geçerli bir yakıt tipi seçiniz")
}