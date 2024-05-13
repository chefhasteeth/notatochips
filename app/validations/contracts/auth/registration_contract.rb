class Contracts::Auth::RegistrationContract < Contracts::ApplicationContract
  MINIMUM_PASSWORD_SIZE = 12

  params(Contracts::Auth::SessionContract.params) do
    required(:password_confirmation).filled(:string)
  end

  rule(:email) do
    key.failure(:taken) if User.find_by(email: value)
  end

  rule(:password) do
    key.failure(:short_password) if value.size < MINIMUM_PASSWORD_SIZE
  end

  rule(:password_confirmation) do
    key.failure(:does_not_match) unless values[:password] == value
  end
end
