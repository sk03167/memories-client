// import { makeStyles } from '@mui/styles';
// export default makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   paper: {
//     padding: theme.spacing(2),
//   },
//   form: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   fileInput: {
//     width: '97%',
//     margin: '10px 0',
//   },
//   buttonSubmit: {
//     marginBottom: 10,
//   },
// }));

export const classes = {
  root: {
        '& .MuiTextField-root': {
          margin: (theme)=>theme.spacing(1),
        },
      },
  paper: {
    padding: (theme)=>theme.spacing(2),
    borderRadius:3
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}