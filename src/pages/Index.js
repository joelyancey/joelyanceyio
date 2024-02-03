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
        For 3 years as an undergraduate, I worked closely with professor Dean Buonomano an a novel
        <i> in vivo</i> research experiment investigating how the brain encodes time on the
        timescales of 10s to 100s of milliseconds. That data analysis involved SVM machine
        learning algorithms and that coding was so much fun. My poster that resulted was titled
        Decoding Stimulus Features From Cortical Population Responses.
        Over the years I completed 15 courses with coding components, in languages such as C++,
        Python, and R. I have an irrational love of MATLAB since I programmed my very first
        graphical user interface (GUI) with it circa 2012. In 2020 I earned a certificate in UNIX
        & Linux System Administration at UCSD Extension. For 16 months I worked in
        a neurodegeneration lab at Sanford Burnham Prebys Medical Discovery Institute located
        in La Jolla, California.
        I then got the job offer of a lifetime and for &gt;3 years I worked Jr. Systems
        Administrator at the Computational Neurobiology Laboratory at The Salk Institute. I was
        promoted to the role of Scientific Programmer by my PI Terrence Sejnowski. In this role
        I was able to code full-time, and I developed a deep passion for software development.
        I developed an open source software using bleeding edge algorithms for aligning electron
        microscopy images called AlignEM-SWIFT. Its development and deployment took me 2 years
        and is the hardest I have ever worked on any one thing in my entire life. It is
        now being used by scientists at the Texas Advanced Computing Center where it is
        deployed on a 3 petaflop supercomputer named Lonestar6.
        During this time through the mentorship of Tom Bartol I learned data-driven design
        skills, plus all about simulating and visualizing in 3D what happens at a synapse, and
        so much more. I particularly love building practical GUIs with emphasis on
        User Experience (UX). To be continued...
      </p>
    </article>
  </Main>
);

export default Index;
