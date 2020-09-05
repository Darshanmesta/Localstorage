import React from "react";
import axios from "axios";
import { Cards } from "./Cards";
import { fetchAPI } from "./fetchAPI";
import { Link } from "react-router-dom";

let rdata;
export default class Welcome extends React.Component {
  state = {
    results: [],
  };

  componentDidMount() {
      axios.post('https://hoblist.com/movieList',{
        category:"movies",
        language:"kannada",
        genre:"all",
        sort:"voting",
      }).then((response)=>{
          console.log(response.data.result)
          this.setState({
              results:response.data.result
          })
      }).catch(err=>{
          console.log(err)
      })


    // code used to try to unblock cors from client side

    // axios({
    //   method: "post",
    //   url:"https://hoblist.com/movieList",

    //   headers: {
        
        // 'Access-Control-Allow-Origin': '*',
    //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept,Authorization",
    //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    //   },
    //   data: {
    //     category: "movies",
    //     language: "kannada",
    //     genre: "all",
    //     sort: "voting",
    //   },
    //   withCredentials: true,
    //   credentials: 'same-origin',
    // })
    //   .then((response) => {
    //     console.log(response.data.result);
    //     this.setState({
    //       results: response.data.result,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="#" className="navbar-brand">
              Home
            </Link>

            <ul className="navbar-nav ml-auto mr-5">
              <li className="en-li">
                <Link to="#">
                  <span style={{ textDecoration: "none", color: "snow" }}>
                    Company Info
                  </span>
                </Link>
                <div className="details" style={{ color: "snow" }}>
                  <p>Company: GeekSynergy Technologies PVT Ltd</p>
                  <p>Address:Sanjaynagar, Bengaluru-56</p>
                  <p>Phone:9876543210</p>
                  <p>Email:xyz@gmail.com</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="row">
          <div className="col-md-2 col-xs-12">
            {this.state.results &&
              this.state.results.map((data) => {
                return <Cards datas={data} key={data._id} />;
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
