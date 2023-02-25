const inputButton = document.getElementById("input-button");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const clearButton = document.getElementById("clear-button");
const urlButton = document.getElementById("url-button");
const ul = document.getElementById("list");

renderLeads(myLeads);

inputButton.addEventListener("click", function () {
  let okInput = inputEl.value.trim();
  if (okInput != "" && !myLeads.includes(okInput)) {
   saveUrl(okInput);
  }
});

urlButton.addEventListener("click", function(){
  let urlActual = window.location.host;
 if(!myLeads.includes(urlActual)){
  saveUrl(urlActual);
 }
});

function saveUrl(url) {
  myLeads.push(url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads(myLeads);
  inputEl.value = "";
}

clearButton.addEventListener("dblclick", function () {
  localStorage.removeItem("myLeads");
  myLeads = [];
  renderLeads(myLeads);
});

function renderLeads(arr) {
  if (localStorage.getItem("myLeads")) {
    arr = JSON.parse(localStorage.getItem("myLeads"));
  }
  let list = "";
  if(arr.length > 0){
    for (const iterator of arr) {
      list += `
      <li>
       <a href="${iterator}" target = '_blank'>${iterator}</a>
      </li>`;
    }
  }
  ul.innerHTML = list;
  // console.log(myLeads);
}
