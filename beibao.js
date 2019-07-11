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

console.log(wakuang(x, pn, gn, tot))