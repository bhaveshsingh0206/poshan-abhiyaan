(function() {
	var gtConstEvalStartTime = new Date(); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
	console.log(document.cookie);
	function d(b) {
		var a = document.getElementsByTagName('head')[0];
		a || (a = document.body.parentNode.appendChild(document.createElement('head')));
		a.appendChild(b);
	}
	function _loadJs(b) {
		var a = document.createElement('script');
		a.type = 'text/javascript';
		a.charset = 'UTF-8';
		a.src = b;
		d(a);
	}
	function _loadCss(b) {
		var a = document.createElement('link');
		a.type = 'text/css';
		a.rel = 'stylesheet';
		a.charset = 'UTF-8';
		a.href = b;
		d(a);
	}
	function _isNS(b) {
		b = b.split('.');
		for (var a = window, c = 0; c < b.length; ++c) if (!(a = a[b[c]])) return !1;
		return !0;
	}
	function _setupNS(b) {
		b = b.split('.');
		for (var a = window, c = 0; c < b.length; ++c)
			a.hasOwnProperty
				? a.hasOwnProperty(b[c]) ? (a = a[b[c]]) : (a = a[b[c]] = {})
				: (a = a[b[c]] || (a[b[c]] = {}));
		return a;
	}
	window.addEventListener &&
		'undefined' == typeof document.readyState &&
		window.addEventListener(
			'DOMContentLoaded',
			function() {
				document.readyState = 'complete';
			},
			!1
		);
	if (_isNS('google.translate.Element')) {
		return;
	}
	(function() {
		var c = _setupNS('google.translate._const');
		c._cest = gtConstEvalStartTime;
		gtConstEvalStartTime = undefined;
		c._cl = 'en';
		c._cuc = 'googleTranslateElementInit';
		c._cac = '';
		c._cam = '';
		c._ctkk = '439179.1428595631';
		var h = 'translate.googleapis.com';
		var s = (true ? 'https' : window.location.protocol == 'https:' ? 'https' : 'http') + '://';
		var b = s + h;
		c._pah = h;
		c._pas = s;
		c._pbi = b + '/translate_static/img/te_bk.gif';
		c._pci = b + '/translate_static/img/te_ctrl3.gif';
		c._pli = b + '/translate_static/img/loading.gif';
		c._plla = h + '/translate_a/l';
		c._pmi = b + '/translate_static/img/mini_google.png';
		c._ps = b + '/translate_static/css/translateelement.css';
		c._puh = 'translate.google.com';
		_loadCss(c._ps);
		_loadJs(b + '/translate_static/js/element/main.js');
	})();
})();

$('document').ready(function() {
	$('#google_translate_element').bind('DOMNodeInserted', function(event) {
		$('.goog-te-menu-value span:first').html('Translate');
	});

	$('#google_translate_element').on('click', function() {
		// Change font family and color
		$('iframe')
			.contents()
			.find(
				'.goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div'
			) //, .goog-te-menu2 *
			.css({
				color: '#544F4B',
				'background-color': '#e3e3ff',
				'font-family': '"Open Sans",Helvetica,Arial,sans-serif'
			});

		// Change hover effects  #e3e3ff = white
		$('iframe')
			.contents()
			.find('.goog-te-menu2-item div')
			.hover(
				function() {
					$(this)
						.css('background-color', '#17548d')
						.find('span.text')
						.css('color', '#e3e3ff');
				},
				function() {
					$(this)
						.css('background-color', '#e3e3ff')
						.find('span.text')
						.css('color', '#544F4B');
				}
			);

		// Change Google's default blue border
		$('iframe')
			.contents()
			.find('.goog-te-menu2')
			.css('border', '1px solid #17548d');

		$('iframe')
			.contents()
			.find('.goog-te-menu2')
			.css('background-color', '#e3e3ff');

		// Change the iframe's box shadow
		$('.goog-te-menu-frame').css({
			'-moz-box-shadow': '0 3px 8px 2px #666666',
			'-webkit-box-shadow': '0 3px 8px 2px #666',
			'box-shadow': '0 3px 8px 2px #666'
		});
	});
});

function getPatients(){
	$.ajax({
		url: '/patient/all',
		method: 'GET',
		success: (data) => {
			console.log(data)
			$('tbody').html('')
			data.forEach((patient)=>{
				if(patient.doses[0]) {
					$('#tbody').append('<tr><td>'+patient.name+'</td><td>'+patient.status+'</td><td>'+patient.doses[0]._id+'</td><td><a href="#!" class="btn btn-secondary btn-sm m-1 p-2">Details</a><button onclick="filldetails()" class="btn btn-secondary btn-sm m-1 p-2" onclick="filldetails()" >Register</button></td></tr>')
				} else {
					$('#tbody').append('<tr><td>'+patient.name+'</td><td>'+patient.status+'</td><td>None</td><td><a href="#!" class="btn btn-secondary btn-sm m-1 p-2">Details</a><button onclick="filldetails()" class="btn btn-secondary btn-sm m-1 p-2">Register</button></td></tr>')
				}
				
			})
		},
		error: (err) => {
			console.log(err);
			// console.log('Error occurred');
		}
	});
}
getPatients()




// Get patient details