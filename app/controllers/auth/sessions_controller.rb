class Auth::SessionsController < ApplicationController
  include Validatable

  def new
    render inertia: "auth/sessions/new"
  end

  def create(contract: Contracts::Auth::SessionContract.new)
    User.authenticate_by(validate(contract))&.tap do |user|
      create_session(user)
    end

    redirect_to(root_path)
  end

  def destroy
    destroy_session
    redirect_to(new_session_path)
  end
end
