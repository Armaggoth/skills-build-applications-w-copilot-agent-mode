import ResourceList from './ResourceList.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'About' },
  { key: 'memberIds', label: 'Members' },
]

function Teams() {
  return (
    <ResourceList
      resource="teams"
      title="Teams"
      description="Training groups building consistency together."
      columns={columns}
    />
  )
}

export default Teams