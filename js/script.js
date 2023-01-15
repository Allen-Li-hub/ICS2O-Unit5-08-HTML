// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08-HTML/sw.js", {
    scope: "/ICS2O-Unit5-08-HTML/",
  })
}

;("use strict")

function calculate() {
  const number1 = parseInt(document.getElementById("pay").value)
  const number2 = parseInt(document.getElementById("pay2").value)
  var age = 0
  var answer = number1

  if (number1 > 0 && number2 > 0) {
    while (answer >= number2) {
      age = age + 1
      answer = answer - number2
    }
  }

  document.getElementById("answers").innerHTML =
    number1 + " ÷ " + number2 + " = " + age
}
