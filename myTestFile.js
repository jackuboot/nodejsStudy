const path = require('path');

/**
 * 【环境变量打印】
 */
let path_env = process.env.Path
function splitePathToArry(str, spliteStr){
	return str.split(spliteStr)
}

let pathArry = splitePathToArry(path_env, ";")
for (let path of pathArry){
	console.log(path)
}

/**
 * 【如何获取文件路径？】
 * 在 Node.js 模块系统中，每个文件都被视为一个独立的模块
 * 获取文件路径也就是获取模块路径
 * 查看模块属性就知道了
 */
let currentPath = require.resolve("./myTestFile.js", undefined)
console.log(`当前文件路径:${currentPath}`)
const myTestOtherMoudle = require("./myTestOtherMoudle")
for (let i = 10; i > 0; i--){
	console.log(__filename); // 当前文件所在路径（绝对路径） + 文件名
	console.log(__dirname); // 当前文件所在路径（绝对路径）
	myTestOtherMoudle()
}


/**
 * 【module的使用】
 */
console.log("程序运行入口1",require.main.filename)   // E:\GIT_NODE_SUDY\myTestFile.js
console.log("程序运行入口2",module)                  // Moudle
console.log("程序运行入口3",require.main)            // Moudle
console.log("程序运行入口4",require.main === module) // true
console.log("程序运行入口5",exports)                 // {}
console.log("程序运行入口6",module.exports)          // {}
console.log("程序运行入口7",module.exports)          // {}
console.log("程序运行入口8",module.paths)            //[ 'E:\\GIT_NODE_SUDY\\node_modules', 'E:\\node_modules' ]


/**
 * concat 方法是安全的连接方法
 * 并没有改变源数组
 * @type {*[]}
 */
let arryA = ['a','b','c']
let arryB = ['c','d','e']
arryA.concat(arryB)
console.log("arryA===",arryA)
console.log("arryB===",arryB)
arryA = arryA.concat(arryB)
console.log("合并==",arryA)



/**
 * Node.js 有些模块会被编译成二进制。 这些模块别的地方有更详细的描述。
 * 核心模块定义在 Node.js 源代码的 lib/ 目录下。
 * require() 总是会优先加载核心模块。 例如， require('http') 始终返回内置的 HTTP 模块，即使有同名文件。
 */


/**
 * 当循环调用 require() 时，一个模块可能在未完成执行时被返回。
 * 设计上一定做好分离，防止循环调用
 */


/**
 * 模块缓存
 * 模块缓存的key用的是module.filename
 * 这个filename是 绝对路径 + 带后缀名的 文件
 */
console.log("模块缓存:",require.cache)
console.log(__filename); // 当前文件所在路径（绝对路径） + 文件名
console.log(module.filename)
console.log("posix环境下",   path.posix.basename(__filename)) //绝对路径
console.log("windows环境下", path.win32.basename(__filename)) //文件名


/**
 * 查看nodejs提供的所有模块
 */
console.log("查看nodejs提供的所有模块:",require('module').builtinModules)


/**
 * exports 像是一个变量
 * 默认赋值给 moudle.exports
 * 如果module.exports另外被赋值了
 * exports不再指向module.exports
 */
module.exports = "aaa"
exports.a = "test" // 文件内有效
console.log(exports)
console.log(module.exports)
console.log(module)
console.log(exports.a)
// 手动重新建立关系
module.exports = exports
console.log(module.exports) // "aaa"作废了


async function test() {
	console.log("异步函数")
}

// test().then(res=>{
// 	console.log("异步回调")
// })

async function bbb(){
	await test()
}

bbb().then(r => {})

console.log("hahahh")