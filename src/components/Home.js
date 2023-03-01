import imageRickMorty from '../img/rick-morty.png';
import { useOutletContext, Link } from "react-router-dom";

function Home() {
    const { onSearch } = useOutletContext();

    return (<>
        <h1 className='title'>Rick & Morty</h1>
        <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
        <Link to={`characters`}><button onClick={onSearch} className='btn-search'>Buscar Personajes</button></Link>
    </>);
}

export default Home;