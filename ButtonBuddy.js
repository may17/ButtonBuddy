!(function(doc) {

    "use strict";

    var
        _instancesCount,
        _cssIsLoaded,
        _useCssLoader,
        _globalCssPath,
        _loadCss,
        ButtonBuddy;

    _instancesCount = 0;
    _cssIsLoaded = false;
    _useCssLoader = true;
    _globalCssPath = '/css/buttonBuddy.css';

    _loadCss = function() {

        var _link = doc.createElement('link');

        _link.setAttribute('href', location.origin + _globalCssPath);
        _link.setAttribute('rel', 'Stylesheet');
        _link.setAttribute('type', 'text/css');

        doc.getElementsByTagName('head')[0].appendChild(_link);

        _cssIsLoaded = true;

    }

    /**
     * constructor
     */

    ButtonBuddy = window.ButtonBuddy = function(text, where) {

        where = where || document.body;
        text = text || 'Button Buddy';

        var button = doc.createElement('a');

        this.button = button;

        button.setAttribute('class', 'buttonBuddy instance-'+_instancesCount);
        button.setAttribute('href', location.href);
        button.textContent = text;

        where.appendChild(button);

        if(_useCssLoader && !_cssIsLoaded)
            _loadCss();

        _instancesCount++;

    }

    /**
     * Public instance methods
     */

    ButtonBuddy.prototype = {

        on: function(type, callback) {

            this.button.addEventListener(type, function(e) {

                if(type === 'click')
                    e.preventDefault();

                callback(e, this);

            });

        }

    }

    /**
     * Static Methods
     */

    ButtonBuddy.useCssLoader = function(bln) {

        _useCssLoader = bln;

    }

    ButtonBuddy.setGlobalCssPath = function(str) {

        _globalCssPath = bln;

    }

})(document)