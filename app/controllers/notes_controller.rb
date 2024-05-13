class NotesController < AuthenticatedController
  include Validatable

  def new
    render inertia: "notes/edit", props: {note: Note.new}
  end

  def edit
    render inertia: "notes/edit", props: {note: @note}
  end

  def create(contract: Contracts::NoteContract.new)
    Note.create(validate(contract))
  end

  def update
  end

  def destroy
  end
end
