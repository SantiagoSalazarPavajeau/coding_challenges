class Solution{
    public int getSum(int a, int b){
        while( b != 0){
            // find addition of a & b carry, and shift it left
            int temp = (a & b) << 1;

            // add a and b withour carry
            a = a ^ b;

            b = temp

        }
        return a;
    }
}