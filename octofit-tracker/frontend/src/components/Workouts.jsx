import ResourceList from './ResourceList.jsx'

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
      title="Workouts"
      description="Training ideas tailored to keep your momentum going."
      columns={columns}
    />
  )
}

export default Workouts