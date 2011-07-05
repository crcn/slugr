require('colors');

var EventEmitter = require('events').EventEmitter;


var _loggerPartial = function(target, emit, type, color)
{
	
	target[type] = function()
	{
		var msg = arguments[0];
		
		var colorizedMessage = String(msg || '');
		
		if(color)
		{
			colorizedMessage = colorizedMessage[color]
		}
		
		arguments[0] = colorizedMessage;
		
		console.log.apply(null, arguments)
		
		emit(type, msg);
	}
}


exports.newLogger = function(ops)
{
	if(!ops) ops = {};
	
	var target = ops.target || {};
	
	if(target.controls) return target.controls;
	
	var logPath = ops.logPath,
	em = new EventEmitter(),
	logTypes = ops.logTypes || 'fatal|warning|error|fail|notice|ok|success|message',
	loggers = {
		'message' : null,
		'verbose' : 'blue',
		'error'   : 'red',
		'fatal'   : 'red',
		'warning' : 'yellow',
		'notice'  : 'grey',
		'ok'	  : 'magenta',
		'success' : 'green',
		'fail'    : 'red'
	};

	function emit(type, message)
	{
		var log = { createdAt: new Date(), type: type, message: String(message) };

		em.emit('log', log);
		
		// console.log(controls.logPath)
		if(controls.logPath)
		{
			if(!logsToSave[log.type]) logsToSave[log.type] = [];

			logsToSave[log.type].push(log);

			saveLogs();
		}
	}

	function init()
	{
		for(var logType in loggers)
		{
			if(logTypes.indexOf(logType) > -1)
			{
				_loggerPartial(target, emit, logType, loggers[logType])
			}
			else
			{
				target[logType] = function(){};
			}
		}		
	}


	var controls = {
		logPath: logPath,
		enable: function(lt)
		{
			logTypes = lt;
			init();
		},
		verbose: function()
		{
			// controls.enable('')
		},
		logging: function()
		{
			if(arguments.length) return logTypes = arguments[0];
			
			return logTypes;
		},
		logger: target
	};
	
	target.controls = controls;
	
	init();

	return controls;
}



exports.newLogger({target:console})