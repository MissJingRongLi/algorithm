//二叉查找树
class TreeNode{
	constructor(value){
		this.value = value
		this.left = null
		this.right = null
	}
}
class BST{
	constructor(){
		this.root = null
	}
	insert(value){
		let newNode = new TreeNode(value)
		const insertNode = (node, newNode) => {
			if(node.value > newNode.value){
				// 向左边节点插值 比根节点小
				if(node.left === null){
					node.left = newNode
				}else{
					// 在左子树上继续进行判断
					insertNode(node.left, newNode)
				}
			}else{
				if(node.right === null){
					node.right = newNode
				}else{
					insertNode(node.right, newNode)
				}
			}
		}
		if(this.root === null){
			this.root = newNode
		}else{
			insertNode(this.root, newNode)
		}
	}
	findMin(){
		let current = this.root
		while(current.left){
			current = current.left
		}
		return current.value
	}
}
const tree = new BST()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

console.log(tree.findMin())

