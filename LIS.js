//最长上升子序列
// 动态规划解法
function getMax(arr){
	var dp = new Array(arr.length).fill(1) //存放每一个数字的最长子序列长度
	var ans = 0 //存放初始值
	for(var i = 0; i < arr.length; i++){
		ans = dp[i]
		for(var j = 0; j < i; j++){
			// 依次判断前面的元素是否比当前元素小
			if(arr[i] > arr[j] && dp[j] >= ans){
				// 当前面的元素的最长子序列大于当前元素的最长子序列时才添加
				ans = dp[j]+1
			}
		}
		dp[i] = ans
	}
	console.log(dp)
	return Math.max.apply(this,dp)
}

// 时间复杂度:(NlogN)
function bSearch(num, high, arr){
	// 更新b[]这个数组，b[i]里面放的是 长度为i的子序列的最后一个数大小
	var low = 1
	while(low <= high){
		var mid = Math.floor((low+high)/2)
		if(num < arr[mid]){
			high = mid -1
		}else{
			low = mid +1
		}
	}
	return low
}
function getMax2(arr){
	var b = []
	var k = 1
	b[1] = arr[0]
	for(var i = 1; i < arr.length; i++){
		// 判断数据能放在哪里
		if(b[k] <= arr[i]){
			// 比当前的最长子序列的末尾值大，就直接追加
			b[++k] = arr[i]
		}else{
			// 更新子序列的相关信息
			var pos = bSearch(arr[i], k, b)
			b[pos] = arr[i]
		}
	}
	return k
}
function bSearchMin(num, high, arr){
	// 更新b[]这个数组，b[i]里面放的是 长度为i的子序列的最后一个数大小
	var low = 1
	while(low <= high){
		var mid = Math.floor((low+high)/2)
		if(num >= arr[mid]){
			high = mid -1
		}else{
			low = mid +1
		}
	}
	return low
}
function getMin(arr){
	var b = []
	var k = 1
	b[1] = arr[0]
	for(var i = 1; i < arr.length; i++){
		// 判断数据能放在哪里
		if(b[k] > arr[i]){
			// 比当前的最长子序列的末尾值小，就直接追加
			b[++k] = arr[i]
		}else{
			// 更新子序列的相关信息
			var pos = bSearchMin(arr[i], k, b)
			b[pos] = arr[i]
		}
	}
	return b
}
console.log(getMin([389, 207, 155,300,299, 170, 158, 65]))