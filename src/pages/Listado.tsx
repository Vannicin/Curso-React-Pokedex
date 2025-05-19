import react,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
/* Llamar listado de pokemons */
import { getPokemons } from "../controller/getpokemon";
/* LLamando al modelo*/
import { Pokemon } from "../models/pokemon.m";

/* El método slice() devuelve una copia de una parte del array dentro de un nuevo array
empezando por inicio hasta fin (fin no incluído). El array original no se modificará*/

const  Listado=()=>{

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");

    useEffect(()=>{
        const ObtenerTodos = async() =>{
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    const filtrarpokemon = pokemons?.slice(0,151).filter((pokemon)=>{
        return pokemon.name.toLowerCase().match(query.toLocaleLowerCase()); 
    });

    return(
        <>
            <h1 className="text-center m-4">POKEMÓN BUSCADOR POR NOMBRE</h1>
            <header className="m-3">    
                <b>Buscar:</b> <input value={query} placeholder="" onChange={(event) => setQuery(event.target.value.trim())} type="text"/>
            </header>
            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">
                        {filtrarpokemon?.slice(0,151).map((pokemon)=>(
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header><b>Tipo:</b> {pokemon.type}</Card.Header>
                            <Card.Img className="d-block mx-auto w-50" variant="top" src={pokemon.imggif} />
                            <Card.Body>
                                <Card.Title className="text-center"><b>{pokemon.id} - {pokemon.name}</b></Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Figure.Image
                                            width={20}
                                            height={16}
                                            src="https://cdn-icons-png.freepik.com/256/8236/8236748.png?ga=GA1.1.1883230564.1747108898&semt=ais_incoming"
                                        />
                                        <b> HP:</b> {pokemon.hp}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure.Image
                                            width={20}
                                            height={16}
                                            src="https://i.ibb.co/4RZDNGGb/ataque-icon.png"
                                        />
                                        <b> Ataque:</b> {pokemon.attack}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure.Image
                                            width={20}
                                            height={16}
                                            src="https://cdn-icons-png.freepik.com/256/15046/15046867.png?ga=GA1.1.1883230564.1747108898&semt=ais_incoming"
                                        />
                                        <b> Defensa:</b> {pokemon.defense}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure.Image
                                            width={20}
                                            height={16}
                                            src="https://i.ibb.co/gLQxpPRK/ataque-especial.png"
                                        />
                                        <b> Ataque E.:</b> {pokemon.sp_atk}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure.Image
                                            width={20}
                                            height={16}
                                            src="https://i.ibb.co/ymLpw2JR/shield-pixel-art-free-vector.jpg"
                                        />
                                        <b> Defensa E.:</b> {pokemon.sp_def}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure.Image
                                            width={20}
                                            height={16}
                                            src="https://i.ibb.co/Kjwr3pCd/pluma-velocidad.png"
                                        />
                                        <b> Velocidad:</b> {pokemon.speed}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado;