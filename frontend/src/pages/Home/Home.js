import React,{Component} from 'react';
import classes from './Home.module.scss';
import pizzaimg from '../../images/pizzabanner.png';


class Home extends Component {

      render(){
        return(
            <React.Fragment>
                  <header className={`${classes.masthead} text-center`}>
                    <div className={`${classes.mastheadcontent} text-center`}>
                        <div className="container d-flex justify-content-between flex-wrap">
                            <div>
                                <h1 className={`${classes.mastheadheading} mb-0`}>Welcome to Crew Pizza</h1>
                                <h2 className={`${classes.mastheadsubheading} mb-0`}>Order your customized pizza</h2>
                                <a href="/" onClick={(e)=>{e.preventDefault();  this.props.history.push("/pizzabuilder")}} className="btn app-btn btn-xl rounded-pill mt-5">Order Now</a>
                            </div>
                            <div style={{display:"block", margin:"auto"}}>
                                 <img alt="pizzaimg" className="img-responsive" src={pizzaimg}/>
                            </div>
                        </div>
                    </div>
                 </header>
                 <section className="page-section" id="services">
                       <div className="container mt-5 mb-5">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">How it works</h2>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-4">
                                    <span className="fa-stack fa-4x">
                                        <i className="fas fa-circle fa-stack-2x theme-color"></i>
                                        <i className="fas fa-pizza-slice fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 className="my-3">Customize your pizza</h4>
                                    <p className="text-muted">Customize your pizza by adding ingredients, toppings etc</p>
                                </div>
                                <div className="col-md-4">
                                    <span className="fa-stack fa-4x">
                                        <i className="fas fa-circle fa-stack-2x theme-color"></i>
                                        <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 className="my-3">Review Your order</h4>
                                    <p className="text-muted">Review your added ingredients, price</p>
                                </div>
                                <div className="col-md-4">
                                    <span className="fa-stack fa-4x">
                                        <i className="fas fa-circle fa-stack-2x theme-color"></i>
                                        <i className="fas fa-share fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 className="my-3">Order your pizza</h4>
                                    <p className="text-muted">Order your customized pizza</p>
                                </div>
                            </div>
                        </div>
                  </section>
            </React.Fragment>
        )
      }
}


export default Home;