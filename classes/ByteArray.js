const Byte = require("./Byte");

module.exports = class ByteArray{
    /**
     * @type {Byte[]}
     */
    bytes = [];

    /**
     * @type {Number[]}
     */
    values = [];
    get values(){
        return this.values;
    }

    length;
    get length(){
        return this.bytes.length;
    }

    get bytes(){
        return this.bytes;
    }

    /**
     * @param {number[]| Byte[] | ('1'|'0'|1|0)[][]} buf
     */
    set bytes(buf){
        if(Buffer.isBuffer(buf)){
            for(let num of buf) this.bytes.push(new Byte(num));
        }else if(Array.isArray(buf)){
            for(let val of buf){
                try{
                    if(typeof val == 'number'){this.bytes.push(new Byte(val)); this.values.push(val);}
                    else if(Byte.isByteClass(val)) {this.bytes.push(val);this.values.push(val.valueOf());}
                    else if(Byte.isArrayByte(val)) {var byte=Byte.fromArray(val);this.bytes.push(byte);this.values.push(byte.valueOf())}
                }catch{continue}
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
                try{
                    if(typeof val == 'number'){this.bytes.push(new Byte(val)); this.values.push(val);}
                    else if(Byte.isByteClass(val)) {this.bytes.push(val);this.values.push(val.valueOf());}
                    else if(Byte.isArrayByte(val)) {var byte=Byte.fromArray(val);this.bytes.push(byte);this.values.push(byte.valueOf())}
                }catch{continue}
            }
        }
    }

    /**
     * 
     * @param {number|Byte|('1'|'0'|1|0)[]|} byte - The byte object.
     */
    add(byte){
        if(typeof val == 'number'){this.bytes.push(new Byte(val)); this.values.push(val);}
        else if(Byte.isByteClass(val)) {this.bytes.push(val);this.values.push(val.valueOf());}
        else if(Byte.isArrayByte(val)) {var byte=Byte.fromArray(val);this.bytes.push(byte);this.values.push(byte.valueOf())}
        else throw new TypeError(`Cannot be ${typeof byte}. Must be either number[] or Byte.`);
    }

    /**
     * 
     * @param {Number} i The index to remove a Byte from.
     */
    remove(i){
        this.bytes.splice(i,1);
    }

    /**
     * 
     * @param {Number} i The index to remove a Byte from.
     */
    pop(i){
        var b = this.bytes[i];
        if(b === undefined) return undefined;
        this.bytes.splice(i,1);
        return b;
    }

    /**
     * 
     * @param {number} i The index of the byte.
     * @returns {Byte|undefined} The Byte from the index, returns undefined if invalid index.
     */
    get(i){
        return this.bytes[i];
    }

    /**
     * 
     * @returns {Buffer} A Buffer made from bytes.
     */
    toBuffer(){
        return Buffer.from(this.values);
    }

    /**
     * 
     * @param {string} [sep] - The seperator.
     */
    toBinary(sep=''){
        var bits = '';
        for(var i in this.bytes){
            var byte = this.bytes[i].toString(1);
            if(i != 0) bits = bits+sep+byte;
            else bits = byte;
        }
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