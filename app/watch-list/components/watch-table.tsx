import { Table } from 'react-bootstrap'

import { TWatchColumn, TWatchRecord } from './watch-tabs'
import { TableCell } from './watch-cell'

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
        <Table
          responsive
          className="text-center text-lg align-middle"
        >
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.name}
                  className={column.classNames}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                {columns.map((column) => {
                  return (
                    column.name && (
                      <TableCell
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