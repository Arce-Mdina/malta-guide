import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    let navigate = useNavigate();

    return (
        <div className="back-button">
            <button onClick={() => navigate(-1)}>
                <span style={{ color: "dodgerblue" }}>&#x2190;</span>&nbsp;Back
            </button>
        </div>
    );
};

export default BackButton;