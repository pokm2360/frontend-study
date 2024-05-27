import { Children } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 250, 221, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 28rem;
  height: 15rem;
  background: rgba(254, 240, 169, 0.7);
  box-shadow: 0px 2px 12px rgba(255, 250, 221, 0.15);
  border-radius: 10%;
  overflow-y: auto;

  svg {
    cursor: pointer;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    align-items: center;
    padding: 0.75rem;
    font-size: 2rem;
    color: #999;
    font-weight: 900;
  }

  .modal-title {
    margin: 0 auto;
    text-align: center;
  }

  .body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    input {
      width: 90%;
      padding: 0.5rem;
      font-size: 1rem;
      margin-top: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
    
    button {
      background-color: #999;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #5fa8d3;
      }
    }
  }
`;

function Modal(props) {
  const { title, children, closeModal, onEdit } = props;

  return (
    <Background>
      <ModalContainer>
        <div className="header">
          <span className="modal-title">{title}</span>
          <MdClose onClick={closeModal}/>
        </div>
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <button type="button" onClick={onEdit}>Check</button>
        </div>
      </ModalContainer>
    </Background>
  );
};

export default Modal;