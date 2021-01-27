import { data } from "jquery"

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: null,
            planetas: null,
            naves: null
        },


        actions: {
            getCharacters: () => {
                fetch('https://www.swapi.tech/api/people/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            personajes: data
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
            }
        },
    }
}

export default getState;