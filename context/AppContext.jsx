const {createContext, Children, useState} = require('react');

// create Context
export const rootContext = createContext();

// extract provider
const {Provider} = rootContext;

export default function RootProvider({children}){
const random = Math.trunc(Math.random() * 20 + 1);
const [secretNumber, setSecretNumber] = useState(random);
const [numberEntered, setNumberEntered] = useState('');




const onchangehandhler = (numberFromInput) =>
setNumberEntered(numberFromInput);

// value
const value = {secretNumber};
    return <Provider value={{test: 'test'}}>{Children}</Provider>
}