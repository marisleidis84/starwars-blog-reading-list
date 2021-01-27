import { createContext, useEffect, useState } from 'react';
import getState from './flux';
export const Context = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
               store: Object.assign(state.store,updateStore),
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            // funciones a ejecutar cuando carga la pagina
            state.actions.getCharacters();
            state.actions.getPlanets();
            state.actions.getStarShips();
        }, [])

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props.children} />
            </Context.Provider>
        )

    }
    return StoreWrapper;
}

export default injectContext;