module.exports = function (bytes) {

  let filesizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  if (bytes == 0) return 'n/a';

  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  if (i == 0) return bytes + ' ' + filesizes[i];
  
  return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + filesizes[i];

};