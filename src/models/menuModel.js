const db = require("../../db/config")

const menuModel = {}
menuModel.getAll = (callback) => {
    var rowData
    const query = db.all("SELECT * FROM menu", (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
    console.log(rowData);
    return query
};

// lanjutkan disini
menuModel.create = (data) => {
    return db.run(`INSERT INTO menu (item, price) VALUES ('${data.item}', '${data.price}' )`, (err, rows) => {
        if (err) {
            throw err;
        } else {
            return rows;
        }
    });
}

menuModel.findById = (id, callback) => {
    return db.get(`SELECT * FROM menu WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}


menuModel.update = (id, data, callback) => {
    return db.run(`UPDATE menu SET item = '${data.item}', price = '${data.price}' WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

menuModel.delete = (id, callback) => {
    return db.run(`DELETE FROM menu WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

module.exports = menuModel
