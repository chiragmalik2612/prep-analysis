import { useNavigate } from "react-router-dom";
import "./SubjectSelection.css";


const SubjectSelection = () => {
  const navigate = useNavigate();

  const handleSubjectSelect = (subject) => {
    navigate(`/subject/${subject}`);
  };

  return (
    <div className="subjectSelection">
      <h2>Select subject</h2>
      <div className="subjectSelection__container">
        <div className="subject" onClick={() => handleSubjectSelect("Physics")}>
          <p>Physics</p>
          <div>
            <img src="/phy.png" className="subject-image" />
          </div>
        </div>
        <div
          className="subject"
          style={{ backgroundColor: "#D91656" }}
          onClick={() => handleSubjectSelect("Chemistry")}
        >
          <p>Chemistry</p>
          <div>
            <img src="/chem.png" className="subject-image" />
          </div>
        </div>
        <div
          className="subject"
          style={{ backgroundColor: "#FCCD2A" }}
          onClick={() => handleSubjectSelect("Mathematics")}
        >
          <p>Mathematics</p>
          <div>
            <img src="/maths.png" className="subject-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
