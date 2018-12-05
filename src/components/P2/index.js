import React, { Component } from "react";
import { Link } from 'react-router-dom';

class P2 extends Component {
    render() {
        return (
            <div>
                <h1>Prueba 2</h1>
                <Link to="/p1">Go to Prueba 1</Link>
            </div>
        )
    }
}

export default P2;