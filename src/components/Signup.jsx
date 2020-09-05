import React from 'react'
import {Link} from 'react-router-dom'



export default class Signup extends React.Component{
    userData;

    state={
        data:{
            id:null,
            name:'',
            password:'',
            email:'',
            number:'',
            sel:''
            
        }
    }


    handleChange= (e)=>{
        this.setState({
            id:Math.random(),
            [e.target.name]:e.target.value

        })
        console.log(this.state)


    }

    handleonSubmit=(e)=>{
        e.preventDefault()  
    

    }

    componentDidMount(){
        this.userData=JSON.parse(localStorage.getItem('user'))

        if(localStorage.getItem('user')){
            this.setState({
                name:this.userData.name,
                password:this.userData.password,
                email:this.userData.email,
                number:this.userData.number,
                sel:this.userData.sel
            })
        }

        else{
            this.setState({
                name:'',
                password:'',
                email:'',
                number:'',
                sel:''
            })
        }

    }

    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('user',JSON.stringify(nextState))
    }


    render(){
        return(
          <div className=' main-out-div' >
              <form className=" form1">
                  <div className="form-group">
                   <label htmlFor="">Name</label>
                   <input type="text" id="name" name="name" className="form-control"   value={this.state.name}   autoFocus required maxLength="20"  onChange={(e)=>{
                       this.handleChange(e)
                   }}/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="">Password</label>
                      <input type="password" name="password" id="password"  value={this.state.password} className="form-control" minLength="10" required onChange={(e)=>{
                          this.handleChange(e) 
                      }}/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input type="email" name="email" id="email" className="form-control" value={this.state.email}  maxLength="30" required onChange={(e)=>{
                          this.handleChange(e)
                      }}/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="">Phone No</label>
                      <input type="tel" maxLength="10" min="10" name="number" id="number"  value={this.state.number} className="form-control" required onChange={(e)=>{
                          this.handleChange(e)
                      }}/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="">Profession</label>
                      <select name="sel" id="" onChange={(e)=>{
                          this.handleChange(e) 
                      }}>
                      
                          
                          <option value="">Select one</option>
                          <option value="Software-Engineer" selected={this.state.sel==='Software-Engineer'}>Software-Engineer</option>
                          <option value="Full-stack developer"  selected={this.state.sel==='Full-stack developer'}>Full-stack developer</option>
                      </select>
                  </div>

                  <div className="form-group">
                        <Link onClick={e => (!this.state.name || !this.state.password || !this.state.email || !this.state.number) ? e.preventDefault() || alert('Please Enter all Credentials'):null} to={`/login`}>
                        <button className="btn btn-md btn-success">Submit</button>
                        </Link>       
                    
                     
                  </div>
              </form>
          </div>
        )
    }
}