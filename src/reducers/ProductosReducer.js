import { types } from '../types/types'

const initialState = {
    compras: []
}

export default function (state = initialState, action) {
    switch (action.types) {
        
        case types.agregar:

            return {
                ...state,
                citas: [...state.compras, action.payload]
            }

        case types.borrar:

            return {
                ...state,
                citas: state.compras.filter(compras => compras.id !== action.payload)
            }

        default:
            return state;
    }
}
