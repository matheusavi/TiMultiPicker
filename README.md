# TiMultiPicker - IOS
With this widget you can choose multiple options in a list.


## Instruções:

Download and put the folder br.spyker0.multipicker in /app/widgets/

Instantiate the widget:

```js
var multiOptionsPicker = Alloy.createWidget('br.spyker0.multipicker');
```

Open the widget passing the needed parameters.

```js
multiOptionsPicker.open({
    title: "Title",
    options: optionsArray, //I.E. [1,2,3,4]
    selected: selectedOptionsArray, //I.E. [1,2]

    okButtonTitle: "Ok", //Confirm button (IOS)

    cancelButtonTitle: "Back", //Cancel button title (IOS)

    navigationWindow: navigationWindow, //Root navigation Window (Needed in IOS)

    okCallback: callbackOk, //confirmation callback, receives an array with the selected options
    
    cancelCallback: callbackCancel //optional
});


//callback example
function callbackOk(e){
    console.log(e.selections);
}
```

Inspired on:
1. https://github.com/dbankier/TiDialogs/issues/16
2. https://stackoverflow.com/questions/15145637/titanium-mobile-multiple-select
3. https://developer.apple.com/library/content/samplecode/TableMultiSelect/Introduction/Intro.html
