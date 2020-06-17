package repeated_strings;

public class Exercise{

    static void repeatedStrings(String string, long number){
        int stringLength = string.length();
        int countOfAs = 0; // can use this for the end
        char[] stringArray = string.toCharArray(); // can use this to loop over string
        for(char letter : stringArray){
            if(letter == 'a'){
                countOfAs++;
            }
        }
        long wholeRepeats = number / stringLength;
        int remainingAs = 0;
        String remainigString = string.substring(0,number % stringLength);
        char[] remainingStringArray = remainigString.toCharArray();
        for(char letter: remainingStringArray){
            if(letter == 'a'){
                remainingAs++;
            }
        }
        System.out.println(countOfAs * wholeRepeats + remainingAs);
    }

    public static void main(String[] args){
        repeatedStrings("aba",10);
        
    }
}