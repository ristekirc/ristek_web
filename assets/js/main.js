function isElementHasBeenScrolledThrough (el, tres) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 && (rect.top * tres) <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function onVisibilityChange(el, callback, tres) {
    var old_visible;
    return function () {
        var visible = isElementHasBeenScrolledThrough(el, tres);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback(visible);
            }
        }
    }
}

function main() {
    setTimeout(function() {
        document.getElementById('loading').className = 'halfDone';
        document.getElementById('webctn').className = 'loaded';

        setTimeout(function() {
            document.getElementById('loading').className = 'done';

            smoothScroll.init({
                selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
                selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
                speed: 1000, // Integer. How fast to complete the scroll in milliseconds
                easing: 'easeInOutQuint', // Easing pattern to use
                offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            });

            var visionHandler = onVisibilityChange(document.getElementById('about'), function(visibility) {
                if (visibility) {
                    document.getElementById('visionText').className += ' animated';
                }
            }, 1.25);

            var missionHandler = onVisibilityChange(document.getElementById('mission'), function(visibility) {
                if (visibility) {
                    document.getElementById('ornament-notebook-middle').className += ' animated';
                    document.getElementById('ornament-vr-middle').className += ' animated';
                    document.getElementById('mission-text').className += ' animated';
                    document.getElementById('mission-background').className += ' animated';
                    document.getElementById('mission-text-bg').className += ' animated';
                }
            }, 0.85);

            var activityHandler = onVisibilityChange(document.getElementById('activities'), function(visibility) {
                if (visibility) {
                    document.getElementById('activities-text-bg').className += ' animated';
                    document.getElementById('activities-text').className += ' animated';
                    document.getElementById('activities-slider').className += ' animated';
                }
            }, 1.25);

            var contactHandler = onVisibilityChange(document.getElementById('contact'), function(visibility) {
                if (visibility) {
                    document.getElementById('contact-text-bg').className += ' animated';
                    document.getElementById('contact-email').className += ' animated';
                }
            }, 1.25);

            if (window.addEventListener) {
                addEventListener('DOMContentLoaded', visionHandler, false);
                addEventListener('load', visionHandler, false);
                addEventListener('scroll', visionHandler, false);
                addEventListener('resize', visionHandler, false);
                addEventListener('DOMContentLoaded', missionHandler, false);
                addEventListener('load', missionHandler, false);
                addEventListener('scroll', missionHandler, false);
                addEventListener('resize', missionHandler, false);
                addEventListener('DOMContentLoaded', activityHandler, false);
                addEventListener('load', activityHandler, false);
                addEventListener('scroll', activityHandler, false);
                addEventListener('resize', activityHandler, false);
                addEventListener('DOMContentLoaded', contactHandler, false);
                addEventListener('load', contactHandler, false);
                addEventListener('scroll', contactHandler, false);
                addEventListener('resize', contactHandler, false);
            } else if (window.attachEvent)  {
                attachEvent('onDOMContentLoaded', visionHandler); // IE9+ :(
                attachEvent('onload', visionHandler);
                attachEvent('onscroll', visionHandler);
                attachEvent('onresize', visionHandler);
                attachEvent('onDOMContentLoaded', missionHandler); // IE9+ :(
                attachEvent('onload', missionHandler);
                attachEvent('onscroll', missionHandler);
                attachEvent('onresize', missionHandler);
                attachEvent('onDOMContentLoaded', activityHandler); // IE9+ :(
                attachEvent('onload', activityHandler);
                attachEvent('onscroll', activityHandler);
                attachEvent('onresize', activityHandler);
                attachEvent('onDOMContentLoaded', contactHandler); // IE9+ :(
                attachEvent('onload', contactHandler);
                attachEvent('onscroll', contactHandler);
                attachEvent('onresize', contactHandler);
            }
        }, 1000);
    }, 2000);
}

window.onload = main();