Notice
------

This is *super* alpha, and it will break. I developed this for personal use, so it hasn't been battle tested against other use-cases.

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
* Better NPM linking. Scanning for dependencies that don't exist in package.json.
* package.json in root directory.

Notes
-----

* The library scans for the use of require(...) in the target application, and works from there as to what .js files to include. If you're dynamically loading .js files, the write //require(...) somewhere in the code.
* All other files besides .js are automatically included in the .slug file.

Terminal Useage
---------------

Building a slug in terminal
	
	slugr -i <input .js file> -o <output directory> -n <[optional] name of slug> -a <[optional] default arguments>
	
Running a slug from terminal
	
	slugr <input slug file>
	
Code Useage
-----------

	var slugr = require('slugr');
	
	slugr.run('/path/to/my/app.slug', function()
	{
		//started up successfuly here
	});
	
	


	


