/**
 * 总结
 * 1，模块导出的永远是module.exports
 * 2，moudle.exports 赋值以后，相当于砍断了 和 exports 之间默认建立的连接
 * 3，exports因此变得只能模块内使用
 * 4，对外暴露的是moule.exports新的指引
 * @type {number}
 */
let a = 0


/**
 * testFiled 变得只有模块内可用
 */
exports.testFiled = function(){
	console.log("hahahahahahha")
}

/**
 * 砍断连接
 */
module.exports = function(){
	a = a + 1
	console.log("调用次数:", a)
	exports.testFiled()
}
