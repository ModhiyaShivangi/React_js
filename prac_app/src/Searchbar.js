import React, { useState } from 'react'
import { Container, InputGroup, Form, Table } from 'react-bootstrap'
import { data } from './Data.js'

function Searchbar() {

    const [search, setSearch] = useState('')



    return (
        <div>
            <Container>
                <div className=" bg-zinc-900">
                    <h1 className="text-center mt-5 p-4 bg-purple-600 text-white">
                        Contact Keeper
                    </h1>
                    <Form className="p-3 bg-black " >
                        <InputGroup className="my-3">
                            <Form.Control 
                            onChange={(e)=> setSearch(e.target.value)} 
                            placeholder="Search Contacts......" />
                        </InputGroup>
                    </Form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter((item) => {
                                return search.toLowerCase() === ''
                                ? item 
                                : item.first_name.toLowerCase().includes(search);
                            })
                            .map((item) => (
                                <tr key={item.id}>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>

                </div>
            </Container>







        </div>
    )
}

export default Searchbar
