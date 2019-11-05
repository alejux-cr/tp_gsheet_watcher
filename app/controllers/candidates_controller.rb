class CandidatesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    start_index = Candidate.count+2
    response = GsheetWatcherService.new(start_index).call

    @gsheet_candidates = (response.values ||[]).map do |gsheet_row|     
      candidate_in_db = Candidate.find_by_timestamp(gsheet_row[0])
      if candidate_in_db
        candidate = candidate_in_db
      else
        candidate = Candidate.new(:timestamp => gsheet_row[0],:first_name => gsheet_row[1],
        :last_name => gsheet_row[2],:email => gsheet_row[3],:phone =>gsheet_row[4],
        :is_syncronized => 0)
      end
      candidate
    end
    render json: { candidates: @gsheet_candidates}
  end

  def create
    @candidate = Candidate.new(candidate_params)
    response = TpApiService.new.call(@candidate)
    @candidate.save
    render json: { body: response.body }, status:response.status
        
  end

  def error
  end
  
  private
  def candidate_params
    params.require(:candidate).permit(:timestamp,:first_name,:last_name,:email,:phone, :is_syncronized)
  end
end
