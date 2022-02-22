Rails.application.routes.draw do
  post "signup", to: "registrations#signup"
  post "/login", to:"sessions#login"
  delete "/logout", to:"sessions#logout"
  get "/logged_in", to:"sessions#logged_in?"

  get "todos", to:"site#index"
  get "todos/new", to:"site#index"
  get "todos/:id/edit", to:"site#index"

  namespace :api do
    namespace :v1 do
      delete  "/todos/destroy_all", to: "todos#destroy_all"
      resources :todos, only: %i[index show create update destroy]
    end
  end
end
