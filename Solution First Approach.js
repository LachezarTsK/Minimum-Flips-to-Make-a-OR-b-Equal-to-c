
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {

    let minFlips = 0;
    while (a > 0 || b > 0 || c > 0) {
        let aBit = a & 1;
        let bBit = b & 1;
        let cBit = c & 1;

        if ((aBit | bBit) !== cBit) {
            minFlips += (cBit === 0) ? (aBit + bBit) : 1;
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    return minFlips;
};
