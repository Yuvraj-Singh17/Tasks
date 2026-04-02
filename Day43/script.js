var arr = [
    {
        team:"CSK",
        captain:"Ruturaj Gaikwad",
        tagline:"WHISTLE PODU",
        color:"yellow",
        text:"black"
    },
    {
        team:"RCB",
        captain:"Rajat Patidar",
        tagline:"Ee Saala Cup Namdu",
        color:"linear-gradient(to bottom, red , black)",
        text:"white",
    },
    {
        team:"KKR",
        captain:"Ajinkya Rahane",
        tagline:"Korbo, Lorbo, Jeetbo Re",
        color:"purple",
        text:"gold",
    },
    {
        team:"PBKS",
        captain:"Shreyas Iyer",
        tagline:"Sadda Punjab",
        color:"#D94441",
        text:"white"
    },
    {
        team:"MI",
        captain:"Hardik Pandya",
        tagline:"Duniya Hila Denge !!",
        color:"#113EDB",
        text:"gold"
    },
    {
        team:"GT",
        captain:"Shubhman Gill",
        tagline:"Aava De",
        color:"#131D37",
        text:"skyblue"
    },
    {
        team:"SRH",
        captain:"Pat Cummins",
        tagline:"Orange Army",
        color:"orange",
        text:"black"
    },
    {
        team:"DC",
        captain:"Axar Patel",
        tagline:"Roar Macha",
        color:"#1253A1",
        text:"white"
    },
    {
        team:"LSG",
        captain:"Rishabh Pant",
        tagline:"Roar Macha",
        color:"linear-gradient(to right , red , blue)",
        text:"white"
    },
    {
        team:"RR",
        captain:"Riyan Parag",
        tagline:"Halla Bol",
        color:"linear-gradient(to bottom , blue , pink)",
        text:"white"
    },

]

var div = document.querySelector("#box")
var btn = document.querySelector("button")
var main = document.querySelector("main")
var h1 = document.querySelector("h1")
var details = document.querySelector("#details")
var logo = document.querySelector("#logo")
var year = document.querySelector("#y")

let a = 2026;

btn.addEventListener('click', function(){
    var winner = arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = winner.team

    main.style.backgroundImage = `url("./Teams/${winner.team}.png")`
    main.style.backgroundSize = "cover"
    main.style.backgroundPosition = "center"
    main.style.backgroundRepeat = "no-repeat"
    year.innerHTML = a;
    year.style.color = winner.text

    logo.style.backgroundImage = `url("./TeamLogo/${winner.team}.png")`
    div.style.background = winner.color
    details.style.color = winner.text
    h1.style.color = winner.text
    h1.style.fontWeight = 700
    details.style.fontWeight = 500
    h1.style.fontSize = "150px"

    details.innerHTML = `
        Captain: ${winner.captain} <br>
        Tagline: ${winner.tagline}
    `
    a = a + 1;
})