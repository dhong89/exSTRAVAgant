class ChangeToTitleColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :workouts, :workout_name, :title
  end
end
