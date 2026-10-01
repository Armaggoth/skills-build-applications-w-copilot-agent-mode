import ResourceList from './ResourceList.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'userId', label: 'Member' },
  { key: 'teamId', label: 'Team' },
  { key: 'points', label: 'Points' },
]

function Leaderboard() {
  return (
    <ResourceList
      resource="leaderboard"
      endpoint={endpoint}
      title="Leaderboard"
      description="See how members are progressing this season."
      columns={columns}
    />
  )
}

export default Leaderboard