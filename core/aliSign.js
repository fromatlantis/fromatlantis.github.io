var Util=require('./Util');
var crypto = require('crypto');
var config={
	appKey:'123456',
	appSecret:'123456'
}
function aliSign(params){
	this.version='1.0.0';
	var util=new Util();
	params.timestamp = util.formatDate('yyyy-MM-dd hh:mm:ss');
	params.app_key=config.appKey;
	var arr=[];
	for(var key in params){
		arr.push(key+params[key]);
	}
	arr.sort();
	var msg=arr.join('');
	console.log(msg);
	var md5=crypto.createHash('md5');
	md5.update(msg);
	var sign=md5.digest('hex');

	return {
		timestamp:params.timestamp,
		sign:sign.toUpperCase()
	}

}
module.exports=aliSign;