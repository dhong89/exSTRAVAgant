class EditSessionTokenColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :pasword_digest, :password_digest
  end
end
