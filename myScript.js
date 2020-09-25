window.onload = function () {
  var leftPart = "";
  var rightPart = "";
  var selectedOperator = "";

  var numbers = document.querySelectorAll(".num");
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener(
      "click",
      function () {
        if (this.value == ".") {
          return;
        }
        document.getElementById("result").innerHTML += this.value;

        if (selectedOperator == "") {
          leftPart += this.value;
        } else if (selectedOperator != "") {
          rightPart += this.value;
        }
      },
      false
    );
  }

  var operators = document.querySelectorAll(".operator");
  for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener(
      "click",
      function () {
        if (document.getElementById("result").innerHTML === "") {
          return;
        }
        document.getElementById("result").innerHTML += this.value;

        selectedOperator = this.value;
      },
      false
    );
  }

  document.getElementById("dot").addEventListener(
    "click",
    function () {
      if (document.getElementById("result").innerHTML.indexOf(".") != -1) {
        return;
      }

      if (document.getElementById("result").innerHTML === "") {
        output = document.getElementById("result").innerHTML = "0.";
      } else if (document.getElementById("result").innerHTML === output) {
        document.getElementById("result").innerHTML =
          document.getElementById("result").innerHTML + ".";
      }
    },
    false
  );

  document.getElementById("equation").addEventListener(
    "click",
    function () {
      var calculationResult = 0;

      //parseInt yerine parseFloat kullandım
      // 5 bölü 2 nin sonucu tam sayı olmadığı için viegüllü olduğunu görebilmemiz için

      if (selectedOperator == "+") {
        calculationResult = parseFloat(leftPart) + parseFloat(rightPart);
      } else if (selectedOperator == "-") {
        calculationResult = parseFloat(leftPart) - parseFloat(rightPart);
      } else if (selectedOperator == "*") {
        calculationResult = parseFloat(leftPart) * parseFloat(rightPart);
      } else if (selectedOperator == "/") {
        calculationResult = parseFloat(leftPart) / parseFloat(rightPart);
      }

      document.getElementById("result").innerHTML = calculationResult;

      leftPart = "";
      rightPart = "";
      selectedOperator = "";
    },
    false
  );

  document.getElementById("delete").addEventListener(
    "click",
    function () {
      document.getElementById("result").innerHTML = "";

      leftPart = "";
      rightPart = "";
      selectedOperator = "";
    },
    false
  );
};
