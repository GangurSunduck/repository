"use strict"
document.forms[0].oninput = () => {

    const select = document.querySelector('select');

    const texttable = document.querySelector('.texttable');

    const options = select.querySelectorAll('option');

    const values = [...options].map(option => option.value);

    for (const item of values) {
        texttable.classList.remove(item);
    }

    texttable.classList.add(select.value);
}
let autoIncrement = 1;
function transferData() {
    var nameInput = document.getElementById("nameInput");
    var nameOutput = document.getElementById("nameOutput");

    nameOutput.insertAdjacentHTML("beforeBegin", `
    <div class="choo">
    <p>${autoIncrement++}</p>
    <p>ㅤ</p>
    <div>${nameInput.value}</div>
    </div>
   
    `, );
}
function transferData1() {
  
    var nameOutput = document.getElementById("nameOutput");
    var nameInput1 = document.getElementById("nameInput1");
    nameOutput.insertAdjacentHTML("beforeBegin", `
  
    <div class="choo">
    <p>${autoIncrement++}</p>
    <p>ㅤ</p>
    <div>${nameInput1.value}</div>
    </div>
    `, );
}
function transferData2() {
  
    var nameOutput = document.getElementById("nameOutput");
    var nameInput2 = document.getElementById("nameInput2");
    nameOutput.insertAdjacentHTML("beforeBegin", `
  
    <div class="choo">
    <p>${autoIncrement++}</p>
    <p>ㅤ</p>
    <div>${nameInput2.value}</div>
    </div>
    `, );
}