module.exports = function main(inputs) {
    var distance = inputs.distance;
    var partTimePrice = inputs.parkTime * 0.25;
    var price = 6 + partTimePrice;
    if (distance < 2) {
        ;
    } else if (distance > 2 && distance <=8) {
        price += (distance - 2) * 0.8;
    } else if (distance > 8) {
        price += 6 * 0.8 + (distance - 8) * 0.8 * 1.5;
    } 
    return Math.round(price);
};
