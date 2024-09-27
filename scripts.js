// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// ForEach Basics

// Log each name
names.forEach((name) => {
  console.log(name);
});

// Log each province
provinces.forEach((province) => {
  console.log(province);
});

// Log each name with the matching province in the format "Name (Province)"
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Uppercase Transformation

// Use map to create a new array with province names in uppercase
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());

// Log the new array to the console
console.log(uppercaseProvinces);

// Name Lengths

// Use map to create a new array with the length of each name
const nameLengths = names.map((name) => name.length);

// Log the new array to the console
console.log(nameLengths);

// Sorting

// Use sort to alphabetically sort the provinces
const sortedProvinces = provinces.sort();

// Log the sorted array to the console
console.log(sortedProvinces);

// Filtering Cape

// Use filter to remove provinces containing "Cape"
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);

// Log the count of remaining provinces
console.log(filteredProvinces.length);

// Finding 'S'

// Create a boolean array using map to check if the name contains 'S'
const containsS = names.map((name) => name.toLowerCase().includes("s"));

// Log the boolean array
console.log(containsS);

// Creating Object Mapping

const namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index]; // map each name to the province at the same index
  return acc;
}, {});

console.log(namesToProvinces);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Advanced exercises

// 1. Log Products: Iterate over the products array, logging each product name.
console.log(
  "Product Names:",
  products.map((product) => product.product)
);

// 2. Filter by Name Length: Filter out products with names longer than 5 characters.
console.log(
  "Products with names <= 5 characters:",
  products.filter((product) => product.product.length <= 5)
);

// 3. Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
console.log(
  "Total Price of Products with valid prices:",
  products
    .filter((product) => product.price.trim() !== "") // Filter out empty prices
    .map((product) => ({ ...product, price: Number(product.price) })) // Convert string prices to numbers
    .reduce((total, product) => total + product.price, 0) // Calculate total
);

// 4. Concatenate Product Names: Use reduce to concatenate all product names into a single string.
console.log(
  "Concatenated Product Names:",
  products.reduce((acc, product) => acc + product.product + " ", "").trim()
);

// 5. Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const validPrices = products
  .filter((product) => product.price.trim() !== "") // Filter valid prices
  .map((product) => ({ ...product, price: Number(product.price) })); // Convert to numbers

const highest = validPrices.reduce((max, product) =>
  product.price > max.price ? product : max
);
const lowest = validPrices.reduce((min, product) =>
  product.price < min.price ? product : min
);

console.log(`Highest: ${highest.product}. Lowest: ${lowest.product}.`);

// 6. Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
console.log(
  "Recreated products object with 'name' and 'cost':",
  products.reduce((acc, { product, price }) => {
    acc.push({ name: product, cost: price });
    return acc;
  }, [])
);
