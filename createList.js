import images from "./imagedata.js";
var items = document.getElementsByClassName("itemList")[0];

// creates icon elements through DOM
const createIconElement = (img, ind) => {
  let icon = document.createElement("img");

  icon.setAttribute("src", img.previewImage);
  icon.setAttribute("width", "50");
  icon.setAttribute("height", "70");
  icon.setAttribute("class", "D" + ind);

  return icon;
};

// create paragraph element inside <li> tag
const createParagraphElement = (img, ind) => {
  let textnode = document.createElement("p");
  textnode.innerHTML = img.title;
  textnode.setAttribute("class", "D" + ind);
  return textnode;
};

// function to create and display list of images
const createList = () => {
  let printlist = document.createElement("ul");
  printlist.setAttribute("class", "LIST");
  images.forEach((img, ind) => {
    let title = document.createElement("li");

    title.append(createIconElement(img, ind));
    title.append(createParagraphElement(img, ind));

    title.setAttribute("class", "C" + ind);

    printlist.append(title);
  });

  items.append(printlist);
};

export { createList, createParagraphElement, createIconElement };
