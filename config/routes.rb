Rails.application.routes.draw do
  
  # namespace :api do
    resources :appointments, only: [:index, :create, :update, :destroy]
    resources :doctors, only: [:index]
    
    post '/users', to: "users#create"
    post '/login', to: "sessions#login"
    get '/authorized_user', to: "users#show"
    delete '/logout', to: "sessions#logout"
  # end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
