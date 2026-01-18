// Задание 1: функция с параметром по умолчанию
function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    var total = price * quantity;
    return total - total * discount;
}
// Задание 2: Union типы
var id;
function displayId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id * 10);
    }
}
var orders = [
    { orderId: "A1", amount: 100, status: "pending" },
    { orderId: "A2", amount: 250, status: "shipped" },
    { orderId: "A3", amount: 400, status: "delivered" }
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(function (order) { return order.status === status; });
}
function updateStock(inventory, productInfo) {
    var name = productInfo[0], quantity = productInfo[2];
    if (inventory[name]) {
        inventory[name] += quantity;
    }
    else {
        inventory[name] = quantity;
    }
    return inventory;
}
