/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Checkbox,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from '@material-ui/core'

interface Column {
  id: string
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

interface TableProps {
  columns: Column[]
  rows: any
  isCheckbox?: boolean
  children?: React.ReactNode
}

const TableBlock: FC<TableProps> = ({
  columns,
  rows,
  isCheckbox = false,
  children,
}: TableProps) => (
  <Paper variant="outlined">
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {isCheckbox && (
              <TableCell padding="checkbox">
                <Checkbox inputProps={{ 'aria-labelledby': 'checkbox' }} />
              </TableCell>
            )}
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
            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
              {isCheckbox && (
                <TableCell padding="checkbox">
                  <Checkbox inputProps={{ 'aria-labelledby': 'checkbox' }} />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {children && (
          <TableFooter>
            <TableRow>
              <TableCell>{children}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  </Paper>
)

export default TableBlock
