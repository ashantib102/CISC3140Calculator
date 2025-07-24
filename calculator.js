"use strict";

// Clear display when page loads
window.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("result");
  if (display) display.value = "";
});

const calculator = document.getElementById("calculator");
if (calculator) {
  calculator.addEventListener("click", function (e) {
    const target = e.target;
    if (!target.classList.contains("btn")) return;

    const display = document.getElementById("result");
    if (!display) return;

    const value = target.textContent;
    const id = target.id;

    // Handle clear button
    if (id === "clear") {
      display.value = "";
      return;
    }

    // Handle backspace
    if (id === "backspace") {
      display.value = display.value.slice(0, -1);
      return;
    }

    // Handle equals
    if (id === "equals") {
      try {
        // Evaluate the expression
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
      return;
    }

    // Handle decimal
    if (id === "decimal") {
      // Prevent multiple decimals in the current number
      const parts = display.value.split(/\+|-|\*|\//);
      const last = parts[parts.length - 1];
      if (!last.includes(".")) display.value += ".";
      return;
    }

    // Handle operators
    if (target.classList.contains("operator") && id !== "equals") {
      display.value += value;
      return;
    }

    // Handle numbers
    if (target.classList.contains("number")) {
      display.value += value;
      return;
    }
    //Handle squared
    if (id === "square") {
      try {
        const number = parseFloat(display.value);
        if (!isNaN(number)) {
          display.value = number * number;
        } else {
          display.value = "Error";
        }
      } catch {
        display.value = "Error";
      }
      return;
    }
  });
}
