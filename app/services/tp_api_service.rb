class TpApiService < ApplicationService

    
    def initialize()
        @CAMPAIGN_ID = "3929"
        @URL = "https://my.talkpush.com/api/talkpush_services/campaigns/"+@CAMPAIGN_ID+"/campaign_invitations"
        @API_KEY = "48530ba23eef6b45ffbc95d7c20a60b9"
        
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
        #Faraday.ignore_env_proxy = true
        response = Faraday.post(@URL, body.to_json,"Content-Type" => "application/json")
        #response = Faraday.post(@URL) do |req|   
        #    req.headers['Content-Type'] = 'application/json'
        #    req.body = body.to_json
        #  end     
        response
    end

    private

    
  end