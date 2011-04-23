/**
 * JConsole appends texts in a tradition console like manner
 *
 * @author Boy van Amstel
 * @copyright 2011, Boy van Amstel
 */

// Create namespace
var JConsole = JConsole || {};

// Create new printer object
JConsole.Printer = function(target) {
		
	// Declare private properties
	var _target = target,
			_content = _target.innerHTML,
			_contentArray = _content.split(''),
			_currentChar = 0;

	/**
	 * Clear content of _target
	 */
	var clear = function() {
		_target.innerHTML = '';
	};

	/**
	 * Returns current content of _target
	 * @return {String} Content of _target
	 */
	var getContent = function() {
		_content = _target.innerHTML;
		return _content;
	};

	/**
	 * Set content of _target
	 * @param {String} Content to appear in _target
	 */
	var setContent = function(content) {
		_content = content;
		_target.innerHTML = _content;
	};

	/**
	 * Insert character after timeout
	 */
	var insert = function() {
	
		// Get current content
		var content = getContent();

		// Set default timeout, or multiply it by x when we're dealing with whitespace
		var timeout = 50 + Math.ceil(Math.random() * 100);
		switch(_contentArray[_currentChar]) {
			case ' ':
				timeout *= 1.5;
			break;
			case '.':
				timeout *= 3;
			break;
		}

		// Set innerHTML to current content + last character
		setContent(content.substring(0, content.length - 1) + _contentArray[_currentChar] + '_');
		_currentChar += 1; 

		// Only set the timeout if we have characters left
		if(_currentChar < _contentArray.length) {
			setTimeout(insert, timeout);
		}

	};

	/**
	 * Start printing
	 */
	var print = function() {
		clear();
		_target.innerHTML = '_';
		_currentChar = 0;
		insert();
	};

	// Public methods
	return {
		print: print
	};

};
