var container = document.getElementsByClassName("container")[0];
var arrCoders = ["Mirian Mendoza","Betsy Loayza","Maricarmen Rojas","Naomi Villanueva","Anna Duran","Neiza Nuñezs"];

function createImg(){
  for(var i=0; i<arrCoders.length; i++){
    var div = document.createElement("div");
    var img = document.createElement("img");
    var span = document.createElement("span");
    var textSpan = document.createTextNode(arrCoders[i]);

    img.setAttribute("src","assets/img/"+(i+1)+".png");
    div.classList.add("div-img")
    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(textSpan);
    container.appendChild(div);
  }
}
createImg();
