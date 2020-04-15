# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Route.delete_all




u1 = User.create!(
    id: 1,
    username: 'guest',
    email: 'guest@gmail.com',
    first_name: 'guest',
    last_name: 'user',
    password: 'password123'
)

u2 = User.create!(
    id: 2,
    username: 'test',
    email: 'test@gmail.com',
    first_name: 'test',
    last_name: 'user',
    password: 'password123'
)

u3 = User.create!(
    id: 3,
    username: 'demo_user',
    email: 'demo_user@gmail.com',
    first_name: 'demo',
    last_name: 'user',
    password: 'password123'
)



Route.create!(
    route_name: 'short run',
    distance: 3.14,
    elevation: 300,
    coordinates: '40.8509, 73.9701',
    estimated_move_time: '0:23',
    athlete_id: u1.id,
    transportation: 'RUNNING'
)

Route.create!(
    route_name: 'long run',
    distance: 9.2,
    elevation: 230,
    coordinates: '40.8215, 73.9876',
    estimated_move_time: '1:23',
    athlete_id: u2.id,
    transportation: 'RUNNING'
)

Route.create!(
    route_name: 'boring run',
    distance: 7.2,
    elevation: 180,
    coordinates: '40.8215, 73.9876',
    estimated_move_time: '1:23',
    athlete_id: u2.id,
    transportation: 'RUNNING'
)

Route.create!(
    route_name: 'fun run',
    distance: 5.14,
    elevation: 150,
    coordinates: '40.8343, 74.0088',
    estimated_move_time: '0:33',
    athlete_id: u3.id,
    transportation: 'RUNNING'
)


Workout.create!(
    workout_name: 'Morning Walk',
    date: Date.new(2020, 4, 1),
    time:  Time.now,
    sport: 'RUNNING',
    title: 'Morning Walk',
    distance: '3.5', 
    user_id: u1.id
)

Workout.create!(
    workout_name: 'Morning Run',
    date: Date.new(2020, 4, 2),
    time:  Time.now,
    sport: 'RUNNING',
    title: 'Morning Run',
    distance: '7.8', 
    user_id: u1.id
)
Workout.create!(    
    workout_name: 'Morning Walk',
    date: Date.new(2020, 4, 1),
    time:  Time.now,
    sport: 'RUNNING',
    title: 'Morning Walk',
    distance: '3.5', 
    user_id: u2.id
)

Workout.create!(
    workout_name: 'Afternoon Walk',
    date: Date.new(2020, 4, 1),
    time:  Time.now,
    sport: 'RUNNING',
    title: 'Morning Walk',
    distance: '2.3', 
    user_id: u3.id
)

Workout.create!(
    workout_name: 'Evening Run',
    date: Date.new(2020, 4, 1),
    time:  Time.now,
    sport: 'RUNNING',
    title: 'Morning Walk',
    distance: '5.7', 
    user_id: u3.id
)


