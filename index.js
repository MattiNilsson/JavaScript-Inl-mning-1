// Window Title
document.title = "Fruits & Vegetables Corp";

// h1 Title
let fruitTitle = document.getElementsByTagName("header")[0];
console.log(fruitTitle);
fruitTitle.childNodes[1].textContent = "Fruits & Vegetables Corp";
fruitTitle.childNodes[1].setAttribute("style", "color: red;");

// List Changed
let a = document.getElementsByTagName("a");
console.log(a);
a[2].innerText = "Vegetables";
a[2].href = "#vegetables";

// Added a header to contact
let contact = document.createElement("h2");
let contactObj = document.getElementById("contact")
contactObj.insertBefore(contact, contactObj.childNodes[0]);
contact.textContent = "Contact";

// Switched about place to become first child of Main & fix the P-tag
let aboutObj = document.getElementById("about");
let main = document.getElementById("main");
let aboutP = document.createElement("p");
main.insertBefore(aboutObj, main.childNodes[0]);
console.log(main);
let about = document.createElement("h2");
about.textContent = "About";
aboutObj.appendChild(about);
aboutObj.insertBefore(about, aboutObj.childNodes[0]);
aboutObj.childNodes[1].remove();
aboutObj.insertBefore(aboutP, aboutObj.childNodes[1]);
aboutP.textContent = "We're the best in fruits & vegetables"
// switch "td" to "th"
let tHead = document.getElementsByTagName("thead")[0];
let tR = tHead.childNodes[1];
tR.childNodes[1].remove(); 
tR.childNodes[2].remove(); 
let thOne = document.createElement("th");
tR.appendChild(thOne);
thOne.textContent = "Name";
let thTwo = document.createElement("th");
tR.appendChild(thTwo);
thTwo.textContent = "Email";

// Link Css file to Html
head = document.getElementById("head");
linkCss = document.createElement("link");
head.appendChild(linkCss);
linkCss.rel = "stylesheet";
linkCss.type = "text/css";
linkCss.href = "main.css";