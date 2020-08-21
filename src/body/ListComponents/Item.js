import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Item({ item, viewMode }) {

    return (
        <div className={viewMode.classItem}>
            <Card className="h-100">
                <Card.Body>
                    <Card.Title>{item.value.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{new Date(item.value.startDate).toString()}</Card.Subtitle>
                    <Card.Text>Number of membr: {item.value.noOfMember}  - Price : ${item.value.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={'/posts/' + item.value.id}>View detail</Card.Link>
                    <Card.Link onClick={() => item.update(item.value)}>Update</Card.Link>
                    <Card.Link className="text-danger" href="#" onClick={() => item.delete(item.value)}>Remove</Card.Link>
                </Card.Footer>
            </Card>
        </div >
    );

}

export default Item;