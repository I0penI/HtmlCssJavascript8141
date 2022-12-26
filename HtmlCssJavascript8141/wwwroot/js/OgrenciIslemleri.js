//var ogrenciler = new Array();
//ogrenciler[0] = "Ali Arslan";
//ogrenciler[1] = "Yağmur Arslan";
//ogrenciler[2] = "Erva Arslan";

var ogrenciler = ["Ali Arslan", "Yağmur Arslan", "Erva Arslan"];
 
//for (var i = 0; i < ogrenciler.length; i++) {
//    console.log(ogrenciler[i]);
//}
//for (const ogrenci of ogrenciler) {
//    console.log(ogrenci);
//}

function ogrenciAra() {
    var input = document.getElementById('ogrenciInput').value;
    var ogrenciler = ogrenciAra3(input);
    var pComma = "";
    var pNewLine = "";
    for (const o of ogrenciler) {
        pComma += o + ", ";
        pNewLine += o + "<br />";
    }
    var pOutput = document.getElementById("ogrencilerOutput");
    pOutput.innerText = pComma.substr(0, pComma.length - 2);
    pOutput.innerHTML = "<b>" + pNewLine + "</b>";
}

function ogrenciAra1(ogrenci) {
    var bulundu = false;
    for (const o of ogrenciler) {
        if (o == ogrenci) {
            bulundu = true;
            break;
        }
    }
    if (bulundu)
        console.log(ogrenci + ' Bulundu.');
    else
        console.log('Öğrenci bulunamadı!');

}
function ogrenciAra2(ogrenci) {
    var index = ogrenciler.indexOf(ogrenci);
    if (index == -1) {
        console.log('Öğrenci bulunamadı!');
    } else {
        console.log(ogrenci + ' Bulundu.');
    }
}

function ogrenciAra3(ogrenci) {
    var sonucOgrenciler = [];
    for (const o of ogrenciler) {
        if (o.toUpperCase().includes(ogrenci.toUpperCase().trim())) {
            sonucOgrenciler.push(o);
        }
    }
    for (const so of sonucOgrenciler) {
        console.log(so);
    }
    return sonucOgrenciler;
}
