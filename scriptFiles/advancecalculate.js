const multiply = (exchange, num, elementId) => {
  let total = (exchange * num).toFixed(2);

  document.getElementById(elementId).innerText = total;
};
async function advanceCalculate(fromcurrency = "NZD", tocurrency = "BDT") {
  let response = await fetch(
    `https://fxds-public-exchange-rates-api.oanda.com/cc-api/currencies?base=${fromcurrency}&quote=${tocurrency}&data_type=general_currency_pair&start_date=2023-08-25&end_date=2023-08-26`
  );

  let data = await response.json();
  let exchange = data.response[0].average_bid;

  multiply(exchange, 1, "multiply1");
  multiply(exchange, 5, "multiply5");
  multiply(exchange, 10, "multiply10");
  multiply(exchange, 25, "multiply25");
  multiply(exchange, 50, "multiply50");
  multiply(exchange, 100, "multiply100");
  multiply(exchange, 500, "multiply500");
  multiply(exchange, 1000, "multiply1000");
  multiply(exchange, 5000, "multiply5000");
  multiply(exchange, 10000, "multiply10000");
  multiply(exchange, 50000, "multiply50000");
}
advanceCalculate();

async function advanceCalculate2(fromcurrency = "BDT", tocurrency = "NZD") {
  let response = await fetch(
    `https://fxds-public-exchange-rates-api.oanda.com/cc-api/currencies?base=${fromcurrency}&quote=${tocurrency}&data_type=general_currency_pair&start_date=2023-08-25&end_date=2023-08-26`
  );

  let data = await response.json();
  let exchange = data.response[0].average_bid;

  multiply(exchange, 1, "multiplycolOne1");
  multiply(exchange, 5, "multiplycolOne5");
  multiply(exchange, 10, "multiplycolOne10");
  multiply(exchange, 25, "multiplycolOne25");
  multiply(exchange, 50, "multiplycolOne50");
  multiply(exchange, 100, "multiplycolOne100");
  multiply(exchange, 500, "multiplycolOne500");
  multiply(exchange, 1000, "multiplycolOne1000");
  multiply(exchange, 5000, "multiplycolOne5000");
  multiply(exchange, 10000, "multiplycolOne10000");
  multiply(exchange, 50000, "multiplycolOne50000");
}
advanceCalculate2();

const ToggleNav = (event) => {
  setTimeout(() => {
    if (event.classList[1] === "fa-bars") {
      event.classList.toggle("fa-xmark");
    }
  }, 300);
  document.getElementById("nav").classList.toggle("opacity-100");
};
