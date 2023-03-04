import React from 'react';
import Head from 'next/head';
import ContactComponent from '../../components/contact/ContactComponent';

const Contact = () => {
  return (
    <section className=' pt-[30px]'>
      <Head>
        <title>John Patrick Resurreccion | Contact Me</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ContactComponent />
    </section>
  );
};

export default Contact;
