import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Joel Yancey" />
      </Link>
      <header>
        <h2>Joel Yancey</h2>
        <p><a href="mailto:j.y@ucla.edu">j.y@ucla.edu</a></p>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>

    {/* <section className="blurb"> */}
    {/*   <ul className="actions"> */}
    {/*     <li> */}
    {/*       {} */}
    {/*     </li> */}
    {/*   </ul> */}
    {/* </section> */}
  </section>
);

export default SideBar;
