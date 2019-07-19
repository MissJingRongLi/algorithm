/**
 * 数塔问题
 * 从最高点往下，可以向正下或右下的位置移动
 * 当前数字和累加
 * 输出最大值
 * N --- 层数
 * num --- 每一个里面的值,是一个二维数组
 */
var max = (a1,a2)=>{
	return  a1>a2 ? a1 : a2
}
function shuta(N, dp){
	// 倒着遍历
	for(var i = N - 2; i >= 0; i--){
		for(var j = 0; j <= N-2; j++){
			dp[i][j] = max(dp[i+1][j], dp[i+1][j+1]) + dp[i][j]
		}
	}
	console.log(dp[0][0]) //输出顶端数据
}
var N = 5
var dp = []
	for(var i = 0; i < N; i++){
		dp[i] = []
		for(var j =0; j < N; j++){
			dp[i][j] = 0
		}
	}
dp[0][0] = 7
dp[1][0] = 3
dp[1][1] = 8
dp[2][0] = 8
dp[2][1] = 1
dp[3][0] = 2
dp[3][1] = 7
dp[3][2] = 4
dp[3][3] = 4
dp[4][0] = 4
dp[4][1] = 5
dp[4][2] = 2
dp[4][3] = 6
dp[4][4] = 5
shuta(N, dp)