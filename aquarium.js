let fishList = [];
let greedcount = 0;

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

document.addEventListener('DOMContentLoaded', () => {
    let fishyelements = document.querySelectorAll(".fishyelements");
    let fishshop = document.getElementById("fishshop");

    if (fishshop && fishyelements.length > 0) {
        fishshop.addEventListener("mouseout", () => {
            fishyelements.forEach(el => el.classList.remove("active")); 
        });

        fishshop.addEventListener("mouseover", () => {
            fishyelements.forEach(el => el.classList.add("active")); 
        });
    }
});

function takedory() {
    if (greedcount === 1) {
        alert("Don't be greedy! I already gave you free fish.")
        greedcount++;
        return;
    }
    else if (greedcount === 2) {
        alert("Just stop! You already have a fish!")
        greedcount++;
        return;
    }
    else if (greedcount === 3) {
        alert("Okay fine, here's lightning mcqueen.")
        clearFish();
        fishi = loadImage("lightningmcqueen.png");
        greedcount++;
        return;
    }
    else if (greedcount === 4) {
        alert("So that means no fish.")
        clearFish();
        fishi = null;
        greedcount++;
        return;
    }
    else if (greedcount === 5) {
        alert("(refresh page to start over)")
        return;
    }
    clearFish();
    fishi = loadImage("dory.png");
    greedcount++;
}