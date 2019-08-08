/**
 * 合唱队形安排
 * 合唱队人数自然很多，仅现有的同学就可能会有 3000 个。
 * 老师希望将合唱队调整得符合要求，但想 要调整尽量少，减少麻烦。
 * 以下任一动作认为是一次调整： 
 * 	1、在队伍左或右边加一个人（衣服颜色依要求而定）；
 *  2、在队伍中任两个人中间插入一个人（衣服颜色依要求而定）；
 *  3、剔掉一个人；
 *  4、让一个人换衣服颜色；
 * 老师想知道就目前的队形最少的调整次数是多少，
 * 即----求最少经过几步操作可以使原数列变为回文？
 */
var min = (a1,a2)=>{
	return  a1>a2 ? a2 : a1
}
function anPai(color){
// color这个数组用来存放不同编号同学的衣服颜色
	var dp = new Array(color.length - 1).fill(10000) //一个二维数组，存放从 i 到 j 同学这个区间内的调整次数
	for(var i = 1; i < color.length; i++){
		dp[i] = []
		// 针对JS来说，不强制赋值数组初始化就会被定义为 undefined 
		// 对于之后的比较来说就会产生隐式类型转换，影响判断
		for(var j = 0; j < color.length; j++){
			dp[i][j] = 1000
		}
		dp[i][i] = 0 //本身不用调整
		if(i !== 1){
			if(color[i] === color[i-1]){
				dp[i-1][i] = 0 //衣服颜色一样，且站在一起，也不用调整
			}else{
				dp[i-1][i] = 1 //衣服颜色不一样，站在一起，则需要调整的次数为 1 
			}
		}
	}
	for(var L = 2; L < color.length; L++){
		// 循环区间长度
		for(var i = 1; i < color.length; i++){
			var j = i + L
			if(j >= color.length){
				break
			}
			if(color[i] === color[j]){
				// 站在两边的同学衣服颜色一样 就看在这个区间里面的同学的调整情况
				dp[i][j] = min(dp[i][j], dp[i+1][j-1])
			}else{
				// 对 i j 两名同学进行衣服处理
				dp[i][j] = min(dp[i][j], dp[i+1][j-1]+1)
				// 在 j 右边加一个与 i 颜色一样的人 或者 把 i 删掉
				dp[i][j] = min(dp[i][j], dp[i+1][j]+1)
				// 在 i 左边加一个与 j 颜色一样的人 或者 把 j 删掉
				dp[i][j] = min(dp[i][j], dp[i][j-1]+1)
			}
		}
	}
	console.log(dp[1][color.length - 1])
}
var color = [0,1,2,2,4,3]
anPai(color)