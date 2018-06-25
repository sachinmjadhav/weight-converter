const gramsInput = document.querySelector("#gramsOutput");
const kgInput = document.querySelector("#kgOutput");
const poundsInput = document.querySelector("#lbsOutput");
const ouncesInput = document.querySelector("#ozOutput");

roundNum = n => Math.round(n * 1000) / 1000;

gramsInput.addEventListener("input", function() {
  const gramsWt = parseFloat(gramsInput.value);
  const kgWt = gramsWt * 0.001;
  const poundsWt = gramsWt * 0.0022046;
  const ouncesWt = gramsWt * 0.035274;
  kgInput.value = roundNum(kgWt);
  poundsInput.value = roundNum(poundsWt);
  ouncesInput.value = roundNum(ouncesWt);
});

kgInput.addEventListener("input", function() {
  const kgWt = parseFloat(kgInput.value);
  const gramsWt = kgWt * 1000;
  const poundsWt = kgWt * 2.20462;
  const ouncesWt = kgWt * 35.274;
  gramsInput.value = roundNum(gramsWt);
  poundsInput.value = roundNum(poundsWt);
  ouncesInput.value = roundNum(ouncesWt);
});

poundsInput.addEventListener("input", function() {
  const poundsWt = parseFloat(poundsInput.value);
  const kgWt = poundsWt / 2.2046;
  const gramsWt = poundsWt / 0.0022046;
  const ouncesWt = poundsWt / 16;
  gramsInput.value = roundNum(gramsWt);
  kgInput.value = roundNum(kgWt);
  ouncesInput.value = roundNum(ouncesWt);
});

ouncesInput.addEventListener("input", function() {
  const ouncesWt = parseFloat(ouncesInput.value);
  const poundsWt = ouncesWt * 0.0625;
  const kgWt = ouncesWt * 0.0283495;
  const gramsWt = ouncesWt * 28.3495;
  gramsInput.value = roundNum(gramsWt);
  kgInput.value = roundNum(kgWt);
  poundsInput.value = roundNum(poundsWt);
});
