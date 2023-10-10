import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, actions } = useContext(Context)
	const { contacts } = store

	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					{contacts.map((contact) => {
						return (

							<div key={contact.id} className="border">
								<div className="row d-flex justify-content-evenly">
									<div className="col-md-4 mt-3 mb-3">
										<img src="https://picsum.photos/200" className="rounded-circle shadow-4-strong" alt="..." />
									</div>
									<div className="col-md-4 mt-2">
										<div className="card-body">
											<h5 className="text-center fw-bold card-title">{contact.full_name}</h5>
											<p className="text-center card-text">{contact.address}</p>
											<p className="text-center card-text">{contact.phone}</p>
											<p className="text-center card-text">{contact.email}</p>
										</div>
									</div>
									<div className=" col-md-4 d-flex flex-column  align-items-center">
										<div className="mt-5 mb-10">
											<Link to={`/Edit/${contact.id}`}>
												<i className="text-dark fa-solid fa-pen-to-square"></i>
											</Link>

										</div>

										<i type="button" onClick={() => actions.deleteContact(contact.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-trash mt-5 mb-10"></i>

									</div>
									{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title" id="exampleModalLabel">Alerta</h5>
													<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
												</div>
												<div class="modal-body">
													¿Estas seguro de borrar este contacto?
												</div>
												<div class="modal-footer">
													<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
													<button onClick={() => actions.deleteContact(contact.id)} type="button" class="btn btn-primary" data-bs-dismiss="modal">Borrar contacto</button>
												</div>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						)
					})}
					<Link className="d-flex justify-content-center" to="/Form">
						<button className="mt-4 btn btn-primary text-center">Crear Contacto</button>
					</Link>
				</div>
			</div>
		</div>
	)

};
