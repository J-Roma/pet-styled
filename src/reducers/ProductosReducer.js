import { types } from '../types/types'

const initialState = {
    compras: []
}

export default function (state = initialState, action) {
    switch (action.types) {
        
        case types.agregar:

            return {
                ...state,
                citas: [...state.productos, action.payload]
            }

        case types.borrar:

            return {
                ...state,
                citas: state.productos.filter(productos => productos.id !== action.payload)
            }

        default:
            return state;
    }
}
