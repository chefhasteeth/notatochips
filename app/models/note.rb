class Note < ApplicationRecord
  belongs_to :user

  def draft? = published_at.present?
end
