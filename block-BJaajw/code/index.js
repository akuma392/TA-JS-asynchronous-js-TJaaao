let inp = document.querySelector('input');
let rootElm = document.querySelector('.root');
let h3 = document.querySelector('h3');

// function handleSearch(event) {
//   if (event.keyCode == 13) {
//     let domainData = fetch(
//       `https://api.domainsdb.info/v1/domains/search?limit=50&domain=${event.target.value}`
//     ).then((res) => res.json());
//     console.log(domainData);
//   }
// }

function handleSearch(event) {
  if (event.keyCode == 13) {
    let xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      `https://api.domainsdb.info/v1/domains/search?limit=50&domain=${event.target.value}`
    );
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      console.log(userData);
    };
    xhr.send();
  }
}

inp.addEventListener('keyup', handleSearch);

// https://api.domainsdb.info/v1/domains/search?limit=50&domain=.com

// let img = fetch(
//   `https://api.domainsdb.info/v1/domains/search?limit=50&domain=io`
// ).then((res) => res.json());
