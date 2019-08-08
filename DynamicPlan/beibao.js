// 挖矿问题
// 有 x 个矿，pn[i]:每个矿需要的挖矿人数， gn[i]:每个矿的价值
// tot：总人数
// 求解怎么挖才能价值最大
function Max(a1,a2){
	if(a1 > a2){
		return a1
	}
	return a2
}
function wakuang(x, pn, gn, tot){
	var value = []
	for(var i = 0; i < x; i++){
		value[i] = []
		value[i][0] = 0 //没有人挖，价值就是0
	}
	// 分析第0座矿
	for(var j = 0; j <= tot; j++){
		if(j < pn[0]){
			// 人手不够
			value[0][j] = 0
		}else{
			value[0][j] = gn[0]
		}
	}

	for(var k = 1; k < x; k++){
		// 分析每一个矿的情况
		for(var m = 0; m <= tot; m++){
			if(m < pn[k]){
				// 人手不够，只能去挖前面的矿
				// 前面能挖多少，总共就是多少
				value[k][m] = value[k-1][m]
			}else{
				// 判断人够的时候挖还是不挖
				value[k][m] = Max(value[k-1][m - pn[k]]+gn[k], value[k-1][m])
			}
		}
	}

	var wa = []
	j = tot
	for(var i = x-1; i-1 >= 0; i--){
		if(value[i][j] > value[i-1][j]){//当前这个价值比前面的价值高
			wa[i] = 1
			j = j - pn[i]
		}else{
			wa[i] = 0
		}
	}
	if(value[0][j] > 0){
		wa[0] = 1
	}
	return wa
	// return value
}

var x = 5
var pn = [2,3,1,4,2]
var gn = [5,4,3,7,6]
var tot = 10

// console.log(wakuang(x, pn, gn, tot))

// 砝码称重问题
// 设有1g、2g、3g、5g、10g、20g的砝码各若干枚（其质量<=1000g），
// 求出用他们能称出的质量的种类数(不包括质量为0的情况)

function getWeight(w, arr, Allweight){
	// w里面放6个砝码类型
	// arr这个数组各个砝码的个数
	// sum是砝码的总质量
	// 设置dp存放每个质量能否被称重 
	var dp = []
	// 先定义第0种砝码能称的重量
	for(var i = 0; i <= arr[0]; i++){
		dp[i*w[0]] = 1
	}
	var currentWeight = 0
	var newWeight = 0
	var tempWeight = arr[0]*w[0]

	// 从第一种砝码开始
	for(var i = 1; i < 6; i++){
		for(var j = 1; j <= arr[i]; j++){
			// 循环每一种砝码
			for(currentWeight = 0; currentWeight <= tempWeight; currentWeight++){
				newWeight = currentWeight + w[i]*j
				if(newWeight > Allweight){
					// 避免累加，忽略个数要求
					break
				}else{
					if(dp[currentWeight] == 1 && dp[newWeight] != 1){
						dp[newWeight] = 1
					}
				}
			}
		}
		tempWeight = tempWeight + w[i]*j //更新每一次增加砝码后的最大重量
	}

	return dp
}
var w = [1,2,3,5,10,20]
var arr = [1,1,0,0,1,0]
var Allweight = 13
console.log(getWeight(w,arr, Allweight));