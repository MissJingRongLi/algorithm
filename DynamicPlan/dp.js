/*
积木城堡
用给定的物品去装指定的包，每个包都装一样多，并且尽可能的多
*/
var max = (a1,a2)=>{
	return  a1>a2 ? a1 : a2
}
function dp(n, w, v){
	// 排完序后可以获得最大和最小的装箱方案
	w = w.sort((x, y) => {
		return x -y
	})
	console.log(w)
	var dp = []
	for(var i = 0; i < n; i++){
		dp[i] = []
		dp[i][0] = 0 //没有容量装就是0
	}
	// 考虑第0个装不装
	for(var i = 0; i <= v; i++){
		if(i < w[0]){
			// 第0个物品装不了
			dp[0][i] = 0
		}else{
			dp[0][i] = w[0]
		}
	}
	// 考虑接下来的物品装不装
	for(var i = 1; i < n; i++){
		for(var j = 0; j <= v; j++){
			if(j < w[i]){
				// 装不了
				dp[i][j] = dp[i-1][j]
			}else{
				dp[i][j] = max(dp[i-1][j-w[i]]+w[i], dp[i-1][j])
			}
		}
	}
	console.log(dp)
	// 从后往前看第几个要装
	let tot = v
	for(var i = n-1; i-1 >= 0; i--){
		if(dp[i][tot] > dp[i-1][tot]){
			// 可以装
			console.log("第"+i+"个箱子要装")
			tot = tot - w[i]
		}else{
			console.log("第"+i+"个箱子不装")
		}
	}
	if(dp[0][tot] > 0){
		console.log("第0个箱子要装")
	}else{
		console.log("第0个箱子不装")
	}
	console.log(tot)
}

var w = [1,7,1,5,6,2,3,3]
var v = 10
var n = 8
// dp(n, w, v)

/**
 * 采药
 * 给定时间，每株药有自己的价值和采摘时间，求如何采到价值最大的
 */
function caiyao(M, A, T, V){
	var dp = []
	//对于每一株植物，不采价值就为0
	for(var i = 0; i < M; i++){
		dp[i] = []
		dp[i][0] = 0
	}
	//判断第0棵采不采
	for(var i = 1; i <= A; i++){
		if(i < T[0]){
			dp[0][i] = 0
		}else{
			dp[0][i] = V[0]
		}
	}
	//判断之后每一颗采不采
	for(var i = 1; i < M; i++){
		for(var j = 1; j <= A; j++){
			if(j < T[i]){
				dp[i][j] = dp[i-1][j]
			}else{
				if(isNaN(dp[i-1][j - T[i-1]])){
					dp[i][j] = max(V[i], dp[i-1][j])
				}else{
					dp[i][j] = max(dp[i-1][j - T[i]]+V[i], dp[i-1][j])
				}
			}
		}
	}
	console.log(dp)
	// console.log(max(V[1], dp[0][70]))
}
var M = 3 //草药数目
var A = 70 //总时间
var T= [71, 69, 1] //每一个的时间
var V = [100, 1, 2] //每一个的价值
caiyao(M, A, T, V)