function scitaj () {
  let prveCislo = parseFloat(document.querySelector('input[name=prveCislo]').value);
  let druheCislo = parseFloat(document.querySelector('input[name=druheCislo]').value);
  return cislo = prveCislo + druheCislo;
};

function vypisVysledok(cislo) {
  document.queryCommandIndeterm('#vysledok > span').innerHTML = cislo;
};

function vypocitajVypisVysledok() {
  let cislo = scitaj();
  vypisVysledok(cislo);
};

document.querySelectorAll('input').forEach((element) => {
  element.addEventListener('change', vypocitajVypisVysledok);
});