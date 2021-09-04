let anzahlGegossen = 0;

 

const giessen = () => {

  if (anzahlGegossen < 12) {
    anzahlGegossen = anzahlGegossen + 1;
    document.querySelector("#bereits-gegossen").innerHTML = anzahlGegossen;
  } else {
    alert("Die Pflanze ist bereits ausgewachsen, Glückwunsch");
  }

  if (anzahlGegossen === 3) {
    document
      .querySelector("#kartenbild")
      .setAttribute("src", "/bilder/Pflanze2.png");
    document.querySelector("#benoetigtes-giessen").innerHTML = 6;
  }
  if (anzahlGegossen === 9) {
    document
      .querySelector("#kartenbild")
      .setAttribute("src", "/bilder/Pflanze3.png");
    document.querySelector("#benoetigtes-giessen").innerHTML = 9;
  }
  if (anzahlGegossen === 12) {
    document
      .querySelector("#kartenbild")
      .setAttribute("src", "/bilder/Pflanze4.png");
    document.querySelector("#benoetigtes-giessen").innerHTML = 12;
  }
  if (anzahlGegossen === 12) {
    document.querySelector("#kartenbild").setAttribute("src", "/bilder/Pflanze4.png");
  }
};
