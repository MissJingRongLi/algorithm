/**
 * 石子合并问题
 * 有一行 N 堆石子， 每一堆的个数是 num[i], 现在要将石子合并为一堆
 * 每次可以将相邻的两堆进行合并
 * 每一次合并的花费是 这两堆石子的个数和
 * 求最大和最小的 总共花费
 */
function Sum(i, j, arr){
	// 求数组指定区间的和
	var sum = 0
	for(;i<=j;i++){
		sum += arr[i]
	}
	return sum
}
var min = (a1,a2)=>{
	return  a1>a2 ? a2 : a1
}
function heBin(N,num){
	//一堆石子，但是起点未定，因此知道这是个 环， 环上的dp不好做，转换为链
	// 在链上求到的最值符合要求
	num = num.concat(num) //转换为 链
	var dp = []
	for(var i = 0; i <= 2*N-1; i++){
		dp[i] = []
		for(var j = 0; j <= 2*N-1; j++){
			dp[i][j] = 1000
		}
	}
	for(var i = 0; i <= 2*N-1; i++){
		// 区间为0
		dp[i][i] = 0 // dp[i][j] 表示 从i合并到 j 所需要的总花费
	}
	// 难点：选定循环的条件
	for(var len = 2; len <= N; len++){ // 每一次合并的长度区间
		for(var i = 0; i<=2*N-len; i++){//左端点
			var j = i+len-1 //右端点
			for(var k = i; k < j; k++){ // 以 k 值来作为区间的划分
				dp[i][j] = min(dp[i][k]+dp[k+1][j]+Sum(i,j, num), dp[i][j])
			}

		}
	}
	var Min = 1000
	// 输出最小值
	for(var i = 0; i < N; i++){
		Min = min(dp[i][i+N-1], Min)
	}
	console.log(Min)
}
var N = 4
var num = [4,5,9,4]
heBin(N, num)