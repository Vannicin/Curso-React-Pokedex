import {Pokemon} from '../models/pokemon.m';
export async function getPokemons(): Promise<Pokemon[]>{
    /* Llamado a API REST */
    /* La API FETCH propociona una interfaz Javascript para acceder y
    manipular partes del canal HTTP, tales como peticiones y respuestas. */
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    const datos = await response.json();
    const pokemons = datos.results.map((pokemon:any)=>({
        name: pokemon.name,
        id: pokemon.national_number,
        imggif: CorregirNombre(pokemon.sprites['animated']),
        imgnormal: CorregirNombre(pokemon.sprites['normal']),
        imglarge: CorregirNombre(pokemon.sprites['large']),
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        type: pokemon.type[0]
    }));

    const unicosPokemons = pokemons.filter(
        (pokemon: any, index: number)=>
            pokemons.findIndex((other:any) => other.id === pokemon.id) === index
    );

    return unicosPokemons;
}

/* Corregir textos de los gif con su nombre correcto para poder llamarlos */
export function CorregirNombre(name: string): string{
    if (name.includes("farfetch'd")){
        return name.replace("farfetch'd","farfetchd");
    }else if (name.includes("mr.-mime")){
        return name.replace("mr.-mime","mr-mime");
    }else if (name.includes("♀")){
        return name.replace("♀","-f");
    }else if (name.includes("♂")){
        return name.replace("♂","-m");
    }else{
        return name;
    }
}