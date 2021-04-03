// [1] function ==> pass to it [array of elemnts] & the elemnt you want to put the value in it
function addLiValueInInput(listArryElements,element) {
  listArryElements.forEach((oneOfList) => {
    oneOfList.addEventListener("click",(e) => {
      element.value = e.target.textContent;
    });
  });
}

// these for sizes page
// the age value in input
let ageDataInput = document.querySelector(".age-box .age-data");
let ageList = Array.from(document.querySelectorAll(".age-box .ages-list li .age-years"));
addLiValueInInput(ageList,ageDataInput);

// the size value in input
let sizeDataInput = document.querySelector(".age-box .size-data");
let sizeList = Array.from(document.querySelectorAll(".age-box .ages-list li .number-size"));
addLiValueInInput(sizeList,sizeDataInput);





// [2] function ==> pass to it [array of elemnts] & elemnt then => element will change background
function getColor(arrayOfElements,oneElement) {
  // let getDataColor =  oneElement.getAttribute("data-color");
  arrayOfElements.forEach((oneofarrayelements) => {
    oneofarrayelements.addEventListener("click",(e) => {
      let getDataColor = e.target.getAttribute("data-color");
      oneElement.style.backgroundColor = `${getDataColor}`;
    });
  });
}


// the size value in input
let colorDataInput = document.querySelector(".select-colors .color-data");
let colorList = Array.from(document.querySelectorAll(".ul-color-list li"));
// addLiValueInInput(colorList,colorDataInput);
getColor(colorList,colorDataInput);



