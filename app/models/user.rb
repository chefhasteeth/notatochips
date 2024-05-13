class User < ApplicationRecord
  has_secure_password

  normalizes :email, with: ->(email) { email.strip.downcase }

  generates_token_for :password_reset, expires_in: 1.hour { password_salt&.last(10) }
  generates_token_for :email_confirmation, expires_in: 1.day { email }

  has_many :notes
end
