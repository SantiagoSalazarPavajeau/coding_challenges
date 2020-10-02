class Exercise {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode(-1);
        ListNode dummy = result;
        int carry =0, digit = 0;
        while (l1 != null || l2 !=null){
            int val1 = (l1!=null)? l1.val:0;
            int val2 = (l2!=null)? l2.val:0;
            int sum = carry + val1 + val2;
            carry = (sum>=10)? sum/10:0;
            digit = (sum >=10)? sum%10:sum;
            dummy.next = new ListNode(digit);
            dummy = dummy.next;
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        if (carry > 0)
            dummy.next = new ListNode(carry);
        return result.next;
    }
}

// ListNode is not an array but more like a nested object for the next elements