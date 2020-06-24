

public class Exercise{

    static int twoSwapSort(int[] unsortedArray){
        int swaps = 0;
        boolean[] inspectionArray =  new boolean[unsortedArray.length];
        for(int outerIndex = 0; outerIndex < unsortedArray.length; outerIndex++){ //loop through unsortedArray
            int indexToValue = outerIndex; // this is what the element is supposed to look like in correct array
            int cycle = 0;
            while (inspectionArray[indexToValue] == false) { // elements that have not been inspected are false
                inspectionArray[indexToValue] = true; 
                indexToValue = unsortedArray[indexToValue] -1;
                cycle++;
            }
            if(cycle != 0){
                swaps += cycle - 1;
            }

        }
        System.out.println(swaps);
        return swaps;
    }

    public static void main(final String[] args){
        int[] clouds = new int[] {1,3,5,2,4,6,7};
        twoSwapSort(clouds);
    }
}