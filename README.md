# whisk-polls

> Polls for the whisk

## Setup
- set the url in the mounted method for the vue instance.
- response should look like

``` json
{
  "auth": true,
  "authUrl": "https://example.com/authorize",
  "logoUrl": "https://example.com/logo.png"
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
