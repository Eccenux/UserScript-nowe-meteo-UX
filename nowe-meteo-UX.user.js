// ==UserScript==
// @name         Nowe Meteo UX
// @namespace    pl.enux.meteo.new
// @version      0.2.1
// @description  [0.2.1] Poprawki UX dla nowego meteo.
// @author       Eccenux
// @match        https://nowe.meteo.pl/
// @grant        GM_addStyle
// @updateURL    https://github.com/Eccenux/UserScript-nowe-meteo-UX/raw/master/nowe-meteo-UX.meta.js
// @downloadURL  https://github.com/Eccenux/UserScript-nowe-meteo-UX/raw/master/nowe-meteo-UX.user.js
// ==/UserScript==

(function() {
    'use strict';

    // preload
    downloadModel('um4');

	/**
		Add CSS.
	*/
    function addCss() {
        var cssText = `
			.nux-ux-buttons {
				position: fixed;
				top: 0;
				left: 0;
				background: rgba(255, 255, 255, 0.5);
			}
			.nux-ux-buttons a {
				display: block;
				padding: .5em;
			}
			.nux-ux-buttons a:hover {
				background: white;
			}
		`;
        GM_addStyle(cssText);
    }
    addCss();

	/**
		Add model buttons.
	*/
    function addButtons() {
        var buttons = document.createElement('div');
        buttons.className = 'nux-ux-buttons';
        buttons.innerHTML = `
			<a href="javascript:void(0)" onclick="downloadModel('um4');">UM (78h)</a>
			<a href="javascript:void(0)" onclick="downloadModel('coamps');">COAMPS (84h)</a>
		`;
        document.body.appendChild(buttons);
    }
    addButtons();
})();