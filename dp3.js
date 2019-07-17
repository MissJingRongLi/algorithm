/**
 * 找牌问题
 * 有N张牌，每张牌的重量固定W
 * 给出现在的总重量T
 * 求出丢失了哪些牌
 */

var max = (a1,a2)=>{
	return  a1>a2 ? a1 : a2
}
function zhaopai(N,W,T){
	var allWeight = 0
	for(var i = 0; i < N; i++){
		allWeight += W[i]
	}
	var searchWeight = allWeight - T
	//转化为求解如何将searchWeight的包装满的问题
	var dp = new Array(searchWeight+1).fill(0)
	dp[0] = 1 //dp[i] 表示重量为 i 的方案数
	var path = new Array(searchWeight+1).fill(0) //path[j] 存的是质量为 j 需要的牌的最大序号
	for(var i = 0; i < N; i++){
		//从小到大循环每一张牌
		for(var j = searchWeight; j >= W[i]; j--){
			dp[j] = dp[j] + dp[j-W[i]] //如果dp[j - W[i]] 能够被装下，那么dp[j]就能被装下
			// if(path[j] === 0 && dp[j -W[i]] !== 0){ path[j] === 0 这个条件判断其实并不是很必要
			if(dp[j -W[i]] !== 0){
				path[j] = i
			}
		}
	}
	if(dp[searchWeight] > 1){
		// 表明不止一种方案
		console.log('无法判断')
	}else if(dp[searchWeight] === 0){
		console.log('无解')
	}else{
		//输出方案数
	for(var k = searchWeight; k >= 0;){
		if(path[[k]]!==0){
			console.log(path[k])
			k = k-W[path[k]]
		}else{
			k--
		}
	}
	}
	// console.log(path[280])
}
var N = 4
var T = 310
var W = [110, 140, 170, 200]
zhaopai(N, W, T)