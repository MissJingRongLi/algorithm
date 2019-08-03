/**
 * 小偷发现了一个新的可行窃的地区。
 * 这个地区只有一个入口，我们称之为“根”。
 *  除了“根”之外，每栋房子有且只有一个“父“房子与之相连。
 * 小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 *  如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
 * 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
 * --------------
 * 二叉树 不能直接相邻的节点的总和的最大值
 */
// 声明结点类
function TreeNode(element){
	this.val = element
	this.left = null
	this.right = null
}
function rob(node){
	if(node === null){
		return 
	}
	robNode(node)
	return node.val
}
function robNode(node){
	// 采用后序遍历
	if(node.left){
		robNode(node.left)
	}
	if(node.right){
		robNode(node.right)
	}
	var res1 = 0
	var res2 = node.val
	if(node.left){
		// 如果当前结点左子树有值
		res1 += node.left.val
		if(node.left.left){
			// 如果左子树的左子树也有值，抢完当前结点可以去抢该结点
			res2 += node.left.left.val
		}
		if(node.left.right){
			// 左子树的右子树也有值，也可以抢
			res2 += node.left.right
		}
	}
	if(node.right){
		//如果当前结点的右子树有值
		res1 += node.right.val  //可以再加上右子树的值
		if(node.right.left){
			// 如果右子树的左子树也有值，抢完当前结点可以去抢该结点
			res2 += node.right.left.val
		}
		if(node.right.right){
			// 右子树的右子树也有值，也可以抢
			res2 += node.right.right
		}
	}
	// 更新当前结点的值
	root.val = Math.max(res1, res2)
}