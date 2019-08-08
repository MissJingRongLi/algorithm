/**
 * 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：

二叉树的根是数组中的最大元素。
左子树是通过数组中最大值左边部分构造出的最大二叉树。
右子树是通过数组中最大值右边部分构造出的最大二叉树。
通过给定的数组构建最大二叉树，并且输出这个树的根节点。
-----------
树的递归问题，采用三部曲
 */
function TreeNode(val) { //二叉树节点类
	this.val = val;
	this.left =null;
	this.right = null
   }
function buildTree(arr, start, end){
	if(start > end){
		return null
	}
	var maxIndex = findMax(arr,start, end)
	// 当前数组中的最大元素为 根节点
	var root = new TreeNode(arr[maxIndex])
	root.left = buildTree(arr, start, maxIndex-1)
	root.right = buildTree(arr, maxIndex+1, end)
	return root
}
function findMax(array, left, right){
	// 查找数组中最大元素的下标
	var maxIndex = left
	var maxValue = array[left]
	for(var i = left; i <= right; i++){
		if(maxValue < array[i]){
			maxIndex = i
			maxValue = array[i]
		}
	}
	return maxIndex
}
var arr = [3,2,1,6,0,5]
// console.log(findMax(arr, 1, 2))
console.log(buildTree(arr, 0, arr.length-1))