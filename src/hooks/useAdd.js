import { useState } from 'react';

export const useAdd = ( initialState = {} ) => {
    
    const [addValue, setValues] = useState(initialState);
    

    const handleClick = (product, size, description, price ) => {
        setValues({
            ...addValue,
            producto: product,
            tamaño: size,
            descripcion: description,
            precio: price
        });
    }

    return [ addValue, handleClick ];
}


