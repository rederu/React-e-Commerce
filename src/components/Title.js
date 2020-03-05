import React from 'react';

const Title = ({name, title}) => {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center">
                <h2 className="text-capitalize"> {name} <strong className="text-blue"> {title} </strong></h2>
            </div>
        </div>
    );
}

export default Title;
