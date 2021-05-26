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

    const {nombre, fecha, hora, sintomas} = addValue ;

    const dispatch = useDispatch();

    const AgregarItem = (compras) => {dispatch(AddProduct(compras))}

    AgregarItem({
        id: uuid(),
        nombre,
        fecha,
        hora,
        sintomas
    })


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
                                        <button onClick={handleClick}  className="btn btn-primary">Agregar al carrito</button>
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
