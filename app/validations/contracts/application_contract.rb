class Contracts::ApplicationContract < Dry::Validation::Contract
  config.messages.top_namespace = "validation"
  config.messages.load_paths << "config/locales/validation/en.yml"
end
