class CreateRouteIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :routes, [:athlete_id, :route_name], :unique => true
   
  end
end
