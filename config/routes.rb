Rails.application.routes.draw do
  
  root 'watcher#index'
  get 'watcher/index'
  scope '/api' do   
    resources :candidates
    #resources :candidates, only: [:index, :create]
    match '*path', to: 'candidates#index', via: :all
  end
  post '/api/candidates', to: 'candidates#create'
end
