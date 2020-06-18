

public class Exercise{

    static void nestedArrayHourglass(int[][] array){
        int[] hourGlassSums = new int[22];
        for(int row_index = 0; row_index <= 3; row_index++){
            for(int column_index = 0; row_index <= 3; column_index++){
                int hourGlassSum = 0;
                hourGlassSum += array[row_index][column_index];
                hourGlassSum += array[row_index][column_index + 1];
                hourGlassSum += array[row_index][column_index + 2];
                hourGlassSum += array[row_index + 1][column_index + 1];
                hourGlassSum += array[row_index + 2][column_index]; 
                hourGlassSum += array[row_index + 2][column_index + 1];
                hourGlassSum += array[row_index + 2][column_index + 2];
                int i = 0;
                hourGlassSums[i] = hourGlassSum;
            }
        }
        System.out.println(hourGlassSums);
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