const customerModel = require("../models/customerModel");

const customerController = {}
customerController.getAllCustomers = async (req, res) => {
    const customers = await customerModel.getAll();
    res.json({
        status: "OK",
        data: customers,
    });
}

customerController.getCustomersById = (req, res) => {
    const { id } = req.params
    const customer = customerModel.findById(id, (err, rows) => {
        if (err) {
            throw err
        } else {
            res.json({
                status: "OK",
                data: rows,
            })
        }
    })
}

customerController.createCustomer = (req, res) => {
    const { name, address, email } = req.body;

    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name harus berupa huruf dan wajib diisi' });
    }
    if (typeof email !== 'string' || email.trim() === '') {
        return res.status(400).json({ error: 'Email harus berupa huruf dan wajib diisi' });
    }

    try {
        const createCustomer = customerModel.create(req.body)
        return res.json({
            message: "Data berhasil Ditambahkan"
        })
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
}

customerController.updateCustomer = (req, res) => {
    const { name, address, email } = req.body;

    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name harus berupa huruf dan wajib diisi' });
    }
    if (typeof email !== 'string' || email.trim() === '') {
        return res.status(400).json({ error: 'Email harus berupa huruf dan wajib diisi' });
    }

    try {
        const updateCustomer = customerModel.update(req.params.id, req.body, (err, customer) => {
            if (err) {
                throw err
            } else {
                return res.json({
                    message: "Data Berhasil Diperbarui",
                })
            }
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

customerController.deleteCustomer = (req, res) => {
    try {
        const deleteCustomer = customerModel.delete(req.params.id, (err, rows) => {
            if (err) {
                throw err
            } else {
                return res.json({
                    message: "Data Berhasil Dihapus"
                })
            }
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

module.exports = customerController;
