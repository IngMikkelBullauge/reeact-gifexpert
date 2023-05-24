/**
 * BUG (error)
 * FIXME (arreglame)
 * TODO (por hacer)
 * @param {} category 
 */
export const getGifts = async ( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${ import.meta.env.VITE_GIPHY_API_KEY }&q=${ category }&limit=10`

    // Petición HTTP a API
    const resp = await fetch( url )
    const { data } = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}
