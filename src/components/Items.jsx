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

    const handle =  (product, description, size, price) => {
         handleClick(product, description, size, price) 

         AgregarItem({
            id: uuid(),
            producto,
            tamaño,
            descripcion,
            precio
        })
         console.log(addValue);
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
                            <div className="col-sm-12" key={db.id}>
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={db.img} className="card-img-top" alt={db.product} />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 className="card-title">{db.product}</h5>
                                            <p className="card-text">{db.description}</p>
                                            <p className="card-text">{db.size}</p>
                                            <p className="card-text">{db.price}</p>
                                            <button id={db.id} onClick={() => { handle(db.product, db.description, db.size, db.price) }} className="btn btn-primary">Agregar al carrito</button>
                                        </div>
                                    </div>
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


{/* <div className="col-sm-6" key={db.id}>
<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src={db.img} className="card-img-top" alt={db.product} />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 className="card-title">{db.product}</h5>
                <p className="card-text">{db.description}</p>
                <p className="card-text">{db.size}</p>
                <p className="card-text">{db.price}</p>
                <button id={db.id} onClick={() => { handle(db.product, db.description, db.size, db.price) }} className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    </div>
</div>
</div> */}