// نسخة عرض (Demo): بيانات ثابتة بدل Strapi

const svgImg = (emoji, bg) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">` +
      (bg ? `<rect width="500" height="500" fill="${bg}"/>` : "") +
      `<text x="250" y="260" font-size="260" text-anchor="middle" dominant-baseline="central">${emoji}</text></svg>`
  );

const banner = (emoji, title, bg) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="400" viewBox="0 0 1000 400">` +
      `<rect width="1000" height="400" fill="${bg}"/>` +
      `<text x="180" y="210" font-size="180" text-anchor="middle" dominant-baseline="central">${emoji}</text>` +
      `<text x="340" y="210" font-size="46" font-weight="bold" font-family="Arial, sans-serif" fill="#ffffff" dominant-baseline="central">${title}</text></svg>`
  );

const sliders = [
  { id: 1, image: [{ url: banner("🍎", "Fresh Fruits Every Day", "#f59e0b") }] },
  { id: 2, image: [{ url: banner("🥦", "Farm Fresh Vegetables", "#16a34a") }] },
  { id: 3, image: [{ url: banner("🥛", "Daily Dairy and Bakery", "#2563eb") }] },
];

const categories = [
  { id: 1, name: "Fruits", icon: [{ url: svgImg("🍎") }] },
  { id: 2, name: "Vegetables", icon: [{ url: svgImg("🥦") }] },
  { id: 3, name: "Dairy", icon: [{ url: svgImg("🥛") }] },
  { id: 4, name: "Bakery", icon: [{ url: svgImg("🍞") }] },
  { id: 5, name: "Meat", icon: [{ url: svgImg("🍗") }] },
  { id: 6, name: "Drinks", icon: [{ url: svgImg("🧃") }] },
];

const products = [
  { id: 1, name: "Fresh Apples", description: "Crisp and juicy red apples, picked fresh.", realPrice: 6.5, sellingPrice: 4.99, image: [{ url: svgImg("🍎", "#fee2e2") }], categories: [{ name: "Fruits" }] },
  { id: 2, name: "Bananas", description: "Sweet ripe bananas, rich in potassium.", realPrice: 4.0, sellingPrice: 2.99, image: [{ url: svgImg("🍌", "#fef9c3") }], categories: [{ name: "Fruits" }] },
  { id: 3, name: "Broccoli", description: "Fresh green broccoli, great for steaming.", realPrice: 3.5, sellingPrice: 2.49, image: [{ url: svgImg("🥦", "#dcfce7") }], categories: [{ name: "Vegetables" }] },
  { id: 4, name: "Carrots", description: "Crunchy organic carrots.", realPrice: 2.8, sellingPrice: 1.99, image: [{ url: svgImg("🥕", "#ffedd5") }], categories: [{ name: "Vegetables" }] },
  { id: 5, name: "Whole Milk", description: "Fresh whole milk, 1 liter.", realPrice: 3.2, sellingPrice: 2.79, image: [{ url: svgImg("🥛", "#e0f2fe") }], categories: [{ name: "Dairy" }] },
  { id: 6, name: "Fresh Bread", description: "Freshly baked every morning.", realPrice: 2.5, sellingPrice: 1.89, image: [{ url: svgImg("🍞", "#fef3c7") }], categories: [{ name: "Bakery" }] },
  { id: 7, name: "Chicken Breast", description: "Tender boneless chicken breast.", realPrice: 9.0, sellingPrice: 7.49, image: [{ url: svgImg("🍗", "#ffe4e6") }], categories: [{ name: "Meat" }] },
  { id: 8, name: "Orange Juice", description: "100% natural orange juice.", realPrice: 4.5, sellingPrice: 3.49, image: [{ url: svgImg("🧃", "#ffedd5") }], categories: [{ name: "Drinks" }] },
];

const demoOnly = () =>
  Promise.reject(new Error("Demo mode: this feature needs a backend"));

const getCategory = () => Promise.resolve({ data: { data: categories } });
const getSlider = () => Promise.resolve(sliders);
const getCategoryList = () => Promise.resolve(categories);
const getProductList = () => Promise.resolve(products);

const getProductByCategory = (category) => {
  let name = String(category);
  try {
    name = decodeURIComponent(name);
  } catch (e) {}
  name = name.toLowerCase();
  return Promise.resolve(
    products.filter((p) =>
      p.categories.some((c) => c.name.toLowerCase() === name)
    )
  );
};

const registerUser = () => demoOnly();
const signIn = () => demoOnly();
const addToCart = () => demoOnly();
const createOrder = () => demoOnly();
const getCartItems = () => Promise.resolve([]);
const myOrders = () => Promise.resolve([]);

export default {
