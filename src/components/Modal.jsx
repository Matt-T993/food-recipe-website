import { FaTimes } from "react-icons/fa";

const Modal = ({ recipeVideo, onClose }) => {
  const videoId = recipeVideo?.split("v=")[1];

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="btn__video" onClick={onClose}>
          <FaTimes />
        </button>
        {videoId && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Modal;
