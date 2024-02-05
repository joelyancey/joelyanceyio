import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Joel G. Yancey's poster presentations."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/posters">Posters</Link></h2>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
    {/* <img */}
    {/*   src="images/sfn22.png" */}
    {/*   alt="SfN 2022 abstract submission" */}
    {/*   width="100%" */}
    {/*   height="auto" */}
    {/*   style={{ 'max-width': '1080em' }} */}
    {/* /> */}
    {/* <img */}
    {/*   src="images/taccster22.jpg" */}
    {/*   alt="TACCSTER 2022" */}
    {/*   width="100%" */}
    {/*   height="auto" */}
    {/*   style={{ 'max-width': '1080em' }} */}
    {/* /> */}
  </Main>
);

export default Projects;
