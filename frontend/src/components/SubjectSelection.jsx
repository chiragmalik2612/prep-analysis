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
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                objectFit: "contain",
              }}
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
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                objectFit: "contain",
              }}
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
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
