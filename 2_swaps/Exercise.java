public class Exercise{

    static void int twoSwapSort(int[] unsortedArray){
        int swaps = 0;
        boolean[] inspectionArray=  new boolean[unsortedArray.length];
        for(int outerIndex = 0; outerIndex < unsortedArray.length; outerIndex++){ //loop through unsortedArray
            int indexToValue = outerIndex // this is what the element is supposed to look like in correct array
            int cycle = 0
            while(!inpsectionArray[indexToValue]){ // elements that have not been inspected are false
                inspectionArray[indexToValue] = true; 
                indexToValue = unsortedArray[indexToValue] -1

            }

        }
    }

    public static void main(String[] args){
        twoSwapSort([1,3,5,2,4,6,7]);
    }
}