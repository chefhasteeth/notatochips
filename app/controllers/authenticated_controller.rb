class AuthenticatedController < ApplicationController
  before_action :require_valid_session

  inertia_share user: ->{ Current.user }

  private

  def require_valid_session
    redirect_to new_auth_sessions_path unless user_signed_in?
  end
end
