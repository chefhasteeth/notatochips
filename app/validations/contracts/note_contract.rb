class Contracts::NoteContract < Contracts::ApplicationContract
  params do
    maybe(:title).filled(:string)
    required(:content).filled(:string)
  end
end
