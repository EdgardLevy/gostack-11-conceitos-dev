const express = require('express')
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4')

const app = express();

app.use(cors())
app.use(express.json())

const projects = []

app.get('/projects', (request, response) => {

  const { title } = request.query;

  const results = title ? projects.filter(project => project.title.includes(title)) : projects

  response.json(results);
})

app.post('/projects', (request, response) => {
  //projects.push
  const { title, owner } = request.body;
  const project = { id: uuid(), title, owner }
  projects.push(project);
  return response.json(project)
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  let projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex < 0) {
    return response.send(401).json({ "message": "project not found" })
  }
  const project = { ...projects[projectIndex], title, owner }

  projects[projectIndex] = project;

  response.json(project)

})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  let projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex < 0) {
    return response.send(401).json({ "message": "project not found" })
  }

  projects.splice(projectIndex, 1)

  response.status(204).send()

})

app.listen(3333, () => {
  console.log()
})