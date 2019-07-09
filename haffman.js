//哈夫曼树
// 结点数据结构定义
function TreeNode(arr) {
	this.weight = arr[0]
	this.val = arr[1]
	this.lChild = null
	this.rChild = null
	this.parent = null
	this.flag = false
}
//找到最小的两个节点
function selectNode(arr) {
	// 按权值大小先排序
	arr.sort((x,y)=>{return x.weight - y.weight})
	var mins = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i].parent === null){
			mins.push(arr[i])
		}
		if(mins.length === 2){
			break
		}
	}
	return mins
}

function creatTree(arr) {
	// treeList即为原始森林
	var treeList = []
	for (let i = 0; i < arr.length; i++) {
		treeList.push(new TreeNode(arr[i]))
	}
	var haffTree = []
	// 创建新树
	for (let k = 0; k < arr.length - 1; k++) {
		var mins = selectNode(treeList)
		var c1 = mins[0]
		var c2 = mins[1]
		var newNode = new TreeNode([c1.weight + c2.weight,null])
		newNode.lChild = c1
		newNode.rChild = c2
		c1.parent = newNode
		c2.parent = newNode
		// 向哈夫曼树中添加结点，不能重复
		if(!c1.flag) {
			haffTree.push(c1)
			c1.flag = true
		}
		if(!c2.flag) {
			haffTree.push(c2)
			c2.flag = true
		}
		haffTree.push(newNode)
		newNode.flag = true
		treeList.push(newNode)
	}
	return haffTree
}

function haffCode(str){
	// 使用对象的键值对的存储格式来判断
	var json = {}
	var arrStr = []
	var arr = []
	for (var i = 0, l = str.length; i < l; i++) {
		json[str[i]] = (json[str[i]] + 1) || 1;
	}
	for (key in json){
		arrStr = []
		arrStr[0] = parseInt(json[key])
		arrStr[1] = key
		arr.push(arrStr)
	}
	var haffTree = creatTree(arr)
	str = str.split('')
	var code = []
	var temp
	for(var i = 0; i < str.length; i++){
		var strCode =[]
		for( var j = 0; j < haffTree.length; j++){
			if(haffTree[j].val === str[i]){
				temp = haffTree[j]
				break
			}
		}
		while(temp.parent){
			if(temp.parent && temp.parent.lChild == temp){
				strCode.unshift(0)
			}
			if(temp.parent && temp.parent.rChild == temp){
				strCode.unshift(1)
			}
			temp = temp.parent
			console.log(strCode)
		}
		code = code.concat(strCode)
	}
	return code
}
// var arr = [new TreeNode(0, 'a'),new TreeNode(1, 'b'),new TreeNode(2, 'c'),new TreeNode(3, 'd')]
// console.log(creatTree([[4,'a'],[2,'b'],[1,'c'],[1,'d']]))
// console.log(arr)
// console.log(new TreeNode(1, 'a'))
// creatTree([[1,'a'],[2,'b'],[3,'c'],[4, 'd'],[5, 'e']])
console.log(haffCode('MBCEMAMCBA'))
