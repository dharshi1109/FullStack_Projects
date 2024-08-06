const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

app.post('/login',(req,res)=>{
    console.log(req.body);
    const User=req.body.User;
    let len=User.length;
    console.log(User);
    res.json({Length:len});
  
});
app.listen(8080,()=>{
    console.log(`Server running on port 8080`);
})