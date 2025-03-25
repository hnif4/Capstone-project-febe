const trashModel = require('../models/trashModel')
const response = require('../utils/response')

const getAllTrash = (req, res) => {
    trashModel.getAll((err, result) => {
        if (err) {
            console.error("Database Fetch Error:", err)
            return response(500, null, "Error retrieving data", res)
        }
        response(200, result, "Data retrieved successfully", res)
    })
}

const getTrashById = (req, res) => {
    const { id } = req.params
    trashModel.getById(id, (err, result) => {
        if (err) {
            return response(500, null, "Error retrieving data", res)
        }
        if (result.length === 0) {
            return response(404, null, "Data not found", res)
        }
        response(200, result[0], "Data retrieved successfully", res)
    })
}

const createTrash = (req, res) => {
    try {
        const user_id = req.user.id
        const { name, image, category, weight, location, status } = req.body

        if (!name || !image || !category || !weight || !location || !status) {
            return response(400, null, "Missing required fields", res)
        }

        trashModel.create(user_id, name, image, category, weight, location, status, (err, result) => {
            if (err) {
                console.error("Database Insert Error:", err)
                return response(500, null, "Error adding data", res)
            }
            response(201, result, "Data added successfully", res)
        })
    } catch (error) {
        console.error("Error in createTrash:", error)
        response(500, null, "Internal server error", res)
    }
}


const updateTrash = (req, res) => {
    const { id } = req.params
    const user_id = req.user.id
    const { name, image, category, weight, location, status } = req.body

    if (!name || !image || !category || !weight || !location || !status) {
        return response(400, null, "Missing required fields", res)
    }

    trashModel.getById(id, (err, results) => {
        if (err) {
            console.error("Database Query Error:", err)
            return response(500, null, "Error retrieving data", res)
        }

        if (results.length === 0) {
            return response(404, null, "Trash not found", res)
        }

        const trash = results[0]

        // Pastikan hanya pemilik sampah yang bisa update
        if (trash.user_id !== user_id) {
            return response(403, null, "Unauthorized to update this trash", res)
        }

        // Update tanpa mengubah user_id
        trashModel.update(id, trash.user_id, name, image, category, weight, location, status, (err, result) => {
            if (err) {
                console.error("Database Update Error:", err)
                return response(500, null, "Error updating data", res)
            }
            if (result.affectedRows === 0) {
                return response(404, null, "Data not found", res)
            }
            response(200, result, "Data updated successfully", res)
        })
    })
}


const deleteTrash = (req, res) => {
    const { id } = req.params

    trashModel.delete(id, (err, result) => {
        if (err) {
            return response(500, null, "Error deleting data", res)
        }
        if (result.affectedRows === 0) {
            return response(404, null, "Data not found", res)
        }
        response(200, null, "Data deleted successfully", res)
    })
}

module.exports = { getAllTrash, getTrashById, createTrash, updateTrash, deleteTrash }