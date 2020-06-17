package jumping_clouds;

public class Exercise {

    public static void main(String[] args){
        int[] clouds = new int[] {0, 0, 0, 1, 0, 0};
        jumpingClouds(clouds);
    }

    static int jumpingClouds(int[] clouds) {
        int jumps = 0;
        int index = 0;
        //                                4
        for(; index < clouds.length - 2; index+=2){
            if(clouds[index+2]==0){
                jumps+=1;
            }else if(clouds[index+2]==1){
                jumps+=1;
                index-=1;
            }
        }
        if(index == clouds.length -2){
            jumps+=1;
        }

        System.out.println(jumps);
        return jumps;
    }


}