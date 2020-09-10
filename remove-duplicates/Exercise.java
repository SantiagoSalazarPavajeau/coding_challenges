public class Exercise{
    static void removeDuplicates(int[] nums){
        if (nums.length == 0) {
            return null;
        }
        int i = 0;
        for (int j = 1; j < nums.length; j++){
            if (nums[j] != nums[i]){
                i++;
                nums[i] = nums[j];
            }

        }
        return i + 1;
        public static void main(String[] args){
            removeDuplicates({1, 1, 2, 3});
            
        }
    }
}