import ResourceList from './ResourceList.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'About' },
  { key: 'memberIds', label: 'Members' },
]

function Teams() {
  return (
    <ResourceList
      resource="teams"
      endpoint={endpoint}
      title="Teams"
      description="Training groups building consistency together."
      columns={columns}
    />
  )
}

export default Teams