const menuModel = require("../models/menuModel");

const menuController = {}
menuController.getAllMenus = (req, res) => {
    const menus = menuModel.getAll((err, rows) => {
        if (err) {
            throw err;
        } else {
            res.json({
                status: "OK",
                data: rows
            });
        }
    });
}

menuController.getMenusById = (req, res) => {
    const { id } = req.params
    const menu = menuModel.findById(id, (err, rows) => {
        if (err) {
            throw err
        } else {
            res.json({
                status: "OK",
                data: rows
            })
        }
    })
}

menuController.createMenu = (req, res) => {
    const { item, price } = req.body;
    if (typeof item !== 'string' || item.trim() === '') {
        return res.status(400).json({ error: 'Item harus berupa huruf dan wajib diisi' });
    }
    if (typeof price !== 'number' || isNaN(price) || price <= 0) {
        return res.status(400).json({ error: 'Price harus berupa angka dan wajib diisi' });
    }
    try {
        const createMenu = menuModel.create(req.body)
        return res.json({
            status: "OK",
            message: "Data berhasil Ditambahkan"
        })
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
}

menuController.updateMenu = (req, res) => {
    const { item, price } = req.body;
    if (typeof item !== 'string' || item.trim() === '') {
        return res.status(400).json({ error: 'Item harus berupa huruf dan wajib diisi' });
    }
    if (typeof price !== 'number' || isNaN(price) || price <= 0) {
        return res.status(400).json({ error: 'Price harus berupa angka dan wajib diisi' });
    }

    try {
        const updateMenu = menuModel.update(req.params.id, req.body, (err, menus) => {
            if (err) {
                throw err
            } else {
                return res.json({
                    status: "OK",
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

menuController.deleteMenu = (req, res) => {
    try {
        const deleteMenu = menuModel.delete(req.params.id, (err, rows) => {
            if (err) {
                throw err
            } else {
                return res.json({
                    status: "OK",
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

module.exports = menuController;
