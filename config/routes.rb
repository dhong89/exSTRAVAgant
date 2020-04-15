Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :routes, only: [:index, :show, :create, :destroy]
    resources :workouts, only: [:show, :create, :index, :destroy, :update]
    resource :session, only: [:create, :destroy, :show]

  end


  root "static_pages#root"
end
