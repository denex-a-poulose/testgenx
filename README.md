# testgenx

`testgenx` is a simple yet powerful mock data generator for developers. It allows you to quickly generate realistic dummy data for API testing, form validation, or other development tasks based on customizable schemas. Whether you're testing endpoints or need mock data for a project, this package helps you generate the data you need quickly and efficiently.

## Features

- **Customizable Mock Data**: Generate realistic data for various fields such as names, emails, numbers, and more.
- **Schema-Based Generation**: Define the structure of the data using a simple schema and let the package generate it for you.
- **Easy to Use**: Simple API to generate mock data with just a few lines of code.
- **No Dependencies**: Lightweight and fast with minimal dependencies.

## Installation

You can easily install `testgenx` via npm:

```bash
npm install testgenx
```

## Usage

Once installed, you can start generating mock data by using the `generateMock()` function.

### Basic Example

```js
const { generateMock } = require("testgenx");

const schema = {
  name: "name", // Will generate a random name
  email: "email", // Will generate a random email
  age: "number", // Will generate a random number
};

const mockData = generateMock(schema);
console.log(mockData);
```

### Example Output:

```json
{
  "name": "John Doe",
  "email": "johndoe123@example.com",
  "age": 45
}
```

### Supported Data Types

You can define the data types in your schema, and `testgenx` will generate the corresponding data:

- **String**: Generates random text (e.g., `name`, `string`).
- **Email**: Generates a random email address (e.g., `email`).
- **Number**: Generates a random number (e.g., `number`).
- **Boolean**: Generates a random boolean value (`true` or `false`) (e.g., `boolean`).
- **Custom Values**: You can also create custom schemas for more complex data generation.

### Example Schema with Various Data Types:

```js
const schema = {
  username: "string",
  email: "email",
  age: "number",
  isActive: "boolean",
};

const mockData = generateMock(schema);
console.log(mockData);
```

### Output:

```json
{
  "username": "qwea123",
  "email": "user123@example.com",
  "age": 29,
  "isActive": true
}
```

## Advanced Features

### Custom Data Generation

You can extend `testgenx` by adding custom generation logic for more complex use cases.

```js
const schema = {
  customField: () => "Custom Data", // Custom generation function
};

const mockData = generateMock(schema);
console.log(mockData);
```

### Nested Objects

You can also generate nested data by specifying sub-schemas inside your main schema:

```js
const schema = {
  user: {
    name: "name",
    email: "email",
    profile: {
      age: "number",
      active: "boolean",
    },
  },
};

const mockData = generateMock(schema);
console.log(mockData);
```

## API

### `generateMock(schema)`

- **Parameters**:
  - `schema` (Object): An object where the keys are the names of fields, and the values represent the types of data (e.g., `'name'`, `'email'`, `'number'`, etc.).
- **Returns**:
  - `Object`: The generated mock data based on the schema.

### Example of Available Data Types:

- `'name'`: Generates a random name.
- `'email'`: Generates a random email.
- `'number'`: Generates a random number.
- `'boolean'`: Generates a random boolean value (`true` or `false`).
- `'string'`: Generates a random string of characters.
- Custom function: You can also provide custom functions to generate specific values.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
