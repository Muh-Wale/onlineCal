	document.onkeydown = document.onkeypress = function(evt) {
	    if (!paskaFocus) {
	        if (typeof evt == 'undefined') {
	            evt = window.event;
	        }
	        if (evt) {
	            var keyCode = evt.keyCode ? evt.keyCode : evt.charCode;
	            if (keyCode == 8) {
	                if (evt.preventDefault) {
	                    evt.preventDefault();
	                }
	                return false;
	            } else {
	                return true;
	            }
	        } else {
	            return true;
	        }
	    }
	}