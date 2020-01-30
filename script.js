"use strict";

// ===== GLOBAL VARIABLE DECLARATION
var ele_svgmap, pointer_container_ele, pointers_ele, anchor_ele;

// ===== EVENT DECLARATION
document.addEventListener("DOMContentLoaded", function() {
  on_page_ready();
});

window.onresize = function() {
  add_achor();
};

window.onload = function() {
  console.log("window load.. ");
};


// ===== FUNCTION DECLARATION
function on_page_ready() {
  ele_svgmap = document.getElementById("svgmap");
  pointer_container_ele = document.getElementById("pointer_wrap");
  pointers_ele = document.querySelectorAll("._pointer");

  add_achor();
}

function add_achor() {
  let pointer_top_position;
  let pointer_left_position;
  let pointer_name;
  let pointer_color;

    pointer_container_ele.innerHTML = "";

    pointers_ele.forEach(element => {
        pointer_top_position = (element.getBoundingClientRect().top - document.body.getBoundingClientRect().top);
        pointer_left_position = element.getBoundingClientRect().left;
        pointer_name = element.getAttribute("data-city");
        pointer_color = element.getAttribute("data-color"); 

        pointer_container_ele.insertAdjacentHTML(
        "beforeend",
        anchor_Node(
            pointer_top_position,
            pointer_left_position,
            pointer_name,
            pointer_color
        )
        );

    });

    anchor_click();

}

function anchor_Node(top, left, name, color) {
  return `<div class="anchor_drop" style="top: ${top}px; left: ${left}px ">
                <svg width="25" height="32" viewBox="0 0 25 32"> 
                    <g fill="none" fill-rule="evenodd">
                        <path fill=${color} d="M24.69 12.345C24.69 5.527 19.161 0 12.343 0 5.527 0 0 5.527 0 12.345c0 3.415 1.387 6.506 3.629 8.741l.006.007a25.61 25.61 0 0 0 2.415 2.111c5.207 3.898 6.27 8.77 6.294 8.887v.005l.001-.002.001.002v-.005c.026-.118 1.088-4.989 6.295-8.887a25.613 25.613 0 0 0 2.415-2.11l.01-.013a12.308 12.308 0 0 0 3.623-8.736"></path>
                        <path fill="#F5F7FA" d="M19.957 12.345c0 .688-.09 1.36-.265 1.994a7.484 7.484 0 0 1-.654 1.636l-.129.228a7.615 7.615 0 0 1-13.13 0l-.127-.228a7.511 7.511 0 0 1-.655-1.636 7.612 7.612 0 1 1 14.96-1.994"></path>
                    </g>
                </svg>
                <small>${name}</small>
            </div>`;
}

function anchor_click () {
    anchor_ele = document.querySelectorAll('.anchor_drop');
    anchor_ele.forEach(element => {
        element.addEventListener('click', function(e) {
            anchor_ele.forEach(_anchor => {
                _anchor.classList.remove("active")    
            })
            this.classList.add("active");
            this.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        })
    });
}