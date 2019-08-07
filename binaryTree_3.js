/**
 * 给定一个二叉树和一个目标和，
 * 判断该树中是否存在根节点到叶子节点的路径，
 * 使得这条路径上所有节点值相加等于目标和。
 * --------------
 * 考虑递归遍历求解
 */
function TreeNode(val) { //二叉树节点类
	this.val = val;
	this.left =null;
	this.right = null
   }
function getSum(node, sum){
	if(!node){
		return
	}
	if(node.left === null && node.right === null){
		// 当前结点为叶节点
		return node.val - sum === 0
	}
	// 递归，看哪边符合条件
	return getSum(node.left, sum - node.val) || getSum(node.right, sum - node.val)
}
/**进阶版 --- 找到这些路径
 * --------
 * dfs 回溯
 */
// res存放可以到达的路径
var res = []
function dfs(node, sum, path){
	if(!node){
		return
	}
	if(node.left === null && node.right === null){
		if(node.val === sum){
			// 满足条件就放进去
			res.push(path)
		}
		return 
	}
	dfs(node.left, sum-node.val, path)
	dfs(node.right, sum-node.val, path)
	return res
}