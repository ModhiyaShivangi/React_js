import React, { useEffect, useState } from 'react'
// import Card from "./Card";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


function APIExample() {

    const [data, setaData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((result) => {
            result.json().then((resp) => {
                setaData(resp)
            })
        })
    }, [])

    const Card = ({ title, price, description, image, rating }) => {
        return (
            <MDBCard>
                <MDBCardImage src={image} alt={title} />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>{description}</MDBCardText>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <MDBBtn>Go somewhere</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        );
    };

    let ProductListData = data.map((val) => {
        return <div className="col-4">
            <Card title={val.title} image={val.image} price={val.price} description={val.description}
            />
        </div>
    })

    return (
        <>
            <div className="container">

                <div className="row">
                    {ProductListData}
                </div>

            </div>
        </>
    );
};
export default APIExample


