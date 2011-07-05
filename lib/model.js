
//contains all current info about running project
exports.Model = function()
{
	var deps = {};
	
	this.cacheDep = function(original, copied)
	{
		if(copied) deps[original] = copied;
		return deps[original];
	}
}
