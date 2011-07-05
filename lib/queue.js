exports.Queue = function()
{
	var stack = [],
		started = false,
		running = false,
		current;
	
	this.add = function(callback)
	{
		stack.push(callback);
	}
	
	this.start = function(next)
	{
		if(started) return;
		started = true;
		
		if(next) this.add(next);
		
		_next();
	}
	
	var _next = function()
	{
		if(running || !stack.length) return;
		
		running = true;
		
		current = stack.shift();
		
		current(function()
		{
			running = false;
			_next();
		})
	}	
}
