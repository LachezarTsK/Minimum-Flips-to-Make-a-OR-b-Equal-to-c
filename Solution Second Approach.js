
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
/*
 bitCount((a & b) & ((a | b) ^ c))
 adds an additional one for each case when the current bits in a,b,c are as follows:
 a=1, b=1, c=0 (special case for this algorithm when (a|b) != c)
 
 bitCount((a | b) ^ c)
 adds one for all cases when the current bits in a,b,c are as follows:
 (a|b) != c  
 */
var minFlips = function (a, b, c) {
    return bitCount((a & b) & ((a | b) ^ c)) + bitCount((a | b) ^ c);
};

/**
 * @param {number} num
 * @return {number}
 */
function bitCount(num) {
    let bits = 0;
    while (num > 0) {
        bits += num & 1;
        num >>= 1;
    }
    return bits;
}
