import React, { useState } from 'react';
import { ButtonToolbar, Button, ButtonGroup, Form, FormControl, Modal } from 'react-bootstrap';
import { CONFIG_MODE } from '../../global';


function Toolbar({ viewMode, setVewMode, length, showModal }) {

    return (
        <>
            <ButtonToolbar className="d-flex mx-4">
                <div className="mr-auto">{length} item(s)</div>
                <div className="mx-2">
                    <Button variant="outline-primary" onClick={showModal}>
                        <i className="material-icons">create</i>
                    </Button>
                </div>
                <ButtonGroup className="border" aria-label="Basic example">
                    <Button variant={viewMode.code === CONFIG_MODE.LIST.code ? 'primary' : 'white'} onClick={e => setVewMode(CONFIG_MODE.LIST)}>
                        <i className="material-icons">view_list</i>
                    </Button>
                    <Button variant={viewMode.code === CONFIG_MODE.GRID.code ? 'primary' : 'white'} onClick={e => setVewMode(CONFIG_MODE.GRID)}>
                        <i className="material-icons">grid_on</i>
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>
        </>
    );
}

export default Toolbar;