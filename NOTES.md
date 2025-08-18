# Namaste React Notes:

 **Q1. What are CDNs?**
 
 **Q2. Explain crossorigin attribute used in script tag in React cdn links?**

**Q3. Difference between development and production links react cdn?**

**Q4. What is package.json?**

**Q5. What is the difference between dependencies and dev dependencies?**

**Q6. What is the difference between caret ^ and tilde ~ in package.json?**

**Q7. What is the difference between package.json and package-lock.json?**

**Q8. What are transitive dependencies?**

**Q9. Why we shouldn't use cdn links to use react generally?**

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



**Ans4.** You can think of package.json as a configuration file for your React/Node project.

It’s a JSON (JavaScript Object Notation) file.

It configures your project by listing:

Name, version, author → basic project info
Dependencies → which libraries to install

Scripts → which commands you can run

DevDependencies → tools only for development

package.json is the main configuration file for a Node.js or React project.



**Ans5.** Dependencies vs DevDependencies
1. Dependencies ("dependencies")

These are the libraries your app needs to actually run in production.

Without them, your app won’t work.

Example in React:

"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "axios": "^1.6.0"
}


react and react-dom → needed for your React app to run.

axios → if your app makes API calls, you need it when the app runs.

Installed with:

npm install package-name

2. DevDependencies ("devDependencies")

These are the tools you only need while developing the app, not when users are running it.

They help with building, testing, linting, compiling, etc.

Example:

"devDependencies": {
  "vite": "^5.0.0",
  "eslint": "^8.50.0",
  "jest": "^29.0.0"
}


vite → for bundling and running a local dev server.

eslint → to check your code style.

jest → to test your app.

Installed with:

npm install package-name --save-dev

**Ans6.**
* ~version “Approximately equivalent to version”, will automatically update you to all future patch versions that are backwards-compatible, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

* ^version “Compatible with version”, will automatically update you to all future minor/patch versions that are backwards-compatible, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.

**Ans7.** **package.json** → The configuration file where you (the developer) say:
“I need React version ^18.2.0”

**package-lock.json** → The exact recipe npm generates, saying:
“Install React 18.2.0 and here are the exact versions of all its sub-dependencies too.”

package.json = what you want.

package-lock.json = the exact versions you actually got.

**Ans8.** 
* When you install a package, that package itself often depends on other packages.

* These “dependencies of dependencies” are called transitive dependencies.

Example:

* You install react-scripts.

* react-scripts depends on webpack.

* webpack depends on schema-utils.

Here, webpack and schema-utils are transitive dependencies (you didn’t install them directly, but they got installed automatically).

**Ans9**
While React can be used via a CDN link, in real-world projects we generally avoid it. Reasons:

1. No build tools → With npm, you can use modern tools (Webpack, Vite, Babel) that optimize your code. CDN doesn’t allow that easily.

2. No dependency management → npm automatically handles all dependencies, versions, and transitive dependencies. With CDN, you must manually update links.

3. Caching/versioning issues → If CDN link updates to a newer version, your app might break unexpectedly.

4. Bundle optimization → npm build tools can tree-shake and minify. CDN links load the whole React file every time.

Not scalable → Good for small demos or learning, but for professional projects, npm-based setup is far better.


CDN links = fine for small demos, learning, or quick prototypes.

npm (package.json) = better for real apps (control, stability, optimization).