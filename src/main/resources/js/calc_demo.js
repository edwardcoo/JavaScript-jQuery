/**
 * Created by Mtime on 2018/4/13.
 */


console.log(0.1 + 0.2);
console.log(calcAdd(0.1, 0.2));

console.log(0.3 - 0.1);
console.log(calcSubtract(0.3, 0.1));

console.log(34.55 *100);
console.log(calcMultiply(34.55,100));

console.log(34.55/0.1);
console.log(calcDivide(34.55,0.1));


/**
 * 加法
 * @param arg1
 * @param arg2
 * @returns {number}
 */
function calcAdd(arg1, arg2) {
    if (isNullValue(arg1) || isNullValue(arg2)) {
        return 0;
    }
    var decimal1 = getDecimalLength(arg1);
    var decimal2 = getDecimalLength(arg2);
    var maxDecimalPow = Math.pow(10, Math.max(decimal1, decimal2));
    return (arg1 * maxDecimalPow + arg2 * maxDecimalPow) / maxDecimalPow;
}

/**
 * 减法
 * @param arg1
 * @param arg2
 * @returns {*}
 */
function calcSubtract(arg1, arg2) {
    if (isNullValue(arg1) || isNullValue(arg2)) {
        return 0;
    }
    var decimal1 = getDecimalLength(arg1);
    var decimal2 = getDecimalLength(arg2);
    var maxDecimal = Math.max(decimal1, decimal2);
    var maxDecimalPow = Math.pow(10, maxDecimal);
    return ((arg1 * maxDecimalPow - arg2 * maxDecimalPow) / maxDecimalPow).toFixed(maxDecimal);
}

/**
 * 乘法
 * @param arg1
 * @param arg2
 * @returns {number}
 */
function calcMultiply(arg1, arg2) {
    if (isNullValue(arg1) || isNullValue(arg2)) {
        return 0;
    }
    var decimal = 0;
    decimal += getDecimalLength(arg1);
    decimal += getDecimalLength(arg2);
    var intValue1 = Number(arg1.toString().replace(".", ""));
    var intValue2 = Number(arg2.toString().replace(".", ""));
    return intValue1 * intValue2 / Math.pow(10, decimal);
}

/**
 * 除法
 * @param arg1
 * @param arg2
 * @returns {*}
 */
function calcDivide(arg1, arg2) {
    if (isNullValue(arg1) || isNullValue(arg2)) {
        return 0;
    }
    var decimal1 = getDecimalLength(arg1);
    var decimal2 = getDecimalLength(arg2);
    with (Math) {
        var intValue1 = Number(arg1.toString().replace(".", ""));
        var intValue2 = Number(arg2.toString().replace(".", ""));
        return calcMultiply((intValue1 / intValue2), pow(10, decimal2 - decimal1));
    }
}

/**
 * 获取数据小数位数
 * @param arg
 * @returns {number}
 */
function getDecimalLength(arg) {
    if(isNullValue(arg)){
        return 0;
    }
    var decimalLength = 0;
    try {
        decimalLength = arg.toString().split(".")[1].length;
    } catch (e) { }
    return decimalLength;
}

function isNullValue(value) {
    return value == null || value == undefined || value.length == 0;
}