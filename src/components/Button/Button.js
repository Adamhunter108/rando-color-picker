import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} className={props.light ? 'light-button' : 'dark-button'}>
            Refresh
        </button>
    );
}

export default Button;