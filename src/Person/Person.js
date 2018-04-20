import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>Hello, I'm a person</h1>
            <p>My name is {props.name} and I'm {props.age} years old.</p>
        </div>
    )
}

export default Person;