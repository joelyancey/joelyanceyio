import React from 'react';

import Main from '../layouts/Main';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
// To use: src={`${PUBLIC_URL}/images/halloween2013-1.gif`}
const Index = () => (
  <Main
    description={"Joel G. Yancey's website"}
  >
    <article className="post" id="index">
      <p>
        My name is Joel and I love Linux. In 2017 I graduated from UCLA with a BSc in Neuroscience 
        and Bioinformatics Minor. The minor was through the UCLA Samueli School of Engineering.
        For 3 years as an undergraduate, I worked closely with professor Dean Buonomano on a novel
        <i> in vivo</i> research experiment investigating how the brain encodes time on the
        timescales of 10s to 100s of milliseconds. My poster that resulted was titled
        Decoding Stimulus Features From Cortical Population Responses. Over
        the years I completed 15 courses with coding components, in languages such as C++,
        Python, and R. I have an irrational love of MATLAB since I programmed my first
        graphical user interface (GUI) with it circa 2012. By 2014 I had completed a full
        programming series in C++ at UCLA. My final project for Advanced Programming (PIC10C)
        I called the Neuroscience Model Builder (see below, left). I developed it
        entirely in C++ using the Qt framework. The source code is
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/joelyancey/finalProject_neuralNetwork"
        > HERE
        </a>
        and it has been compiled to run successfully on Debian 11, Ubuntu 20.04, macOS 11.6.1,
        and Windows 10. In 2020 I earned a certificate in UNIX
        & Linux System Administration at UCSD Extension. For 16 months I worked in
        a neurodegeneration lab at Sanford Burnham Prebys Medical Discovery Institute located
        in La Jolla, California.
        In 2019 I got the job offer of a lifetime and for &gt;3 years I worked Jr. Systems
        Administrator at the Computational Neurobiology Laboratory (CNL) at The Salk
        Institute. I was promoted to the role of Scientific Programmer by my
        PI Terrence Sejnowski. In this role I was able to code full-time, and I
        developed a deep passion for software development.
        I developed an open source software for aligning electron
        microscopy images (&quot;image registration&quot;) called AlignEM-SWIFT
        (see below, right). I deployed
        is on the 3 petaflop computer Lonestar6 at the Texas Advanced Computing Center. I
        am particularly adept at and have a love for building practical user
        interfaces with emphasis on User Experience (UX) and data-driven design principles.
      </p>
      {/* <a */}
      {/*   href="https://joelyancey.io/resume" */}
      {/*   className="image" */}
      {/* ><img src="images/resume.png" alt="view resume" width="180" /> */}
      {/* </a> */}
      {/* <a */}
      {/*   href="https://joelyancey.io/posters" */}
      {/*   className="image" */}
      {/* ><img src="images/posters.png" alt="view posters" width="180" /> */}
      {/* </a> */}
      <>
        <span><iframe
          src="https://www.youtube.com/embed/AZcQfiHGj8g?si=ZXK_Cp_4YtOg9qD0"
          title="YouTube video player"
          frameBorder="0"
          width="48%"
          height="240em"
          style={{ 'max-width': '500em' }}
          // style={{ 'align-self': 'flex-end' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span><iframe
          src="https://www.youtube.com/embed/icMw4tYu0_k?si=j5YahgoVNlHHt4bT"
          title="YouTube video player"
          frameBorder="0"
          width="48%"
          height="240em"
          style={{ 'max-width': '500em' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        </span>
      </>
      {/* <img */}
      {/*   src="images/alignem_animation-full.gif" */}
      {/*   alt="doodle by Skiter Chappell" */}
      {/*   width="100%" */}
      {/*   height="auto" */}
      {/*   style={{ 'max-width': '1080em' }} */}
      {/* /> */}
    </article>
  </Main>
);

export default Index;
