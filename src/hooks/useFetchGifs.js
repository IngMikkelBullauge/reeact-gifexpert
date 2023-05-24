/**
 * Esto es un Hook
 */
import { useState, useEffect } from "react"

import { getGifts } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    // States
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )
    
    const getImages = async() => {
        const newImages = await getGifts( category )
        setImages( newImages )
        setIsLoading( false )
    }

    useEffect( () => {
        // getGifts( category )
        //     .then( newImages => setImages( newImages ) )
        getImages()
        // console.log(images)
    }, [])

    return {
        images,
        isLoading,
    }
}
