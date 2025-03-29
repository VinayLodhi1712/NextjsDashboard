import { faker } from "@faker-js/faker"

export function generateSalesData() {
  // Generate data for line charts
  const generateLineData = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      name: String.fromCharCode(65 + i),
      value: faker.number.int({ min: 10, max: 100 }),
    }))
  }

  // Generate data for multi-line chart
  const generateMultiLineData = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      name: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i % 7],
      value1: faker.number.int({ min: 10, max: 100 }),
      value2: faker.number.int({ min: 10, max: 100 }),
      value3: faker.number.int({ min: 20, max: 60 }),
    }))
  }

  // Generate data for bar chart
  const generateBarData = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      name: String.fromCharCode(65 + i),
      value: faker.number.int({ min: 10, max: 100 }),
    }))
  }

  return {
    users: generateLineData(7),
    income: generateLineData(7),
    conversion: generateLineData(7),
    sessions: generateBarData(7),
    traffic: generateMultiLineData(7),
  }
}

export function generateRevenueData() {
  // Generate data for area chart
  const areaData = [
    { name: "Week 1", total: 8000, delivered: 4000, pending: 2000 },
    { name: "Week 2", total: 10000, delivered: 6000, pending: 2500 },
    { name: "Week 3", total: 12000, delivered: 9800, pending: 2290 },
    { name: "Week 4", total: 8000, delivered: 5000, pending: 2100 },
  ]

  // Generate data for bar chart
  const barData = [
    { name: "Week 1", value1: 4000, value2: 2400, value3: 2400 },
    { name: "Week 2", value1: 3000, value2: 1398, value3: 2210 },
    { name: "Week 3", value1: 2000, value2: 9800, value3: 2290 },
    { name: "Week 4", value1: 2780, value2: 3908, value3: 2000 },
  ]

  return {
    areaData,
    barData,
  }
}

export function generateTransactionData() {
  const products = [
    "Acer Nitro 5",
    "ASUS ROG Strix",
    "Redragon S101",
    "Playstation 5",
    "MacBook Pro",
    "Dell XPS 13",
    "iPhone 13 Pro",
    "Samsung Galaxy S22",
  ]

  return Array.from({ length: 5 }).map((_, i) => ({
    id: faker.string.numeric(7),
    product: faker.helpers.arrayElement(products),
    customer: faker.person.fullName(),
    date: `March ${faker.number.int({ min: 1, max: 28 })}`,
    price: faker.number.int({ min: 50, max: 3500 }),
    paymentMethod: faker.helpers.arrayElement(["Cash on Delivery", "Online Payment", "Credit Card"]),
    status: faker.helpers.arrayElement(["Delivered", "Pending"]),
  }))
}

