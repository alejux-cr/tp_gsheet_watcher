class CreateCandidates < ActiveRecord::Migration[6.0]
  def up
    create_table :candidates do |t|
      t.string :timestamp
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone

      t.timestamps
    end
  end

  def down
    drop_table :candidates
  end
end
