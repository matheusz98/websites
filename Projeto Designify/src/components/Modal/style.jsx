import styled from "styled-components";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalWrapper = styled(motion.div)`
  width: clamp(400px, 90vw, 800px);
  height: 90vh;
  display: flex;
  position: relative;
  overflow: scroll;
  z-index: 100;
  border-radius: 10px;
  background: var(--white);
  color: var(--black);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`;

export const CloseModalButton = styled(MdClose)`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  z-index: 10;
`;
