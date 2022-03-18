import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const FoodtruckContext = createContext()

const FoodtruckProvider = ({children}) => {
    const [ categorias, setCategorias ] = useState([])
    const [ categoriaActual, setCategoriaActual ] = useState({})

    const obtenerCategorias = async () => {
        const { data } = await  axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(() =>{
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[1])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    return (

        <FoodtruckContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >
            {children}
    </FoodtruckContext.Provider>
    )
}

export {
    FoodtruckProvider
}

export default FoodtruckContext;