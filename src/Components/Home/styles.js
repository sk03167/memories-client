// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   appBarSearch: {
//     borderRadius: 4,
//     marginBottom: '1rem',
//     display: 'flex',
//     padding: '16px',
//   },
//   pagination: {
//     borderRadius: 4,
//     marginTop: '1rem',
//     padding: '16px',
//   },
//   gridContainer: {
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column-reverse',
//     },
//   },
// }));

export const classes = {
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    flexDirection: { xs: 'column-reverse', lg:'row', md:'row'}
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column-reverse',
    // },
  },
}