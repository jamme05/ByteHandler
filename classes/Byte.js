/**
 * @type {('1'|'0'|1|0)}
 */
const bitExamples = ['1','0',1,0];

module.exports = class Byte{
    value;

    get value(){ return this.value; }

    set value(val){
        if(typeof val != 'number') throw new TypeError(`${typeof val} is the wrong type, must be number.`);
        this.value = val || 0;
        var small = this.value.toString(2);

        if(small.length > 8) throw new Error('Cannot handle value higher than 8 bits.');

        let str = "0000000".substring(0,7-(small.length-1))+small;
        this.bits = str.split('');
    }
    /**
     * @type {('1'|'0')[]}
     */
    bits;

    /**
     * @param {bitExamples[]} val
     */
    set bits(val) {
        if(!Array.isArray(val)) throw new TypeError(`Type has to be array, cannot be ${typeof val}.`);
        else if(val.length > 8) throw new Error('Wrong array length, must be under or equal to 8.');
        else{
            for(i in val){
                let bit = val[i];
                if(!bitExamples.includes(bit)) throw new Error(`Wrong value, must be one of 1,0,"1","0".`);
                this.bits[i] = `${bit}`;
            }
            this.value = parseInt(this.toString(),2);
        }
    }

    /**
     * 
     * @param {Number} val - The number to get a byte from. Defaults to 0.
     */
    constructor(val){
        if(typeof val != 'number') throw new TypeError(`${typeof val} is the wrong type, must be number.`);
        this.value = val || 0;
        var small = this.value.toString(2);

        if(small.length > 8) throw new Error('Cannot handle value higher than 8 bits.');

        let str = "0000000".substring(0,7-(small.length-1))+small;
        this.bits = str.split('');
    }

    /**
     * 
     * @param {bitExamples[]} arr 
     */
    static fromArray(arr){
        var byte = new Byte(0);
        byte.bits = arr;
        return byte;
    }

    /**
     * 
     * @param {*} obj - The object you want to check if its any type of byte.
     */
    static isByte(obj){
        if(this.isArrayByte(obj)) return true;
        else return this.isByteClass(obj);
    }

    /**
     * 
     * @param {*} arr - The array you want to check if its a byte.
     */
    static isArrayByte(arr){
        if(!Array.isArray(arr)) return false;
        else if(arr.length > 8) return false;
        else {
            var res = true;
            for(let i of arr){
                if(!bitExamples.includes(i)){
                    res = false;
                    break;
                }
            }
            return res;
        };
    }

    /**
     * 
     * @param {*} obj - The object you want to check if its the class.
     */
    static isByteClass(obj){
        return obj instanceof Byte;
    }

    /**
     * 
     * @param {number} i - The index of the bit.
     */
    getBit(i){
        return this.bits[i];
    }

    /**
     * 
     * @param {number} i - The index of the bit. Must be between 0-7.
     * @param {1 | 0 | '1' | '0'} value - The value the bit is going to get.
     */
    setBit(i,value){
        if(i > 7) throw new Error('Index too high, must be less or equal to 7.');
        else if(i < 0) throw new Error('Index too low, must be more or equal to 0');
        else if(!bitExamples.includes(value)) throw new Error(`Wrong value, must be one of 1,0,"1","0".`);

        this.bits[i] = `${value}`;
        return this.bits;
    }

    /**
     * 
     * @param {0|1} [func] The way it converts it to text. Defaults to 0.
     * 
     * 0 = ASCII/utf-8,
     * 1 = Binary
     * @returns 
     */
    toString(func){
        func = func || 0;
        if(func == 1) return this.bits.join('');
        return String.fromCharCode(parseInt(this.bits.join(''),2));
    }

    toBuffer(){
        return Buffer.alloc(1,this.valueOf());
    }

    valueOf(){
        return parseInt(this.bits.join(''),2);
    }

    toArray(){
        return this.bits;
    }

    clone(){
        return Byte.fromArray(this.bits);
    }
}
