
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Detail from './DetailComponents/Detail';
import List from './ListComponents/List';
import { Row, Col } from 'react-bootstrap';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

export default function Body() {
    return (
        <>
            <Row>
                <Col><Header /></Col>
            </Row>
            <Row className="mt-5">
                <Col lg={3}>
                    <Sidebar />
                </Col>
                <Col lg={9}>
                    <Switch>
                        <Route exact path="/posts/:id" component={(props) => <Detail postId={props.match.params.id} />} />
                        <Route exact path="/:tag" component={(props) => <List tag={props.match.params.tag} />} />
                    </Switch>
                </Col>
            </Row>
        </>
    );
}