Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  root "home#index"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :albums, only: :show do
        resources :recently_heards, only: %i[create]
      end
      resources :categories, only: %i[index show]
      resources :dashboard, only: :index
      resources :search, only: :index
    end
  end

end
