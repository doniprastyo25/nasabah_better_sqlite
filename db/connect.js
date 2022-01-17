'use strict'
const Database = require('better-sqlite3');
const db = new Database('dbnas.db', { verbose: console.log });

module.exports = {
  db
}