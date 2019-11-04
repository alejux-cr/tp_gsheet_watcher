class CandidatesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    response = GsheetWatcherService.new.call
    @headers = response.values.shift
    unsync_candidates = response.values[Candidate.count...response.values.length]
    @gsheet_candidates = unsync_candidates.map do |gsheet_row|     
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

  def new
  end

  def create
    @candidate = Candidate.new(candidate_params)
    response = TpApiService.new.call(@candidate)
    if response.status == 200
      @candidate.save
      render json: { candidate: @candidate, error: nil}
    else
      render json: { error:'Error connecting to the API!'}
    end
  end
  def error
  end
  
  private
  def candidate_params
    params.require(:candidate).permit(:timestamp,:first_name,:last_name,:email,:phone)
  end
end
