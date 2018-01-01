const yargs = require('yargs');

/**
 * Properties
 * demand - Allow to define a certain argument as required
 * alias - Allow to define an alias for a certain command, -t instead of --title for example
 */

/**
 * methods
 * command - Allow to define some configuration about the commands that can be executed
 * help - Allow typing --help when running the app, return some useful information
 */

const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body = {
    describe: 'Content of the note',
    demand: false,
    alias: 'b'
};

module.exports.config = () => {
    return yargs
        .command('add', 'Add a new note', { title, body })
        .command('list', 'List all notes')
        .command('read', 'Read a note', { title })
        .command('remove', 'Remove a note', { title })
        .help()
        .argv;
}