/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sll_lab;

/**
 *
 * @author chewin
 */
public class SinglyLinkedList {
    SLLNode head,tail;

    public SinglyLinkedList() {
        head = tail = null;
    }
    
    public void addToTail(int newValue){
        //special case is when the list has no node(empty list)
        if(head == null){
            head = tail = new SLLNode(newValue,null);
        }else{
            tail.next = new SLLNode(newValue, null);
           //tail.next receives the address of the new node
           tail = tail.next; //tail pointer points to the next node
                               //tail stross the address of the new node
        }       
    }
    public boolean isEmpty(){
        return head == null;
    }
    public void addToHead(int newValue){
        //special case is when the list is empty
        if(isEmpty()){
            head = tail = new SLLNode (newValue,head);
        }else{
            head = new SLLNode(newValue,head);
        //1) create new node
        //2) put value of newValue into the new node
        //3) make he next of the new node pointing to the original head
        //4)head will point to the new node [head = ...]
        }        
    }
    public int deleteFromhead(){
        int firstInfo = head.info;
        //special case
            //list has only 1 node
            //list has no node
            if(head == tail){
                head = tail = null;
            }else{
                head = head.next;
            }
        return firstInfo;
    }
    public void printAllNodes(){
        for (SLLNode temp = head; temp != null; temp=temp.next) {
            System.out.print(temp.info + "=>");
        }
        System.out.println(" end at null");
    }
    public int deleteFromTail(){
        if(head == null){
            return -1;
        }else if(head == tail){ //1 node or 0 node
            int lastInfo = tail.info;
            head = tail = null;
            return lastInfo;
        }else{
            int lastInfo = tail.info;
            SLLNode temp;
            for (temp = head; temp.next !=tail; temp=temp.next);
            //loop of searching
            //nothing to do in this loop
            //temp will stop at the (n-1) th node [one before last]
            temp.next = null;
            tail = temp;
            return lastInfo;
        }
                   
    }
//    public int deleteIthNode(int i){
//    }
//    public void insertNodeAtIthInMiddle(int i,int newValue)
}
