public class Solution {
    public int Reverse(int x) 
    {
        long rev = 0;
        bool negative = x < 0;
        
        if(negative)
            x*=-1;
        
        while(x>0)
        {
            rev=rev*10+x%10;
            x/=10;
        }
        
        if(negative)
            rev*=-1;
        
        if(rev>=int.MaxValue)
            return 0;
        int intValue = (int)rev;
        if(negative && intValue>0)
            return 0;
        return intValue;
    }
}