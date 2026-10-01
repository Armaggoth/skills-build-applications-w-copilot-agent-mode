import express from 'express'
import { connectDatabase } from './config/database.js'
import { Activity, LeaderboardEntry, Team, User, Workout } from './models.js'

const app = express()
const port = 8000
const codespaceName = process.env.CODESPACE_NAME
const codespaceApiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : undefined
const apiUrl = codespaceApiUrl ?? `http://localhost:${port}`

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiUrl })
})

const resources = [
  ['/api/users/', User],
  ['/api/teams/', Team],
  ['/api/activities/', Activity],
  ['/api/leaderboard/', LeaderboardEntry],
  ['/api/workouts/', Workout],
] as const

for (const [path, model] of resources) {
  app.get(path, async (_request, response) => {
    response.json(await model.find().lean())
  })

  app.post(path, async (request, response) => {
    const document = await model.create(request.body)
    response.status(201).json(document)
  })
}

async function startServer(): Promise<void> {
  try {
    await connectDatabase()
    console.log('Connected to octofit_db')
  } catch (error) {
    console.error('Could not connect to MongoDB:', error)
  }

  app.listen(port, () => {
    console.log(`OctoFit API listening at ${apiUrl}`)
  })
}

void startServer()