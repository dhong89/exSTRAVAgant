class DropTableColumnImageUrl < ActiveRecord::Migration[5.2]
  def change
    drop_table :column_image_urls
  end
end
