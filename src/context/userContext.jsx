import React, { createContext } from 'react'

export const DataContext = createContext()

function UserContext({ children }) {

    const userName = "Nitish"

  return (
    <div>
        <DataContext.Provider value={userName}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext