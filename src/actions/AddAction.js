import {types} from '../types/types'

export const AddProduct = (producto) => {
    return {
        type: types.agregar,
        payload:producto
    }
}

export const DeleteProduct = (producto) => {
    return {
        type: types.borrar,
        payload:producto
    }
}

