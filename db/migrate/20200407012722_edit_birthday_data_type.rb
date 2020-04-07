class EditBirthdayDataType < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birthday, :string
  end
end
