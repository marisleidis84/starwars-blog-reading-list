import { data } from "jquery"

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: null,
            planetas: null,
            naves: null,
            propiedadesPersonajes: null,
            propiedadesPlanetas: null,
            propiedadesNaves: null
        },


        actions: {
            getCharacters: (id) => {
                fetch('https://www.swapi.tech/api/people/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            personajes: data,
                        })
                    })

            },
            
            getPlanets: () => {
                fetch('https://www.swapi.tech/api/planets/', {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        planetas: data
                    })
                })
            },

            getStarShips: () => {
                fetch('https://www.swapi.tech/api/starships/', {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        naves: data
                    })
                })
            },

            getCharactersProperties: (id) => {
                fetch(`https://www.swapi.tech/api/people/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            propiedadesPersonajes: data.result.properties
                        })
                    })

            },

            getPlanetsProperties: (id) => {
                fetch(`https://www.swapi.tech/api/planets/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            propiedadesPlanetas: data.result.properties
                        })
                    })

            },

            getStarShipsProperties: (id) => {
                fetch(`https://www.swapi.tech/api/starships/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            propiedadesNaves: data.result.properties
                        })
                    })

            },
        },
    }
}

export default getState;