export default class NotesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
      <div class="notes-sidebar">
      <button class="new-note-button">Add Note</button>
      <div class="note">
        <div class="note-list">
        </div>
      </div>
    </div>
    <div class="notes-preview">
      <input type="text" class="note-input" placeholder="Enter a Title" />
      <textarea class="note-text"></textarea>
    </div>
      `;

    const buttonSelector = this.root.querySelector(".new-note-button");
    const addTitleSelector = this.root.querySelector(".note-input");
    const textSelector = this.root.querySelector(".note-text");

    buttonSelector.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [addTitleSelector, textSelector].forEach((textBar) => {
      textBar.addEventListener("blur", () => {
        const title = addTitleSelector.value.trim();
        const notes = textSelector.value.trim();
        this.onNoteEdit(title, notes);
      });
    });
    // to hide the notes preview initially
    this.updateNotePreviewVisibility(false);
  }

  _createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 60;
    return `
    <div class="note-list" data-note-id="${id}">
    <div class="note-title">${title}</div>
    <div class="note-body">${body.substring(0, MAX_BODY_LENGTH)}${
      body.length > 60 ? "..." : ""
    }</div>
    <div class="note-footer">${updated.toLocaleString(undefined, {
      dateStyle: "full",
      timeStyle: "short",
    })}</div>
  </div>
</div>
    `;
  }
  updateNotesList(notes) {
    const notesContainer = this.root.querySelector(".note");
    // Empty list
    notesContainer.innerHTML = ``;
    for (const note of notes) {
      const html = this._createListItemHTML(
        note.id,
        note.title,
        note.body,
        new Date(note.updated)
      );
      notesContainer.insertAdjacentHTML("beforeend", html);
    }
    notesContainer.querySelectorAll(".note-list").forEach((note) => {
      note.addEventListener("click", () => {
        this.onNoteSelect(note.dataset.noteId);
      });
      note.addEventListener("dblclick", () => {
        const isConfirm = confirm("Are you sure to delete this note?");
        if (isConfirm) {
          this.onNoteDelete(note.dataset.noteId);
        }
      });
    });
  }
  updateActiveNote(note) {
    this.root.querySelector(".note-input").value = note.title;
    this.root.querySelector(".note-text").value = note.body;
    this.root.querySelectorAll(".note-list").forEach((note) => {
      note.classList.remove("note-list-selected");
    });

    this.root
      .querySelector(`.note-list[data-note-id = "${note.id}"]`)
      .classList.add("note-list-selected");
  }

  updateNotePreviewVisibility(visible) {
    this.root.querySelector(".notes-preview").style.visibility = visible
      ? "visible"
      : "hidden";
  }
}
