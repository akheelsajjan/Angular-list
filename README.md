# PrivateCircle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

# Installation

Run `npm install` to install node-packages

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## DB.JSON
In `package.json` -->  `dependencies` --> Add `"server": "json-server --watch db.json --port 5000"`
Run `json-server --watch db.json --port 5000` to get data form json server. PLEASE USE FOR PORT 5000,

## Others

Under `tsconfig.json` --> `angularCompilerOptions` add ` "strictPropertyInitialization": false` to prevent type checking
