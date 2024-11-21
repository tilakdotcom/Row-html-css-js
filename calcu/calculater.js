let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
   button.addEventListener("click", (e) => {
      if (e.target.innerHTML === "=") {
         string = eval(string);
         document.querySelector(".txt").value = string;
      } else if (e.target.innerHTML === "AC") {
         string = "";
         document.querySelector(".txt").value = "";
      } else if (e.target.innerHTML === "DE") {
         // Implement delete functionality to remove the last character
         string = string.slice(0, -1);
         document.querySelector(".txt").value = string;
      } else {
         string = string + e.target.innerHTML;
         document.querySelector(".txt").value = string;
      }
   });
});
