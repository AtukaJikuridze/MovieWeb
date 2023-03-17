import { useNavigate } from "react-router-dom";
import "./MainHeader.css";
import Navbar from "../Navbar";

export default function MainHeader(props: {
  watchHistory: any;
  setWatchHistory: any;
}) {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar />
      <div className="header-background">
        <img
          className="blur"
          src={require("../../../assets/images/Blur.png")}
          alt=""
        />{" "}
      </div>
      <div className="header-text">
        <h1>Black Adam in the Multiverse of Madness</h1>
        <div className="flex">
          <p>Action</p>
          <p>Adventure</p>
          <p>Fantasy</p>
        </div>
        <button
          onClick={() => {
            navigate("movies/436270");
            props.setWatchHistory([...props.watchHistory, 436270]);
          }}
        >
          Wath
        </button>
      </div>
    </header>
  );
}
