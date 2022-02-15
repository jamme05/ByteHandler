const Byte = require("./classes/Byte")
const ByteArray = require("./classes/ByteArray")

/**
 * 
 * @param {Buffer | Byte[] | (0 | "1" | "0" | 1)[][]} buf 
 * @returns {ByteArray} - ByteArray made from input.
 */
function byteHandler(buf){
    return new ByteArray(buf);
}
byteHandler.Byte = Byte;
byteHandler.ByteArray = ByteArray;

module.exports = byteHandler;