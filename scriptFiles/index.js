let droplist = document.querySelectorAll(".selectOption select");
let fromCurrency = document.querySelector(".selectOption select");
let toCurrency = document.querySelector(".tocurrency select");
let showAllCurrency = document.getElementById("main-find");

for (let i = 0; i < droplist.length; i++) {
  for (code in countryCode) {
    let selected;
    if (i == 0) {
      selected = code == "NZD" ? "selected" : "";
    } else if (i == 1) {
      selected = code == "BDT" ? "selected" : "";
    }
    let optionTag = `<option value='${code}'${selected}  > ${code}  -  ${countryCode[code]}</option>`;
    droplist[i].insertAdjacentHTML("beforeend", optionTag);
  }
  droplist[i].addEventListener("change", (event) => {
    changeData(event.target, i);
  });
  droplist[i].addEventListener("change", () => {
    advanceCalculate(fromCurrency.value, toCurrency.value);
  });
  droplist[i].addEventListener("change", () => {
    advanceCalculate2(toCurrency.value, fromCurrency.value);
  });
}
const changeData = (element, i) => {
  for (code in countryCode) {
    if (code == element.value) {
      let arr = [...code];
      arr.pop();
      let country_code = arr.join("");
      let Imgtag = element.parentElement.querySelector("img");
      Imgtag.src = `https://www.countryflagicons.com/FLAT/64/${country_code}.png`;

      let advanceimg = document.querySelectorAll(".advanceimg img");
      let advancecode = document.querySelectorAll(".advanceimg h1");
      let advancecalculateFrom = document.querySelectorAll(
        "table .advancecal-from"
      );
      let advancecalculateto = document.querySelectorAll(
        "table .advancecal-to"
      );

      let advanceimgcol2 = document.querySelectorAll(".advanceimgcol2 img");
      let advanceimgcol2code = document.querySelectorAll(".advanceimgcol2 h1");
      let advancecalculate2 = document.querySelectorAll(
        "table .advancecal2-to"
      );
      let advancecalculate2from = document.querySelectorAll(
        "table .advancecal2-from"
      );

      if (code == element.value && i == 0) {
        advancecalculateFrom[0].innerText = code;
        advancecalculateFrom[1].innerText = code;
        advancecalculateFrom[2].innerText = code;
        advancecalculateFrom[3].innerText = code;
        advancecalculateFrom[4].innerText = code;
        advancecalculateFrom[5].innerText = code;
        advancecalculateFrom[6].innerText = code;
        advancecalculateFrom[7].innerText = code;
        advancecalculateFrom[8].innerText = code;
        advancecalculateFrom[9].innerText = code;
        advancecalculateFrom[10].innerText = code;

        advanceimgcol2[1].src = `https://www.countryflagicons.com/FLAT/32/${country_code}.png`;
        advanceimgcol2code[1].innerText = code;
        advanceimg[0].src = `https://www.countryflagicons.com/FLAT/32/${country_code}.png`;
        advancecode[0].innerText = code;

        advancecalculate2from[0].innerText = code;
        advancecalculate2from[1].innerText = code;
        advancecalculate2from[2].innerText = code;
        advancecalculate2from[3].innerText = code;
        advancecalculate2from[4].innerText = code;
        advancecalculate2from[5].innerText = code;
        advancecalculate2from[6].innerText = code;
        advancecalculate2from[7].innerText = code;
        advancecalculate2from[8].innerText = code;
        advancecalculate2from[9].innerText = code;
        advancecalculate2from[10].innerText = code;

        document.getElementById("advanceFrom").innerText = countryCode[code];
        document.getElementById("advancecol2-from").innerText =
          countryCode[code];
        document.getElementById("TocountryCode").innerText = countryCode[code];
        document.getElementById("tcap-FromCurreny1").innerText = code;
        document.getElementById("tcap-FromCurreny2").innerText = code;
        document.getElementById("tcap-FromCurreny3").innerText = code;
        getExchangeFromCurrency();
        saveData();
      } else if (code == element.value && i == 1) {
        advancecalculateto[0].innerText = code;
        advancecalculateto[1].innerText = code;
        advancecalculateto[2].innerText = code;
        advancecalculateto[3].innerText = code;
        advancecalculateto[4].innerText = code;
        advancecalculateto[5].innerText = code;
        advancecalculateto[6].innerText = code;
        advancecalculateto[7].innerText = code;
        advancecalculateto[8].innerText = code;
        advancecalculateto[9].innerText = code;
        advancecalculateto[10].innerText = code;

        advanceimg[1].src = `https://www.countryflagicons.com/FLAT/32/${country_code}.png`;
        advancecode[1].innerText = code;
        advanceimgcol2[0].src = `https://www.countryflagicons.com/FLAT/32/${country_code}.png`;
        advanceimgcol2code[0].innerText = code;

        advancecalculate2[0].innerText = code;
        advancecalculate2[1].innerText = code;
        advancecalculate2[2].innerText = code;
        advancecalculate2[3].innerText = code;
        advancecalculate2[4].innerText = code;
        advancecalculate2[5].innerText = code;
        advancecalculate2[6].innerText = code;
        advancecalculate2[7].innerText = code;
        advancecalculate2[8].innerText = code;
        advancecalculate2[9].innerText = code;
        advancecalculate2[10].innerText = code;

        document.getElementById("fromCountryCode").innerText =
          countryCode[code];
        document.getElementById("advancecol2-To").innerText = countryCode[code];
        document.getElementById("advanceto").innerText = countryCode[code];
        document.getElementById("tcaptocurrency").innerText = code;
        getExchangeFromCurrency();
        saveData();
      }
    }
  }
};

async function getExchangeFromCurrency() {
  let url = `https://fxds-public-exchange-rates-api.oanda.com/cc-api/currencies?base=`;
  let formMoney = document.getElementById("formMoney").value;

  let numberChange = document.getElementById("convertNumber");
  if (isNaN(formMoney)) {
    return;
  }
  try {
    let response = await fetch(
      url +
        fromCurrency.value +
        "&quote=" +
        toCurrency.value +
        "&data_type=general_currency_pair&start_date=2023-08-25&end_date=2023-08-26"
    );
    let data = await response.json();

    let exchangecurrency = data.response[0].average_bid;

    let exchangeTotal = (
      document.getElementById("formMoney").value * exchangecurrency
    ).toFixed(2);
    numberChange.innerText = document.getElementById("formMoney").value;
    saveData();
    // advanceCalculate(fromCurrency.value,toCurrency.value);
    document.getElementById("toMoney").value = exchangeTotal;
    document.getElementById("heighAsk").innerText = data.response[0].high_ask;
    document.getElementById("avarageAsk").innerText =
      data.response[0].average_ask;
    document.getElementById("lowAsk").innerText = data.response[0].low_ask;

    document.getElementById("heighBid").innerText = data.response[0].high_bid;
    document.getElementById("avarageBid").innerText =
      data.response[0].average_bid;
    document.getElementById("lowBid").innerText = data.response[0].low_bid;
  } catch (error) {
    console.error("Error msg", error);
  }
}
getExchangeFromCurrency();
document
  .getElementById("formMoney")
  .addEventListener("keyup", getExchangeFromCurrency);

async function getExchangeToCurrency() {
  let url = `https://fxds-public-exchange-rates-api.oanda.com/cc-api/currencies?base=`;
  let toMoney = document.getElementById("toMoney").value;

  let numberChange = document.getElementById("convertNumber");
  if (isNaN(toMoney)) {
    return;
  }
  try {
    let response = await fetch(
      url +
        toCurrency.value +
        "&quote=" +
        fromCurrency.value +
        "&data_type=general_currency_pair&start_date=2023-08-25&end_date=2023-08-26"
    );
    let data = await response.json();
    let exchangecurrency = data.response[0].average_bid;
    let exchangeTotal = (toMoney * exchangecurrency).toFixed(2);

    numberChange.innerText = toMoney;
    document.getElementById("formMoney").value = exchangeTotal;
    console.log(document.getElementById("formMoney").value);

    saveData();
  } catch (error) {
    console.error("Error msg", error);
  }
}
document
  .getElementById("toMoney")
  .addEventListener("keyup", getExchangeToCurrency);

const Reverse = () => {
  let temp1 = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp1;
  changeData(fromCurrency);
  changeData(toCurrency);
  getExchangeFromCurrency();
  saveData();
  let temp2 = document.getElementById("TocountryCode").innerText;
  document.getElementById("TocountryCode").innerText =
    document.getElementById("fromCountryCode").innerText;
  document.getElementById("fromCountryCode").innerText = temp2;

  let temp3 = document.getElementById("tcap-FromCurreny1").innerText;
  document.getElementById("tcap-FromCurreny1").innerText =
    document.getElementById("tcaptocurrency").innerText;
  document.getElementById("tcaptocurrency").innerText = temp3;

  let temp4 = fromCurrency.value;
  toCurrency.value = document.getElementById("tcap-FromCurreny2").innerText;
  document.getElementById("tcap-FromCurreny2").innerText = temp4;
  document.getElementById("tcap-FromCurreny3").innerText = temp4;

  let temp5 = document.getElementById("advance-currency-col-one").innerHTML;
  document.getElementById("advance-currency-col-one").innerHTML =
    document.getElementById("advance-currency-col-two").innerHTML;
  document.getElementById("advance-currency-col-two").innerHTML = temp5;
};
const PrintPage = () => {
  window.print();
};
const getYear = () => {
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let data = new Date();
  let date = data.getDate();
  let day = weekday[data.getDay()];
  let month = data.toLocaleString("default", { month: "long" });
  let year = data.getFullYear();
  document.getElementById("Date").innerText = date;
  document.getElementById("Month").innerText = month;
  document.getElementById("Year").innerText = year;
  document.getElementById("tweekDay").innerText = day;
  document.getElementById("tmonth").innerText = data.toLocaleDateString(
    "default",
    { month: "short" }
  );
  document.getElementById("tdate").innerText = date;
  document.getElementById("tyear").innerText = year;
  function currentTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("ttime").innerText = time;

    setTimeout(function () {
      currentTime();
    }, 1000);
  }
  currentTime();
};
getYear();

const showAllcountryCurrency = () => {
  let code = Object.entries(countryCode);
  let codeArr = [];
  for (country of code) {
    codeArr.push(country);
  }

  codeArr.slice(56, 76).forEach((country) => {
    let div = document.createElement("div");
    let codeimg = [...country[0]];
    codeimg.pop();
    let codestr = codeimg.join("");

    div.innerHTML = `
         <div class="flex items-center">
         <img src="https://www.countryflagicons.com/FLAT/32/${codestr}.png" alt="">
         <p><span class="text-base text-[#333] pr-2">${country[0]}</span> <a href=""
         class="text-[#3358ff] text-base hover:text-[#002efaf3] underline cursor-pointer">
         ${country[1]}
         </a></p>
         </div>
         `;
    showAllCurrency.appendChild(div);
  });
};

showAllcountryCurrency();

const hideAdvance = () => {
  document.getElementById("advance-section").classList.toggle("hidden");
};
