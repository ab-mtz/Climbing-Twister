const colors = ['red', 'blue', 'yellow', 'green'];


const container = document.querySelector('button');
container.addEventListener('click', () => {
    // changeDisplay
    const color = getRandomColor();
    document.body.style.backgroundColor = color;   
    const h1 = document.querySelector('h1');
    h1.innerHTML = getRandomLimb() + '\n' + (color.charAt(0).toUpperCase() + color.slice(1));
});

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
