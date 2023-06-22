'use client'

import Form from 'react-bootstrap/Form';

function Select({
    options
}) {
  return (
    <Form.Select size="sm">
      {
        options.map((o) => {
          return (
            <option value={o.value} key={o.value}>
              {o.title}
            </option>
          )
        })
      }
    </Form.Select>
  )
}

export default Select;