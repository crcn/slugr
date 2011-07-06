Notice
------

This is a quick implementation, so it *will* break. I developed this for personal use, so it hasn't been battle tested against other use-cases.

Check out a video demonstration here: http://d.pr/HkCq

Requirements
------------

* Linux / Mac 
* NPM

Installation
------------

	npm install slugr
	
Motivation
----------

* Create transportable node.js applications without having to worry about setting it up on other servers.
* Many local dependencies are fragmented using require.path.unshift(...). Slugr combines then.
* Cleaner, and easier to manage.


Supports
--------

* Option to bundle NPM packages into the .slug file.
* Arguments which can be called whenever the .slug is executed.


Road Map
--------

* Better library support for creating / running .slug files in node.js apps.
* Support for Windows.
* Version controlling.
* Caching slugs by verison.
* Rollback support for broken slugs.
* List of all lib files in .config file in order of what's used first -> last.
* Option to write slugs as single .js files.
* Support for custom .js scanners (html possibly).


Notes
-----

* The library scans for the use of require(...) in the target application, and works from there as to what .js files to include. If you're dynamically loading .js files, the write //require(...) somewhere in the code.
* All other files besides .js are automatically included in the .slug file.

Building a Slug From Terminal
-----------------------------
	
terminal:

	slugr -i <input .js file> -o <output directory> -n <[optional] name of slug> -a <[optional] default arguments>
	
Building a Slug From package.json
---------------------------

path/to/project/package.json:
	
	{
	    "name":"myapp",
	    "version": "0.0.1",
	    "main": "./index.js",
		"slug": {
			"args":["test","args"],
			"output": "~/Desktop"
		}
	}

terminal:
	
	cd path/to/project; slugr; 
	

Running a Slug
--------------

terminal: 

	slugr <input slug file>
	
Code Usage
-----------

	var slugr = require('slugr');
	
	slugr.run('/path/to/my/app.slug', function()
	{
		//started up successfuly here
	});
	
	


	


