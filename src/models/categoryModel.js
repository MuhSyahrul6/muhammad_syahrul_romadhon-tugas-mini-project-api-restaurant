const db = require("../../db/config");

const categoryModel = {};

categoryModel.getAll = (callback) => {
    var rowData
    const query = db.all("SELECT * FROM categories", (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
    console.log(rowData);
    return query
};

categoryModel.create = (data) => {
    return db.run(`INSERT INTO categories (name) VALUES ('${data.name}')`, (err, rows) => {
        if (err) {
            throw err;
        } else {
            return rows;
        }
    });
}

categoryModel.findById = (id, callback) => {
    return db.get(`SELECT * FROM categories WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

categoryModel.update = (id, data, callback) => {
    return db.run(`UPDATE categories SET name = '${data.name}' WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

categoryModel.delete = (id, callback) => {
    return db.run(`DELETE FROM categories WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

module.exports = categoryModel;
