
using System;

public class Solution
{
    public int MinFlips(int a, int b, int c)
    {
        int minFlips = 0;
        while (a > 0 || b > 0 || c > 0)
        {
            int aBit = a & 1;
            int bBit = b & 1;
            int cBit = c & 1;

            if ((aBit | bBit) != cBit)
            {
                minFlips += (cBit == 0) ? (aBit + bBit) : 1;
            }

            a >>= 1;
            b >>= 1;
            c >>= 1;
        }
        return minFlips;
    }
}
