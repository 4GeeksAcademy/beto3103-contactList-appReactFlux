import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/demo.css";
import Swal from "sweetalert2";

const initialState = {
    "full_name": "",
    "email": "",
    "agenda_slug": "beto3103",
    "address": "",
    "phone": ""
}

export const Form = () => {
    const { store, actions } = useContext(Context)
    const [contact, setContact] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await actions.addContact(contact)
        console.log(response)
        if (response == 201) {
            setContact(initialState)
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
        // console.log(response)

    }

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="mb-3">
                    <h1>Agrega tu contacto llenando el siguiente formulario: </h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Nombre Completo" name="full_name" value={contact.full_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="address" placeholder="Direccion completa" name="address" value={contact.address} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" name="email" value={contact.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Telefono</label>
                        <input type="phone" className="form-control" id="phone" placeholder="83385758" name="phone" value={contact.phone} onChange={handleChange} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>

                </form >

            </div>
        </div>
    )
}