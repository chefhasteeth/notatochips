class Contracts::Auth::SessionContract < Contracts::ApplicationContract
  params do
    required(:email).filled(:string)
    required(:password).filled(:string)
  end
end
