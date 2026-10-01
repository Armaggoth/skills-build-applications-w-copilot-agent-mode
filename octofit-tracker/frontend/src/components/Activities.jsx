import ResourceList from './ResourceList.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'userId', label: 'Member' },
  { key: 'teamId', label: 'Team' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'distanceKilometers', label: 'Distance (km)' },
  { key: 'calories', label: 'Calories' },
  {
    key: 'completedAt',
    label: 'Completed',
    render: (value) => value ? new Date(value).toLocaleDateString() : '-',
  },
]

function Activities() {
  return (
    <ResourceList
      resource="activities"
      endpoint={endpoint}
      title="Activities"
      description="Recent movement logged by your community."
      columns={columns}
    />
  )
}

export default Activities