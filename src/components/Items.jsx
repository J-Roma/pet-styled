import React, {useEffect} from 'react'
import { db } from '../assets/db'
import {useAdd} from '../hooks/useAdd'
import {AddProduct} from '../actions/AddAction'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'


const Items = () => {

    const [addValue, handleClick] = useAdd({
        producto: '',
        tamaño: '',
        descripcion: '',
        precio: ''
    })

    const {producto, tamaño, descripcion, precio} = addValue ;

    const dispatch = useDispatch();

    const AgregarItem = (compras) => {dispatch(AddProduct(compras))}

    const handle =  async (product, description, size, price) => {
        await handleClick(product, description, size, price) 

        await AgregarItem({
            id: uuid(),
            producto,
            tamaño,
            descripcion,
            precio
        })
        await console.log(addValue);
    }

    return (
        <div className="card">
            <div className="card-header">
                Productos
            </div>
            <div className="card-body">
                <div className="row">
                    {
                        db.map(db => (
                            <div className="col-sm-6" key={db.id}>
                                <div className="card" >
                                    <img src={db.img} className="card-img-top" alt={db.product} />
                                    <div className="card-body">
                                        <h5 className="card-title">{db.product}</h5>
                                        <p className="card-text">{db.description}</p>
                                        <p className="card-text">{db.size}</p>
                                        <p className="card-text">{db.price}</p>
                                        <button id={db.id} onClick={() => {handle(db.product, db.description, db.size, db.price) }}  className="btn btn-primary">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Items
