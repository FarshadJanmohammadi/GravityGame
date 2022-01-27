let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

this.screen = {
    width: innerWidth,
    height: innerHeight,
};

this.mouse = {
    x: screen.width / 2,
    y: screen.height / 2,
};

class Ball {
    constructor(x, y, dx, dy, r, color) {
        this.r = r || 10;
        this.x = x || randomIntFromInterval(0 + this.r, window.innerWidth - this.r);
        this.y =
            y || randomIntFromInterval(0 + this.r, window.innerHeight - this.r);
        this.dx = dx || (Math.random() - 0.5) * 4;
        this.dy = dy || Math.random() * 4;
        this.color = color || `rgba(231,76,60,${Math.random()}`;
        this.draw();
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fillStyle = "red";
        c.fill();
    }
    update() {
        this.draw();
    }
}
class Canvas {
    constructor() {
        this.balls = [];
        for (let i = 0; i < 100; i++) {
            this.balls.push(new Ball());
        }
    }
    animate() {
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.balls.forEach((ball) => {
            ball.update();
        });
        requestAnimationFrame(this.animate.bind(this));
    }
}

let mycan = new Canvas();
mycan.animate();

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener("resize", (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}