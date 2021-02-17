/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import {
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

const TableBlock: FC<TableProps> = ({
  columns,
  rows,
  selectedRows = [],
  children,
  onSelect,
  onSelectAll,
}: TableProps) => (
  <Paper variant="outlined">
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
                checked={rows.length > 0 && selectedRows.length === rows.length}
                onChange={onSelectAll}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
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
            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
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

export default TableBlock
