package shift_left;

import java.util.Arrays;

public class Exercise {

    static void shiftLeft(int[] array, int shifts){
        for(int oldIndex=0; oldIndex < shifts; oldIndex++){
            int newIndex;
            int firstValue = array[0];
            for(newIndex = 0;newIndex < array.length-1;newIndex++){ //the length of the array needs to correspond to index so - 1
                array[newIndex] = array[newIndex+1];
            }
            array[newIndex] = firstValue;
        }
        System.out.println(Arrays.toString(array));
    }

    public static void main(String[] args){
        int[]array = new int[] {1,2,3,4,5};
        shiftLeft(array,1);
    }
}