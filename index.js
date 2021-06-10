var images = [
  {
    previewImage:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cat.jpeg"
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cooking couple shoot portofilio(1).jpg"
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "bali-kelingking-beach-plastic-removal-drive.key"
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "NextByk Investor Pitch 2021.ppt"
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "interns-performance-report-june-2021.key"
  }
];

var count = 0;

let items = document.getElementsByClassName("itemList")[0];

let printlist = document.createElement("ul");
images.forEach((img, ind) => {
  let title = document.createElement("li");
  let img1 = document.createElement("img");
  img1.setAttribute("src", img.previewImage);
  img1.setAttribute("width", "50");
  img1.setAttribute("height", "70");
  img1.setAttribute("class", "D" + ind);
  console.log(img1);
  title.append(img1);
  let tex = document.createElement("p");
  //let tex = document.createTextNode("         " + img.title);
  tex.innerHTML = img.title;
  tex.setAttribute("class", "D" + ind);
  title.append(tex);
  title.setAttribute("class", "C" + ind);

  printlist.append(title);
});
items.append(printlist);
document.getElementsByClassName("C" + count)[0].style.backgroundColor =
  "yellow";
var changeImage = () => {
  let obj = document.getElementsByClassName("img")[0];

  let { previewImage, title } = images[count];
  obj.setAttribute("src", previewImage);
  let obj1 = document.getElementsByClassName("para")[0];
  obj1.innerHTML = title;
};

let items1 = document.getElementsByClassName("itemList")[0];

window.document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "ArrowUp") {
    if (count > 0) {
      document.getElementsByClassName("C" + count)[0].style.backgroundColor =
        "";
      count--;
      document.getElementsByClassName("C" + count)[0].style.backgroundColor =
        "yellow";
      changeImage();
    }
  } else if (e.key === "ArrowDown") {
    if (count < images.length - 1) {
      document.getElementsByClassName("C" + count)[0].style.backgroundColor =
        "";
      count++;
      document.getElementsByClassName("C" + count)[0].style.backgroundColor =
        "yellow";
      changeImage();
    }
  }
});

items.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target != null) {
    let char = parseInt(e.target.getAttribute("class").charAt(1));
    console.log(char);
    document.getElementsByClassName("C" + count)[0].style.backgroundColor = "";
    count = char;
    document.getElementsByClassName("C" + count)[0].style.backgroundColor =
      "yellow";
    changeImage();
  }
});
