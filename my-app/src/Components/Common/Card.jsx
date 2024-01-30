import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Card() {
  return (
    <>
    <div className="row">
        <div className="col-xl-3">
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/174.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col-xl-3">
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/164.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div className="col-xl-3">
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/154.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div className="col-xl-3">
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/194.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        
    </div>

    <div className="row">
        <div className="col-xl-3">
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/174.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col-xl-3">
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/164.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div className="col-xl-3">
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/154.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>

        <div className="col-xl-3">
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/194.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        
    </div>
    
    </>
  );
}