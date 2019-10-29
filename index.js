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

// Added a header to contact
let contact = document.createElement("h2");
let contactObj = document.getElementById("contact")
contactObj.insertBefore(contact, contactObj.childNodes[0]);
contact.textContent = "Contact";

// Switched about place to become first child of Main
let aboutObj = document.getElementById("about");
let main = document.getElementById("main");
main.insertBefore(aboutObj, main.childNodes[0]);
console.log(main);
let about = document.createElement("h2");
about.textContent = "About";
aboutObj.appendChild(about);
aboutObj.insertBefore(about, aboutObj.childNodes[0])

// Make Name and Email Appear A little more Centered
let tHead = document.getElementsByTagName("thead")[0];
console.log(tHead);
let tR = tHead.childNodes[1];
console.log(tR);
tR.childNodes[1].setAttribute("style", "position: relative; left : 18px; font-weight:bold;");
tR.childNodes[3].setAttribute("style","display : flex; justify-content: center; font-weight:bold;");
