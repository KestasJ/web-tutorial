// son of suckerfish menu script from:
// http://www.htmldog.com/articles/suckerfish/dropdowns/

sfHover = function() {
    var sfEls = document.getElementById("nav").getElementsByTagName("LI");
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover = function() {
            this.className += " sfhover";
            this.style.zIndex = 200; // flyout above relative stuff in IE
        }
        sfEls[i].onmouseout = function() {
            this.className = this.className.replace(
                new RegExp(" sfhover\\b"), ""
            );
        }
    }
}

if (window.attachEvent) window.attachEvent("onload", sfHover);

var anchor = document.getElementsByTagName("a");

function fixHrefs() {
    var anchor = document.getElementsByTagName("a");

    for(var i=0; i<= anchor.length; i++) {
            var href = anchor[i].href.replace(/%20/g,'');
                anchor[i].href = href;
    }
}
window.onload = fixHrefs;
