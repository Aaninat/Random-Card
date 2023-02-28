/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var números = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var pintas = ["♦", "♥", "♠", "♣"];

  var randomnum = números[Math.floor(Math.random() * números.length)];
  var randompintas = pintas[Math.floor(Math.random() * pintas.length)];

  document.querySelector("#Superior").innerHTML = randompintas;
  document.querySelector("#Medio").innerHTML = randomnum;
  document.querySelector("#Inferior").innerHTML = randompintas;

  console.log(randompintas == "♥");

  if (randompintas == "♣" || randompintas == "♠") {
    let pinta1 = document.querySelector("#Superior");
    pinta1.style.color = "black";
    let pinta2 = document.querySelector("#Inferior");
    pinta2.style.color = "black";
    let pinta3 = document.querySelector("#Medio");
    pinta3.style.color = "black";
  } else if (randompintas == "♥" || randompintas == "♦") {
    let pinta4 = document.querySelector("#Superior");
    pinta4.style.color = "red";
    let pinta5 = document.querySelector("#Inferior");
    pinta5.style.color = "red";
    let pinta6 = document.querySelector("#Medio");
    pinta6.style.color = "red";
  }
};
