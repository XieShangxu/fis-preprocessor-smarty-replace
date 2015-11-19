# fis-preprocessor-smarty-replace

Purpose:

由于使用html-minifier将html压缩的时候会将所有的tag都闭合，
在这种情况下，smarty模板中include进来的部分也会是经过标签闭合处理的，从而导致错误。
此插件的作用就是将原有smarty模板中的
```
<include file="a/b.html">
```
替换成以下格式，以便于被fis支持:
```
<link rel="import" href="[rootDir]a/b.html?__inline">
```

How to use:
```javascript
fis.match('*.html', {
	preprocessor: fis.plugin('smarty-replace', {
		rootDir: 'apps/templates/'
	})
});
```

rootDir: 默认为""。