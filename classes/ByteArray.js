const Byte = require("./Byte");

module.exports = class ByteArray{
    /**
     * @type {Byte[]}
     */
    bytes = [];

    /**
     * 
     * @param {Buffer | Byte[] | number[]} buf - The buffer or array of bytes you want to make a ByteArray of. 
     * - Ignores wrong variable types.
     */
    constructor(buf){
        if(Buffer.isBuffer(buf)){
            for(let num of buf) this.bytes.push(new Byte(num));
        }else if(Array.isArray(buf)){
            for(let val of buf){
                if(typeof val == 'number'){
                    try{
                        this.bytes.push(new Byte(val));
                    }catch {continue};
                }else if(Byte.isByteClass(val)) this.bytes.push(val);
                else if(Byte.isArrayByte(val)) this.bytes.push(Byte.fromArray(val));
            }
        }
    }
}