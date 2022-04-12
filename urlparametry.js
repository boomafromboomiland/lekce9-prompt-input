// získanie GET parametrov
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString); //vytvorenie novej triedy, ktorá nám pošle nové parametry

// element s výsledkami
const resultElement = document.querySelector('#seznam-parametru');

// prechádzenie parametrov a ich výpis
for (const entry of urlParams.entries()) {
  let listItemElement = document.createElement('li');
  listItemElement.innerHTML = `${entry[0]}: ${entry[1]}`;
  resultElement.appendChild(listItemElement);
}