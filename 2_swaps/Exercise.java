//  consecutive numbers 

public class Exercise{

    static int twoSwapSort(int[] unsortedArray){
        int swaps = 0;
        boolean[] inspectionArray =  new boolean[unsortedArray.length];
        for(int i = 0; i < unsortedArray.length; i++){ //loop through unsortedArray
            int indexToValue = i; // this is what the element is supposed to look like in correctly sorted array
            int cycle = 0;
            while (inspectionArray[indexToValue] == false) { // elements that have not been inspected are false because they dont exist
                inspectionArray[indexToValue] = true; // keep track of which ones we have gone over
                indexToValue = unsortedArray[indexToValue] - 1; 
                cycle++;
            }
            if(cycle != 0){
                swaps += cycle - 1; // counting the swaps when there are elements left to inspect?
            }
        }
        return swaps;
    }

    public static void main(final String[] args){
        int[] clouds = new int[] {1,3,5,2,4,6,7};
        System.out.println(twoSwapSort(clouds)); 
    }
}