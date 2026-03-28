let h1 = document.querySelector('h1');
let inc = document.querySelector('#inc')
let dc = document.querySelector('#dc')

let a = 0;
let count = 0;

inc.addEventListener('click' , function(){
    count++;
    a++;
    h1.innerHTML = a;
})

dc.addEventListener('click' , function(){
    count++;
    a--;
    h1.innerHTML = a;
})

let main = document.querySelector('#main')
let all = document.querySelector('#all')

let originalUI = main.innerHTML;

function handleTotalClick() {

    main.innerHTML = `
        <div id="screen">
            <h1 id="result">${count}</h1>
            <button id="back">Go Back</button>
        </div>
    `;

    let screen = document.querySelector('#screen');

    screen.style.position = 'absolute';
    screen.style.top = '50%';
    screen.style.left = '50%';
    screen.style.transform = 'translate(-50%, -50%)';
    screen.style.display = 'flex';
    screen.style.flexDirection = 'column';
    screen.style.alignItems = 'center';
    screen.style.gap = '20px';
    screen.style.color = 'white';

    let result = document.querySelector('#result');
    result.style.position = 'static';
    result.style.fontSize = '100px';
    result.style.color = 'black';

    let back = document.querySelector('#back');
    back.style.position = 'static';
    back.style.padding = '10px 20px';
    back.style.fontSize = '20px';
    back.style.borderRadius = '10px';
    back.style.border = '2px solid black';
    back.style.background = 'transparent';
    back.style.color = 'black';
    back.style.cursor = 'pointer';
    back.style.alignItems = 'center';

    back.addEventListener('click', function () {
        main.innerHTML = originalUI;

        let h1 = document.querySelector('h1');
        let inc = document.querySelector('#inc');
        let dc = document.querySelector('#dc');
        let all = document.querySelector('#all');

        inc.addEventListener('click' , function(){
            count++;
            a++;
            h1.innerHTML = a;
        });

        dc.addEventListener('click' , function(){
            count++;
            a--;
            h1.innerHTML = a;
        });

        all.addEventListener('click', handleTotalClick);
    });
}


all.addEventListener('click', handleTotalClick);