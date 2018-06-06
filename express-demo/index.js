const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "course1"},
    { id: 2, name: "course2"},
    { id: 3, name: "course3"}
];

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/api/courses', (request, response) => {
    response.send(courses);
});

app.get('/api/courses/:id', (request, response) => {
    const course = courses.find( course => course.id == parseInt(request.params.id));
    if(!course) response.status(404).send(`No Course with the ID ${request.params.id}`);
    response.send(course);
});

app.post('/api/courses', (request, response) => {
    const { error } = validateCourse(request.body);
    if ( error ) return response.status(400).send(error.message);
    const course = {
        id: courses.length + 1,
        name: request.body.name 
    };
    courses.push(course);
    response.send(course);
});

app.put('/api/courses/:id', (request, response) => {
    const course = courses.find( course => course.id == parseInt(request.params.id));
    if(!course) return response.status(404).send(`No Course with the ID ${request.params.id}`);

    const { error } = validateCourse(request.body);
    if (error) return response.status(400).send(error.message);

    course.name = request.body.name;
    response.send(course);
});

app.delete('/api/courses/:id', (request, response) => {
    const course = courses.find( course => course.id == parseInt(request.params.id));
    if(!course) return response.status(404).send(`No Course with the ID ${request.params.id}`);

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    
    response.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
};

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} . . . .`));