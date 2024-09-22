import './SubjectSelection.css';

const SubjectSelection = () => {
  return (
    <div
      className='subjectSelection'
    >
      <h2>Select subject</h2>
      <div
        className='subjectSelection__container'
      >
        <div
          className='subject'
        >
          <p>Physics</p>
          <div>
            <img
              src="/phy.png"
              className='subject-image'
            />
          </div>
        </div>
        <div
         className='subject'
         style={{backgroundColor:"#D91656"}}
        >
        <p>Chemistry</p>  
        <div>
            <img
              src="/chem.png"
              className='subject-image'
            />
          </div>
        </div>
        <div
         className='subject'
         style={{backgroundColor:"#FCCD2A"}}
        >
          <p>Mathematics</p>
          <div>
            <img
              src="/maths.png"
              className='subject-image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
