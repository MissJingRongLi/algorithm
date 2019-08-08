/**
 * 任意给定一个字符串，通过插入若干字符，都可以变成一个回文词。
 * 你的任务是写一个程序，求出将给定字符串变成回文词所需插入的最少字符数。
 * ------------转化--------------------
 * str ----给定的字符串
 * 求出其反串 str1
 * 解法存在问题，对于连续的字符串判断不准确
 * 求出str 与 str1 的公共子序列长度
 */
var max = (a1,a2)=>{
	return  a1>a2 ? a1 : a2
}
function huiWen(str){
	// 转化为数组的形式
	var str1 = str
	str = str.split('')
	str1 = str1.split('').reverse()
	var dp = new Array(str.length).fill(0)
	// dp求最长子序列
	for(var i = 0; i < str.length; i++){
		dp[i] = new Array(str1.length).fill(0)
		if(str[i] === str1[0]){
			dp[i][0] = 1
		}else{
			if(i === 0){
				dp[0][0] = 0
			}else{
				dp[i][0] = dp[i-1][0]
			}
		}
	}
	for(var i = 1; i < str.length; i++){
		for(var j = 1; j< str1.length; j++){
			if(str[i] === str1[j]){
				dp[i][j] = dp[i-1][j-1] + 1
			}else{
				dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			}
		}
	}
	// console.log(dp)
	return str.length - dp[str.length-1][str.length -1]
}
var str = 'aabb'
console.log(huiWen(str))
// huiWen(str)