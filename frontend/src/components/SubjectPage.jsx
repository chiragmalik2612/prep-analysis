import { useParams } from "react-router-dom";
import "./SubjectPage.css";
import Chapter from "./Chapter";

const subjectStyles = {
  Physics: {
    background:
      "linear-gradient(90deg, rgba(67,121,242,0.829656862745098) 0%, rgba(67,121,242,0.333858543417367) 47%, rgba(67,121,242,0.16299019607843135) 100%)",
  },
  Chemistry: {
    background:
      "linear-gradient(90deg, rgba(217, 22, 86, 0.829656862745098) 0%, rgba(217, 22, 86, 0.333858543417367) 47%, rgba(217, 22, 86, 0.16299019607843135) 100%)",
  },
  Mathematics: {
    background:
      "linear-gradient(90deg, rgba(252, 205, 42, 0.829656862745098) 0%, rgba(252, 205, 42, 0.333858543417367) 47%, rgba(252, 205, 42, 0.16299019607843135) 100%)",
  },
};

const SubjectPage = () => {
  const { name } = useParams();
  const currentStyle = subjectStyles[name] || {};

  return (
    <>
      <div
        style={{
          background: currentStyle.background,
          borderRadius: "10px",
          padding: "8px",
        }}
      >
        <h1>{name}</h1>
      </div>
      <div>
        <Chapter />
      </div>
    </>
  );
};

export default SubjectPage;
