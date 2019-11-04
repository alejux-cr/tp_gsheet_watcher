require 'test_helper'

class WatcherControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get watcher_index_url
    assert_response :success
  end

end
