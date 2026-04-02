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
]

var div = document.querySelector("#box")
var btn = document.querySelector("button")
var main = document.querySelector("main")
var h1 = document.querySelector("h1")
var details = document.querySelector("#details")

btn.addEventListener('click', function(){

    var winner = arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = winner.team

    main.style.backgroundImage = `url("./Teams/${winner.team}.png")`
    main.style.backgroundSize = "cover"
    main.style.backgroundPosition = "center"
    main.style.backgroundRepeat = "no-repeat"

    div.style.background = winner.color
    details.style.color = winner.text
    h1.style.color = winner.text
    h1.style.fontWeight = 700
    details.style.fontWeight = 500

    details.innerHTML = `
        Captain: ${winner.captain} <br>
        Tagline: ${winner.tagline}
    `
})