import './Chapter.css'

const Chapter = () => {
    const chapters = [
        { id: 1, name: 'Chapter 1' },
        { id: 2, name: 'Chapter 2' },
        { id: 3, name: 'Chapter 3' },
        { id: 4, name: 'Chapter 4' },
        { id: 5, name: 'Chapter 5' },
        { id: 6, name: 'Chapter 6' },
        { id: 7, name: 'Chapter 7' },
        { id: 8, name: 'Chapter 8' },
        { id: 9, name: 'Chapter 9' },
        { id: 10, name: 'Chapter 10' },
        // Add more chapters here
      ];
    
      return (
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="chapter">
              <h3>{chapter.name}</h3>
              <div className='buttons'>
              <button>Notes</button>
              <button>PYQs</button>
              <button>Question Sets</button>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Chapter