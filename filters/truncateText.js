module.exports = function(inputText, truncateTo) {

  if(inputText.length <= truncateTo) {
    return inputText;
  } 
  
  truncateTo = truncateTo - 1;
  return inputText.substring(0, truncateTo) + '…';
  
};