import {ApolloServer, gql} from "apollo-server"

const personas = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
    },
    {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
        homeworld: "https://swapi.dev/api/planets/1/",
    },
    {   
        name: "R2-D2",
        height: "96",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a",
        homeworld: "https://swapi.dev/api/planets/8/",
    },
]

const especies = [
    {
        name: "Human",
        classification: "mammal",
        designation: "sentient",
        average_height: "180",
        skin_colors: "caucasian, black, asian, hispanic",
        hair_colors: "blonde, brown, black, red",
        eye_colors: "brown, blue, green, hazel, grey, amber",
        average_lifespan: "120",
        homeworld: "//swapi.dev/api/planets/9/",
        language: "Galactic Basic",
        created: "2014-12-10T13:52:11.567000Z",
        edited: "2014-12-20T21:36:42.136000Z",
        url: "https://swapi.dev/api/species/1/",
    },
    {
        name: "Droid",
        classification: "artificial",
        designation: "sentient",
        average_height: "n/a",
        skin_colors: "n/a",
        hair_colors: "n/a",
        eye_colors: "n/a",
        average_lifespan: "indefinite",
        homeworld: null,
        language: "n/a",
        created: "2014-12-10T15:16:16.259000Z",
        edited: "2014-12-20T21:36:42.139000Z",
        url: "https://swapi.dev/api/species/2/",
    },
    {
        name: "Wookie",
        classification: "mammal",
        designation: "sentient",
        average_height: "210",
        skin_colors: "gray",
        hair_colors: "black, brown",
        eye_colors: "blue, green, yellow, brown, golden, red",
        average_lifespan: "400",
        homeworld: "https://swapi.dev/api/planets/14/",
        language: "Shyriiwook",
        created: "2014-12-10T16:44:31.486000Z",
        edited: "2014-12-20T21:36:42.142000Z",
        url: "https://swapi.dev/api/species/3/",
    },
]

const typeDefs= gql`
type Persona {
    name: String!
    height: String
    mass: String
    hair_color: String,
    skin_color: String
    eye_color: String
    birth_year: String!
    gender: String!
    homeworld: String
}

type Especies {
    name: String!,
    classification: String!,
    designation: String!,
    average_height: String!,
    skin_colors: String!,
    hair_colors: String!,
    eye_colors: String!,
    average_lifespan: String!,
    homeworld: String!,
    language: String!,
    created: String!,
    edited: String!,
    url: String!
}

type Query {
    numeroPersonas: Int!
    todasLasPersonas: [Persona]!
    encontrarPersona(name: String!) : Persona 
    todasLasEspecies: [Especies]!
}

type Mutation {
    agregarPersona(
        name: String!
        birth_year: String!
        gender: String!
    ) : Persona

    cambiarFechaNacimiento(
        name: String!
        birth_year: String!
    ) : Persona
}
`

const resolvers = {
    Query: {
        numeroPersonas: () => personas.length,
        todasLasPersonas: () => personas,
        encontrarPersona: (root, args) => {
            const {name} = args
            return personas.find(personas => personas.name === name)
        },
        todasLasEspecies: () => especies
    },
    Mutation: {
        agregarPersona: (root, args) => {
            const nuevaPersona = {...args}
            personas.push(nuevaPersona)
            return nuevaPersona
        },
        cambiarFechaNacimiento: (root, args) => {
            const personaIndex = persona.find(personas => personas.name === args.name)
            if(personaIndex == -1) return null

            const persona = personas[personaIndex]

            const cambiarFechaNacimiento = {...persona, birth_year:args.birth_year}
            
            personas[personaIndex] = cambiarFechaNacimiento
            return cambiarFechaNacimiento

        }
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})