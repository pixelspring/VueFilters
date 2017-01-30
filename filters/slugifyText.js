module.exports = function(input) {

  input = input.replace(/^\s+|\s+$/g, '')
  input = input.toLowerCase()
  
  let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
  let to   = "aaaaeeeeiiiioooouuuunc------"
  
  for (let i=0, l=from.length ; i<l ; i++) {
    input = input.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  input = input.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return input;
  
};