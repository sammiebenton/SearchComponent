import { 
  ChangeEvent,
  SetStateAction,
  MouseEvent,
  KeyboardEvent,
  FC,
  useState,
  useRef } from "react"
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/search.styles.scss'

interface DataComponentProps {
  data: any[]
}

export const SearchComponent: FC<DataComponentProps> = ({data}) => {
  const [visible, setVisible] = useState<SetStateAction<boolean>>(false)
  const [query, setQuery] = useState<any[]>([])
  const [text, setText] = useState('Þekktir viðtakendur')
  const [selected, setSelected] = useState<number>(0)

  const listRef = useRef<HTMLLIElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    // console.log(search)
    if( search.length > 0 ) {
      setVisible(true)
      const foundUsers = data.sort().filter((value) => {
        return value.name.toLowerCase().includes(search.toLowerCase())
      })
      setQuery(foundUsers)

      if( foundUsers.length < 1){
        setQuery([{name: 'Engar niðurstöður'}])
      }
    }else{
      setVisible(false)
    }
    // console.log(query)
  }

  const handleHover = (e: MouseEvent<HTMLLIElement>) => {
    if( !e.currentTarget ){
      // listRef.current?.style.backgroundColor = '#F3F7FF'
    }
  }
  
  const handleNavigate = (e: KeyboardEvent<HTMLUListElement>) => {
    listRef.current?.addEventListener('onkeydown:enter', () => {

    })
  }



  return(
    <form>
      <FontAwesomeIcon icon={faSearch} />
      <input 
      type="search"
      className="input-search"
      onChange={handleChange}
      placeholder={text}/>
      <ul 
      className="user-list"
      style={{visibility: visible ? 'visible': 'hidden'}}
      onKeyDown={handleNavigate}>
        {
          query.slice(0,5).map((d, index) => {
            return (
              <li 
              key={d.name}
              onClick={() => setSelected(index)}
              ref={listRef}
              >
                <p
                style={{
                  color: query.length < 1 ? '' : ''
                  }}>{d.name}</p>
                <p>{d.email}</p>
              </li>
            )
          })
        }
      </ul>
    </form>
  )
}