import * as React from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm.js'
import { useSelector } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PurchaseForm from '../PurchaseForm/PurchaseForm'
import CardListItem from '../CardListItem/CardListItem';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShoppingListDialog(props) {

  const shoppingList = useSelector((state) => state.cards.shoppingList)
  const { handleAddPurchase } = props
  const { nameMaterial, price, image } = shoppingList;

  const [open, setOpen] = React.useState(false);
  const [isOpenPurchaseWindow, setIsOpenPurchaseWindow] = React.useState(false);
  const [isInsideDialog, setIsInsideDialog] = React.useState(true);
  const { steps, currentStepIndex, step, isFirstStep, back, next } = useMultistepForm([<CardListItem />, <PurchaseForm />])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log({ shoppingList });

  return (
    <div>
      <Button variant="text" color="inherit" startIcon={<ShoppingBasketIcon />} onClick={handleClickOpen}>
        Shopping List
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth='md'
      >
        {!isFirstStep && <DialogTitle>{shoppingList.length < 1 ? "Choose something pls" : "Are you seriously buying it?"}</DialogTitle>}

        <DialogContent sx={{
          display: 'flex',
          flexWrap: 'nowrap'
        }}>
          {!isOpenPurchaseWindow ?
            shoppingList.map((card) => {
              return (
                <CardListItem
                  key={card.id}
                  nameMaterial={card.nameMaterial}
                  price={card.price}
                  image={card.image}
                  id={card.id}
                  handleAddPurchase={handleAddPurchase}
                  isButtonShown
                />)
            })
            : <DialogContentText><PurchaseForm /></DialogContentText>}
        </DialogContent>
        <DialogActions>
          <DialogTitle>{currentStepIndex + 1} / {steps.length}</DialogTitle>
          {!isFirstStep && shoppingList.length > 0 && <Button color="inherit" onClick={() => { setIsOpenPurchaseWindow(!isOpenPurchaseWindow); next() }}>Next step</Button>}
          {isFirstStep && <Button color="inherit" onClick={() => { setIsOpenPurchaseWindow(!isOpenPurchaseWindow); back() }} > Back</Button>}
          <Button color="inherit" onClick={() => { handleClose() }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
