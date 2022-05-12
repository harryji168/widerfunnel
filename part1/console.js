// console.log("could run start - sticky sidebar");
if(window.innerWidth>1024){window.addEventListener("scroll",function(){if(window.pageYOffset>3431){document.querySelector('#sidebar').firstElementChild.style = ("position:absolute;bottom:-3318px;")}else{document.querySelector('#sidebar').firstElementChild.style = ("position:sticky;top:100px;min-height:3431;")}})}; 
// console.log("start run code - Modal");
document.body.appendChild(document.createElement("div")).setAttribute("id","modal");
document.querySelector("#modal").appendChild(document.createElement('div')).setAttribute('id','modal-content');
document.querySelector('#modal').style = "opacity:0;z-index:-10;";
document.querySelector('#modal-content').style = "position:relative;background-color:white;width:40%;height:20%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;";
document.querySelector('#modal-content').appendChild(document.createElement('h2')).innerHTML = 'Modal Header';
document.querySelector('#modal-content').appendChild(document.createElement('p')).innerHTML = 'This is the content for this modal.  Click the exit button to close.';
document.querySelector('#modal-content').appendChild(document.createElement('span')).setAttribute('id','modal-close');
document.querySelector('#modal-close').style = "position:absolute;top:10px;right:15px;cursor:pointer;font-weight:bold;";
document.querySelector('#modal-close').innerHTML = 'x';
document.querySelector('#modal-close').addEventListener('click',()=>document.querySelector('#modal').style="visibility:hidden;opacity:0;");
document.querySelector('.show-on-desktop-min > .entry-content').appendChild(document.createElement('button')).setAttribute("class","modal-btn"); 
document.querySelector('.modal-btn').innerText = "MODAL BUTTON";
document.querySelector('.modal-btn').addEventListener('click',()=>document.querySelector('#modal').style = "position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.5);width:100%;height:100vh;display:flex;justify-content:center;align-items:center;visibility:visible;opacity:1;z-index:10;")
document.querySelector('#content > .hide-on-desktop-min').appendChild(document.createElement('button')).setAttribute("class","modal-btn")
document.styleSheets[0].insertRule("@media only screen and (max-width : 768px) { #modal-content { width:100% !important; height:100vh !important; } }");  