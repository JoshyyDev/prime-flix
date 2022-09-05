import { useEffect, useState } from 'react'
import api from '../../services/api'

// URL DA API: /movie/550?api_key=9082e6823dbd6b26f3d661a8d78dcbcc&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "9082e6823dbd6b26f3d661a8d78dcbcc",
                    language: "pt-BR",
                    page: 1,
                }
            })
        }

        loadFilmes();
    }, [])

    return (
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;