
//contains all current info about running project
exports.Model = function(tmpDir)
{
	var deps = {},
		jsFiles = [],
		parsed = {};
	
	
	this.cacheDep = function(original, copied)
	{
		if(copied) deps[original] = copied;
		return deps[original];
	}
	
	//adds a JS file so we know the order which the files are loaded in
	/*this.addJSFile = function(file)
	{
		var absToRel = file.replace(tmpDir + '/', '');
		
		if(jsFiles.indexOf(absToRel) == -1) jsFiles.push(absToRel);
	}
	
	this.parsedJS = function(file, v)
	{
		if(v) parsed[file] = v;
		return parsed[file];
	}
	
	this.getJSFiles = function()
	{
		return jsFiles;
	}*/
}
