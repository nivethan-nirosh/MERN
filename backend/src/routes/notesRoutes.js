// const express = require('express');
import express from "express";
import { getAllNotes, createNotes, updateNotes, deleteNotes, fetchNoteById } from '../controllers/notesControllers.js';

const router = express.Router();

router.get('/', getAllNotes);
router.get('/:no', fetchNoteById);
router.post('/', createNotes);
router.put('/:id', updateNotes);
router.delete('/:id', deleteNotes);

// module.exports = router;
export default router;