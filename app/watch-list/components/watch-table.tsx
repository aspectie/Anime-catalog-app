import { Table } from 'react-bootstrap'

import { TWatchColumn, TWatchRecord } from './watch-tabs'
import { baseURL } from '@/constants/api'

export function WatchTable({
  columns,
  records
}: {
  columns: TWatchColumn[]
  records: TWatchRecord[] | null
}) {
  return (
    <>
      {records && records.length > 0 ? (
        <Table responsive>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.name}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                {columns.map((column) => {
                  return (
                    column.name && (
                      <Cell
                        key={`${record.id}_${column.name}`}
                        column={column}
                        record={record}
                      />
                    )
                  )
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center p-5">
          <span className="text-white text-xl">The table is empty</span>
        </div>
      )}
    </>
  )
}

function Cell({
  column,
  record
}: {
  column: TWatchColumn
  record: TWatchRecord
}) {
  let value

  switch (column.type) {
    case 'image': {
      value = baseURL + String(record.image?.x48)
      break
    }
    case 'default': {
      value = String(record[column.name])
      break
    }
  }

  return <td>{column.renderer(value)}</td>
}