# Namaste React Notes:

* **Q1. What are CDNs?**
* **Q2. Explain crossorigin attribute used in script tag in React cdn links?**
* **Q3. Difference between development and production links react cdn?**

**Ans1.** CDN stands for Content Delivery Network.
It’s a network of servers located across the globe that store and deliver static files (like JavaScript, CSS,
images) to users based on their geographic location.
Instead of downloading a library like React from your own server, you can link to a CDN version 
so the file is fetched from a server close to the user for faster loading.
Example in React:

```<script src="https://unpkg.com/react@18/umd/react.development.js"></script>```

**Advantages:**
 * **a)Speed** — Files are served from the nearest server to the user.
* **b)Caching** — If the user has visited another site using the same CDN link, 
the file may already be cached in their browser.
Less load on your own server.

**Ans2.** When React is loaded via a CDN, browsers treat it as coming from a different origin (different domain).
The crossorigin attribute controls CORS (Cross-Origin Resource Sharing) behavior for that script.
In React CDN links, you often see:

```<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>```

**Purpose:**
It allows the browser to fetch the script with CORS enabled so that error stack traces will include 
the original file name and line numbers, even if the file is from another domain.
Without it, you might see "Script error." without details in the console.

**Common values:**

**crossorigin="anonymous"** → No credentials (cookies) sent.
**crossorigin="use-credentials"** → Sends credentials (cookies), rarely used for CDNs.
React’s official docs recommend crossorigin for better debugging.


**Ans3.** React provides two UMD builds via CDN:
| Mode |  Example URL | Purpose |
|----------|----------|----------|
| Development    |  https://unpkg.com/react@18/umd/react.development.js     |  Full version with warnings, error messages, and developer tools   support. Slower because of extra checks.    |
| Production    | https://unpkg.com/react@18/umd/react.production.min.js     | Minified, optimized, and stripped of development warnings. Smaller size, faster load.   |
 		

**Key differences**:

* **Size:** Production is smaller (minified).
* **Performance:** Production is faster (no extra debug checks).
* **Debug Info:** Development has helpful warnings (like “Each child in a list should have a unique key”) — production removes them.

**Use case:**
**Development:** while building the app locally.
**Production:** for live/production sites.