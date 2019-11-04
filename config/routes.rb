Rails.application.routes.draw do
  
  root 'watcher#index'
  get 'watcher/index'
  scope '/api' do
    

    resources :candidates
    
    match '*path', to: 'candidates#index', via: :all
  end
  
end
