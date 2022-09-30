import { resolveBaseUrl } from "vite";

export const getImagen = async () => {
    try {
        const options = { 
            method: "GET" ,
            headers: { 'Content-Type': 'application/json' }
        }
        const apiKey = '5MlWiWFZwcurD6HVEa50wFDQu1pKpL8M';
        const giphy = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

        const res = await fetch(giphy)
            

        // const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`, options);
        const { data } = await resp.json(); 
        const { url } = data.images.original;

        return url;

    } catch (err) {
        return 'No se encontro la imagen:\n\t' + err;
    }
}