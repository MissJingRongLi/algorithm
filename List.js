class ListNode{
	constructor(value){
		this.value = value || null
		this.next = null
	}
}
class List{
	constructor(){
		this.head = null
		this.length = 0 //链表长度
	}
	insert(value){
		var node = new ListNode(value)
		if(this.head === null){ //链表头结点为空
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
	show(index){
		var current = this.head
		var _index = 1
		while(current){
			if(_index === index){
				return current
			}else{
				current = current.next
			}
			_index++
		}
	}
}
//合并两个有序列表
function merge(list1, list2){
	var oList = new List()
	var pL1 = list1.head
	var pL2 = list2.head
	while(pL1 && pL2 ){
		if(pL1.value > pL2.value){
			oList.insert(pL2.value)
			pL2 = pL2.next
			continue
		}else{
			oList.insert(pL1.value)
			pL1 = pL1.next
			continue
		}
	}
	if(pL1){
		while(pL1){
			oList.insert(pL1.value)
			pL1 = pL1.next
		}
	}
	if(pL2){
		while(pL2){
			oList.insert(pL2.value)
			pL2 = pL2.next
		}
	}
	return oList
}
// 查找单链表中的的倒数第index个节点
function find(list, index){
	var aPoniter = list.head
	var bPoniter = list.head
	var _index = 0
	while(_index !== index){
		aPoniter = aPoniter.next
		_index++
	}
	while(aPoniter){
		aPoniter = aPoniter.next
		bPoniter = bPoniter.next
	}
	return bPoniter
}
var myList = new List()
myList.insert(1)
myList.insert(2)
myList.insert(3)
myList.insert(4)
myList.insert(5)
myList.insert(6)
myList.insert(7)
console.log(find(myList, 2))