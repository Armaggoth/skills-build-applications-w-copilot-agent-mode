import ResourceList from './ResourceList.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

const columns = [
  { key: 'name', label: 'Member' },
  { key: 'email', label: 'Email' },
  { key: 'weeklyGoal', label: 'Weekly goal' },
]

function Users() {
  return (
    <ResourceList
      resource="users"
      endpoint={endpoint}
      title="Members"
      description="People showing up and making progress."
      columns={columns}
    />
  )
}

export default Users