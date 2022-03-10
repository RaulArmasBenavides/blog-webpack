'use strict'
import './css/estilos.css';
import 'normalize.css';

//buttons
let btnweb = document.getElementById("btnweb");
let btnapi = document.getElementById("btnapi");
let btndes = document.getElementById("btndes");
let btnmob = document.getElementById("btnmob");
let btnall = document.getElementById("btnall");


const showAllRepository =  () => {
  toggle_visibility("api",false);
  toggle_visibility("des",false);
  toggle_visibility("mob",false);
  toggle_visibility("web",false);
};


btnall.addEventListener("click",()=> {
  showAllRepository();
});

btnweb.addEventListener("click",()=> {
  // ocultarBotones();
  //elementsapi.hidden = true;
  toggle_visibility("api",true);
  toggle_visibility("des",true);
  toggle_visibility("mob",true);
  toggle_visibility("web",false);
});
 
btnapi.addEventListener("click",()=> {
  toggle_visibility("des",true);
  toggle_visibility("web",true);
  toggle_visibility("mob",true);
  toggle_visibility("api",false);
});

btndes.addEventListener("click",()=> {
  toggle_visibility("api",true);
  toggle_visibility("web",true);
  toggle_visibility("mob",true);
  toggle_visibility("des",false);
});

btnmob.addEventListener("click",()=> {
  toggle_visibility("api",true);
  toggle_visibility("web",true);
  toggle_visibility("des",true);
  toggle_visibility("mob",false);
});

function toggle_visibility(id, aux) 
{

  var e = document.getElementsByClassName(id);
  if(aux)
  {
    console.log(e);
    hide(e);
  }
  else
  {
    console.log(e); 
    show(e);
  }
   

}


//show
//elements.style.display = 'block';

function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
  }

function show (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display =  'block';
    }
  }
  // Usage:
//hide(document.querySelectorAll('.target'));
//hide(document.querySelector('.target'));
//hide(document.getElementById('target'));



// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}





