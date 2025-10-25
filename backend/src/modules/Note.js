import mongoose from "mongoose";

// 1st : Create a Schema
// 2nd : Create Model based on the Schema

const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
    },
    {
        timestamps: true //Created at , Updated at
    }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;