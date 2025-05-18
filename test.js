// test.js
const { generateMock } = require("./src/index.js");

// Example schema
const schema = {
  name: "name",
  email: "email",
  age: "number",
  isActive: "boolean",
};

// Generate mock data
const mockData = generateMock(schema, 20000);
console.log(mockData);
