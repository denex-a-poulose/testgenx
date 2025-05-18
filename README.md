# testgenx

testgenx is a simple yet powerful mock data generator for developers. It allows you to quickly generate realistic dummy data for API testing, form validation, or other development tasks based on customizable schemas. Whether you're testing endpoints or need mock data for a project, this package helps you generate the data you need quickly and efficiently.

## ✨ Highlights

- **Schema‑driven** – declare your data model in plain JavaScript or JSON.
- **Bulk generation** – `generateMock(schema, count)` returns an array of any size in constant time.
- **Rich primitives** – out‑of‑the‑box support for `string`, `number`, `boolean`, `name`, `email`, and more.
- **Zero dependencies** – lightweight (~2 kB gzipped) and blazingly fast.

---

## Table of contents

1. [Installation](#installation)
2. [Quick start](#quick-start)
3. [Schema syntax](#schema-syntax)
4. [API](#api)
5. [Contributing](#contributing)
6. [License](#license)

---

## Installation

<<<<<<< HEAD

````bash
# npm
npm install testgenx

# yarn
yarn add testgenx

# pnpm
pnpm add testgenx
=======
You can easily install `testgenx` via npm:

```bash
npm install testgenx
>>>>>>> d1708b3f8b29a3e2e0276e4ce91f51c6ac09b61a
````

---

## Quick start

```js
<<<<<<< HEAD
import { generateMock } from "testgenx"; // ESM
// const { generateMock } = require('testgenx'); // CommonJS

const userSchema = {
  name: "name",
=======
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
>>>>>>> d1708b3f8b29a3e2e0276e4ce91f51c6ac09b61a
  email: "email",
  isActive: "boolean",
};

// One object
const single = generateMock(userSchema);

// 500 records
const batch = generateMock(userSchema, 500);

console.log(batch.slice(0, 2));
```

```json
<<<<<<< HEAD
[
  {
    "name": "Grace Wilson",
    "email": "4pBqR@gmail.com",
    "isActive": false
=======
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
>>>>>>> d1708b3f8b29a3e2e0276e4ce91f51c6ac09b61a
  },
  {
    "name": "Oscar Taylor",
    "email": "TzYlu@outlook.com",
    "isActive": true
  }
]
```

---

## Schema syntax

| Token       | Description                                      |
| ----------- | ------------------------------------------------ |
| `'string'`  | Random alphanumeric string (length 10)           |
| `'number'`  | Integer in `[0, 100]` (custom range coming soon) |
| `'boolean'` | `true` or `false`                                |
| `'email'`   | Random address (`<5 chars>@<common domain>`)     |
| `'name'`    | Random full name (10,000+ first/last combos)     |

---

## API

### `generateMock(schema, count = 1)`

| Param  | Type     | Default | Description                   |
| ------ | -------- | ------- | ----------------------------- |
| schema | `object` | —       | Shape of the data to generate |
| count  | `number` | `1`     | How many objects to return    |

- Returns `` if `count === 1`, otherwise ``.
- The function is synchronous and memory‑efficient.

---

## Contributing

We welcome PRs! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup, style guide, and commit conventions.

---

## License

MIT © 2025 [Denex](https://github.com/denex-a-poulose/)
