var wechat = require('wechat');

var wechat_config = {
	token: 'testnewqiushi',//开发者 token
    appid: 'wxb4fb29266130bb85',// appid
    encodingAESKey: 'BahC4uNa3dY6wo5U3mRpVf4yxkQtXs6OyDXEe2GudmR'//encodingAESKey
} 
module.exports = {
	wechat:function(){
		wechat(wechat_config,function(req,res,next){
			console.log(11111111111)
			// 微信输入信息都在req.weixin上
			var message = req.weixin;
			console.log(message);
			if (message.Content === 'qiushi') {
				// 回复qiushi(普通回复)
				res.reply('hehe');
			
			} else {
				res.reply({
					content: '欢迎你加入由XX公司提供的XX试验。在此之前请确认你是否已经在你的主治医师的指导下签署书面合同已经签署请\n回复：是\n否则请联系你的主治医师',
					type: 'text'
				});
			}
			
		})
	},
	getOne:function(req, res){
		var code = createCode(parseInt(req.query.length));
		var title = 'test';
		var name = 'qiushi';
		res.view('newPage',{title:title,code:code,name:name});
		
	}
	
	
	
};
function createCode(n){
	var codeLength = n;
	var random  =[1,2,3,4,5,6,7,8,9,0];
	var code = "";
	for(var i=0;i<codeLength;i++){
		code += random[Math.floor(Math.random()*10)];
	}
	return code;
}