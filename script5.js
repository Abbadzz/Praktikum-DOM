function gantiGelap() {
  document.body.style.backgroundColor = "#222222";
  document.getElementById("judul").style.color = "gold";
 
  const semuaIsi = document.querySelectorAll(".isi");
  semuaIsi.forEach((p) => {
    p.style.color = "white";
  });
}
 
function gantiTerang() {
  document.body.style.backgroundColor = "white";
  document.getElementById("judul").style.color = "black";
 
  const semuaIsi = document.getElementsByClassName("isi");
  for (let i = 0; i < semuaIsi.length; i++) {
    semuaIsi[i].style.color = "black";
  }
}


function gantihijau() {
    document.body.style.backgroundColor = "lightgreen";
    
    const semuaisi = document.getElementsByClassName("isi");
    for (let i = 0; i < semuaisi.length; i++) {
        semuaisi[i].style.color = "darkgreen";
    }
}

function gantijudul() {
    document.getElementById("judul").textContent = "Ibrahim Abbad N";
}