function getTotalPrice(list, type) {
    let total = 0,
        item;
    for(let product in list) {
        item = list[product];
        if (item.type === type) {
            total += item.price
        } else {total}
    }
    return total;
}

var products = [
    { type: 'A', price: 5, name: 'type A 1'},
    { type: 'B', price: 7.5, name: 'type B 1'},
    { type: 'C', price: 10, name: 'type C 1'},
    { type: 'A', price: 15, name: 'type A 2'},
    { type: 'A', price: 2, name: 'type A 3'},
];

console.log(getTotalPrice(products, 'A'));
console.log(getTotalPrice(products, 'B'));
console.log(getTotalPrice(products, 'C'));
