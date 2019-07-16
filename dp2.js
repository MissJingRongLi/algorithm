/**
 * 钱的种类有V个
 * N是要构造的钱的总数
 * M这个数组里面钱的具体种类
 * 假设钱有无限多
 */

 function getMoney(V, N, M){
	 var dp = new Array(N+1).fill(0) //用来存储 前i种硬币组成N的种数
	 for(var i = 0; i <= N; i++){
		 dp[i] = new Array(N+1).fill(0)
	 }
	 for(var i = 0; i <= N; i++){
		for(var j = 1; j <= V; j++){
			if(i % M[j] == 0 && i > 0){
				//  如果组成的钱数能够被第一种硬币组合出来
				 dp[j][i] = 1
			 }
		}
	 }
	
	//  循环每个硬币
	for(var i = 2; i <= V; i++){
		// 循环每个钱数
		for(var j = 1; j <= N; j++){
			// 循环至当前硬币的最大取值数
			for(var k = 0; k <= j/M[i]; k++){
				// j - k*M[i-1]  这个钱是当前硬币必须提供的
					dp[i][j] += dp[i-1][j - k*M[i]]
					// if((j - k*M[i])== 0){
					// 	// 说明当前纸币可以单独组成
					// 	dp[i][j] += 1
					// }
			}
		}
	}
	console.log(dp)
 }
 var V = 3
 var N = 10
 var M = [0,1,2,5]
 getMoney(V, N, M)