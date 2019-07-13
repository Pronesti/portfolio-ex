import React from 'react';
import {Grid} from '@material-ui/core';

const ProjectCard = (project) => {
    console.log(project.project)
    const {name, id, html_url} = project.project;
    return (
        <Grid item xs>
        <div className="container">
	<article className="card">
		<a href={html_url} className="card__link">
			<div className="card__icon">
				<svg viewbox="0 0 1129 994">
					<g fill="none" fill-rule="nonzero" stroke="#999" stroke-width="41">
						<path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"/>
						<path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"/>
						<path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"/>
					</g>
				</svg>
			</div>

			<div className="card__media">
				<svg viewbox="0 0 1129 994">
					<g fill="none" fill-rule="nonzero" stroke="#F5F5F5" stroke-width="41">
						<path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"/>
						<path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"/>
						<path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"/>
					</g>
				</svg>
			</div>

			<div className="card__header">
				<h3 className="card__header-title">{name}</h3>
				<p className="card__header-meta">{id}</p>
				<div className="card__header-icon">
					<svg viewbox="0 0 28 25">
						<path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"/>
					</svg>
				</div>
			</div>
			
		</a>
	</article>
</div>
</Grid>
    )
}

export default ProjectCard
