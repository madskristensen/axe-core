var results = axe.commons.dom.idrefs(node, 'aria-labelledby');
var element, i, l = results.length;

for (i = 0; i < l; i++) {
	element = results[i];
	if (element && axe.commons.text.accessibleText(element).trim()) {
		return true;
	}
}

return false;
