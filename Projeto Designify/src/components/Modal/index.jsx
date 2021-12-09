import { useEffect, useCallback, useRef } from "react";
import Form from "../Form";
import { AnimatePresence } from "framer-motion";
import { Background, ModalWrapper, CloseModalButton } from "./style";

const Modal = ({ showModal, toggle }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggle();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key && showModal) {
        toggle();
      }
    },
    [showModal, toggle]
  );

  const backgroundVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const modalVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },

    exit: {
      y: -200,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <Background
          variants={backgroundVariants}
          animate="animate"
          initial="initial"
          onClick={closeModal}
          ref={modalRef}
          exit={{ opacity: 0 }}
        >
          <ModalWrapper
            variants={modalVariants}
            animate="animate"
            initial="initial"
            exit={{ opacity: 0, y: "-100vh" }}
          >
            <Form></Form>
            <CloseModalButton aria-label="Close modal" onClick={toggle} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Modal;
