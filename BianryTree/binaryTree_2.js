/**
 * 从中序与后序遍历序列构造二叉树
 * --------------------
 * 中序 ： 左->中->右
 * 后序 ： 左->右->中
 * 前序/后序+中序序列可以唯一确定一棵二叉树
 */
function TreeNode(val) { //二叉树节点类
	this.val = val;
	this.left =null;
	this.right = null
   }
function buildTree(inOrder, start1, end1, postOrder, start2, end2){
	if(start1 > end1 || start2 > end2){
		return
	}
	// 后序遍历的最后一个节点是根节点
	var root = new TreeNode(postOrder[end2])
	var mid = 0
	for(var i = 0; i < end1; i++){
		if(inOrder[i] === root){
			//找到中序遍历中根节点的位置
			mid = i
			break
		}
	}
	root.left = buildTree(inOrder, start1, mid-1, postOrder, start2, start2+(mid-start1-1))
	root.right = buildTree(inOrder, mid+1, end1, postOrder, start2+(mid-start1), end2-1)
	return root
}
var inorder = [9,3,15,20,7]
var postorder = [9,15,7,20,3]
buildTree(inorder, 0, inorder.length-1,postorder, 0, postorder.length-1)