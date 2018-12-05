import React, { Component } from 'react';
import Pet from '../Pet/Pet'

import './PetList.css';

class PetList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            petList: []
        }
    }

    componentDidMount() {

        // Obtiene los datos de la tabla Pets
        fetch('https://react-test-22eeb.firebaseio.com/pets.json')
            .then((res) => res.json())
            .then((json) => {

                // Declara array vacío
                let petsArray = [];

                // Agregar al array petsArray cada uno de los elementos de la tabla
                for (let key in json) {
                    petsArray.push({
                        'key': key,
                        'info': json[key]
                    });
                }

                // Dar valor al estado con el contenido de la tabla
                this.setState({
                    petList: petsArray
                })
            });
    }

    render() {
        // Obtiene el valor de petList del estado
        let { petList } = this.state;

        // Construye las filas de la tabla como componentes Pet
        let showPets = petList.map((pet) => {
            let { key, info } = pet;

            return (
                <Pet
                    id={key}
                    key={key}
                    name={info.name}
                    owner={info.owner}
                    symptoms={info.symptoms}
                    checkIn={info.checkIn}
                />
            )
        })

        // Regresa la tabla construida
        return (
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Dueño</td>
                        <td>Síntomas</td>
                        <td>Check-in</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {/* Regresa la lista de mascotas */}
                    {showPets}
                </tbody>
            </table >
        );
    }

}

export default PetList;