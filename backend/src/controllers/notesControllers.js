import Note from "../modules/Note.js";

export async function getAllNotes(_,res){//req not used so we can declared as _
    try {
        const notes = await Note.find().sort({createdAt : -1});
        res.status(200).json(notes);
        
    } catch (error) {
        console.error("Error in getAllNotes :",error);
        res.status(500).json({message:"Internal Server Error: getAllNotes"});
        
    }
    
}

export async function createNotes(req, res){
    try {
        const { title, content} = req.body;
        const note = new Note({ title, content}); 

        const savedNote = await note.save();
        res.status(201).json(savedNote);

    } catch (error) {
        console.error("Error in createNotes :",error);
        res.status(500).json({ message:"Internal Server Error: createNotes" });
        
    }
}

export async function updateNotes(req, res){
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,
            {title,content},
            {
                new:true,
            }
        );//this id is same as defined in the noteRoutes -> /:id
        if(!updateNotes) return res.status(404).json({message: "Note Not Found"});
        res.status(201).json({message:"Note Updated Successfully !"});
        
    } catch (error) {
        console.log("Error in updating Note",error);
        res.status(500).json({message: "Internal Server Error : updateNote"});
        
    }
}

export async function deleteNotes(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message:"Note not found"});
        res.status(201).json({message: "Note Deleted Successfully"});
        
        
    } catch (error) {
        console.log("Error Deleting Note ",error);
        res.status(500).json({message: "Internal Server Error: deleteNote"});
        
    }
}

export async function fetchNoteById(req,res){
    try {
        const foundNote = await Note.findById(req.params.no);
        res.status(200).json(foundNote);

        
    } catch (error) {
        console.log("Error Finding Note", error);
        res.status(500).json({message:"Internal Server Error : fetchNote"});
    }

}

// export function getAllNotes(req,res){
//     res.status(200).send("You just got the notes");
// }