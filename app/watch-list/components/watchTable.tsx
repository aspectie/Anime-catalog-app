import { Table } from 'react-bootstrap'

import { TWatchColumn, TWatchRecord } from './watchTabs'

export function WatchTable({
  columns,
  records
}: {
  columns: TWatchColumn[]
  records: TWatchRecord[] | null
}) {
  return (
    <Table responsive>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records &&
          records.length > 0 &&
          records.map((record) => (
            <tr key={record.id}>
              {columns.map((column) => {
                return (
                  column.name && (
                    <td key={`${record.id}_${column.name}`}>
                      {record[column.name]}
                    </td>
                  )
                )
              })}
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
