
# Meergo JavaScript SDK

The official JavaScript SDK for sending events to the Meergo Customer Data Platform (CDP).

## 🚀 Quick Start

### 📦 Install via npm

```bash
npm install @meergo/javascript-sdk
````

Then import it in your application:

```js
import { Meergo } from '@meergo/javascript-sdk'

const meergo = new Meergo('your-write-key', 'https://example.com/api/v1/events')
meergo.page('Home')
```

### 🌐 Use via CDN

#### ✅ Compatible with all browsers (ES5, IIFE):

```html
<script src="https://cdn.jsdelivr.net/npm/@meergo/javascript-sdk/dist/meergo.min.js"></script>
<script>
	const meergo = new Meergo('your-write-key', 'https://example.com/api/v1/events')
	meergo.page('Home')
</script>
```

#### ✅ Modern browsers (ES6 module):

```html
<script type="module">
	import { Meergo } from 'https://cdn.jsdelivr.net/npm/@meergo/javascript-sdk/dist/meergo.es6.min.js'

	const meergo = new Meergo('your-write-key', 'https://example.com/api/v1/events')
	meergo.page('Home')
</script>
```

> 💡 Replace `"your-write-key"` and the endpoint URL with the values provided by Meergo.

## 📚 Documentation

For full usage, advanced configuration, and API reference, visit the
👉 [Meergo JavaScript SDK Documentation](https://localhost:8080/developers/javascript-sdk)

## 🛠️ For SDK Developers

This section is intended for contributors working on the SDK codebase.

### Install dependencies

You’ll need:

* [Node.js](https://nodejs.org/) (with npm)
* [Deno](https://deno.com/)

Run:

```sh
npm install
```

### Format files

```sh
deno fmt
```

### Build `dist/meergo.min.js`

```sh
deno task build
```

Or step-by-step:

```sh
deno task bundle
deno task transpile
deno task minify
```

* `bundle`: bundles the SDK to `build/meergo.bundle.js`
* `transpile`: transpiles to ES5 and creates `build/meergo.es5.js`
* `minify`: minifies into `dist/meergo.min.js`

### Build ES6 and CJS modules

```sh
deno task build:es6     # Builds dist/meergo.es6.min.js
deno task build:cjs     # Builds dist/meergo.bundle.cjs
```

### Run tests

```sh
deno test
```

### Before committing

Use this to format, test, and build before commits:

```sh
deno task commit
```

## 📄 License

[MIT License](LICENSE)
© 2025 [Open2b](https://www.open2b.com/)
