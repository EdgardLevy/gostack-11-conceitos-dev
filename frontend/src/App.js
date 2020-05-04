import React,{useState, useEffect} from 'react';

import api from './services/api'

import './App.css'
//import backgroundImage from './assets/background.webp'

import Header from './components/Header'
export default function App() {

  const [projects, setProjects] = useState(['Desenvolvimento Web','Desenvolvimento NodeJs'])

  useEffect(()=>{},[
    api.get('projects').then(response=>console.log(response))
  ])

  function handleAddProject(){
    setProjects([...projects,`Novo projeto ${Date.now()}`])
  }

  return (
    <>
      <Header title='Projects'/>
      
      {/* <img width="300" src={backgroundImage}/> */}
        <ul>
          {projects.map(project =><li key={project}>{project}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}
