# Ecoleta
Register an searcher for colect points

## Introduction

This application was made with [NodeJs](https://nodejs.org/en/download/), it uses
express as the main base in back-end and front-end, in mobile is used
[react native](https://reactnative.dev/) in [expo](https://expo.io/) default application.


## Installation

By default, NodeJs use [npm](https://www.npmjs.com/) package managerand the following command,
or you can use [yarn](https://yarnpkg.com/) to install all the dependencies in all
of `package.json` files of folders.

```bash
npm
```

or

```bash
yarn
```

## Usage

To run it you need to certify the IP hosts in your devices, and change "YOUR_HOST"
of [api.ts](https://github.com/kauereblin/ecoleta/blob/master/web/src/services/api.ts)
file in web folder, [ItemsController.ts](https://github.com/kauereblin/ecoleta/blob/master/backend/src/controllers/ItemsController.ts)
and [PointsController.ts](https://github.com/kauereblin/ecoleta/blob/master/backend/src/controllers/PointsController.ts)
in back-end folder, finaly [api.ts](https://github.com/kauereblin/ecoleta/blob/master/mobile/src/services/api.ts) in mobile.

You discover the IP of all in expo server running the next command in mobile folder:

```bash
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

> Obs: I don't know how to do good readme's...