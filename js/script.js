/**
 * Run scripts
 *
 * @author Boy van Amstel
 * @copyright 2011, Boy van Amstel
 */

// Encapsulate
(function() {

	/**
	 * Create a new JConsole.Printer object
	 */
	function init() {

		var target = document.getElementById('test');

		var jConsole = new JConsole.Printer(target);
		jConsole.print();

	}

	window.onload = init;

})();


