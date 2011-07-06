
exports.copy = function(target)
{
	var obj = {};
	for(var prop in target)
	{
		obj[prop] = target[prop];
	}
	
	return obj;
}