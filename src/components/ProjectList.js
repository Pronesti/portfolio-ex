import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProjectCard } from './';
import { Typography } from '@material-ui/core';

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);
  const [time, setTime] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/Pronesti/repos?sort=updated')
      .then(res => {
        setProjectList(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setTimeout(() => setTime(true), 4000);
  }, []);

  const showList = (
    <div className='projectList'>
      <Typography variant='h3' className="projectsTitle" color="primary">Projects:</Typography>
      {projectList.slice(1,7).map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );

  return <React.Fragment>{time ? showList : ('')}</React.Fragment>;
};

export default ProjectList;
