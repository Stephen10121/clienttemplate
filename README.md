# Client Template
First create a database file like "index.sqlite" in a directory and add the path to the variables.ts file that you need to create in the root directory of the project. The variables file should contian this: 
```js
export const DB_PATH = "./index.sqlite"; //Path to the database.
```
To initialize all the variables and config, run the begin command.
```
npm run begin
```