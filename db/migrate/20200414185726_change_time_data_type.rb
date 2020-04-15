class ChangeTimeDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :workouts, :date, :string
    change_column :workouts, :time, :string
  end
end
