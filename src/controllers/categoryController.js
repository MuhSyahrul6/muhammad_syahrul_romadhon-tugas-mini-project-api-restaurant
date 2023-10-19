const categoryModel = require("../models/categoryModel");

const categoryController = {}
categoryController.getAllCategories = (req, res) => {
    const categories = categoryModel.getAll((err, rows) => {
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

categoryController.getCategoryById = (req, res) => {
    const { id } = req.params
    const categories = categoryModel.findById(id, (err, rows) => {
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

categoryController.createCategory = (req, res) => {
    const { name } = req.body;

    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name harus berupa huruf dan wajib diisi' });
    }

    try {
        const createCategory = categoryModel.create(req.body)
        return res.json({
            message: "Data berhasil Ditambahkan"
        })
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
}

categoryController.updateCategory = (req, res) => {
    const { name } = req.body;

    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name harus berupa huruf dan wajib diisi' });
    }

    try {
        const updateCategory = categoryModel.update(req.params.id, req.body, (err, categories) => {
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

categoryController.deleteCategory = (req, res) => {
    try {
        const deleteCategory = categoryModel.delete(req.params.id, (err, rows) => {
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

module.exports = categoryController;
