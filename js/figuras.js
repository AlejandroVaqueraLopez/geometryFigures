//GLOBAL CONTAINER TO PRINT RESULT
let resultContainer = document.getElementById('resultContainer');
document.getElementById('inputProductOffer').disabled = true;
 

//Square
function setSquareSide(side){
    let squareSide = side;
    return squareSide;
}
let getSquarePerimeter = (side) => {
    let squarePerimeter = setSquareSide(side)*4;
    resultContainer.innerHTML = `The perimeter of square is: ${squarePerimeter}`;
}
let getSquareArea = (side) => {
    resultContainer.innerHTML = "";
    let squareArea = Math.pow(setSquareSide(side),2);
    resultContainer.innerHTML =(`The area of square is: ${squareArea}`);
}
//Triangle
        //Setters
function setTriangleSideA(sideA){
    let triangleSideA = sideA;
    return triangleSideA;
}
function setTriangleSideB(sideB){
    let triangleSideB = sideB;
    return triangleSideB;
}
function setTriangleBase(base){
    let triangleBase = base;
    return triangleBase;
}
function setTriangleHeight(tHeight){
    let triangleHeight = tHeight;
    return triangleHeight;
}
//Getters
let getTriangleHeight = (sideA,sideB,base) => {
    //To calculate the height of the triangle we need to prove that is a isoceles one
    if(sideA == sideB && sideA == base){
        let triangleHeight = Math.sqrt((Math.pow(base/2),2)+Math.pow(sideB,2));
        triangleHeight = triangleHeight.toFixed(2);
        resultContainer.innerHTML = (`The height of triangle is: ${triangleHeight}`);
    }else{
        alert("Can't calculate the height because the triangle is not an isoceles one");
    }
} 

let getTrianglePerimeter = (sideA,sideB,base) => {
    sideA = Number(sideA);
    sideB = Number(sideB);
    base = Number(base);
    let trianglePerimeter = setTriangleSideA(sideA) + setTriangleSideB(sideB) + setTriangleBase(base);
    resultContainer.innerHTML = (`The perimeter of triangle is: ${trianglePerimeter}`);
}
let getTriangleArea = (base, tHeight) => {
    let triangleArea = (setTriangleBase(base)*setTriangleHeight(tHeight))/2;
    resultContainer.innerHTML = (`The area of triangle is: ${triangleArea}`);
}

//Circle
    //Setters
function setCircleRatio(ratio){
    let circleRatio = Number(ratio);
    return circleRatio;
}
    //Getters
let getCircleDiameter = (ratio) => {
    let circleDiameter = setCircleRatio(ratio)*2;
    resultContainer.innerHTML = (`The diameter of circle is: ${circleDiameter}`);
    return circleDiameter;
}

let getCirclePerimeter = (ratio) => {
    let circlePerimeter = (Math.PI * getCircleDiameter(ratio)).toFixed(2);
    resultContainer.innerHTML = (`The perimeter of circle is: ${circlePerimeter}`);
}

let getCircleArea = (ratio) => {
    let circleArea = (Math.PI*(Math.pow(setCircleRatio(ratio),2))).toFixed(2);
    resultContainer.innerHTML = (`The area of circle is: ${circleArea}`);
}

//Shop
    //Setters
    let setProductPrice = (price) => {
        price = Number(price);
        return price;
    }

    let setProductDiscount = (discount) => {
        discount = Number(discount);
        return discount;
    }

    //Getters
    function getProductOffer(price,discount){
        let initialPrice = setProductPrice(price);
        let offer = (setProductDiscount(discount) * initialPrice)/100;
        let finalPrice = initialPrice - offer;
        resultContainer.innerHTML = `The final price is $${finalPrice}`;
    }

//App
//SQUARE///////
function btnSquarePerimeter(){
    let inputSquareSide = document.getElementById("inputSquareSide").value;
    getSquarePerimeter(inputSquareSide);
}

function btnSquareArea(){
    let inputSquareSide = document.getElementById("inputSquareSide").value;
    getSquareArea(inputSquareSide);
}

//TRIANGLE///////
function btnTrianglePerimeter(){
    let inputTriangleSideA = document.getElementById('inputTriangleSideA').value;
    let inputTriangleSideB = document.getElementById('inputTriangleSideB').value;
    let inputTriangleBase = document.getElementById('inputTriangleBase').value;
    getTrianglePerimeter(inputTriangleSideA, inputTriangleSideB, inputTriangleBase);
}

function btnTriangleArea(){
    let inputTriangleBase = document.getElementById('inputTriangleBase').value;
    let inputTriangleHeight = document.getElementById('inputTriangleHeight').value;
    getTriangleArea(inputTriangleBase, inputTriangleHeight);
}

function btnTriangleHeight(){
    let inputTriangleSideA = document.getElementById('inputTriangleSideA').value;
    let inputTriangleSideB = document.getElementById('inputTriangleSideB').value;
    let inputTriangleBase = document.getElementById('inputTriangleBase').value;
    getTriangleHeight(inputTriangleSideA,inputTriangleSideB,inputTriangleBase);
}

//CIRCLE
function btnCircleDiameter(){
    let inputCircleRatio = document.getElementById('inputCircleRatio').value;
    getCircleDiameter(inputCircleRatio);
}

function btnCirclePerimeter(){
    let inputCircleRatio = document.getElementById('inputCircleRatio').value;
    getCirclePerimeter(inputCircleRatio);
}

function btnCircleArea(){
    let inputCircleRatio = document.getElementById('inputCircleRatio').value;
    getCircleArea(inputCircleRatio);
}

//SHOP
function btnProductOffer(){
    let cupon = document.getElementById('inputCuponDiscount').value;
    let inputProductPrice = 0;
    let inputProductOffer = 0;
    switch(cupon){
        case 'a': 
            inputProductPrice = document.getElementById('inputProductPrice').value;
            inputProductOffer = 10;
            getProductOffer(inputProductPrice,inputProductOffer);
            break;
            
        case 'b': 
            inputProductPrice = document.getElementById('inputProductPrice').value;
            inputProductOffer = 20;
            getProductOffer(inputProductPrice,inputProductOffer);
            break;
            
        case 'c': 
            inputProductPrice = document.getElementById('inputProductPrice').value;
            inputProductOffer = 30;
            getProductOffer(inputProductPrice,inputProductOffer);
            break;
        default: 
            resultContainer.innerHTML = `No cupon available for "${cupon}"`;
        }
        //I use this ones to use the discount input, but now it works with cupons so...
        //let inputProductPrice = document.getElementById('inputProductPrice').value;
        //let inputProductOffer = document.getElementById('inputProductOffer').value;
        //getProductOffer(inputProductPrice,inputProductOffer);
    }
    
//Square
/*console.group('Square');
console.log('Every side of the square is: '+squareSide+' cm long');
console.log('The perimeter of the square is: '+squarePerimeter+' cm');
console.log('The area of the square is: '+squareArea+' cm^2');
console.groupEnd();

//Triangle
console.group('Triangle')
console.log('Every first side of the triangle is: '+triangleSideA+' cm long');
console.log('Every second side of the triangle is: '+triangleSideB+' cm long');
console.log('Every base side of the triangle is: '+triangleBase+' cm long');
console.log('The perimeter of the triangle is: '+trianglePerimeter+' cm');
console.log('The height of the triangle is: '+triangleHeight+' cm');
console.log('The area of the triangle is: '+triangleArea+' cm^2');
console.groupEnd();

//circle
console.group('circle')
console.log('The ratio of the circle is: '+circleRatio+' cm');
console.log('The diameter of the circle is: '+circleDiameter+' cm');
console.log('The perimeter of the circle is: '+circlePerimeter+' cm');
console.log('The area of the circle is: '+circleArea+' cm^2');
console.groupEnd();*/