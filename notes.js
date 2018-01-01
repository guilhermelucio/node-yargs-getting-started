const db = require('./db');

const DB = 'notes-data.json';

const hasDuplicatedNotes = (notes, title) => {
    return notes.filter(note => note.title === title).length > 0;
};

module.exports.add = (title, body) => {
    const note = { title, body };
    const notes = db.open(DB);
    if (hasDuplicatedNotes(notes, title)) throw 'The title already exists!!!';
    notes.push(note);
    db.save(DB, notes);
}

module.exports.getAll = () => {
    return db.open(DB);
};

module.exports.get = title => {
    return db.get(DB, title);
};

module.exports.remove = (title) => {
    if (db.remove(DB, title)) throw 'Nothing was removed';
}
