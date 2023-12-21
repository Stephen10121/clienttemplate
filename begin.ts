console.log("Hello World.");
import Database from 'better-sqlite3';
import { DB_PATH } from "./variables";
import readlineCreator from "node:readline";

const db = new Database(DB_PATH, { verbose: console.log });

const readline = readlineCreator.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let password = "";
let name = "";

function setupRootUser() {
    const createTable = `CREATE TABLE IF NOT EXISTS user (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_name text NOT NULL,
        user_rname text NOT NULL,
        user_password text NOT NULL
    );`
    db.exec(createTable);

    const stmt = db.prepare('INSERT INTO user (user_name, user_rname, user_password) VALUES (?, ?, ?)');
    const info = stmt.run('root', name, password);

    console.log(info.changes); // => 1
}

readline.question(`Password for the root user: `, res => {
    password = res;
    console.log(`Password saved.`);
    readline.question(`Full name for the root user: `, res => {
        name = res;
        console.log(`Name saved.`);
        readline.close();
        setupRootUser();
    });
});