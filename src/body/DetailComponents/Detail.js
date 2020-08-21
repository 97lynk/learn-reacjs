import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';

function Detail({ postId }) {

    const [post, setPost] = useState({})

    useEffect(() => {
        fetch('http://localhost:3004/posts/' + postId)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPost(data);
            });
    }, []);

    return (
        <>
            <Row>
                <Card border="light" className="col-12">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{post.createAt}</Card.Subtitle>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
}

export default Detail;