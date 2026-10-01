import ResourceList from './ResourceList.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'category', label: 'Category' },
  { key: 'difficulty', label: 'Level' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'exercises', label: 'Exercises' },
]

function Workouts() {
  return (
    <ResourceList
      resource="workouts"
      endpoint={endpoint}
      title="Workouts"
      description="Training ideas tailored to keep your momentum going."
      columns={columns}
    />
  )
}

export default Workouts