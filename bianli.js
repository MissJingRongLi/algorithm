function TreeNode(element){
	this.val = element
	this.left = null
	this.right = null
}
var p = new TreeNode(0)
p.left = new TreeNode(1)
p.right = new TreeNode(2)
p.left.left = new TreeNode(3)
p.left.right = new TreeNode(4)
p.right.left = new TreeNode(5)
p.right.right = new TreeNode(6)
//前序遍历
function preParse(pRoot){
	if(pRoot === null){
		return
	}
	console.log(pRoot.val)
	preParse(pRoot.left)
	preParse(pRoot.right)
}
//中序遍历
function middleParse(pRoot){
	if(pRoot === null){
		return
	}
	middleParse(pRoot.left)
	console.log(pRoot.val)
	middleParse(pRoot.right)
}
//后序遍历
function pastParse(pRoot){
	if(pRoot === null){
		return
	}
	pastParse(pRoot.left)
	pastParse(pRoot.right)
	console.log(pRoot.val)
}
//层序遍历 ---借用队列
function cengxuParse(pRoot){
	var queue = []
	queue.push(pRoot)
	var p = pRoot
	while(queue.length){
		// 取出来的节点
		p = queue.shift()
		console.log(p.val)
		// 将其的左右孩子入队
		if(p.left){
			queue.push(p.left)
		}
		if(p.right){
			queue.push(p.right)
		}
	}
}
cengxuParse(p)