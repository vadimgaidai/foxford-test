import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../redux/users/selectors'
import { UsersActionsType } from '../redux/users/types'

const App: FC = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)

  useEffect(() => {
    dispatch({ type: UsersActionsType.LOAD_USERS })
  }, [dispatch])

  return <div />
}

export default App
