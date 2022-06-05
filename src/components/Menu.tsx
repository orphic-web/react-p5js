import './Menu.css';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import {
  ClickAwayListener, Dialog, IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, Tooltip,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <CottageOutlinedIcon />, name: 'Home', action: 'home' },
  { icon: <ShareOutlinedIcon />, name: 'Share', action: 'share' },
];

const Menu:React.FC = () => {
  const navigate = useNavigate();
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [shareDialogCopyFeedbackOpen, setShareDialogCopyFeedbackOpen] = useState(false);

  const handleShareDialogCopyFeedbackClose = () => {
    setShareDialogCopyFeedbackOpen(false);
  };

  const handleShareDialogCopyFeedbackOpen = () => {
    setShareDialogCopyFeedbackOpen(true);
    navigator.clipboard.writeText(window.location.href);
  };

  const handleMenuClick = (action:string) => {
    if (action === 'home') {
      navigate('/');
    } else if (action === 'share') {
      setIsShareDialogOpen(true);
    }
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        className='menu-dial'
        direction='down'
        sx={{ position: 'absolute', top: 30, right: 20 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleMenuClick(action.action)}
          />
        ))}
      </SpeedDial>
      <Dialog onClose={() => setIsShareDialogOpen(false)} open={isShareDialogOpen}>
        <div className="share-dialog">
          <h1>Share</h1>
          <div className="share-body">
            <div className="share-url">
              {window.location.href}
            </div>
            <div className="share-icon">
              <ClickAwayListener onClickAway={handleShareDialogCopyFeedbackClose}>
                <div>
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleShareDialogCopyFeedbackClose}
                    open={shareDialogCopyFeedbackOpen}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    placement="bottom"
                    title="copied !"
                    arrow
                  >
                    <IconButton onClick={handleShareDialogCopyFeedbackOpen}>
                      <ContentCopyOutlinedIcon style={{ cursor: 'pointer' }}/>
                    </IconButton>
                  </Tooltip>
                </div>
              </ClickAwayListener>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Menu;
