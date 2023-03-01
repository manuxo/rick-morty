import { useOutletContext, Link } from "react-router-dom";

function Characters() {
    const { characters } = useOutletContext();

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <Link to={`/`}><span className="back-home">Volver a la home</span></Link>
            <div className="container-characters">
                {characters?.map((ch, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={ch.image} alt={ch.name}></img>
                        </div>
                        <div>
                            <h3>{ch.name}</h3>
                            <h6>
                                {ch.status === 'Alive' ? (<>
                                    <span className="alive" />
                                    Alive
                                </>) : (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p >
                                <span className="text-grey">Episodios:</span>
                                <span>{ch.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{ch.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to={`/`}><span className="back-home">Volver a la home</span></Link>
        </div>
    );
}

export default Characters;