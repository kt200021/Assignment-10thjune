import images from "./imagedata.js";
import {
  createList,
  createParagraphElement,
  createIconElement
} from "./createList.js";

var count = 0; // active index of array images
var items = document.getElementsByClassName("itemList")[0];

// sets new colour to a list element
const setClassColor = (className, newColor) => {
  let element = document.getElementsByClassName(className)[0];
  element.style.backgroundColor = newColor;
};

// change value of count
const changeCount = (className, value) => {
  setClassColor(className + count, "");
  count = count + value;
  setClassColor(className + count, "yellow");
};

// function to change the Image and its text in display section on right hand side
var changeImage = () => {
  let newImage = document.getElementsByClassName("img")[0];
  let newTitle = document.getElementsByClassName("para")[0];

  let { previewImage, title } = images[count];

  newImage.setAttribute("src", previewImage);
  newTitle.innerHTML = title;
};

// event listener to handle arrow keys
window.document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && count > 0) {
    changeCount("C", -1);
    changeImage();
  } else if (e.key === "ArrowDown" && count < images.length - 1) {
    changeCount("C", 1);
    changeImage();
  }
});

createList();
setClassColor("C" + count, "yellow");
//evenet listener to change image on mouse click
var listOfImages = document.getElementsByClassName("LIST")[0];

listOfImages.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target != null) {
    let char = parseInt(e.target.getAttribute("class").charAt(1), 10);
    setClassColor("C" + count, "");
    count = 0;
    changeCount("C", char);
    changeImage();
  }
});
