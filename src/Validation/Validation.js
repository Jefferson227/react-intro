import React from 'react';

const validation = (props) => {
    const msg = props.text.length > 0 && props.text.length < 5 ?
                    'Text is too short' :
                    props.text.length > 15 ?
                        'Text is too long' :
                        '';
    return (
        <div>
            <div>{props.text.length}</div>
            <div>{msg}</div>
        </div>
    )
}

export default validation;
