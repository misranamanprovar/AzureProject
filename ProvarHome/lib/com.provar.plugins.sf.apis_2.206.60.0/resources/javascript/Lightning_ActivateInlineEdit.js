var webElement = arguments[0];

if (webElement.tagName === 'A' && webElement.parentElement) {
	webElement = webElement.parentElement;
}
var clickEvent  = document.createEvent ('MouseEvents');
clickEvent.initEvent('dblclick', true, true);
webElement.dispatchEvent(clickEvent);