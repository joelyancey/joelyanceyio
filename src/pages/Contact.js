import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Joel"
  >
    <article className="post" id="contact">
      <h3>tubes : joelyancey.io@gmail</h3>
      <h3>rotary : 916_524_1ninenine0</h3>
      <h3>San Diego, CA</h3>
      {/* <div className="title"> */}
      {/*   <h2><Link to="/contact">Contact</Link></h2> */}
      {/* </div> */}
      {/* <a */}
      {/*   href="mailto:j.y@ucla.edu" */}
      {/*   className="image" */}
      {/* ><img src="images/emguy270.gif" alt="Email" width="180" /> */}
      {/* </a> */}
      {/* <div className="email-at"> */}
      {/*   <p>Feel free to get in touch. You can email me at: </p> */}
      {/*   <EmailLink /> */}
      {/* </div> */}
      {/* <ContactIcons /> */}
    </article>

  </Main>
);

export default Contact;
