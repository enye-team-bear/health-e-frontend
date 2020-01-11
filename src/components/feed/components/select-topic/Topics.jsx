import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { pageData, topics } from '../../constants';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  // eslint-disable-next-line sort-keys
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    // eslint-disable-next-line sort-keys
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                  <CloseIcon />
              </IconButton>
      ) : null}
      </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// eslint-disable-next-line max-lines-per-function
export default function SelectTopics() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
          <Button variant="contained" className="b-button" color="primary" onClick={handleClickOpen}>
              {pageData.selectTopic}
          </Button>
          
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  {pageData.topicsOfInterest}
              </DialogTitle>
              <DialogContent dividers>
                  <div className="t-feedTopic">
                      {topics.map((topic, i) => (
                          <div className="t-feedTopic__topics" key={topic.i}>
                              {topic}
                              <Checkbox
                                  defaultChecked={false}
                                  value="secondary"
                                  color="primary"
                                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                              />
                          </div>
             ))}
                  </div>
              </DialogContent>
              <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                  </Button>
              </DialogActions>
          </Dialog>
      </div>
  );
}
