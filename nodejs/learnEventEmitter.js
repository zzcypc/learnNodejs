// 引入 events 模块
var events = require('events');
var EventEmitter = events.EventEmitter;
// 创建 eventEmitter 对象
var eat=new EventEmitter();
eat.on('想吃东西',function(what){
	console.log('吃'+what);
});
eat.emit('想吃东西','肉肉');
