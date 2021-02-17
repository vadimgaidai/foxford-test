/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Checkbox,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'

interface Column {
  id: string
  label: string
  minWidth?: number
  align?: 'right'
}

interface TableProps {
  columns: Column[]
  rows: any
  selectedRows: Array<any>
  children?: React.ReactNode
  onSelect(event: React.ChangeEvent<HTMLInputElement>, row: any): void
  onSelectAll(event: React.ChangeEvent<HTMLInputElement>): void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      width: '100%',
      maxWidth: 800,
    },
    tableRow: {
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: theme.palette.secondary.main,
        '& > .MuiTableCell-root': {
          color: 'white',
        },
      },
    },
  })
)

const TableBlock: FC<TableProps> = ({
  columns,
  rows,
  selectedRows = [],
  children,
  onSelect,
  onSelectAll,
}: TableProps) => {
  const classes = useStyles()
  return (
    <Paper variant="outlined" className={classes.content}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selectedRows.length > 0 && selectedRows.length < rows.length
                  }
                  checked={
                    rows.length > 0 && selectedRows.length === rows.length
                  }
                  onChange={onSelectAll}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.id}
                hover
                tabIndex={-1}
                selected={selectedRows.indexOf(row) !== -1}
                classes={{ selected: classes.tableRow }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selectedRows.indexOf(row) !== -1}
                    onChange={(event) => onSelect(event, row)}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box component="div" m={1}>
        {children}
      </Box>
    </Paper>
  )
}

export default TableBlock
