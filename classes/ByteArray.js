const Byte = require("./Byte");

module.exports = class ByteArray{
    /**
     * @type {Byte[]}
     */
    bytes = [];

    length;
    get length(){
        return this.bytes.length;
    }

    get bytes(){
        return this.bytes;
    }

    /**
     * @param {Byte[] | ('1'|'0'|1|0)[][]} buf
     */
    set bytes(buf){
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

    /**
     * 
     * @param {Buffer | Byte[] | ('1'|'0'|1|0)[][]} buf - The buffer or array of bytes you want to make a ByteArray of. 
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

    /**
     * 
     * @param {Byte|('1'|'0'|1|0)[]} byte - The byte object.
     */
    add(byte){
        if(typeof val == 'number'){
            try{
                this.bytes.push(new Byte(byte));
            }catch {continue};
        }else if(Byte.isByteClass(byte)) return byte;
        else if(Byte.isArrayByte(byte)) return Byte.fromArray(byte);
        else throw new TypeError(`Cannot be ${typeof byte}. Must be either array or Byte.`);
    }

    /**
     * 
     * @param {number} i - The index of the byte.
     */
    get(i){
        return this.bytes[i];
    }

    /**
     * 
     * @param {String} [sep] The seperator if you want one.
     * @returns {string} The bits as a string.
     */
    toString(sep){
        sep = sep || '';
        if(typeof sep != 'string') sep = `${sep}`;
        return this.bytes.join(sep);
    }
}