
/**
 * Module dependencies.
 */

var open = require('open-window');
var load = require('load-script');

/**
 * Expose `share`.
 */

module.exports = share;

/**
 * Share `url` to LinkedIn.
 *
 * You can either just open a window,
 * or use the LinkedIn JavaScript API.
 *
 * @see https://developer.linkedin.com/documents/share-linkedin
 * @see http://developer.linkedin.com/plugins/share-plugin-generator
 * @see http://developer.linkedin.com/documents/tags-and-templates
 * @see https://developer.linkedin.com/documents/general-methods
 */

function share(url, title, description, source) {
  var link = 'http://www.linkedin.com/shareArticle?mini=true'
    + '&url=' + encodeURIComponent(url);

  if (title) link += '&title=' + encodeURIComponent(title)
  if (description) link += '&summary=' + encodeURIComponent(description);
  if (source) link += '&source=' + encodeURIComponent(source);

  return open(link);
}