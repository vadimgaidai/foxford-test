import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, createStyles, Grid, Box } from '@material-ui/core'

import { selectUsers } from '../redux/users/selectors'
import { UsersActionsType, UserType } from '../redux/users/types'

import TableBLock from '../components/TableBLock'

interface State {
  rows: UserType[]
}

const columns = [
  { id: 'firstName', label: 'Name' },
  { id: 'surname', label: 'Surname' },
  { id: 'age', label: 'Age' },
]

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      height: '100%',
      width: '100%',
    },
    grid: {
      height: '100%',
      width: '100%',
      padding: '30px',
    },
  })
)

const App: FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)

  const [selected, setSelected] = useState<State>({
    rows: [],
  })

  useEffect(() => {
    dispatch({ type: UsersActionsType.LOAD_USERS })
  }, [dispatch])

  const onRowSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    row: UserType
  ) => {
    setSelected(
      (prevState): State => ({
        rows: event.target.checked
          ? [...prevState.rows, row]
          : prevState.rows.filter(({ id }) => id !== row.id),
      })
    )
  }

  const onSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(
      (): State => ({
        rows: event.target.checked ? users.map((item) => item) : [],
      })
    )
  }

  return (
    <Grid
      className={classes.grid}
      container
      direction="row"
      alignItems="center"
      justify="center"
    >
      <TableBLock
        columns={columns}
        rows={users}
        selectedRows={selected.rows}
        onSelect={onRowSelect}
        onSelectAll={onSelectAll}
      >
        <Grid container>
          <Box component="span" m={1}>
            Users:
          </Box>
          {selected.rows.length ? (
            selected.rows.map(({ id, firstName, surname }) => (
              <Box component="p" m={1} key={id}>
                {firstName} {surname}
              </Box>
            ))
          ) : (
            <Box component="p" m={1}>
              Select users
            </Box>
          )}
        </Grid>
      </TableBLock>
    </Grid>
  )
}

export default App
