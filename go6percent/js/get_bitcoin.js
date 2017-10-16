// AJAX for API
function insertBitcoin(d, e) {
  document.querySelector(".usd").innerHTML = d;
}


function getBitcoinPrice(coin) {
  let url = encodeURIComponent(
    "https://min-api.cryptocompare.com/data/price?fsym=" +
    "BTC" +
      "&tsyms=USD"
  );

  fetch("https://jsonproxy.herokuapp.com/?url=" + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => {
      insertBitcoin(data.USD);
    });
}

getBitcoinPrice("BTC");

setInterval(function() {
    getBitcoinPrice("BTC");
}, 20000);
