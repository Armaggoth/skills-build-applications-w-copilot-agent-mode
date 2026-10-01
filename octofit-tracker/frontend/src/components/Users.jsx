import ResourceList from './ResourceList.jsx'

const columns = [
  { key: 'name', label: 'Member' },
  { key: 'email', label: 'Email' },
  { key: 'weeklyGoal', label: 'Weekly goal' },
]

function Users() {
  return (
    <ResourceList
      resource="users"
      title="Members"
      description="People showing up and making progress."
      columns={columns}
    />
  )
}

export default Users