var frontendCore = require("../../modern/lib/frontend-core");
var cryptoObj = require("../../core/lib/crypto-obj");

var exportedObj = frontendCore("Sencha");
exportedObj.init = exportedObj;
exportedObj.secure = exportedObj;
exportedObj.crypto_obj = cryptoObj();

module.exports = exportedObj;