import mongoose, { Schema } from 'mongoose'

const documentSchema = new Schema<Record<string, unknown>>(
  {},
  { strict: false, timestamps: true },
)

export const User = mongoose.models.User ?? mongoose.model('User', documentSchema)
export const Team = mongoose.models.Team ?? mongoose.model('Team', documentSchema)
export const Activity = mongoose.models.Activity ?? mongoose.model('Activity', documentSchema)
export const LeaderboardEntry =
  mongoose.models.LeaderboardEntry ?? mongoose.model('LeaderboardEntry', documentSchema)
export const Workout = mongoose.models.Workout ?? mongoose.model('Workout', documentSchema)