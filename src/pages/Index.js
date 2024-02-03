import React from 'react';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Joel Yancey's website"}
  >
    <article className="post" id="index">

      <p>
        My name is Joel and I love Linux. In 2017 I graduated from UCLA with a BSc in Neuroscience
        and Bioinformatics Minor. The minor was through the UCLA Samueli School of Engineering.
        Over the years I completed 15 courses with coding components, in languages such as C++,
        Python, and R. I have an irrational love of MATLAB since I programmed my very first
        graphical user interface (GUI) with it circa 2012. In 2020 I earned a certificate in UNIX
        & Linux System Administration. For 16 months I worked in a Neurodegeneration
        lab at Sanford Burnham Prebys Medical Discovery Institute located in La Jolla, California.
        I then got the job offer of a lifetime and for &gt;3 years I worked Jr. Systems
        Administrator at the Computational Neurobiology Laboratory at The Salk Institute. I was
        promoted to the role of Scientific Programmer by my PI Terrence Sejnowski. In this role
        I was able to code full-time, and I developed a deep passion for software development.
        Through the mentorship of Tom Bartol I learned data-driven design skills, plus all about
        simulating and visualizing in 3D what happens at a synapse. I particularly love building
        practical GUIs with emphasis on User Experience (UX). To be continued...
      </p>
    </article>
  </Main>
);

export default Index;
