require 'test_helper'

class CandidatesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get candidates_url
    assert_response :success
  end
  test "should create candidate" do
    post candidates_url, params: {
      candidate:{
        timestamp:"11/4/2019 9:39:21",
        first_name: "test",
        last_name: "lastname",
        email:"test@mail.com",
        phone:"123456789"
      }  
    }
    assert_response :success
  end
end
