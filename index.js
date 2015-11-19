module.exports = function(content, file, conf){

	var pre = "{", after = "}";
	if (conf && conf.preTag && conf.afterTag) {
		pre = conf.preTag;
		after = conf.preTag;
	}
	var reg = new RegExp(pre + '\\s*include\\s+file\\s*=\\s*"(.*?)"\\s*' + after, 'ig'),
		root = conf ? (conf.rootDir ? conf.rootDir : "") : "";
    return content.replace(reg, "<link rel='import' href='$1"+"?_inline'>");
};