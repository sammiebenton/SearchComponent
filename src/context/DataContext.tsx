import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  FC
} from 'react';
import users from '../data/contacts.data.json'

const DataContext = createContext<any[]>([])

export const useData = () => useContext(DataContext)

export const DataProvider: FC = ({children}) => {
  const [dataset, setDataset] = useState<object[]>([])

  useEffect(() => {

    const getData = () => {
      setDataset(users)
    }

    return (
      getData()
    )
  },[])

  // console.log(dataset)

  
  return (
    <DataContext.Provider value={dataset}>
      {children}
    </DataContext.Provider>
  )
}

