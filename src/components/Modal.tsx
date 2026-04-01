// src/components/Modal.tsx
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  sender: string;
  message: string;
};

export default function Modal({ isOpen, onClose, sender, message }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Submission Successful!</h3>
          <button className="close-x" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="submission-detail">
            <span className="detail-label">Sender Name:</span>
            <p className="detail-value">{sender}</p>
          </div>
          <div className="submission-detail">
            <span className="detail-label">Message:</span>
            <p className="detail-value">{message}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="cta-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
