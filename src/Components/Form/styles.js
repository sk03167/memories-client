import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: 1
    }
  },
  paper: {
    padding: "8%"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0'
  },
  buttonSubmit: {
    marginBottom: "10%",
    padding: "15px 32px"
  },
}));