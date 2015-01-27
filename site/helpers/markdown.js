var marked = require('marked');
var Handlebars = require('handlebars');

module.exports = function (value) {
  var input;
  if ('string' === typeof value) {
    input = fs.readFileSync(path.join('site/pages', value)+'.md').toString();
  } else if ('object' === typeof value) {
    input = value.fn(this).trim();
  }
  return new Handlebars.SafeString(marked(input));
};
