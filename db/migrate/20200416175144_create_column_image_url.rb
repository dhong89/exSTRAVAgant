class CreateColumnImageUrl < ActiveRecord::Migration[5.2]
  def change
    create_table :column_image_urls do |t|
      t.string :image_url
    end
  end
end
