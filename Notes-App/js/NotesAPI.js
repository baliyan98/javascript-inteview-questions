export default class NotesAPI {
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  static saveNotes(noteToSave) {
    let notes = NotesAPI.getAllNotes();
    const existing = notes.find((note) => note.id == noteToSave.id);
    // edit/ update
    if (existing) {
      existing.title = noteToSave.title;
      existing.body = noteToSave.body;
      existing.updated = new Date().toISOString();
    } else {
      noteToSave.id = Math.floor(Math.random() * 1000);
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }

    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  }
  static deleteNote(noteId) {
    let notes = NotesAPI.getAllNotes();
    notes = notes.filter((note) => note.id != noteId);
    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  }
}
