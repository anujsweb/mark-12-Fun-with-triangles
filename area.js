const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea(a, b) {
    const area = a * b / 2;
    //console.log(sumOfSquares);
    return area;
}

function showArea() {
    const area = calculateArea(Number(sides[0].value), Number(sides[1].value));
    outputEl.innerText = "Area of triangle is: " + area;
}

areaBtn.addEventListener("click", showArea);