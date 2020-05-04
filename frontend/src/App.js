import React, { useState, useEffect } from 'react';

import api from './services/api'

import './App.css'
//import backgroundImage from './assets/background.webp'

import Header from './components/Header'
export default function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => setProjects(response.data))
  }, [])

  function handleAddProject() {
    // setProjects([...projects,`Novo projeto ${Date.now()}`])
    api.post('projects', 
    { title: `Novo projeto ${Date.now()}`, owner: 'Edgard Levy' }
    ).then(response => setProjects([...projects, response.data]))
  }

  return (
    <>
      <Header title='Projects' />

      {/* <img width="300" src={backgroundImage}/> */}
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}
