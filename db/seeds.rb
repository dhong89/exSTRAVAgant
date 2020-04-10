# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Route.delete_all


# username: 'demo_user',
# email: 'demo_user@gmail.com',
# first_name: 'demo',
# last_name: 'user',
# password: 'password123'

# route_name:, 
# distance:, 
# elevation:, 
# coordinates:, 
# estimated_move_time:, 
# athlete_id:, 
# transportation:


u1 = User.create!(
    username: 'guest',
    email: 'guest@gmail.com',
    first_name: 'guest',
    last_name: 'user',
    password: 'password123'
)

u2 = User.create!(
    username: 'test',
    email: 'test@gmail.com',
    first_name: 'test',
    last_name: 'user',
    password: 'password123'
)

u3 = User.create!(
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
    coordinates: [long: 40.8509, lat: 73.9701],
    estimated_move_time: '0:23',
    athlete_id: u1,
    transportation: 'RUNNING'
)

Route.create!(
    route_name: 'long run',
    distance: 9.2,
    elevation: 230,
    coordinates: [long: 40.8215, lat: 73.9876],
    estimated_move_time: '1:23',
    athlete_id: u2,
    transportation: 'RUNNING'
)


Route.create!(
    route_name: 'fun run',
    distance: 5.14,
    elevation: 150,
    coordinates: [long: 40.8343, lat: 74.0088],
    estimated_move_time: '0:33',
    athlete_id: u3,
    transportation: 'RUNNING'
)
