const byteHandler = require('./index.js');
const { Byte, ByteArray } = byteHandler;

var num = ((Math.random())*(10**16)).toString();
console.log('Generated test number:',num);
var buf = Buffer.from(num);
console.log('Created Buffer:',buf);

console.log('Testing byte-handler function...');
var test_1 = byteHandler(buf);
console.log('Converting to string:',test_1.toString());

console.log('Constructing ByteArray class from byte-handlers data...');
var test_2 = new ByteArray(test_1.bytes);
console.log('Checking if string is the same:',test_2.toString(),(test_2.toString==test_1.toString()));

console.log('Creating Buffer from ByteArray');
buf = test_2.toBuffer();
console.log('Converting Buffer to utf-8 string:',buf.toString('utf-8'));

console.log('Creating Byte out of Buffer[0]');
var test_3 = new Byte(buf[0]);
console.log(`Checking that the data is correct: Test 1: ${test_1.bytes[0]} Test 2: ${test_2.bytes[0]} Test 3: ${test_3}\nStatus: ${new Set([test_1.bytes[0],test_2.bytes[0],test_3]).size == 1}`);