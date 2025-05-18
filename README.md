# testgenx

**testgenx** is the developer‑friendly way to create realistic, deterministic mock data at scale. Define the shape of your payload once—generate one record or a million with the same call.

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
7. [Contributing](#contributing)
8. [License](#license)

---

## Installation

```bash
# npm
npm install testgenx

# yarn
yarn add testgenx

# pnpm
pnpm add testgenx
```

---

## Quick start

```js
import { generateMock } from "testgenx"; // ESM
// const { generateMock } = require('testgenx'); // CommonJS

const userSchema = {
  name: "name",
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
[
  {
    "name": "Grace Wilson",
    "email": "4pBqR@gmail.com",
    "isActive": false, 
  },
  {
    "name": "Oscar Taylor",
    "email": "TzYlu@outlook.com",
    "isActive": true,
  }
]
```

---

## Schema syntax

| Token       | Description                                       |
| ----------- | ------------------------------------------------- |
| `'string'`  | Random alphanumeric string (length 10)            |
| `'number'`  | Integer in `[0, 100]` (custom range coming soon)  |
| `'boolean'` | `true` or `false`                                 |
| `'email'`   | Random address (`<5 chars>@<common domain>`)   |
| `'name'`    | Random full name (10,000+ first/last combos)         |

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

MIT © 2025 [Denex](https://github.com/denex-a-poulose)
