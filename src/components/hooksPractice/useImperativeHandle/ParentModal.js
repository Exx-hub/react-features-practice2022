import React, { useRef } from "react";
import ChildModal from "./ChildModal";

function ParentModal() {
  const modalRef = useRef();

  console.log(modalRef.current);

  const handleOpenModal = () => {
    console.log("inside handleOpenModal");

    modalRef.current.openModal();
  };

  console.log("parent rendered");
  console.log("try2");
  return (
    <div>
      <p>Parent Modal Component</p>
      <ChildModal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  );
}

export default ParentModal;
