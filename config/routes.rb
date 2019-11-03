Rails.application.routes.draw do
  
  root 'candidates#index'

  resources :candidates
  
  match '*path', to: 'candidates#index', via: :all
end
