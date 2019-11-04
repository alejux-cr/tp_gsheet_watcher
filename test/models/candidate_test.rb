require 'test_helper'

class CandidateTest < ActiveSupport::TestCase
  test "should not save candidate without timestamp" do
    candidate = Candidate.new
    assert_not candidate.save, "Saved the candidate without a timestamp"
  end
end
