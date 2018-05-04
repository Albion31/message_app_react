import React from 'react';
import ReactDom from 'react-dom';

const user = {
    firstName: "Lan",
    lastName: "Pham"
};
const element = <div>Hello {user.firstName} {user.lastName} </div>;

ReactDom.render(element, document.getElementById('root'));