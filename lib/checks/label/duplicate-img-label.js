var imgs = node.querySelectorAll('img');
var text = axe.commons.text.visible(node, true);

for (var i = 0, len = imgs.length; i < len; i++) {
	var imgAlt = axe.commons.text.accessibleText(imgs[i]);
	if (imgAlt === text && text !== '') { return true; }
}

return false;
