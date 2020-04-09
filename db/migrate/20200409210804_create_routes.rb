class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :route_name, null: false
      t.float :distance, null: false
      t.integer :elevation, null: false
      t.string :coordinates, null: false
      t.string :estimated_move_time, null: false
      t.integer :athlete_id, null: false
      t.string :transportation, null: false

      t.timestamps
      
    end
  end
end
