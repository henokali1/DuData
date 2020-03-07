// var used = parseFloat(document.querySelector('span.dtb').innerHTML.slice(0, 5));
// var date = new Date();
// var today = date.getDate();
// var current_month = date.getMonth();
// var num_of_days = new Date(
//   date.getFullYear(),
//   date.getMonth() + 1,
//   0
// ).getDate();

// var allowance = (18 / num_of_days) * today;
// var remaining = allowance - used;

// if (remaining > 0) {
//   console.log(remaining.toFixed(2) + 'GB remaining.');
// } else {
//   console.log(remaining.toFixed(2) * -1 + 'GB Over used.');
// }


orig = document.getElementsByClassName("dtb")[0].outerText.split("/")
usage = parseFloat(orig[0].split(" ")[0])
usage_unit = orig[0].split(" ")[1]
monthly_max = parseFloat(orig[1].split(" ")[0])

var date = new Date();
var today = date.getDate();
var current_month = date.getMonth();
var num_of_days = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDate();

var allowance = (monthly_max / num_of_days) * today;

if(usage_unit == "MB"){
	usage = usage/1000;
}

var remaining = allowance - usage;


var newItem = document.createElement("font");

var textnode = document.createTextNode(remaining.toFixed(2));
newItem.appendChild(textnode);
var list = document.getElementsByClassName("ra9 mb30")[0];
list.parentNode.insertBefore(newItem, list.nextSibling);

var f = document.getElementsByTagName("font")
f[0].style.fontSize = "10vw";
f[0].style.fontWeight = "bold";

if (remaining > 0) {
  f[0].style.color = "green";
} else {
  f[0].style.color = "red";
}
document.getElementsByClassName("inputBut")[0].style.marginBottom = "25px";
f[0].style.marginLeft = "40%";
