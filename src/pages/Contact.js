import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Joel Yancey at j.y@ucla.edu (to report issues with the site use joelyancey.io@gmail.com)"
  >
    <article className="post" id="contact">
      {/* <header> */}
      {/*   <div className="title"> */}
      {/*     <h2><Link to="/contact">Contact</Link></h2> */}
      {/*   </div> */}
      {/* </header> */}
      <a
        href="mailto:j.y@ucla.edu"
        className="image"
      ><img src="images/contact.png" alt="Email" width="180" />
      </a>
      {/* <div className="email-at"> */}
      {/*   <p>Feel free to get in touch. You can email me at: </p> */}
      {/*   <EmailLink /> */}
      {/* </div> */}
      {/* <ContactIcons /> */}
    </article>
  </Main>
);

export default Contact;
