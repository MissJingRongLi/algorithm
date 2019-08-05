/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树
 * ------------------
 * 前序 ： 中->左->右
 * 中序 ： 左->中->右
 * 因此可以由根节点区分左右两棵子树 使用递归的方式构造子树的二叉树
 */
function TreeNode(val) { //二叉树节点类
	 this.val = val;
	 this.left =null;
	 this.right = null
	}
function buildTree(preOrder, start1, end1, inOrder, start2, end2){
	if(start1 > end1 || start2 > end2){
		return
	}
	var root = preOrder[start1] //前序遍历的第一个是 根节点
	var mid = 0 //以mid来划分左子树、根节点、右子树
	for(var i = start2; i < end2; i++){
		if(inOrder[i] === root){
			mid = i
			break
		}
	}
	var node = new TreeNode(root)
	// 找到左子树，截取两个数组中与左子树相关的位置
	node.left = buildTree(preOrder, start1+1, start1+mid-start2, inOrder, start2, mid-1)
	// 找到右子树，截取两个数组中与右子树相关的位置
	node.right = buildTree(preOrder, start1+mid-start2+1,end1, inOrder, mid+1, end2)
	return node
}
var preOrder = [3,9,20,15,7]
var inOrder = [9,3,15,20,7]
console.log(buildTree(preOrder, 0, preOrder.length-1, inOrder, 0, inOrder.length-1))