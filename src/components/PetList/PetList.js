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
        fetch('https://react-test-22eeb.firebaseio.com/pets.json')
            .then((res) => res.json())
            .then((json) => {
                let petsArray = [];
                for (let key in json) {
                    petsArray.push({
                        'key': key,
                        'info': json[key]
                    });
                }

                this.setState({
                    petList: petsArray
                })
            });
    }

    render() {
        let { petList } = this.state;
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
                    {showPets}
                </tbody>
            </table >
        );
    }

}

export default PetList;