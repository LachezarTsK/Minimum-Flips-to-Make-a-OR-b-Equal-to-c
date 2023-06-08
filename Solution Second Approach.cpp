
#include <bit>
using namespace std;

class Solution {
    
public:
    /*
    popcount(static_cast<uint32_t> ((a & b) & ((a | b) ^ c)))
    adds an additional one for each case when the current bits in a,b,c are as follows:
    a=1, b=1, c=0 (special case for this algorithm when (a|b) != c)
        
    popcount(static_cast<uint32_t> (((a | b) ^ c)))
    adds one for all cases when the current bits in a,b,c are as follows:
    (a|b) != c 
     */
    int minFlips(int a, int b, int c) const {

        //C++20: as of June 2023, C++20 is not supported on leetcode.com
        //thus popcount(unsigned integer), defined in <bit>, can not be run the the website.
        //return popcount(static_cast<uint32_t> ((a & b) & ((a | b) ^ c)))
        //       + popcount(static_cast<uint32_t> (((a | b) ^ c)));

        //as of June 2023, only __builtin_popcount(integer), GCC compiler, defined in <bits/stdc++.h> 
        //can be run on leetcode.com
        return __builtin_popcount((a & b) & ((a | b) ^ c)) + __builtin_popcount((a | b) ^ c);
    }
};
