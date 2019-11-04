class GsheetWatcherService < ApplicationService

    
    def initialize()
        @OOB_URI = "urn:ietf:wg:oauth:2.0:oob".freeze
        @APPLICATION_NAME = "Talkpush GoogleSheet Watcher".freeze
        @CREDENTIALS_PATH = "config/credentials.json".freeze
        @TOKEN_PATH = "config/token.yaml".freeze
        @SCOPE = Google::Apis::SheetsV4::AUTH_SPREADSHEETS_READONLY
        @SERVICE = Google::Apis::SheetsV4::SheetsService.new
        @SPREADSHEET_ID = "1xkofJa5iI3AQE4yWEoHqMTQ1QQ-VDsfUDDwV96QQDVM"
        @RANGE = "Form Responses 2"
        @SERVICE = Google::Apis::SheetsV4::SheetsService.new
        @SERVICE.client_options.application_name = @APPLICATION_NAME
        @SERVICE.authorization = authorize
    end
  
    def call()      
        response = @SERVICE.get_spreadsheet_values @SPREADSHEET_ID, @RANGE
        response
    end

    private

    def authorize
        client_id = Google::Auth::ClientId.from_file @CREDENTIALS_PATH
        token_store = Google::Auth::Stores::FileTokenStore.new file: @TOKEN_PATH
        authorizer = Google::Auth::UserAuthorizer.new client_id, @SCOPE, token_store
        user_id = "default"
        credentials = authorizer.get_credentials user_id
        if credentials.nil?
          url = authorizer.get_authorization_url base_url: @OOB_URI
          code = gets
          credentials = authorizer.get_and_store_credentials_from_code(
            user_id: user_id, code: code, base_url: @OOB_URI
          )
        end
        credentials
      end
  end