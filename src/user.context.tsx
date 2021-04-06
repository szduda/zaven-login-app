import React, { createContext, useContext, useState } from 'react';

export type UserType = {
  firstName: string,
  lastName: string
}

export type UserContextType = {
  user: UserType,
  setUser: (user: UserType) => void
}

export const defaultContext = {
  user: {
    firstName: '',
    lastName: ''
  },
  setUser: () => { }
}

const Ctx = createContext<UserContextType>(defaultContext);

export const useUser = () => useContext(Ctx)

export const UserContext = (props: any) => {
  const [user, setUser] = useState(defaultContext.user)

  return (
    <Ctx.Provider value={{ user, setUser }} {...props} />
  )
}

export default UserContext