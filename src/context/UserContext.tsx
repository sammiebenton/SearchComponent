import { useState, useContext } from 'react'
import UserContext, { UserState } from '../store/Context'

export const useUserContext = () => {
  const user = useContext(UserContext)

  return user.name
}

export const UserContextProvider = () => {
  const [user, setUser] = useState<UserState>({
    name: ''
  })

  return (
    <UserContext.Provider value={setUser}>
    </UserContext.Provider>
  )
}