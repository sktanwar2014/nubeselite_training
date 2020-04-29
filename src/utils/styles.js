import { makeStyles } from '@material-ui/core/styles';
export const style = {
  bmBurgerButton: {
    display: 'none',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    marginRight: '1rem',
  },
  bmCross: {
    background: '#fafafa',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0,
    left: 0,
  },
  bmMenu: {
    // background: '#263238',
    background: 'white',
    overflowY: 'scroll',
    // overflowY: 'none',
    padding: '2.5em 1.5em',
  },
  bmItemList: {
    color: '#fafafa',
    padding: '0.8rem',
  },
  bmItem: {
    outline: 'none',
  },
  bmOverlay: {
    top: 0,
    background: 'rgba(0, 0, 0, 0.3)',
  },
}
export const styles = makeStyles(theme => ({
    '@global': {
        body: {
           fontSize:'1..4em'
        },
    },
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
      panelheader:{
        boxShadow: 'none'
      },
      panelsummary:{
        padding:'0px !important'
      },
      panel:{
        flexDirection: 'column'
      },
      formControl: {
        width:'100%'
      },
      multiselecttext:{
        fontSize:'1.8rem'
      }
}));
