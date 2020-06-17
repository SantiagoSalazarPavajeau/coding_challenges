package counting_valleys;

public class Exercise {

    static void countingValleys(int steps, String path){
        char[] hike = path.toCharArray();
        int elevation = 0;
        int valleys = 0;
        char up = 'U';
        char down = 'D';

        for(int i = 0; i < steps; i++){
            if(hike[i] == up){
                elevation += 1;
            }else if(hike[i]== down){
                if(elevation == 0){
                    valleys += 1;
                }
                elevation -= 1;
            }
        }
        System.out.println(valleys);
    }

    public static void main (String[] args){
        countingValleys(8, "DDUUDDUU");
    }


}