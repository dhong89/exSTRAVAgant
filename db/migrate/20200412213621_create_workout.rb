class CreateWorkout < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :workout_name, null: false
      t.date :date, null: false
      t.time  :time , null: false
      t.string :sport, null: false
      t.string :title , null: false
      t.string :distance, null: false

      t.timestamps
    end
  end
end
