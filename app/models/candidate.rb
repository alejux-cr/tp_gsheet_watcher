class Candidate < ApplicationRecord
    validates :timestamp, presence: true,  uniqueness: true

end
