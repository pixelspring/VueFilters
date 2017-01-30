module.exports = function(input, option) {

  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
 
  const unescapeMap = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": "\"",
    "&#39;": "'"
  };

  if(option=="escape") {
    return input.replace(/[&<>"']/g, function(escape) { 
      return escapeMap[escape]; 
    });
  } 
  else if(option=="unescape") {
    return input.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, function(unescape) { 
      return unescapeMap[unescape]; 
    });
  } else {
    return 'HTML FILTER ERROR: You must supply an option, either "escape" or "unescape"' + input
  }
  
};