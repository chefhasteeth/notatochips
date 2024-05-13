class ApplicationController < ActionController::Base
  add_flash_types :errors

  inertia_share errors: ->{ flash[:errors] }

  private

  def create_session(user)
    Current.user = user
    cookies.permanent[:session_id] = {value: user.id, same_site: :strict}
  end

  def destroy_session
    Current.user = nil
    cookies.delete(:session_id)
  end

  def current_user
    Current.user ||= User.find_by(id: cookies[:session_id])
  end

  def user_signed_in?
    current_user.present?
  end

  helper_method :current_user
  helper_method :user_signed_in?
end
