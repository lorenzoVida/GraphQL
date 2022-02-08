import {ApolloServer, gql} from "apollo-server"

const persona = [
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
        homeworld: "https://swapi.dev/api/planets/9/",
        language: "Galactic Basic",
        people: [
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/74/"
        ],
        films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        created: "2014-12-10T13:52:11.567000Z",
        edited: "2014-12-20T21:36:42.136000Z",
        url: "https://swapi.dev/api/species/1/"
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
        people: [
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/23/"
        ],
        films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        created: "2014-12-10T15:16:16.259000Z",
        edited: "2014-12-20T21:36:42.139000Z",
        url: "https://swapi.dev/api/species/2/"
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
        people: [
            "https://swapi.dev/api/people/13/",
            "https://swapi.dev/api/people/80/"
        ],
        films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        created: "2014-12-10T16:44:31.486000Z",
        edited: "2014-12-20T21:36:42.142000Z",
        url: "https://swapi.dev/api/species/3/"
    }
]

const typeDefs= gql`
type Persona {
    name: String!
    height: String
    mass: String
    hair_color: String!,
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String!
    homeworld: String!
}

type Especies {
    name: String!
    classification: String
    designation: String
    hair_color: String!,
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String!
    homeworld: String!
}

type Query {
    numeroPersonas: Int!
    todasLasPersonas: [Persona]!
    todasLasPersonas: [Persona]!
}
`

const resolvers = {
    Query: {
        numeroPersonas: () => persona.length,
        todasLasPersonas: () => persona
        todasLasEspecia:() => especies
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})