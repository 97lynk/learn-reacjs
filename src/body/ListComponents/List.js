import React, { useState, useEffect } from 'react';
import { Container, Alert, Row, Modal, Form, Button } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Item from './Item';
import { CONFIG_MODE } from '../../global';
import Axios from 'axios';
import { apiClient } from '../../service/auth';

function List({ tag }) {

    const [listItem, setListItem] = useState([]);

    const [viewMode, setVewMode] = useState(CONFIG_MODE.LIST);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [modeInsert, setModeInsert] = useState(true);


    const handleShow = (insertMode, initPost) => {
        setModeInsert(insertMode);
        setPost(initPost)
        setShow(true);
    };


    useEffect(() => {
        loadPosts();
    }, [tag])


    const defaultPost = {
        id: 0,
        title: '',
        description: '',
        createAt: new Date().toJSON(),
        url: '',
        tags: ['docs']
    }

    const [post, setPost] = useState(defaultPost);

    const handleSubmit = (event) => {
        console.log(modeInsert)
        if (modeInsert)
            createPost(post);
        else {
            updatePost(post);
        }

        handleClose();
    }

    const loadPosts = () => {
        // fetch('http://localhost:3004/posts?tags=' + tag)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         setListItem(data);
        //     });


        apiClient.get('/course-service/courses')
            .then(res => setListItem(res.data.content))
    }

    const createPost = (value) => {
        Axios.post('http://localhost:3004/posts', value)
            .then(res => {
                console.log(res);
                loadPosts();
            })
            .catch(error => console.log(error));;
    }

    const deletePost = (value) => {
        Axios.delete('http://localhost:3004/posts/' + value.id)
            .then(res => {
                console.log(res);
                loadPosts();
            })
            .catch(error => console.log(error));;
    }


    const updatePost = (value) => {
        Axios.put('http://localhost:3004/posts/' + value.id, value)
            .then(res => {
                console.log(res);
                loadPosts();
            })
            .catch(error => console.log(error));
    }


    const changeData = (event, newPost) => {

        switch (event.target.id) {
            case 'postTitle':
                newPost.title = event.target.value;
                break;
            case 'postDescription':
                newPost.description = event.target.value;
                break;
            default:
                break;
        }
        setPost({ ...newPost });
    }

    return (
        <>
            <Modal
                size="md"
                show={show} onHide={handleClose}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Create new post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Formik
                        initialValues={{ title: "sss", email: "" }}
                        onSubmit={async values => {
                            await new Promise(resolve => setTimeout(resolve, 500));
                            alert(JSON.stringify(values, null, 2));
                        }} >*/}
                    <Form>
                        <Form.Group controlId="postTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" value={post.title} type="text" onChange={(e) => changeData(e, post)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="postDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="10" value={post.description} onChange={(e) => changeData(e, post)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleSubmit}>Submit</Button>
                    </Form>
                    {/* </Formik> */}
                </Modal.Body>
            </Modal>

            <Toolbar viewMode={viewMode} setVewMode={setVewMode} length={listItem.length} showModal={() => handleShow(true, defaultPost)} />
            <Container className="d-flex align-content-start flex-wrap" >
                {
                    listItem.length == 0 ?
                        <Alert variant="light" className="col-12 text-center">
                            <Alert.Heading>Empty data!</Alert.Heading>
                            <p>Not found any results</p>
                        </Alert> :
                        listItem.map((item) =>
                            <Item
                                key={item.id}
                                viewMode={viewMode}
                                item={{
                                    value: item,
                                    delete: deletePost,
                                    update: () => handleShow(false, item)
                                }
                                } />)
                }
            </Container>
        </>
    );
}

export default List;