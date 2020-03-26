import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { useMediaQuery, Dialog } from '@material-ui/core';
import { useTheme, withStyles } from '@material-ui/core/styles';

// Styles
import styles from './styles';

const Modal = ({ classes, children, open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      classes={{
        paper: classes.paper
      }}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog"
    >
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Modal);
