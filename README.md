The repo is used to reproduce a parcel bundler error.

```
$ npm install
$ ./node_modules/.bin/parcel build --no-cache index.html

🚨 Build failed.

@parcel/bundler-experimental: The expression evaluated to a falsy value:

  (0, _assert().default)(bundle !== 'root' && bundle != null)
```