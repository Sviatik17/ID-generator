const express= require('express');
const cors =require('cors');
const app=express();
const {v4:uuidv4}=require('uuid');

const PORT=3000;
app.use(cors());
app.use(express.json());



app.get('/generate-unique-id',(req,res)=>{
    const ID=uuidv4();
    console.log(ID);
    res.json({generated:ID});
})

app.listen(PORT,()=>{
    console.log(`Server work on port:${PORT}`)
})
    
