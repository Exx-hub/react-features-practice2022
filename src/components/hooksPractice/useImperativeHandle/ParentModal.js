import React, { useRef } from "react";
import ChildModal from "./ChildModal";

function ParentModal() {
  const modalRef = useRef();

  console.log(modalRef.current);

  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  console.log("parent rendered");
  return (
    <div>
      <p>Parent Modal Component</p>
      <ChildModal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  );
}

export default ParentModal;
