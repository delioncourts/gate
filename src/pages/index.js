import { api } from "../components/Api.js";

console.log(api);

 const quoteElement = document.querySelector('.quote')
function updateQuote() {
  fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
    .then(res => res.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
} 

document.querySelector('.header\_\_btn').addEventListener('click', updateQuote)