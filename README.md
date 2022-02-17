# ByteHandler
A simple bytehandler, hopefully helpfull for anyone working with bits and bytes. 

Made with node 16.10.0 so should work in later versions, and might work in some older versions.
## Installing
---
```
$ npm install byte-handler
```
Currently just with npm, but might add more ways if people want.
## Examples
---
Converting a Buffer into a ByteArray:
```JavaScript
// Load the ByteArray class.
const { ByteArray } = require('byte-handler');

// Create Buffer object.
var buf = Buffer.alloc(5,'a');

// Construct the ByteArray.
var bytearr = new ByteArray(buf);

// Write the bytes array into the console.
console.log(bytearr.bytes);
```
or just using the function made from `byte-handler`:
```JavaScript
// Load the ByteHandler function.
const ByteHandler = require('byte-handler');

// Create Buffer object.
var buf = Buffer.alloc(5,'a');

// Returns ByteArray class.
var bytearr = ByteHandler(buf);

// Write the bytes array into the console.
console.log(bytearr.bytes);
```
Converting a Buffer into an array of Bytes without using ByteArray:
```JavaScript
// Load the Byte class.
const { Byte } = require('byte-handler');

// Now we create a buffer object.
var buf = Buffer.alloc(5,'a');
// Create an array for storing the bytes.
var bytes = [];

// Looping through all numbers in the buffer and converting them to bytes.
for(var num of buf){
    var byte = new Byte(num);
    bytes.push(byte);
}

// Write the bytes into the console.
console.log(bytes);
```
Create Byte object from "raw" byte made of array:
```JavaScript
// Load the Byte class.
const { Byte } = require('byte-handler');

// Create an array containing 8 bits. 1 and + can be both strings and/or numbers.
var arrayByte = [0,1,1,0,'0','0','0','1'];

// Create the Byte object using our array.
var byte = Byte.fromArray(arrayByte);

console.log(byte.value);
```