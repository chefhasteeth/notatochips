class Auth::RegistrationsController < ApplicationController
  include Validatable

  def new
    render inertia: "auth/registrations/new"
  end

  def create(contract: Contracts::Auth::RegistrationContract.new)
    User.create(validate(contract))&.tap do |user|
      create_session(user)
    end

    redirect_to(root_path)
  end
end
