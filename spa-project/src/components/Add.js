import React, {useState, useEffect, useContext} from 'react';
import Modal from "react-modal";
import styled from "styled-components";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import Form from "./Add/Form";
import {MyContextData} from "../contexts/PathContext"

const Circle = styled.div`
  position: fixed;
  bottom: 60px;
  height: 42px;
  width: 42px;
  left: 200px;
  display: flex;
  align-items:center;
  justify-content: center;
  border-radius: 40px;
  background: #fff;
  z-index: 20;
  &:hover {
    cursor: pointer;
  }
`;


const AddButton = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const {addingCounter} = useContext(MyContextData);

  useEffect(() => {
    setModalIsOpenToFalse();
  }, [addingCounter]);

  const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '30%',
      transform: 'translate(-40%, -10%)',
      zIndex: '50',
    },
  };

  return (
    <>
    <Circle onClick={setModalIsOpenToTrue}>
      <IconContext.Provider value={{ color: "#23D7FF", size: "30px"}}>
          <BiIcons.BiPlus />{" "}
      </IconContext.Provider>
    </Circle>
    <Modal style={customStyles} isOpen={modalIsOpen}>
        <button style={{marginLeft:"0"}} onClick={setModalIsOpenToFalse}>x</button>
        <Form />
      </Modal>
    </>

  );
};

export default AddButton;
