const express=require('express');
const app= express();
app.use(express.json());
const students = [
   { id:1,
    name :"sohit",
    email :"sohit@gmail.com",
    add:"marhaurah",
    moblile:"74810594822"
} ,
 { id:2,
    name :"Sanni",
    email :"sanni@gmail.com",
    add:"Lachhi",
    moblile:"74810594820"
} ,
 { id:3,
    name :"Anjali",
    email :"anjali@gmail.com",
    add:"Paiga",
    moblile:"74810594888"
} 
  ];

  app.post('/addStudent',(req,res)=>{
    const student = {
      id:students.length+1,
      email:req.body.email,
      add:req.body.add,
      moblile:req.body.moblile
    }
    students.push(student);
    res.status(201).json({
      message : " new add successfully",
      data :student
    })
  
  })
app.get('/getAllStudents',(request,response)=>{
  response.status(200).json({
    message :"data is ok",
    data:students

  });
});

  app.delete("/deleteStudent/:id",(req,res)=>{
    const sId=parseInt(req.params.id);
    const studentIndex=students.findIndex(o=>o.id===sId);

    if(studentIndex===-1){
        res.json({
            message:"user not found"
        });
    }
    const deleteStudent=students.splice(studentIndex,1);
    res.json({
      message:"order deleted successfully",
      deleteData:deleteStudent[0]
    });
  });

app.listen(3000,()=>{
  console.log("server is running");
})