import * as React from 'react';
import { Dialog, DialogProps, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface IModalProps extends DialogProps {
  modalClassName?: string;
}

const Modal: React.FC<IModalProps> = props => {
  const { onClose, children, modalClassName, ...rest } = props;

  const handleClose = (event: any, reason: any) => {
    if (onClose) {
      onClose(event, reason);
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      scroll="body"
      PaperProps={{
        className: modalClassName, sx: {
          padding: 3,
          minWidth: 330,
          outline: 'none',
          margin: 'auto',
          overflow: 'hidden',
        },
      }}
      {...rest}
    >
      <IconButton
        onClick={() => handleClose(null, null)}
        size="medium"
        sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1 }}
      >
        <CloseIcon />
      </IconButton>

      {children}
    </Dialog>
  );
};
// closeButton: {
//   position: 'absolute',
//     top: theme.spacing(3) - 12,
//     right: theme.spacing(3) - 12,
//     zIndex: 1,
// },
export default Modal;