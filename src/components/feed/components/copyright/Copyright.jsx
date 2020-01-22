import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { pageData, DISCLAIMER_URL, PRIVACY_POLICY_URL } from '../../constants';

// eslint-disable-next-line max-lines-per-function
export default function SelectTopics() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div className="t-copyright">
          <span className="t-copyright__about" onClick={handleClickOpen}>{pageData.about}</span>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle id="alert-dialog-title">{pageData.aboutTitle}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      <p>{pageData.aboutParagraph1}</p>
                      <br />
                      <p>{pageData.aboutParagraph1}</p>
                      <br />
                      <p>{pageData.aboutParagraph3}</p>
                      <br />
                      <p>Sincerely</p>
                      <p>{pageData.team}</p>
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
              </DialogActions>
          </Dialog>
          <span>
              <a href={PRIVACY_POLICY_URL}>
                  {pageData.privacyPolicy}
              </a>
          </span>
          <span>
              <a href={DISCLAIMER_URL}>
                  {pageData.disclaimer}
              </a>
          </span>
          <span>{pageData.support}</span>
          <br /><br />
          <span>Copyright &copy;2020 Enye Team Bear</span>
      </div>
  );
}
