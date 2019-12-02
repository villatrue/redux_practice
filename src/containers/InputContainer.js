import React from 'react'

import Input from '../components/Input'
import Button from '@material-ui/core/Button';
// import Info from '../components/Info'
// import RouteNameInput from '../components/RouteNameInput';




class InputContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            addressList:[{name: "Andy's", address: "719 hollywood ave"}],
            renderCount:[0],
            optimizedRoute: [],
            routeName: "Friday",
            routeID: null,
            render: false
        }
    }
 
    renderInput=()=>{
        return(
        this.setState({renderCount: [...this.state.renderCount].concat([0])})
        )
    }

    addToAddressList=(address)=>{
        this.setState(prevState => ({
            addressList: [...prevState.addressList, address]
          }),()=>console.log(this.state.addressList)) 
    }

    routeNameHandle=(input)=>{
        this.setState({
            userName: input 
        })
    }


    

    postAddressToRails=(obj, index)=>{
        let details = this.state.addressList.find((address)=>address.address === obj.name)
        
        

        
        let formData = {
            name: details.name ,
            address: details.address ,
            user_id: this.state.userID
        };

        // debugger
        console.log(formData)
        
        let configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };
        
        return fetch("http://localhost:3000/addresses/", configObject)
            .then(response => response.json())
            .then(object => {
                console.log(object)
            })
            .catch(error => {
                window.alert(error.message);
            });
             
    }

    postRoute=(name)=>{
        console.log("add to backend")
    }

    optimize = () =>{
        console.log("optimize")
    }
    
    render(){
            if(this.state.render) {
                console.log('Heyuyyyyy')
            }
        return(
            <div>
                {/* <div> */}
                
                
                {/* </div> */}
                {this.state.renderCount.map((input)=>{
                    return <Input addToAddressList={this.addToAddressList}/>
                    })
                }
                {this.state.renderCount.length<10?
                    <Button onClick={()=>{this.renderInput()}}variant="contained" color="primary" >
                        Add another Waypoint
                    </Button>: null
                }
               
                     <Button onClick={()=>{this.optimize()}}variant="contained" color="primary" >
                        Optimize Your Route
                    </Button>
           
            </div>
        )
    }
    
}

export default InputContainer
  