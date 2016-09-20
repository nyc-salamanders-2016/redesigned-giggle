Rails.application.routes.draw do
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  post '/flows/new', to: 'pages#create'
  get '/flows/continue', to: 'pages#continue'
  get '/flows/reset', to: 'pages#reset'


  root 'pages#home'

  resources :students, only: [:new, :create]
  resources :pitches, only: [:create]
  resources :votes, only: [:create]
  resources :preferences, only: [:create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
