Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    
    resources :users, only: [:index, :show, :create, :update]
    resources :questions, only: [:index, :show, :create, :update, :destroy]
    resources :questions do 
      resources :answers, only: [:index]
    end

    resources :answers, only: [:create, :update, :destroy]
  end
  
  root to: 'static_pages#root'
end
