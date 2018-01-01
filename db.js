const fs = require('fs');

module.exports.open = (filename) => {
    try {
        const db = fs.readFileSync(filename);
        notes = JSON.parse(db);
        return notes;
    } catch (err) {
        return [];
    }
}

module.exports.save = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content));
    return content;
};

module.exports.process = operation => {
    try {
        operation();
        console.log('Process executed with success');
    } catch (err) {
        console.log(err);
    }
}

module.exports.get = (filename, title) => {
    const notes = this.open(filename);
    return notes.find(note => note.title === title);
}

module.exports.remove = (filename, title) => {
    const notes = this.open(filename);
    const data = notes.filter(note => note.title !== title);
    this.save(filename, data);
    return notes.length === data.length;
};
