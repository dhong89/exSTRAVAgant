# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Route.delete_all
Workout.delete_all




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
    route_name: 'Morning run',
    distance: 3.14,
    elevation: 300,
    estimated_move_time: '0:23',
    athlete_id: u3.id,
    transportation: 'RUNNING',
    image_url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C40.73525,-73.99413000000001&markers=label:E%7C40.73523,-73.99401&path=color:0x0000ff80|weight:2|enc:ibswFh~rbMuGgEaC_BAFH]`A}ClAwDFOxBvAzBvARJvB`BNLuC~I&key=AIzaSyBukEF_3yOYk6AJV3F8PlGze__SamMtBfA"
)

Route.create!(
    route_name: 'Stress run',
    distance: 9.2,
    elevation: 230,
    estimated_move_time: '1:23',
    athlete_id: u3.id,
    transportation: 'RUNNING',
    image_url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C40.733990000000006,-73.99504&markers=label:E%7C40.733700000000006,-73.99537000000001&path=color:0x0000ff80|weight:2|enc:mzrwF~csbMsDcCwEwCgGaEeFkDwBuAgJcG}GsEyBwAiEqCiGaEmCeB{BwAqBsAKIENyBuA_BeA~AdAxBtAb@ZvA`AoCrIc@tAa@pAw@bCeCxHmChIuClJ}A~E_EnMzHdFpD`CbC`BlHvE`Ap@ENeF`Pk@dBOd@Ne@j@eBbC~AhCfBtBnAtBtAjEtC~@l@pAz@\\gA`BeFp@oBNs@`BaFhDkKRo@vA`AhCdB`@VfAp@~@g@`Ae@pDoBx@a@hB{@b@Wj@a@PC@GRm@pEsNvBxAfElC`@XHOtBuGz@kCpAwD_GyDe@]&key=AIzaSyBukEF_3yOYk6AJV3F8PlGze__SamMtBfA"
)

Route.create!(
    route_name: 'Quick Walk',
    distance: 7.2,
    elevation: 180,
    estimated_move_time: '1:23',
    athlete_id: u3.id,
    transportation: 'RUNNING',
    image_url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C40.734570000000005,-73.99461000000001&markers=label:E%7C40.73588,-73.99734000000001&path=color:0x0000ff80|weight:2|enc:a~rwFhasbMeHoEcC_BaCaBgFkDwBsAsE{C~AdAnDcLrAeEDO?@HWcFeD`GeRDOpBlArBtAhFjD|BzAxBrA|B~A|DcMBICHcC_BsFoDyMuIyBwAAFkCjIyArEmFrPyAtEs@tByApEiB~FgB~FeAbDQh@\\TRNNHEP`An@vA~@TRJFELs@zBwAnEsAnEdBjAPJbFdDjFjD`CzApGjEnBpAbA}CzCqJr@{B&key=AIzaSyBukEF_3yOYk6AJV3F8PlGze__SamMtBfA"
)



Workout.create!(
    title: 'Morning Walk',
    date: '2019-12-26',
    time:  '7:00AM',
    sport: 'Run',
    description: 'Walk before work',
    distance: '3.5',
    user_id: u3.id
)

Workout.create!(
    title: 'Just a stroll',
    date: '2020-01-21',
    time:  '6:00PM',
    sport: 'Run',
    description: 'Stroll',
    distance: '1.5',
    user_id: u3.id
)

Workout.create!(
    title: 'Fast run',
    date: '	2020-01-26',
    time:  '9:00AM',
    sport: 'Run',
    description: 'Up tempo run',
    distance: '7.5',
    user_id: u3.id
)

Workout.create!(
    title: 'Afternoon run',
    date: '	2020-02-26',
    time:  '2:00PM',
    sport: 'Run',
    description: 'Run after lunch',
    distance: '5.5',
    user_id: u1.id
)

Workout.create!(
    title: 'Evening Walk',
    date: '	2020-03-26',
    time:  '9:00PM',
    sport: 'Run',
    description: 'Walk before bed',
    distance: '0.5',
    user_id: u2.id
)


