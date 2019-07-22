// 最长公共子序列（LCS）
/**
 * 在两个字符串中，有些字符会一样，可以形成的子序列也有可能相等，
 * 因此，长度最长的相等子序列便是两者间的最长公共字序列，
 */
var max = (a1,a2)=>{
	return  a1>a2 ? a1 : a2
}
function LCS(S1, S2){
	var dp = new Array(S1.length).fill(0)
	var sum = []
	// 判断字符串S1首个字符与S2的情况
	for(var i = 0; i <S1.length; i++){
		dp[i] = new Array(S2.length).fill(0)
		if(S1[i] === S2[0]){
			// 如果当前字符与S2首字符相等
			dp[i][0] = 1
		}else{
			// 不相等，分两种情况，看是否需要叠加
			if(i === 0){
				dp[0][0] = 0
			}else{
				dp[i][0] = dp[i-1][0]
			}
		}
	}
	// 处理掉首字符后可以解决数组越界的问题
	for(var i = 1; i < S1.length; i++){
		for(var j = 1; j < S2.length; j++){
			if(S1[i] === S2[j]){
				// 相等就直接在原基础上 +1
				dp[i][j] = dp[i-1][j-1] +1
			}else{
				// 不相等就等于前面的最大值
				dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			}
		}
	}
	// 倒推输出LCS
	var s = []
	for(var i = S1.length-1, j = S2.length-1; i > 0, j > 0;){
		if(dp[i][j] === dp[i-1][j]){
			// 上边
			i--
		}else{
			if(dp[i][j] === dp[i][j-1]){
				// 左边
				j--
			}else{
				if(dp[i][j] === dp[i-1][j-1] + 1){
					// 左上面,当前肯定相等
					s.push(S1[i])
					i--,j--
					// 存在一个问题就是对于是否是结束判断不全
					if(dp[i][j] !== 0){
						// 起始位置还有字符
						if(i === 0){
							s.push(S1[i])
						}else if(j === 0){
							s.push(S2[j])
						}
					}
				}
			}
		}
	}
	console.log(s.reverse())
	console.log(dp)
}
// s1={1,3,4,5,6,7,7,8}
// s2={3,5,7,4,8,6,7,8,2}
S1=[1,3,4,5,6,7,7,8]
S2=[3,5,7,4,8,9,7,8,2]
LCS(S1, S2)