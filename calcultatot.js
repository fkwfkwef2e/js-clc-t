<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Simple Calculator</title>
  </head>
  <body>
    <h1>Simple Calculator</h1>
    <input type="text" id="value1" placeholder="Enter first value">
    <select id="operator">
      <option value="add">+</option>
      <option value="subtract">-</option>
      <option value="multiply">*</option>
      <option value="divide">/</option>
    </select>
    <input type="text" id="value2" placeholder="Enter second value">
    <button onclick="calculate()">Calculate</button>
    <p id="result"></p>
    <script>
      function calculate() {
        var value1 = parseFloat(document.getElementById('value1').value);
        var value2 = parseFloat(document.getElementById('value2').value);
        var operator = document.getElementById('operator').value;
        var result;
        if (isNaN(value1) || isNaN(value2)) {
          result = 'Invalid input';
        } else {
          switch (operator) {
            case 'add':
              result = value1 + value2;
              break;
            case 'subtract':
              result = value1 - value2;
              break;
            case 'multiply':
              result = value1 * value2;
              break;
            case 'divide':
              if (value2 === 0) {
                result = 'Cannot divide by zero';
              } else {
                result = value1 / value2;
              }
              break;
            default:
              result = 'Invalid operator';
          }
        }
        document.getElementById('result').innerHTML = 'Result: ' + result;
      }
    </script>
  </body>
</html>
