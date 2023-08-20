const colors = ['red', 'blue', 'yellow', 'green'];

let interval = null;

const setIntervalBtn = document.getElementById('set-interval-btn');
let intervalActive = false;
let intervalId; 

const container = document.querySelector('button');
container.addEventListener('click', () => {
    if(!intervalActive){
        generateMove();
    }
});

function generateMove() {
    playSound();
    const color = getRandomColor();
    document.body.style.backgroundColor = color;   
    const startBtn = document.getElementById('startBtn');
    startBtn.innerHTML = getRandomLimb() + '\n' + (color.charAt(0).toUpperCase() + color.slice(1));
}

function getRandomLimb () {
    const limb = ["Left Hand", "Right Hand", "Left Foot", "Right Foot"];
    return limb[Math.floor(Math.random() * 4)];
}

function getRandomColor() {
    const color = ['red', 'blue', 'yellow', 'green', 'purple', 'black', 'brown', 'pink', 'orange']
    return color[Math.floor(Math.random() * color.length)];
}


setIntervalBtn.addEventListener('click', () => {
    if (!intervalActive) {
        console.log("Interval Activated");
        playSound();
        setIntervalBtn.classList.add("clicked");
        generateMove();

        intervalId = setInterval(() => {
            generateMove();
        }, 5000); 
        
        setIntervalBtn.innerHTML = "Stop"
        intervalActive = true;
    } else {
        stopSound();
        console.log("Interval Deactivated");
        clearInterval(intervalId); // Clear the interval using the stored ID
        setIntervalBtn.classList.remove("clicked");
        intervalActive = false;
        startBtn.innerHTML = 'Click to Start';
        setIntervalBtn.innerHTML = "Automatic (5s)";
    }
});

function playSound() {

    const snd = new Audio("interface-124464.mp3");  
    snd.play();
}

function stopSound() {
    const snd = new Audio("button-124476.mp3")
    snd.play();
}
