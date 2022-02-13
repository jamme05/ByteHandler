/**
 * @type {('1'|'0'|1|0)[]}
 */
const bitExaples = ['1','0',1,0];

module.exports = class Byte{
    value;
    /**
     * @type {('1'|'0')[]}
     */
    bits;

    /**
     * @param {bitExaples} val
     */
    set bits(val) {
        if(!Array.isArray(val)) throw new TypeError(`Type has to be array, cannot be ${typeof i}.`);
        else if(val.length > 8) throw new Error('Wrong array length, must be under or equal to 8.');
        else{
            for(i in val){
                let bit = val[i];
                if(!bitExaples.includes(bit)) throw new Error(`Wrong value, must be one of 1,0,"1","0".`);
                this.bits[i] = `${bit}`;
            }
        }

        console.log(val);
    }

    /**
     * 
     * @param {Number} val - The number to get a byte from.
     */
    constructor(val){
        if(typeof val != 'number') throw new TypeError(`${typeof val} is the wrong type, must be number.`);
        this.value = val || 0;
        var small = val.toString(2);

        if(small.length > 8) throw new Error('Cannot handle value higher than 8 bits.');

        let str = "0000000".substring(0,7-(small.length-1))+small;
        this.bits = str.split('');
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
        else if(!bitExaples.includes(value)) throw new Error(`Wrong value, must be one of 1,0,"1","0".`);

        this.bits[i] = `${value}`;
        return this.bits;
    }

    toString(){
        return this.bits.join('');
    }

    toInt(){
        return parseInt(this.bits.join(''),2);
    }
}