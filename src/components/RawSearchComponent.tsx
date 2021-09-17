import { useState, ChangeEvent, useRef, FC,  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/search.styles.scss'

interface userData {
  name: string
  email: string
  ssn: string;
}
interface autoCompleteProps {
  data: any[];
}

export const RawSearchComponent: FC<autoCompleteProps> = ({data}) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [query, setQuery] = useState({text: "", foundUsers: []})
  const [active, setActive] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement | null>(null)

  //search while typing > 0
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    let foundUsers: any[] = []
    if (value.length > 0) {
      setVisible(true);
      setActive(true)
      
      const matchChar = new RegExp(`^${value}`, "i")
      foundUsers = data.sort().filter((value: userData) => matchChar.test(value.name))
    }else{
      setVisible(false)
      setActive(false)
    }
    setQuery({ foundUsers: [], text: value })
  };

  //remove the rest on select and show selected name
  const hideOnSelect = (value: userData) => {
    setVisible(false)

    setQuery({
      text: value.name,
      foundUsers: []
    });
  };

  const { foundUsers } = query


  return(
    <div>
      <div className="search-wrapper">
        <FontAwesomeIcon icon={faSearch} />
        <div 
          onClick={() => {
          return (
            setVisible(false)
          )}} 
          style={{outline: active ? '#98A4C5' : '#2823FB' }}
          />
        <input 
          type="search"
          name="name" 
          autoComplete="off"
          value={query.text}
          className="search-input" 
          placeholder="Þekktir viðtakendur" 
          onChange={handleChange}
          ref={inputRef}
          />
      </div>
      <div className="user-list" style={{
        visibility: visible ? "visible" : "hidden"
      }}>
      {foundUsers.length > 0 && visible &&(
        <ul>
          {foundUsers.map((user: userData) => (
            <li key={user.name}>
              <span key={user.name} onClick={() => hideOnSelect(user)}>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  )
}