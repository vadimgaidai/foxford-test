import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectUsers } from '../redux/users/selectors'
import { UsersActionsType } from '../redux/users/types'

import TableBLock from '../components/TableBLock'

const columns = [
  { id: 'firstName', label: 'Name' },
  { id: 'surname', label: 'Surname' },
  { id: 'age', label: 'Age' },
]

const App: FC = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)

  useEffect(() => {
    dispatch({ type: UsersActionsType.LOAD_USERS })
  }, [dispatch])

  return (
    <div>
      <TableBLock columns={columns} rows={users} isCheckbox />
    </div>
  )
}

export default App
