import ResourceList from './ResourceList.jsx'

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
      title="Leaderboard"
      description="See how members are progressing this season."
      columns={columns}
    />
  )
}

export default Leaderboard