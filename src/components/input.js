import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      height: 180,
    },
    hoot: {
       margin: 5
    }, 
    boot: {
        margin: 5,
        width: 100
    },
  }));
  
  const UserInput = (props) => {
      const classes = useStyles();
      const [buttonShow, setButtonShow] = useState(0)
      const [show, setShow] = useState(1)
      
      const [urlDetails, seturlDetails] = useState({
          name: "",
          address: '',
          lat: null,
          lng: null,
          city: '',
          usState: '',
          zip: ''
        
                      
      })
  
    //   useEffect(() => {
    //     {urlDetails.lat !== null ? props.addToAddressList(urlDetails): console.log("<3")}
    //   }, [urlDetails.lat])
      
  
      const formHandle=(event)=>{
          seturlDetails({...urlDetails, [event.target.name]:event.target.value}) 
      }
      
     
     
      
     const sayHi= ()=>{
         console.log("say hi")
         setShow(0)
      } 
      //I want this to add a new row of input create a state in pprops onto a new container called input
  
      return (
          <Paper className={classes.root}>
              <form>
                  <FormControl className={classes.hoot}>
                      <InputLabel htmlFor="my-input">Site Name</InputLabel>
                      <Input name="name" onChange={(event)=>formHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                  </FormControl>
                  <FormControl className={classes.hoot}>
                      <InputLabel htmlFor="my-input">Site Url</InputLabel>
                      <Input name="address" onChange={(event)=>formHandle(event)} id="my-input" aria-describedby="my-helper-text" />
                  </FormControl>
                  
                  <br></br>
  
                  {show === 0 ?
                      <TextField
                      id="filled-read-only-input"
                      label={urlDetails.lat}
                      defaultValue="latitude"
                      className={classes.textField}
                      margin="normal"
                      InputProps={{
                      readOnly: true,
                      }}
                      variant="filled"
                  />
                  : null
                  }
  
                  {show === 0 ?
                      <TextField
                      id="filled-read-only-input"
                      label={urlDetails.lng}
                      defaultValue="longitude"
                      className={classes.textField}
                      margin="normal"
                      fix here
                      InputProps={{
                      readOnly: true,
                      }}
                      variant="filled"
                  />
                  : null
                  }   
                  {buttonShow === 0 ?
                  <Button onClick={()=>{sayHi()}} variant="contained" color="primary" className={classes.button}>
                      Say Hi
                  </Button>
                  
                  : null
                  } 
              </form>
             
          </Paper>
      )
    }
    
    export default UserInput
  