![JS LOGO](https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg)
# JavaScript Crash Course
The repo contains all the Code Snippets that I wrote in order to recall the basic concepts of **JavaScript**
<br>
<h1>Documentation</h1>

[Read More Here!](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
<br>
## Some of the basic concepts included are:
- Logging data onto the console -> **console.log()**
- Declaring variables -> **Let, Var, Const** and their scopes
- Mathematical Operations ->
  - **Addition** +
  - **Subtraction** -
  - **Multiplication** *
  - **Division** /
  - **Modulus** %
- Data Types in JavaScript
  - **String**
  - **Boolean**
  - **Number**
  - **Undefined**
  - **NULL**
- Adding JS to an **HTML** page using the **Script Tag**
- **Functions** in JS
- Loops in JS
  - **for**
  - **forEach**
  - **while**
- Conditional Statements
  - **if-else**
  - **nested if-else**
  - **switch case**
<br>

## Synchronous JavaScript

JavaScript is a sing-threaded programming language which can read code line by line only.

The code runs from top to bottom and whenever a function is called it is pushed into the **Call Stack**, after its working is done it gets popped out.

After the **Call Stack** gets emptied the program ends successfully.
<br>


## AJAX - Ascynchronous JavaScript and XML

**XML** is basically a light-weight format which is used to send data from server to the browser or from one server to another.

These days the use of XML has decremented and now the more common way of sending data is **JSON** (JavaScript Object Notation).

**AJAX** is being used, in search engines, where the dropdown shows the most recommended searches that can be made. AJAX continously sends and recieves data from the server to show the recommended items simultaneously.

Examples of Asynchronous JS functions are:
- **callback** based functions - eg, setTimeout()
- **promise** based functions 

## Working of Asynchronous code in JavaScript :-

Since, JS is a single threaded programming language so it has to function differently to maintain the speed. As we know that in a synchronous code whenever a function is called, that particular function is pushed into the **Call Stack** and as soon as its work is done, it gets popped out.

For an asynchronous code to run, the asynchronous functions are firstly pushed into the **Class Stack** and then they are transferred to the Web APIs(contained by the browser, which can manage the asynchronous code in the background, which the synchronous code is being run through the Call Stack) and then executed through them.

**All Callback functions are not necessarily asynchrnous!!!**
For example the forEach callback function, is not asynchronous
