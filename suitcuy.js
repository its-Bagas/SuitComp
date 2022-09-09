var tanya = true;
while (tanya) {
  var p = prompt("pilih : gajah, semut, orang");

  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";
  if (p == comp) {
    hasil = "SERI Bwang";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "MENANG!" : "KOK KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KOK KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KOK KALAH!" : "MENANG!";
  } else {
    hasil = "mungkin anda salah :v";
  }

  alert("kamu memilih : " + p + " dan komputer  memilih : " + comp + "\nMaka Hasilnya  : Kamu " + hasil);

  tanya = confirm("lagi kgk bwang?");
}

alert("TERIMAKASIH SUDAH MAIN.");
