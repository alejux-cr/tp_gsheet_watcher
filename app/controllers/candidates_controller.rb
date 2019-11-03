class CandidatesController < ApplicationController
  layout false

  def index
    response = GsheetWatcherService.new.call
    @headers = response.values.shift
    @gsheet_candidates = response.values.map do |gsheet_row|
      #new_date = DateTime.parse(gsheet_row[0]).strftime('%Y-%m-%d %H:%M:%S') 
      candidate = Candidate.new(:timestamp => gsheet_row[0],:first_name => gsheet_row[1],
        :last_name => gsheet_row[2],:email => gsheet_row[3],:phone =>gsheet_row[4])
      found_candidate = Candidate.find_by_timestamp(candidate.timestamp)  
      candidate.is_syncronized = !found_candidate.nil?
      candidate
    end
    @syncronized_candidates = Candidate.all
  end

  def new
  end

  def create
    @candidate = Candidate.new(candidate_params)
    response = TpApiService.new.call(@candidate)
    if response.status == 200
      @candidate.save
      redirect_to candidates_path
    else
      redirect_to :action => "error"
    end
  end
  def error

  end
  def edit
  end

  def update
  end

  def delete
  end

  def destroy
  end

  private
  def candidate_params
    params.require(:candidate).permit(:timestamp,:first_name,:last_name,:email,:phone)
  end
end
