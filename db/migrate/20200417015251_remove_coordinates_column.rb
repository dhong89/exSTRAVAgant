class RemoveCoordinatesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :coordinates
  end
end