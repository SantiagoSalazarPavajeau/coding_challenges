import java.lang.reflect.Array;
import java.util.Arrays;

// find the sum of the 'hourglasses' in the array
// find the highest number

public class Exercise{

    static void nestedArrayHourglass(int[][] array){
        int[] hourGlassSums = new int[16];
        int i = 0;
        for(int row_index = 0; row_index <= 3; row_index++){
            for(int column_index = 0; column_index <= 3; column_index++){ 
                int hourGlassSum = 0;
                hourGlassSum += array[row_index][column_index];
                hourGlassSum += array[row_index][column_index + 1];
                hourGlassSum += array[row_index][column_index + 2];
                hourGlassSum += array[row_index + 1][column_index + 1];
                hourGlassSum += array[row_index + 2][column_index]; 
                hourGlassSum += array[row_index + 2][column_index + 1];
                hourGlassSum += array[row_index + 2][column_index + 2];
                hourGlassSums[i] = hourGlassSum;
                i++;
            }
        }

        // System.out.println(Arrays.toString(hourGlassSums));
        System.out.println(Arrays.stream(hourGlassSums).max().getAsInt());
        
    }
    public static void main(String[] args){
        int[][] twoDArray = {
                                {1, 1, 1, 0, 0, 0},     
                                {0, 1, 0, 0, 0, 0},    
                                {1, 1, 1, 0, 0, 0},     
                                {0, 0, 2, 4, 4, 0},     
                                {0, 0, 0, 2, 0, 0},    
                                {0, 0, 1, 2, 4, 0}
                            };
        nestedArrayHourglass(twoDArray);

    }
}