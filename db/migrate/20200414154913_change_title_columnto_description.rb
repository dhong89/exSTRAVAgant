class ChangeTitleColumntoDescription < ActiveRecord::Migration[5.2]
  def change
    rename_column :workouts, :title, :description
  end
end
