
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
<script src="https://cdn.meergo.com/meergo.min.js"></script>
<script>
	const meergo = new Meergo('your-write-key', 'https://example.com/api/v1/events')
	meergo.page('Home')
</script>
```

#### ✅ Modern browsers (ES6 module):

```html
<script type="module">
	import { Meergo } from 'https://cdn.meergo.com/meergo.es6.min.js'

	const meergo = new Meergo('your-write-key', 'https://example.com/api/v1/events')
	meergo.page('Home')
</script>
```

> 💡 Replace `"your-write-key"` and the endpoint URL with the values provided by Meergo.

## 📚 Documentation

For full usage, advanced configuration, and API reference, visit the
👉 [Meergo JavaScript SDK Documentation](https://localhost:8080/developers/javascript-sdk)

## 📄 License

[MIT License](LICENSE)
© 2025 [Open2b](https://www.open2b.com/)
