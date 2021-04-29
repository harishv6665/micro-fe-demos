# This is the demo for micro frontend implementation using [Federated modules](https://webpack.js.org/concepts/module-federation) (a webpack 5 plugin).

## There are three apps in the repo

- Shell: This is the host app.
- Home: Home module.
- Home: Contacts module.

### Run the below in every app and open [http://localhost:3000](http://localhost:3000/)
```
npm i && npm start
```
### You will be landing in the Host page from which you can load Home and contact pages by navigating using links.

### You can switch to branch ```with-redux``` for demo of micro frontends with redux store implementation.