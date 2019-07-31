/**
 * 有K种颜色的小球，每种的数量分别是num[i]
 * 要从中选N个小球出来，有多少种选择方案  小球除颜色外没有别的差别
 * 
 * ----遍历问题
 */
var K = 3
var N = 3
var num = [2,2,3]
var ans = new Array(15).fill(0)
function xuanQiu(i, n){
	if(n === 0){ //总数已经合适
		console.log(ans.slice(0,K))
		return
	}else if( n < 0 || K === i){
		return
	}
	for(var j = 0; j <= num[i]; j++){
		ans[i] = j
		// j作为循环的判断条件，说明每一次的选择个数
		xuanQiu(i+1, n-j)
	}
	ans[i] = 0
}
xuanQiu(K, N)