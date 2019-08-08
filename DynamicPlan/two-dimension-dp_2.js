/**
 * 找GF问题 每一个MM 需要花费 rmb[i], 时间 time[i], 人品值 rp[i]
 * 给定总钱数为 M，总人品值为 R 找到更多的MM并且时间花费最小, MM 总数为 N
 */
var min = (a1,a2)=>{
	return  a1>a2 ? a2 : a1
}
function findMM(M, R, N, rmb, rp, time){
	var fp = [] //存放找到的MM的个数
	var dp = [] //存放所需要的总时间数
	for(var i = 0; i <= M; i++){
		fp[i] = []
		dp[i] = []
		for(var j =0 ; j <= R; j++){
			fp[i][j] = 0
			dp[i][j] = 0
		}
	}
	for(var i = 1; i <= N; i++){
		for(var j = M; j >= rmb[i]; j--){ //循环金钱在能负担的起的范围
			for(var k = R; k >= rp[i]; k--){
				if(fp[j][k] < (fp[j - rmb[i]][k - rp[i]]+1)){ //能够找到更多的MM
					fp[j][k] = fp[j - rmb[i]][k - rp[i]]+1
					dp[j][k] = dp[j - rmb[i]][k - rp[i]] + time[i]
				}else if(fp[j][k] === (fp[j - rmb[i]][k - rp[i]]+1)){ //找到的MM数量一样
						dp[j][k] = min(dp[j][k], dp[j - rmb[i]][k - rp[i]] + time[i])
				}
			}
		}
	}
	// console.log(fp) //fp[i][j] 即为用金钱 i 和 人品 j 能找到的最大MM数
	// console.log(dp) //dp[i][j] 即为用金钱 i 和 人品 j 能找到的最大MM数所花费的时间，
	// 因此输出 dp[M][R] 即为所花费的最短时间
	console.log(dp[M][R])
}

var M = 5
var R = 5
var N = 4
var rmb = [0, 1, 2, 2, 2]
var rp = [0, 2, 1, 2, 2]
var time = [0, 5, 6, 2, 3]
findMM(M, R, N, rmb, rp, time)