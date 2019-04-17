function debug(elem) {
  console.log(elem);
  elem.parent().css({background: 'red'});
  var parentTag = elem.parent().get(0).tagName;
  elem.prepend(document.createTextNode(parentTag + ' > '));
}
