/**
 * 题目：在1，2，3，4，5 五个数中，我们随机选取 3个数。问有多少种取法？并且把每种取出数
 * 的方法列举出来。
 */
var  num=[1,2,3,4,5]  //我们操作的数组
	var stage=[]   //记录状态的数组
	var res = []
function dfs(step, n){
	var flag = true
	if(step === n){ //遍历的个数等于n, 结束循环
		console.log(stage.join(''))
		res.push(stage.join(''))
		return 
	}
	for(var i = 0; i < num.length; i++){
		for(var j = 0; j < stage.length; j++){
			if(num[i]===stage[j]){ //不考虑重复问题，stage里面不能有当前的num[i]
				flag = false
				break
			}
		}
		if(flag){
			// 没有冲突的情况，可以将num[i]放进去进行遍历循环
			stage.push(num[i]) 
			dfs(step+1, n)
			// 释放上一个num[i], 继续下一次循环
			stage.pop(num[i])
		}
		flag = true
	}
}
dfs(0,2)