var btn = document.querySelector("button");
var main = document.querySelector("main");

const arr = [
  "Why don't programmers like nature? Too many bugs.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "Why did the developer go broke? Because he used up all his cache.",
  "Why was the computer cold? It forgot to close its Windows.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why did the function return early? Because it had a date with a callback.",
  "Why was the JavaScript developer sad? Because he didn’t Node how to Express himself.",
  "Why do arrays hate bad jokes? Because they don’t get the point.",
  "Why did the loop break up? It couldn’t handle the condition anymore.",
  "Why was the variable always calm? Because it stayed in scope.",
  "Why did the coder quit his job? He didn't get arrays.",
  "Why did the CSS file go to therapy? It had too many issues.",
  "Why do programmers hate stairs? Because they prefer recursion.",
  "Why did the bug go to school? To become a feature.",
  "Why was the code so confident? It had no errors."
];

btn.addEventListener('click' , function(){

    var h1 = document.createElement("h1")

    var x = Math.random() * 100;
    var y = Math.random() * 100;
    var r = Math.random()*360;
    var scl = Math.random()*3;
    var a = Math.floor(Math.random()*arr.length)

    h1.innerHTML = arr[a];

    h1.style.left = x + "%";
    h1.style.top = y + "%";
    h1.style.rotate = r + "deg";
    h1.style.position = "absolute";
    h1.style.scale = scl;
    h1.style.fontWeight = 400;

    main.appendChild(h1)

})