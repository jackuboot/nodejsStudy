/**
 * 环境变量打印
 */
let path = process.env.Path
function splitePathToArry(str, spliteStr){
	return str.split(spliteStr)
}

let pathArry = splitePathToArry(path, ";")
for (let path of pathArry){
	console.log(path)
}

/**
 * 如何获取文件路径？
 * 在 Node.js 模块系统中，每个文件都被视为一个独立的模块
 * 也就是获取模块路径
 * 查看模块属性就知道了
 */
let currentPath = require.resolve("./myTestFile.js", undefined)
console.log(`当前文件路径:${currentPath}`)
const myTestOtherMoudle = require("./myTestOtherMoudle")
for (let i = 100; i>0; i--){
	console.log(__filename); // 当前文件所在路径（绝对路径） + 文件名
	console.log(__dirname); // 当前文件所在路径（绝对路径）
	myTestOtherMoudle()
}



