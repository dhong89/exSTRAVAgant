class AddCorrectRouteIndex < ActiveRecord::Migration[5.2]
  def change
     add_index :routes, [:route_name, :athlete_id], :unique => true
  end
end
