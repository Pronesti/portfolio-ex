import React from 'react';
import {Grid} from '@material-ui/core';
import moment from 'moment';

const ProjectCard = (project) => {
    console.log(project.project)
    const {name, created_at, html_url} = project.project;
    return (
        <Grid item xs>
        <div className="container">
	<article className="card">
		<a href={html_url} className="card__link">
			<div className="card__header">
				<h3 className="card__header-title">{name}</h3>
				<p className="card__header-meta">{moment(created_at).fromNow()}</p>
			</div>
		</a>
	</article>
</div>
</Grid>
    )
}

export default ProjectCard
