class TpApiService < ApplicationService

    
    def initialize()
        @CAMPAIGN_ID = "3929"
        @URL = "https://my.talkpush.com/api/talkpush_services/campaigns/"+@CAMPAIGN_ID+"/campaign_invitations"
        @API_KEY = ENV["TP_API_KEY"]
        
    end
  
    def call(candidate)
        body = {
            :api_key => @API_KEY,
            :campaign_invitation => {
                :first_name => candidate.first_name,
                :last_name => candidate.last_name,
                :email => candidate.email,
                :user_phone_number => candidate.phone,
                :temporary_cv => {},
                :source => '',
                :gender => '',
                :others => {}
            }
        }
        response = Faraday.post(@URL, body.to_json,"Content-Type" => "application/json")
        response
    end

    private

    
  end