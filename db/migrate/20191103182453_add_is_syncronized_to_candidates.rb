class AddIsSyncronizedToCandidates < ActiveRecord::Migration[6.0]
  def change
    add_column :candidates, :is_syncronized, :integer, :null => false, :default => 1
  end
end
