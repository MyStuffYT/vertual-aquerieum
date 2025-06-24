let fishList = [];

function preload() {
    background = loadImage("aquarium.jpg")
    fishi = loadImage("fish.png");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    image(background, 0, 0, width, height);
}
function draw() {
    image(background, 0, 0, width, height);
    if (frameCount % 60 === 0) {
        fishList.push({
          x: random(width),
          y: random(height),
          dx: random(-2, 2),
          dy: random(-2, 2)
        });
      }

    for (let fish of fishList) {
        fish.x += fish.dx;
        fish.y += fish.dy;
    
        image(fishi, fish.x, fish.y, 80, 50);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    image(background, 0, 0, width, height);
}

function clearFish() {
    fishList = [];
}

let fishyelements = document.getElementById("fishyelements");
fishyelements.addEventListener("mouseout", () => {
    fishyelements.classList.remove("active"); 
});

fishyelements.addEventListener("mouseover", () => {
    fishyelements.classList.add("active"); 
});