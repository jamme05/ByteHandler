const Byte = require("./Byte");

class ByteArray{
    /**
     * @type {Byte[]}
     */
    bytes = [];
}

var test = new Byte(30);
test.setBit(1,'1')