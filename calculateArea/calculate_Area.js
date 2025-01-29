
let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
   let area = length * width;

   // display the result in the user interface
   document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


// Practice task
let g1;
let g2;
let g3;

function calculateTotal()
{
    g1 = parseFloat(document.getElementById('grocery1').value);
    g2 = parseFloat(document.getElementById('grocery2').value);
    g3 = parseFloat(document.getElementById('grocery3').value);

    let t = g1 + g2 + g3;
    document.getElementById('total').innerText = `The total amount of the groce is: ${t}`;
}
