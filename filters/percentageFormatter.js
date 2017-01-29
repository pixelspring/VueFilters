module.exports = function (number, decimals) {
    
    let result;

    if (decimals === null || decimals === undefined) {
        decimals = 2;
    }

    decimals = parseInt(decimals);

    if (number === null || number === '' || isNaN(number)) {
        result = '-';
    } else {
        result = Math.round(number * Math.pow(10, decimals) * 100) / Math.pow(10, decimals) + '%';
    };

    return result;
    
};