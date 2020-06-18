package repeated_strings;

public class Exercise{

    static void repeatedStrings(String string, int number){
        int stringLength = string.length();
        int countOfAs = 0; // can use this for the end
        char[] stringArray = string.toCharArray(); // can use this to loop over string
        for(char letter : stringArray){
            if(letter == 'a'){
                countOfAs++;
            }
        }
        int wholeRepeats = number / stringLength;
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

// char[] chrIn = s.toCharArray(); 
// int i = 0; 
// long max = 0; 
// long quo = n / chrIn.length; 
// long rem = n % chrIn.length; 
// while (i < chrIn.length) { 
//     if (chrIn[i] == 'a') { 
//         max++; 
//     } 
//     i++; 
// } 
// i = 0; 
// max = max * quo; 
// while (i < rem) {
//      if (chrIn[i] == 'a') { 
//          max++; 
//         } 
//         i++;

//     }
//     return max;