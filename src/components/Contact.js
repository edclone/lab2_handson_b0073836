import React, { useContext } from 'react';

function Contact({ visitCount }) {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Home page visits: {visitCount}</p>
        </div>
    );
}

export default Contact;
