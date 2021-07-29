import closeSVG from '../../assets/close.svg'
import incomeSVG from '../../assets/income.svg'
import outcomeSVG from '../../assets/outcome.svg'

import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" 
      className="react-modal-content"  
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeSVG} className="Fechar modal" alt="icone de fechar"/>
      </button>

      <Container>
        <h2>Cadatrar Transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button" >
            <img src={incomeSVG} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button" >
            <img src={outcomeSVG} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
