const express = require('express')
const { getAllTrash, getTrashById, createTrash, updateTrash, deleteTrash } = require('../controllers/trashController')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')

router.get('/trash', authMiddleware(['user','collector']),getAllTrash)
router.get('/trash/:id', authMiddleware(['user','collector']), getTrashById)
router.post('/trash', authMiddleware(['user']),createTrash)
router.put('/trash/:id', authMiddleware(['user']), updateTrash)
router.delete('/trash/:id', authMiddleware(['user']),deleteTrash)

module.exports = router
