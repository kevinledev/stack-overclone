Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    
    resources :users, only: [:index, :show, :create, :update]
  end
  
  root to: 'static_pages#root'
end
