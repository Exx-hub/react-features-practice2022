import React, { useRef } from "react";
import ChildModal from "./ChildModal";

function ParentModal() {
  const modalRef = useRef();

  console.log(modalRef.current);

  const handleOpenModal = () => {
    console.log("another one insdide handle");
    console.log("inside handleOpenModal TEST2");

    modalRef.current.openModal();
  };

  return (
    <div>
      <p>Parent Modal Component</p>
      <ChildModal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  );
}

export default ParentModal;
