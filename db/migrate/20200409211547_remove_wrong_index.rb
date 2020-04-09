class RemoveWrongIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :routes, name: "index_routes_on_athlete_id_and_route_name"
  end
end
