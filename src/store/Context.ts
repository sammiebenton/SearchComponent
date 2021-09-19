import { createContext } from "react";

const initialState = {
  name: ''
}

export type UserState = typeof initialState

const Context = createContext<typeof initialState>(initialState)

export default Context