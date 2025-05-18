const { firstNames, lastNames } = require("./names");

function generateMock(schema, count = 1) {
  if (count === 1) {
    const result = {};
    for (const key in schema) {
      result[key] = mockValue(schema[key]);
    }
    return result;
  }

  const results = [];
  for (let i = 0; i < count; i++) {
    const result = {};
    for (const key in schema) {
      result[key] = mockValue(schema[key]);
    }
    results.push(result);
  }
  return results;
}

function mockValue(type) {
  switch (type) {
    case "string":
      return generateRandomString();
    case "number":
      return generateRandomNumber(0, 100);
    case "boolean":
      return generateRandomBoolean();
    case "email":
      return generateRandomEmail();
    case "name":
      return generateRandomName();
    default:
      return null;
  }
}

function generateRandomString(length = 10) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomBoolean() {
  return Math.random() > 0.5;
}

function generateRandomEmail() {
  const domain = ["gmail.com", "yahoo.com", "outlook.com"];
  const randomName = generateRandomString(5);
  return `${randomName}@${domain[Math.floor(Math.random() * domain.length)]}`;
}

function generateRandomName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

module.exports = { generateMock };
