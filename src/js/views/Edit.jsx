import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/demo.css";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export const Edit = () => {
    const { store, actions } = useContext(Context)
    const [contact, setContact] = useState({})
    const { id } = useParams()

    const [editedContact, setEditedContact] = useState({
        address: "",
        agenda_slug: "beto3103",
        email: "",
        full_name: "",
        phone: "",
    })

    const findContact = () => {
        let result = store.contacts.find((item) => item.id == id)
        setEditedContact(result)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await actions.editContact(id, editedContact)
        console.log(response)
        if (response == 201) {
            setEditedContact({
                address: "",
                agenda_slug: "beto3103",
                email: "",
                full_name: "",
                phone: "",
            })
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
        // console.log(response)

    }

    const handleChange = (e) => {
        setEditedContact({
            ...editedContact,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        findContact()
    }, [store.contacts])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="mb-3">
                    <h1>Agrega tu contacto llenando el siguiente formulario: </h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Nombre Completo" name="full_name" value={editedContact?.full_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="address" placeholder="Direccion completa" name="address" value={editedContact?.address} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" name="email" value={editedContact?.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Telefono</label>
                        <input type="phone" className="form-control" id="phone" placeholder="83385758" name="phone" value={editedContact?.phone} onChange={handleChange} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>

                </form >

            </div>
        </div>
    )
}