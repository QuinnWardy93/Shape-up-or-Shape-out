document.addEventListener("DOMContentLoaded", function () {
    let rectangleHeight = document.getElementById("recHeightInput");
    let shapes_container = document.getElementById("shapes_container");
    let rectangleBtn = document.getElementById("rectangleBtn");
    let circleBtn = document.getElementById("circleBtn");
    let squareBtn = document.getElementById("squareBtn");
    let triangleBtn = document.getElementById("triangleBtn");
    let sideLength = document.getElementById("squareSideLengthInput");
    let circleRadius = document.getElementById("circleRadiusInput");
    let triangleHeight = document.getElementById("triangleHeightInput");
    let rectangleWidth = document.getElementById("recWidthInput");

    circleBtn.addEventListener("click", () => new Circle(circleRadius.value));
    triangleBtn.addEventListener("click", () => new Triangle(triangleHeight.value));
    rectangleBtn.addEventListener("click", () => new Rectangle(rectangleHeight.value, rectangleWidth.value));
    squareBtn.addEventListener("click", () => new Square(sideLength.value));

    class Shape {
        constructor() {
            this.shape = document.createElement("div");
            this.shape.classList.add("shape");
            this.shape.addEventListener("click", () => this.describe());
            this.shape.addEventListener("dblclick", () => shapes_container.removeChild(this.shape));
            this.shape.style.top = `${Math.floor(Math.random() * 600)}px`;
            this.shape.style.left = `${Math.floor(Math.random() * 600)}px`;
            shapes_container.appendChild(this.shape);
        }


        describe() {
            document.getElementById("shapename").innerText = `Shape Name: ${this.shape.shapename}`;
            document.getElementById("widthInfo").innerText = `Width: ${this.shape.width}`;
            document.getElementById("heightInfo").innerText = `Height: ${this.shape.height}`;
            document.getElementById("radiusInfo").innerText = `Radius: ${this.shape.radius}`;
            document.getElementById("areaInfo").innerText = `Area: ${this.shape.area}`;
            document.getElementById("perimeterInfo").innerText = `Perimeter: ${this.shape.perimeter}`;
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.shape.shapename = "circle";
            this.shape.classList.add("circleDiv")
            this.radius = radius;
            this.width = this.radius * 2;
            this.height = this.radius * 2;
            this.shape.style.width = `${this.width}px`;
            this.shape.style.height = `${this.height}px`;
            this.shape.style.borderRadius = '50%';
            this.shape.style.backgroundColor = "purple";
        }
        doMath() {
            this.shape.height = `${this.radius}`;
            this.shape.width = `${this.radius}`;
            this.shape.radius = this.radius;
            this.shape.area = Math.round(Math.PI * (this.radius ** 2));
            this.shape.perimeter = Math.round(2 * Math.PI * this.radius);
        }
    }

    class Triangle extends Shape {
        constructor(height) {
            super()
            this.height = height;
            this.shape.shapename = "triangle";
            this.shape.classList.add("triangleDiv");
            this.shape.style.width = '0px';
            this.shape.style.height = '0px';
            this.shape.style.borderBottomWidth = `${this.height}px`;
            this.shape.style.borderRightWidth = `${this.height}px`;
        }
        doMath() {
            this.shape.height = `${this.height}`;
            this.shape.width = `${this.height}`;
            this.shape.radius = "N/A";
            this.shape.area = Math.round(0.5 * (this.height * this.height));
            this.shape.perimeter = Math.round(2 * this.height + Math.sqrt(2) * this.height);
        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
            this.shape.shapename = "rectangle";
            this.shape.classList.add("rectangleDiv");
            this.shape.style.width = `${this.width}px`;
            this.shape.style.height = `${this.height}px`;
            this.shape.style.backgroundColor = "green";


        }
        doMath() {
            this.shape.height = `${this.height}`;
            this.shape.width = `${this.width}`;
            this.shape.radius = "N/A";
            this.shape.area = this.height * this.width;
            this.shape.perimeter = (2 * this.height) + (2 * this.width);
        }
    }

    class Square extends Shape {
        constructor(sideLength) {
            super();
            this.sideLength = sideLength;
            this.shape.shapename = ("square");
            this.shape.classList.add("squareDiv");
            this.shape.style.width = `${this.sideLength}px`;
            this.shape.style.height = `${this.sideLength}px`;
            this.shape.style.backgroundColor = "red";
        }
        doMath() {
            this.shape.height = `${this.sideLength}`;
            this.shape.width = `${this.sideLength}`;
            this.shape.radius = "N/A";
            this.shape.area = this.sideLength ** 2;
            this.shape.perimeter = 4 * this.sideLength;
        }
    }    
})
