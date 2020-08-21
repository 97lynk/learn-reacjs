import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { MENU } from '../global';
import { Link, useHistory } from 'react-router-dom';


function Sidebar() {

    const history = useHistory();

    return (
        <ListGroup variant="flush">
            {
                MENU.sort((a, b) => a.order - b.order)
                    .map(menu =>
                        <ListGroup.Item key={menu.id} href={'/' + menu.url} onClick={() => history.push('/' + menu.url)}>
                            {menu.label}
                            {/* <Link to={'/' + menu.url}>{menu.label}</Link> */}
                        </ListGroup.Item>
                    )
            }
        </ListGroup >
    );
}

export default Sidebar;