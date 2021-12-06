const express=require('express');
const Joi=require('joi');
const app=express();
app.use(express.json());
courses=[{id:1,name:'name1'},{id:2,name:'name2'},{id:3,name:'name3'}];
//index
app.get('/',(req,res)=>{
    res.send('hello world');
});
//get all courses
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});
//create new course
app.post('/api/courses',(req,res)=>{
    //validation updated in validateCourse, leaving this here to see the previous way
    const schema={name:Joi.string().min(3).required()};
    const result= Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course={id:courses.length+1,name:req.body.name};
    courses.push(course);
    res.send(course);
});
//update course
app.put('/api/courses/:id',(req,res)=>{
    //validation
    const course=courses.find(c=> c.id ===parseInt(req.params.id));
    if(!course){
        res.status(404).send(`course with id ${req.params.id} was not found`);
    }
    //const result=validateCourse(req.body);
    const {error}=validateCourse(req.body); //object destructuring
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    //updating value
    course.name= req.body.name;
    res.send(course);
});
function validateCourse(course){
    const schema={name:Joi.string().min(3).required()};
    return Joi.validate(course,schema);
}
// get specific course
app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=> c.id ===parseInt(req.params.id));
    if(!course){
        res.status(404).send(`course with id ${req.params.id} was not found`);
    }
    else{
        res.send(course);
    }
});
//server listener
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});