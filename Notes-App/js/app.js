import NotesAPI from "./NotesAPi.js";
import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());
    this._refreshNotes();
  }

  _refreshNotes() {
    const notes = NotesAPI.getAllNotes();
    this._setNotes(notes);
    if (notes.length > 0) {
      this._setActiveNotes(notes[0]);
    }
  }

  _setActiveNotes(note) {
    this.activeNote = note;
    this.view.updateActiveNote(note);
  }

  _setNotes(notes) {
    this.notes = notes;
    this.view.updateNotesList(notes);
    this.view.updateNotePreviewVisibility(notes.length > 0);
  }

  _handlers() {
    return {
      onNoteSelect: (noteId) => {
        const selectedNote = this.notes.find((note) => note.id == noteId);
        this._setActiveNotes(selectedNote);
      },
      onNoteAdd: () => {
        const newNote = {
          title: "New Title",
          body: "Take Note...",
        };
        NotesAPI.saveNotes(newNote);
        this._refreshNotes();
      },
      onNoteEdit: (title, body) => {
        NotesAPI.saveNotes({
          id: this.activeNote.id,
          title,
          body,
        });
        this._refreshNotes();
      },
      onNoteDelete: (noteId) => {
        NotesAPI.deleteNote(noteId);
        this._refreshNotes();
      },
    };
  }
}
