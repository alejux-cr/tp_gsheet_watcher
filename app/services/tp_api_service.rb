class TpApiService < ApplicationService

    
    def initialize()
        @URL = ENV["TP_URL"]
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