import React from 'react';
// import './customforstyleissue.css';
import styledata from './customforstyleissue.module.css';
import styled from 'styled-components';



const customColor = { backgroundColor: "blue", color: "white" }
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const CSSIssues = () => {
    return (
        <>
            <div className={styledata.container + ' container my-5'}>
                <div className="row">
                    <div className="col">
                        testing
                    </div>
                </div>
                <h3 style={{ backgroundColor: "orange" }}>inline css</h3>
                <h3 style={customColor}>inline css with variable</h3>
                <Title>
                    Hello World!
                </Title>
            </div>
        </>
    );
};

export default CSSIssues;