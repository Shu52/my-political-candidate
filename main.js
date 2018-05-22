let para = document.createElement("p");
let node = document.createTextNode("The Most Productive Member of Congress!");
para.appendChild(node);

let element = document.getElementById("article--5thDistrict");
let child = document.getElementById("district");
element.insertBefore(para, child);
console.log("I worked");

// Advanced Challenge
// In JavaScript, there is a method that creates a new attribute node for any DOM element. Discover that method and use it to create a custom attribute named congressional-district and its value should be your congressional district number. Then attach that attribute to the <article> container you made for your representative component.
// var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
// var att = document.createAttribute("class");       // Create a "class" attribute
// att.value = "democlass";                           // Set the value of the class attribute
// h1.setAttributeNode(att);                          // Add the class attribute to <h1>
let art = document.getElementById("article--5thDistrict");
let att = document.createAttribute("congressional-district");
att.value = "5";
art.setAttributeNode(att);
console.log(att);