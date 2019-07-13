import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {ProjectCard} from './'


const ProjectList = () => {
const [projectList, setProjectList] = useState([]);
useEffect(() => {
axios.get('https://api.github.com/users/Pronesti/repos')
.then(res => setProjectList(res.data))
.catch(err => console.log(err));
}, []);

    return (
        <div>
            {projectList.map(project => <ProjectCard project={project} />)}

        </div>
    )
}

export default ProjectList
