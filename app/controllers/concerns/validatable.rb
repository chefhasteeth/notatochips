module Validatable
  extend ActiveSupport::Concern

  class ValidationError < ArgumentError; end

  included do
    rescue_from ValidationError do |e|
      redirect_back(fallback_location: root_path, errors: JSON.parse(e.message))
    end

    def validate(contract)
      contract.call(params.to_unsafe_h).tap do |result|
        raise ValidationError, result.errors(full: true).to_h.to_json if result.failure?
      end.to_h
    end
  end
end
