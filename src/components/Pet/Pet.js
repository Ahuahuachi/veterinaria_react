import React, { Component } from "react";
import './Pet.css';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Pet extends Component {


    render() {
        let { name, owner, symptoms, checkIn, id } = this.props;


        return (
            <tr>
                <td>{name}</td>
                <td>{owner}</td>
                <td>{symptoms}</td>
                <td>{checkIn}</td>
                <td><FontAwesomeIcon icon="trash" /></td>
            </tr>
        )
    }
}

export default Pet;