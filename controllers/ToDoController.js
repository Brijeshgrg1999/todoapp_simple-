//define how data is saved on db 

const ToDoModel =require("../models/ToDoModel.js"); 

module.exports.getToDo = async(req,res )=>{
    const toDo = await ToDoModel.find() ; 
    res.send(toDo) ; 
}

module.exports.saveToDo = async(req,res )=>{
    const { text } = req.body ; 
    ToDoModel.create({text}).then((data)=>{
        console.log("added sucessfully ..");
        res.send(data) ; 
    }) ; 
   
}

module.exports.updateToDo = async(req, res)=>{
    const { _id , text } = req.body ; 
    ToDoModel.findByIdAndUpdate(_id , {text})
    .then(()=>{res.send("updated")})
    .catch((err)=>{console.log(err);})
}


module.exports.deleteToDo = async (req,res)=>{
    const { _id }= req.body ; 
    ToDoModel.findByIdAndDelete(_id)
    .then(()=>{
        res.send("deleted")
    })
    .catch((err)=>{
        console.log(err) ; 
    })
} ; 