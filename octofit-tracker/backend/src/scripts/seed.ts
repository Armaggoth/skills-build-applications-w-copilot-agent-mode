import mongoose from 'mongoose'
import { connectDatabase } from '../config/database.js'
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models.js'

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase(): Promise<void> {
  try {
    await connectDatabase()
    console.log('Connected to octofit_db')

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ])

    const users = await User.insertMany([
      {
        name: 'Maya Chen',
        email: 'maya.chen@example.com',
        avatar: 'maya-chen',
        weeklyGoal: 4,
      },
      {
        name: 'Jordan Rivera',
        email: 'jordan.rivera@example.com',
        avatar: 'jordan-rivera',
        weeklyGoal: 5,
      },
      {
        name: 'Avery Thompson',
        email: 'avery.thompson@example.com',
        avatar: 'avery-thompson',
        weeklyGoal: 3,
      },
    ])

    const teams = await Team.insertMany([
      {
        name: 'Summit Striders',
        description: 'Climb higher together through consistent training.',
        color: '#1f7a8c',
        memberIds: [users[0]._id, users[1]._id],
      },
      {
        name: 'Morning Momentum',
        description: 'Short, focused sessions before the day gets busy.',
        color: '#e07a5f',
        memberIds: [users[1]._id, users[2]._id],
      },
    ])

    await Activity.insertMany([
      {
        userId: users[0]._id,
        teamId: teams[0]._id,
        type: 'run',
        durationMinutes: 32,
        distanceKilometers: 5.1,
        calories: 408,
        completedAt: new Date('2026-09-20T07:30:00Z'),
      },
      {
        userId: users[1]._id,
        teamId: teams[0]._id,
        type: 'strength',
        durationMinutes: 45,
        calories: 365,
        completedAt: new Date('2026-09-21T17:15:00Z'),
      },
      {
        userId: users[2]._id,
        teamId: teams[1]._id,
        type: 'cycling',
        durationMinutes: 50,
        distanceKilometers: 16.8,
        calories: 512,
        completedAt: new Date('2026-09-22T06:45:00Z'),
      },
    ])

    await LeaderboardEntry.insertMany([
      { userId: users[0]._id, teamId: teams[0]._id, points: 840, rank: 1 },
      { userId: users[1]._id, teamId: teams[0]._id, points: 720, rank: 2 },
      { userId: users[2]._id, teamId: teams[1]._id, points: 610, rank: 3 },
    ])

    await Workout.insertMany([
      {
        userId: users[0]._id,
        title: 'Steady 5K Builder',
        category: 'running',
        difficulty: 'intermediate',
        durationMinutes: 35,
        exercises: ['Warm-up walk', 'Easy run', 'Cool-down stretch'],
      },
      {
        userId: users[1]._id,
        title: 'Full-body Foundation',
        category: 'strength',
        difficulty: 'beginner',
        durationMinutes: 30,
        exercises: ['Squats', 'Push-ups', 'Reverse lunges', 'Plank'],
      },
      {
        userId: users[2]._id,
        title: 'Bike Power Intervals',
        category: 'cycling',
        difficulty: 'advanced',
        durationMinutes: 40,
        exercises: ['Warm-up spin', 'Four power intervals', 'Recovery spin'],
      },
    ])

    console.log('Seeded 3 users, 2 teams, 3 activities, 3 leaderboard entries, and 3 workouts')
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exitCode = 1
  } finally {
    await mongoose.disconnect()
  }
}

void seedDatabase()
