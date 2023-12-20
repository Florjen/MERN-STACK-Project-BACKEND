const express = require('express')
const { createWorkout,getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const router = express.Router()

const requireAuth = require('../middleware/requireAuth')

//require auth for all workout routes
router.use(requireAuth)

//GET all workouts
router.get('/',getWorkouts)

//GET a single workouts 
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)



//DELETE a workouts
router.delete('/:id',deleteWorkout)


//UPDATE a workouts
router.patch('/:id',updateWorkout)



module.exports = router