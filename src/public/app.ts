import './style.css';

interface Note {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

console.log("app initialized")
class NotesApp {
  private notes: Note[] = [];
  private currentNoteId: number | null = null;

  constructor() {
    this.init();
  }

  private async init() {
  
  }
}


// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NotesApp();
});