//app.mjs
import test from "./modules.mjs";
const dog="Papilon";
const random_p = document.querySelector('.random > p');
//random_p.innerHTML = dog;
random_p.innerHTML = test();
console.log('hiya');
