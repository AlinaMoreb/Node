// Задание 1: функция с параметром по умолчанию
function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  const total = price * quantity;
  return total - total * discount;
}

// Задание 2: Union типы
let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id * 10);
  }
}

// Задание 3: массив объектов с типами
type OrderStatus = "pending" | "shipped" | "delivered";

interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { orderId: "A1", amount: 100, status: "pending" },
  { orderId: "A2", amount: 250, status: "shipped" },
  { orderId: "A3", amount: 400, status: "delivered" }
];

function filterOrdersByStatus(
  orders: Order[],
  status: OrderStatus
): Order[] {
  return orders.filter(order => order.status === status);
}

// Задание 4: кортеж и объект
type ProductInfo = [string, number, number];

function updateStock(
  inventory: { [key: string]: number },
  productInfo: ProductInfo
): { [key: string]: number } {
  const [name, , quantity] = productInfo;

  if (inventory[name]) {
    inventory[name] += quantity;
  } else {
    inventory[name] = quantity;
  }

  return inventory;
}
