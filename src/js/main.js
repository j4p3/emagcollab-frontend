////////////////////////////////////////////////////////////////////////////////
// HEADER ANIMATION ONSCROLL
////////////////////////////////////////////////////////////////////////////////
var AnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '.header' ),
        didScroll = false,
        changeHeaderOn = 200;
 
    function init() {
        if(!window.addEventListener) {
            window.attachEvent('scroll', bufferScroll);
        }
        else {
            window.addEventListener('scroll', bufferScroll, false);
        }
    }

    function bufferScroll() {
        if( !didScroll ) {
            didScroll = true;
            setTimeout( scrollPage, 250 );
        }
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'shrink' );
        }
        else {
            classie.remove( header, 'shrink' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();