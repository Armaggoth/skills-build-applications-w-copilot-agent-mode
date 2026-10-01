const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

function findRecords(payload) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []

  for (const key of ['results', 'items', 'data', 'documents']) {
    const records = payload[key]
    if (Array.isArray(records)) return records
    if (records && typeof records === 'object') {
      const nestedRecords = findRecords(records)
      if (nestedRecords.length > 0) return nestedRecords
    }
  }

  return []
}

export async function fetchResource(resource, signal) {
  const response = await fetch(`${API_BASE_URL}/${resource}/`, { signal })
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return findRecords(await response.json())
}

export function displayValue(value) {
  if (value === null || value === undefined || value === '') return '-'
  if (Array.isArray(value)) return value.map(displayValue).join(', ')
  if (typeof value === 'object') {
    return value.name ?? value.title ?? value._id ?? value.id ?? '-'
  }
  return String(value)
}