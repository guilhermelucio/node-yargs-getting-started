/**
 * yargs
 * It's a helper to manage inputs (arguments) passed when running the app
 */

/**
 * COMMANDS
 * node app.js
 *      list
 *      add --title="Some title" --body="Some description"
 *      remove --title="Some title"
 *      read --title="Some title"
 *      --help
 */

console.log('[app] Starting app');

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const notes = require('./notes');
const db = require('./db');
const args = require('./args');

const argv = args.config();
const command = argv._[0];

switch (command) {
    case 'add':
        db.process(_ => notes.add(argv.title, argv.body));
        break
    case 'list':
        console.log(notes.getAll());
        break;
    case 'read':
        console.log(notes.get(argv.title));
        break;
    case 'remove':
        db.process(_ => notes.remove(argv.title));
        break;
    default:
        console.log('Command not recognized');
}

