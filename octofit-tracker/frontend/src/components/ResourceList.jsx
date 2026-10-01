import { useEffect, useState } from 'react'
import { displayValue, fetchResource } from '../api.js'

function ResourceList({ resource, title, description, columns }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetchResource(resource, controller.signal)
      .then((items) => {
        setRecords(items)
        setStatus('success')
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
          setStatus('error')
        }
      })

    return () => controller.abort()
  }, [resource])

  return (
    <section className="resource-page" aria-labelledby={`${resource}-title`}>
      <div className="page-heading">
        <div>
          <p className="eyebrow">OCTOFIT TRACKER</p>
          <h1 id={`${resource}-title`}>{title}</h1>
          <p className="page-description">{description}</p>
        </div>
        {status === 'success' && (
          <p className="record-count" aria-live="polite">
            <strong>{records.length}</strong> {records.length === 1 ? 'record' : 'records'}
          </p>
        )}
      </div>

      <div className="table-wrap">
        {status === 'loading' && <p className="table-message">Loading {title.toLowerCase()}...</p>}
        {status === 'error' && (
          <p className="table-message error-message" role="alert">
            Could not load {title.toLowerCase()}: {error}
          </p>
        )}
        {status === 'success' && records.length === 0 && (
          <p className="table-message">No {title.toLowerCase()} to show yet.</p>
        )}
        {status === 'success' && records.length > 0 && (
          <table className="table resource-table mb-0">
            <thead>
              <tr>
                {columns.map((column) => <th key={column.key} scope="col">{column.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record._id ?? record.id ?? `${resource}-${index}`}>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {column.render
                        ? column.render(record[column.key], record)
                        : displayValue(record[column.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default ResourceList