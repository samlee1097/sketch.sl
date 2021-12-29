Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
