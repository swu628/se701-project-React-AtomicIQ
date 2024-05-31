import {Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface NotImplementedDialogProps {
    open: boolean;
    handleClose: () => void;
}

export default function NotImplementedDialog({open, handleClose}: NotImplementedDialogProps) {
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle sx={{m: 0, p: 2}} id="customized-dialog-title">
                Feature Not Implemented
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon/>
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>
                    This feature is not implemented yet. Future updates will include this feature.
                </Typography>
            </DialogContent>
        </Dialog>
    );
}
