import React, { Component } from "react";
import './Pet.css';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Pet extends Component {

    deletePet(event) {

        // Obtiene el id de la fila seleccionada
        let petId = event.currentTarget.parentNode.id

        // Elimina el elemento de la base de datos que coincida con el id
        fetch(`https://react-test-22eeb.firebaseio.com/pets/${petId}.json`, { method: 'delete' })
            .then(() => {
                // Elimina del DOM la fila del elemento eliminado
                document.getElementById(`${petId}`).remove();
            });
    }

    render() {
        let { id, name, owner, symptoms, checkIn } = this.props;
        return (
            <tr id={id}>
                <td>{name}</td>
                <td>{owner}</td>
                <td>{symptoms}</td>
                <td>{checkIn}</td>
                <td onClick={this.deletePet} className="delete-icon">
                    <FontAwesomeIcon icon="trash" />
                </td>
            </tr>
        )
    }
}

export default Pet;