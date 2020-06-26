package big_O_notation;

public class Exercise {

    // O(1)
    static void printFirstItem(int[] items) {
        System.out.println(items[0]);
    }

    // O(n)
    static void printAllItems(int[] items) {
        for (int item : items) {
            System.out.println(item);
        }
    }

    // O(n^2)
    static void printAllPossibleOrderedPairs(int[] items) {
        for (int firstItem : items) {
            for (int secondItem : items) {
                System.out.println(firstItem + ", " + secondItem); // nested loops
            }
        }
    }


    public static void main(String[] args){
    }




}