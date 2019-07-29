/**
 * 有K种颜色的小球，每种的数量分别是num[i]
 * 要从中选N个小球出来，有多少种选择方案  小球除颜色外没有别的差别
 * 
 * ----遍历问题
 */
function xuanQiu(K, N, num){
	var res = []
	var m = 0
	res[m] = []
	for(var i = 0; num[i] >= 0; num[i]--){ //每一种小球 依次递减的循环
		var Tot = N
		for(var j = i; j < K; j++){ //依据前一个小球个数的变化，影响后面的选择
			if(num[j] >= Tot && Tot > 0){
				res[m].push(Tot)
				Tot = Tot - num[j]
			}else if(Tot <= 0){
				res[m].push(0)
			}else if(num[j] < Tot && j+1 !== K){
				res[m].push(num[j])
				Tot = Tot - num[j]
			}else if(num[j] < Tot && j+1 === K){
				break
			}
			if(j === K-1){
				m++
				res[m] = []
			}
		}
		if(num[i] === 0){
			i++
		}
	}
	console.log(res)
}
var K = 3
var N = 3
var num = [2,2,3]
xuanQiu(K, N, num)