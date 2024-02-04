import React from 'react';

import Main from '../layouts/Main';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
// To use: src={`${PUBLIC_URL}/images/halloween2013-1.gif`}

const Index = () => (
  <Main
    description={"Joel Yancey's website"}
  >
    <article className="post" id="index">
      <iframe
        width="300"
        height="190"
        src="https://www.youtube.com/embed/AZcQfiHGj8g?si=ZXK_Cp_4YtOg9qD0"
        title="YouTube video player"
        frameBorder="0"
        style={{
          float: 'right',
          padding: 20,
        }}
        // style={{ 'align-self': 'flex-end' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <p>
        My name is Joel and I love Linux. In 2017 I graduated from UCLA with a BSc in Neuroscience
        and Bioinformatics Minor. The minor was through the UCLA Samueli School of Engineering.
        For 3 years as an undergraduate, I worked closely with professor Dean Buonomano on a novel
        <i> in vivo</i> research experiment investigating how the brain encodes time on the
        timescales of 10s to 100s of milliseconds. My poster that resulted was titled
        Decoding Stimulus Features From Cortical Population Responses.
      </p>
      <p>
        Over the years I completed 15 courses with coding components, in languages such as C++,
        Python, and R. I have an irrational love of MATLAB since I programmed my very first
        graphical user interface (GUI) with it circa 2012. By 2014 I had completed an entire
        programming series at UCLA and began taking upper division CS courses such as
        Algorithms in Bioinformatics & Systems (CS CM 122). My final project for
        Advanced Programming (PIC10C) I called
        the Neuroscience Model
        Builder. I developed it entirely in C++ using the Qt framework. The source code is
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/joelyancey/finalProject_neuralNetwork"
        > HERE
        </a>
        and it has been compiled and run successfully on Debian 11, Ubuntu 20.04, macOS 11.6.1,
        and Windows 10. Here is a brief demo I recorded in March of 2015:
      </p>
      <iframe
        width="300"
        height="190"
        src="https://www.youtube.com/embed/icMw4tYu0_k?si=j5YahgoVNlHHt4bT"
        title="YouTube video player"
        frameBorder="0"
        style={{
          float: 'left',
          padding: 20,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <p>
        In 2020 I earned a certificate in UNIX
        & Linux System Administration at UCSD Extension. For 16 months I worked in
        a neurodegeneration lab at Sanford Burnham Prebys Medical Discovery Institute located
        in La Jolla, California.
        I then got the job offer of a lifetime and for &gt;3 years I worked Jr. Systems
        Administrator at the Computational Neurobiology Laboratory (CNL) at The Salk
        Institute. I was
        promoted to the role of Scientific Programmer by my PI Terrence Sejnowski. In this role
        I was able to code full-time, and I developed a deep passion for software development.
        I developed an open source software for aligning electron
        microscopy images (&quot;image registration&quot;) called AlignEM-SWIFT. It is
        now being used by scientists at the Texas Advanced Computing Center where it is
        deployed on a 3 petaflop supercomputer named Lonestar6. I particularly
        love building practical GUIs with emphasis on
        User Experience (UX).
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
    </article>
  </Main>
);

export default Index;
