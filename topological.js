/**
 * 关于拓扑排序
 */
var points = 6
var sides = 8
// 这里生成AOV图有些复杂，可以优化
var map = new Array(points).fill(0)
for(var i = 0; i < 10; i++){
	map[i] = new Array(points).fill(0)
}
map[0][1] = 1
map[0][2] = 1
map[0][5] = 1
map[2][1] = 1
map[2][3] = 1
map[4][5] = 1
map[4][3] = 1
map[5][3] = 1
// 得到 map 这个邻接矩阵
// 计算入度
var In = []
for(var i = 0; i < points; i++){
	In[i] = 0
	for(var j = 0; j < points; j++){
		if(map[j][i] === 1) {//表明 从j到i这条边存在，j -> i
			In[i]++
		}
	}
}
var res = []
while(true){
	for(var i = 0; i < points; i++){
		if(In[i] === 0){
			res.push(i)
			In[i] = -1 //删除该点
			for(var j = 0; j < points; j++){
				if(map[i][j] === 1){
					In[j]--
				}
			}
		}
	}
	if(res.length === points){
		break
	}
}
console.log(res)