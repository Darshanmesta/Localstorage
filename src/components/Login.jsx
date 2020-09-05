import React from 'react'

        import {Link} from 'react-router-dom'
        import {Alert} from 'react-alert'
      
        let pemail, ppass, localuser,paresdUser;
       
        export default class Login extends React.Component{
            

            state={
                id:null,
                email:'',
                password:'',
                status:false
                
            }

        componentDidMount(){

             localuser=localStorage.getItem('user')
             paresdUser= JSON.parse(localuser)
              console.log(paresdUser)
              pemail= paresdUser.email
              ppass= paresdUser.password
         
        
            console.log(pemail,ppass)

            this.setState({
                email:pemail,
                password:ppass

            })
    
         

        

     
        }


       

      
           
          

        



            handleChange=(e)=>{
              
                    this.setState({
                        id:Math.random(),
                        [e.target.name]:e.target.value
                    })

                 

                    console.log(this.state)

            
               

               

            }

            handleSubmit=(e)=>{
                e.preventDefault()

              

                
           

            }

           
            render(){
             
           
                return(
                    <div className="text-center out-div-login" >
                        <form onSubmit={(e)=>{
                            this.handleSubmit()
                        }} className=" form1">
                   
                        
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" id="email" name="email" className="form-control"  value={this.state.email} autoFocus   required maxLength="30"  onChange={(e)=>{
                                this.handleChange(e)
                            }}/>
                        </div>
        
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" id="password" value={this.state.password}  className="form-control"  maxLength="20" required  onChange={(e)=>{
                                this.handleChange(e) 
                            }}/>
                        </div>
      
        
                        <div className="form-group">
                    <Link onClick={e=> (this.state.email!==pemail || this.state.password!==ppass)? ( alert('Invalid Credentials') || e.preventDefault()):null }   to="/welcome" >
                                <button className="btn btn-md btn-success">Submit</button>
                                </Link>       
                            
                            
                        </div>
                        </form>
                    </div>
                )
            }}
          

            
            
            
