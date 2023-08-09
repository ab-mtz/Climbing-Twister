const colors = ['red', 'blue', 'yellow', 'green'];

let interval = null;

const setIntervalBtn = document.getElementById('set-interval-btn');
let intervalActive = false;
let intervalId; // Store the interval ID

const container = document.querySelector('button');
container.addEventListener('click', () => {
    if(!intervalActive){
        generateMove();
    }
});

function generateMove() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;   
    const h1 = document.querySelector('h1');
    h1.innerHTML = getRandomLimb() + '\n' + (color.charAt(0).toUpperCase() + color.slice(1));
}

function getRandomLimb () {
    const limb = ["Left Arm", "Right Arm", "Left Leg", "Right Leg"];
    return limb[Math.floor(Math.random() * 4)];
}

function getRandomColor() {
    const color = ['red', 'blue', 'yellow', 'green']
    return color[Math.floor(Math.random() * color.length)];
}

const addColorBtn = document.getElementById('add-colors-btn')
addColorBtn.addEventListener('click', () => {
    console.log("Add color button");
})



setIntervalBtn.addEventListener('click', () => {
    if (!intervalActive) {
        console.log("Interval Activated");
        intervalId = setInterval(() => {
            generateMove();
        }, 4000); // Corrected the placement of the interval duration
        setIntervalBtn.innerHTML = "Stop"
        intervalActive = true;
        addColorBtn.style.visibility='collapse';
    } else {
        console.log("Interval Deactivated");
        clearInterval(intervalId); // Clear the interval using the stored ID
        intervalActive = false;
        const h1 = document.querySelector('h1');
        h1.innerHTML = 'Click to Start';
        setIntervalBtn.innerHTML = "Automatic (4s)";
        addColorBtn.style.visibility='visible';
    }
});

