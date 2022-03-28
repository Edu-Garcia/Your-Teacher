import { Dialog, Container, ButtonClose, Content } from './styles';
import CloseIcon from '@mui/icons-material/Close';

export const StyledDialog = ({ id='dialog', title='', onClose=() => {}, children } ) => {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) {
      onClose();
    }
  }

  return (
    <Dialog id={id} onClick={handleOutsideClick}>
      <Container>
        <div className="header">
          <h1>{title}</h1>
          <ButtonClose onClick={onClose}>
            <CloseIcon />
          </ButtonClose>
        </div>
        <Content>{children}</Content>
      </Container>
    </Dialog>
  );
}