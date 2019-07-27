/**
 * 看碟问题 有N张碟，每张需要的时间是 time[i], 分数是 score[i]
 * 从中选出M张碟 使得总时间不超过 L， 并且分数最高
 */
var max = (a1, a2) => {
	return a1 > a2 ? a1 : a2
}
function kanDie(N, M, time, score, L) {
	var dp = [] //二维数组 dp[i][j] 在 j 时间内前 i 张能看多少
	var fp = []
	var flag = false //能否完成看完M部片子的情况
	var max = 0 //最大分数
	for (var i = 0; i < N; i++) {
		dp[i] = []
		fp[i] = []
		for (var j = 0; j <= L; j++) { //初始化数组
			dp[i][j] = 0
			fp[i][j] = 0
		}
	}
	for (var i = 0; i <= L; i++) {
		if (i > time[0]) {
			dp[0][i] = 1
			fp[0][i] = score[0]
		}
	}
	for (var i = 1; i < N; i++) {
		var flag2 = false
		for (var j = 1; j <= L; j++) {
			if (j >= time[i]) {
				// 要看
				if (dp[i - 1][j - time[i]] + 1 > dp[i - 1][j]) {
					dp[i][j] = dp[i - 1][j - time[i]] + 1
					if (!flag2) {
						// 分数只累加一次
						fp[i][j] = score[i] + fp[i-1][j]
						flag2 = true
					}else{
						fp[i][j] = fp[i][j-1]
					}
				} else {
					dp[i][j] = dp[i - 1][j]
					fp[i][j] = fp[i - 1][j]
				}
			} else {
				dp[i][j] = dp[i - 1][j]
				fp[i][j] = fp[i - 1][j]
			}
			if (dp[i][j] === M) {
				//可以看的前提下，求最大的分数
				flag = true
				if (fp[i][j] >= max) {
					max = fp[i][j]
				}
			}
		}
	}
	if (!flag) {
		// 不存在可以看M部碟片的情况
		console.log(0)
	} else {
		console.log(max)
	}
}
var N = 3
var M = 2
var L = 10
var time = [11, 1, 9]
var score = [100, 2, 1]
kanDie(N, M, time, score, L)