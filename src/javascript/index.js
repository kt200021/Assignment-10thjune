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

const setTextColor = (className, newColor) => {
  let element = document.getElementsByClassName(className)[0];
  element.style.color = newColor;
  console.log(element.style);
};
// change value of count
const changeCount = (className, value) => {
  setClassColor(className + count, "");
  count = count + value;
  setClassColor(className + count, "blue");
};

// function to change the Image and its text in display section on right hand side
var changeImage = () => {
  let newImage = document.getElementsByClassName("img")[0];
  let newTitle = document.getElementsByClassName("para")[0];

  let { previewImage, title } = images[count];

  newImage.setAttribute("src", previewImage);
  newTitle.innerHTML = title;
};

const truncateText = () => {
  let listNode = document.querySelectorAll(".LIST p");
  listNode.forEach((item, index) => {
    const imageTitle = images[index].title;

    item.innerHTML = imageTitle;

    
    const scrollWidth = item.scrollWidth;
    const len = item.innerHTML.length;
    const clientWidth = item.clientWidth;
    
    let newLength = len * (clientWidth / scrollWidth);
    Math.round(newLength);

    let dist = (newLength - 3) / 2;
    if (item.clientWidth < item.scrollWidth) {
      console.log("yes");
      let left = imageTitle.slice(0, dist - 1);
      let right = imageTitle.slice(len - dist, len);
      item.innerHTML = left + "..." + right;
    } else if (item.clientWidth > item.scrollWidth) {
      item.innerHTML = images[index].title;
    }
  });
};

// event listener to handle arrow keys
window.document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && count > 0) {
    setTextColor("C" + count, "black");
    changeCount("C", -1);
    setTextColor("C" + count, "white");
    changeImage();
  } else if (e.key === "ArrowDown" && count < images.length - 1) {
    setTextColor("C" + count, "black");
    changeCount("C", 1);
    setTextColor("C" + count, "white");
    changeImage();
  }
});

createList();
truncateText();
window.addEventListener("resize", truncateText);

setClassColor("C" + count, "blue");
setTextColor("C" + count, "white");

//evenet listener to change image on mouse click
var listOfImages = document.getElementsByClassName("LIST")[0];

listOfImages.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target != null) {
    let char = parseInt(e.target.getAttribute("class").charAt(1), 10);
    setClassColor("C" + count, "");
    setTextColor("C" + count, "black");
    count = 0;
    changeCount("C", char);
    setTextColor("C" + count, "white");
    changeImage();
  }
});
