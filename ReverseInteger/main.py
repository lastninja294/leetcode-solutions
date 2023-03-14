class Solution:
    def reverse(self, x: int) -> int:
        if x>=0:
            x = str(x)
            x = x[::-1]
            x = int(x)
            if x>=-2**31 and x<=2**31-1:
                return x
            else:
                return 0
        else:
            x = str(x)
            x = x[::-1]
            x = x.replace("-","")
            x = -int(x)
            if x>=-2**31 and x<=2**31-1:
                return x
            else:
                return 0