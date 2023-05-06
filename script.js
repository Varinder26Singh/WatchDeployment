const stepsEl = document.getElementById('steps');
const heartRateEl = document.getElementById('heart-rate');

async function getData() {
  const response = await fetch('/data');
  const data = await response.json();
  stepsEl.innerText = data.steps;
  heartRateEl.innerText = data.heartRate;
}

getData();
