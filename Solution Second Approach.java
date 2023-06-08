
public class Solution {

    /*
    Integer.bitCount((a & b) & ((a | b) ^ c))
    adds an additional one for each case when the current bits in a,b,c are as follows:
    a=1, b=1, c=0 (special case for this algorithm when (a|b) != c)
        
    Integer.bitCount((a | b) ^ c)
    adds one for all cases when the current bits in a,b,c are as follows:
    (a|b) != c 
     */
    public int minFlips(int a, int b, int c) {
        return Integer.bitCount((a & b) & ((a | b) ^ c)) + Integer.bitCount((a | b) ^ c);
    }
}
