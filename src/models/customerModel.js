const db = require("../../db/config");

const customerModel = {};
customerModel.getAll = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM customer";
        db.all(query, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })

    })
}

customerModel.create = (data) => {
    return db.run(`INSERT INTO customer (name, address, email) VALUES ('${data.name}', '${data.address}', '${data.email}')`, (err, rows) => {
        if (err) {
            throw err;
        } else {
            return rows;
        }
    });
}

customerModel.findById = (id, callback) => {
    return db.get(`SELECT * FROM customer WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

customerModel.update = (id, data, callback) => {
    return db.run(`UPDATE customer SET name = '${data.name}', address = '${data.address}', email = '${data.email}' WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

customerModel.delete = (id, callback) => {
    return db.run(`DELETE FROM customer WHERE id = ${id}`, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

module.exports = customerModel;
