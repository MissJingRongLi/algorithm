/**
 * 挖地雷问题
 * 有N个地窖，每个里面有num[i]个地雷，
 * 不同地方会联通，tong[i][j] = 1
 * 从一个地方可以按通路到达其他的地方，
 * 求 能挖到的最多地雷数
 * 
 * 有向无环图（AOV）
 */
function wadilei(N, num, tong){
	var dp = [] //存放从第 i 个点出发能够挖到的最多的地雷数
	var max = 0
	var c = [] //存放从第 i 点出发能够获得的最多地雷数的前一点位置
	for(var i =N - 1; i >= 0; i--){
		dp[i] = []
		dp[i] = num[i] //一开始肯定为当前地窖的地雷数
		max = 0
		for(var j = i + 1; j < N; j++){
			//去看它后面能够到达的地窖的情况
			if(tong[i][j] === 1 && dp[j] > max){
				max = dp[j]
				c[i] = j //从i出发到j可以拿到最多的地雷数
			}
		}
		dp[i] += max
	}
	console.log(dp) 
	for(var i = 0; i < N;){
		//输出挖地雷的路径，i的起始值应该dp中最大值对应的i
		console.log(c[i])
		i = c[i] 
	}
}

var N = 5
var num = [10, 40, 4, 7, 6]
var tong = new Array(N-1).fill(0)
for(var k = 0; k < N-1; k++){
	tong[k] = new Array(N-1).fill(0)
}
tong[0][1] = 1
tong[0][2] = 1
tong[0][3] = 1
tong[2][3] = 1
tong[2][4] = 1
tong[3][4] = 1

// console.log(tong)
wadilei(N, num, tong)
