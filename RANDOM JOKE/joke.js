const URL="https://v2.jokeapi.dev/joke/Any?type=single";

let random = document.querySelector("button");
let joke = document.querySelector(".joke");

 async function generateJoke(){
  let promise = await fetch(URL);
  let data =  await promise.json();
  console.log(data);
  joke.innerText=data["joke"];
 }

random.addEventListener("click",generateJoke);