/**
 * 给出两个 非空 的链表用来表示两个非负的整数。
 * 其中，它们各自的位数是按照 逆序 的方式存储的，
 * 并且它们的每个节点只能存储 一位 数字。
 * 我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 */
function ListNode(value){
	//链表结点类
	this.value = value
	this.next = null
}
function List(){
	this.head = null
	this.length = 0
}
List.prototype.insert = function(value){
	var node = new ListNode(value)
	if(this.head === null){
		this.head = node
	}else{
		var current = this.head
		while(current.next){
			current = current.next
		}
		current.next = node
	}
	this.length++
}
var list1 = new List()
list1.insert(2)
list1.insert(4)
list1.insert(3)
var list2 = new List()
list2.insert(5)
list2.insert(6)
list2.insert(4)
function add(aList, bList){
	var aCurrent = aList.head
	var bCurrent = bList.head
	var sumList = new List()
	var sum = 0
	while(aCurrent&& bCurrent){
		sum = aCurrent.value + bCurrent.value
		if(sum < 10){
			sumList.insert(sum)
		}else{
			sumList.insert(sum % 10)
			if(aCurrent.next){
				aCurrent.next.value + 1
			}else{
				bCurrent.next.value + 1
			}
		}
		aCurrent = aCurrent.next
		bCurrent = bCurrent.next
	}
	while(aCurrent){
		sumList.insert(aCurrent.value)
		aCurrent = aCurrent.next
	}
	while(bCurrent){
		sumList.insert(bCurrent.value)
		bCurrent = bCurrent.next
	}
	return sumList
}
console.log(add(list1, list2))