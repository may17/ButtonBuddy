ButtonBuddy
===========

Tiny js based helper for creating buttons

## Quick Start

Step 1: Insert the ButtonBuddy.js into the head of your html document

```html
<script src="ButtonBuddy.js"></script>
```

Step 2: Generate your first button. Just include a script part before the closing body tag and initalize your button.

```html
<script>
        
        var myButton = new ButtonBuddy('My Testbutton');

        myButton.on('click', function() {

            alert('Hello there');

        })
        
</script>
```

## Public methods

### on

With the on method you can quickly add events to the button.

NOTE: If you use the type click ButtonBuddy automaticly adds a event.preventDefault()

```html
<script>
        var myButton = new ButtonBuddy('My Testbutton');

        myButton.on('click', function() {

            alert('Hello there');

        })

        myButton.on('mouseover', function() {

            alert('Hello there');

        })
</script>
```

## Static methods

### useCssLoader

By default ButtonBuddy loads automaticlly the base css file in the head. If you don`t like this feature just disable it:

```javascript

        ButtonBuddy.useCssLoader(false);

```


### setGlobalCssPath

Define the path to the css file wich should be automaticcly loaded. Note that the path begins with the origin domain.

@dependency: useCssLoader = true

```javascript

        ButtonBuddy.setGlobalCssPath('path/to/my/cssFile/style.css');

```
