import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddProduct } from '../actions/AddAction'

const Cart = () => {
    const dispatch = useDispatch()
    const carrito = useSelector((state) => state.compras)

    return (
        <div className="card">
            <div className="card-header">
                Carrito
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Talla</th>
                            <th scope="col">Descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            carrito.compras.map(compras => (
                                <tr key={compras.id}>
                                    <th scope="row">{compras.producto}</th>
                                    <td>{compras.precio}</td>
                                    <td>{compras.descripcion}</td>
                                    <td>{compras.tamaño}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart
