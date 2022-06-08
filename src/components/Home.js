import React, {useState} from 'react'

import Axios from 'axios'

function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(e){
        e.preventDefault();
        let request = {
            email : email,
            password : password
        }
        Axios.post('http://localhost:4000/api/v1/login', request)
        .then(resp =>{
            alert("Login Success")
            console.log(resp)
        })
        .catch(err=>{
            console.log(err)
            
        })
    }

  return (
    <React.Fragment>
        <header>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 col-sm-4 col-4">
                <a href="index.html" id="logo">
                    <img src= "assets/img/Group 20.png" width="100" height="50" alt="" className="d-none d-sm-block"/>
                    <img src= "assets/img/Group 20.png" width="40" height="20" alt="" className="d-block d-sm-none"/>
                </a>
            </div>
            <nav className="col-md-8 col-sm-8 col-8">
            <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href=""><span>Menu mobile</span></a>
            <div className="main-menu">
                <div id="header_menu">
                    <img src="" width="190" height="23" alt=""/>
                </div>
                <a href="#" className="open_close" id="close_in"><i className="icon_close"></i></a>
                <ul>
                    <li className="submenu">
                    <a href="index.html" className="show-submenu">Home</a>
                    </li>
                    <li className="submenu">
                    <a href="grid_list.html" className="show-submenu">Influencers</a>
                    </li>
                    <li><a href="about.html">About Us</a></li>
                    <li className="submenu">
                        <a href="javascript:void(0);" className="show-submenu">Login<i className="icon-down-open-mini"></i></a>
                        <ul>
                            <li><a href="#0" data-toggle="modal" data-target="#login_2">User Login</a></li>
                            <li><a href="#0" data-toggle="modal" data-target="#brand_login">Brand Login</a></li>
                            <li><a href="#0" data-toggle="modal" data-target="#Influencer_login">Infulencer Login</a></li>
                        </ul>
                        </li>
                    <li className="submenu">    
                        <a href="contacts.html" className="show-submenu">Contact</a>
                        </li>
                    
                       
                    
                   
                </ul>
            </div>
            </nav>
        </div>
    </div>
</header>
    

    <section className="header-video">
    <div id="hero_video">
      
        <img  src= "assets/img/video_fix.png" alt="" className="header-video--media" data-video-src="" data-teaser-source="assets/video/demo"  data-provider="" data-video-width="1920" data-video-height="960"/>
    <div id="count" className="d-none d-md-block">
        <ul>
            <li><span className="number">2650</span> Influencers</li>
            <li><span className="number">5350</span> People Served</li>
            <li><span className="number">12350</span> Registered Users</li>
        </ul>
    </div>
    </div>
    
    </section>
    

    <div className="container margin_60">
            <div className="main_title margin_mobile">
                <h2 className="nomargin_top">Choose an influencer category</h2>
                
            </div>
            <div className="row">
            
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    
                    
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" className="d-block w-100" alt=""/>
                      <div className="carousel-caption d-none d-md-block ">
                              <h2 className="red-text">Singers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="red-text">Influencers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                          <h2 className="red-text">Models</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="red-text">Featured</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="red-text">Trending Celebs</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="red-text">Easy On Pokcet</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="red-text">Tv Stars</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="red-text">Film Stars</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="red-text">Reality Tv Stars</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h2 className="red-text">Athletes</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a className="btn_1" href="/html/blog.html">Choose Now</a>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="icon-left-open" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="icon-right-open" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
        </div>
            
        

    <div className="container margin_60">
        <div className="main_title">
            <h2 className="nomargin_top">How it works</h2>
            <p>
                Finding the best influencer campaign plan for your brand means investing money in the safest hands for brand awareness, reach, and leads. Book the right campaign plan for your brand in three simple steps
            </p>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeIn">
                <div className="box_home" id="one">
                    <span>1</span>
                    
                    <h3>DISCOVER RIGHT CAMPAIGN PLAN</h3>
                    <p>
                        Find the right plan as per your need.
                    </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn">
                <div className="box_home" id="two">
                    <span>2</span>
                    <h3>BOOK INSTANTLY & SELECT INFLUENCERS</h3>
                    <p>
                        We have more than 1000s of Influencers.
                    </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn">
                <div className="box_home" id="three">
                    <span>3</span>
                    <h3>PAY BY CARD ,UPI OR INTERNET BANKING</h3>
                    <p>
                        It's very quick, easy and totally secure.
                    </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn">
                <div className="box_home" id="four">
                    <span>4</span>
                    <h3>GET YOUR CAMPAIGN LIVE</h3>
                    <p>
                        For your brand awareness, reach, and leads
                    </p>
                </div>
            </div>
        </div>
        
    </div>
    <div className="high_light">
        <div className="container">
            <h3>Discover Influencer Campaigns by Industry</h3>
            
            <a href="grid_list.html">View all</a>
        </div>
    </div>
   
    
   
    
    <div className="container margin_60">
        <div className="main_title margin_mobile">
            <h2 className="nomargin_top">Influencer marketing. powered by data, designed for convenience</h2>
        </div>
        <div className="row">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="feature_2">
                    <i className="icon-search-circled"></i>
                    <h3>Discover</h3>
                    <p>
                        How do you find the right influencers? That’s the number one challenge marketers identify with influencer marketing.
                    </p>
                    <a className="btn_1" href="/html/blog.html">Read more</a>
                </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
                <div className="feature_2">
                    <i className="icon-flow-tree"></i>
                    <h3>Workflow</h3>
                    <p>
                        What are the best practices for working with influencers? How do you work with influencers? How much do you pay influencers?
                    </p>
                    <a className="btn_1" href="/html/blog.html">Read more</a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="feature_2">
                    <i className="icon-chart-line"></i>
                    <h3>Measure</h3>
                    <p>
                        What are the right influencer marketing KPIs? How do I measure success across multiple platforms? 
                    </p>
                    <a className="btn_1" href="/html/blog.html">Read more</a>
                </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
                <div className="feature_2">
                    <i className="icon-rocket"></i>
                    <h3>Amplify</h3>
                    <p>
                        Finding the right influencers, creating content, and measuring success are only one part of the formula.
                    </p>
                    <a className="btn_1" href="/html/blog.html">Read more</a>
                </div>
            </div>
        </div>
    </div>
    <div className="high_light">
        <div className="container">
            <h3>Trying influencer marketing for the first time?</h3>
            
            <a href="">Book a plan now</a>
        </div>
    </div>
    
    
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3>Secure payments with</h3>
                    <p>
                        <img src= "assets/img/cards.png" alt="" className= "assets/img-fluid"/>
                    </p>
                </div>
                <div className="col-md-3">
                    <h3>About</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="grid_list.html">Influencers</a></li>
                        <li><a href="#0" data-toggle="modal" data-target="#login_2">Login</a></li>
                        <li><a href="#0" data-toggle="modal" data-target="#register">Register</a></li>
                        <li><a href="#0">Terms and conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-3" id="newsletter">
                    <h3>Newsletter</h3>
                    <p>
                        Join our newsletter to keep be informed about offers and news.
                    </p>
                    <div id="message-newsletter_2">
                    </div>
                    <form method="post" action="assets/newsletter.php" name="newsletter_2" id="newsletter_2">
                        <div className="form-group">
                            <input name="email_newsletter_2" id="email_newsletter_2" type="email" value="" placeholder="Your mail" className="form-control"/>
                        </div>
                        <input type="submit" value="Subscribe" className="btn_1" id="submit-newsletter_2"/>
                    </form>
                </div>
               
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div id="social_footer">
                        <ul>
                            <li><a href="#0"><i className="icon-facebook"></i></a></li>
                            <li><a href="#0"><i className="icon-twitter"></i></a></li>
                            <li><a href="#0"><i className="icon-google"></i></a></li>
                            <li><a href="#0"><i className="icon-instagram"></i></a></li>
                            <li><a href="#0"><i className="icon-pinterest"></i></a></li>
                            <li><a href="#0"><i className="icon-vimeo"></i></a></li>
                            <li><a href="#0"><i className="icon-youtube-play"></i></a></li>
                        </ul>
                        <p>
                            © iFLyrs 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    

    <div className="layer"></div>

    
    <div className="modal fade" id="login_2" tabindex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content modal-popup">
                <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
				<form  onSubmit = {(e) =>login(e)}  action="profile.html"  className="popup-form"  >
                    <div className="login_icon"><i className="icon_lock_alt"></i></div>
                    <h2 className="popup_text">User Login</h2>
                    <input  type="email" id="loginEmail" class="form-control form-white" placeholder="Email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <input type="password" id="loginPassword" className="form-control form-white" placeholder="Password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                   
					<div className="">
                        <h4 className="popup_text">Or</h4>
						<a className="btn_1" href="#0" data-toggle="modal" data-target="#register">Register Here</a>
					</div>
                    <button onClick={login}  type="submit" className="btn btn-submit">Login</button>
                   
				</form>
			</div>
		</div>
	</div>

    
    <div className="modal fade" id="brand_login" tabindex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content modal-popup">
                <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
				<form action="#" className="popup-form" id="myLogin">
                    <div className="login_icon"><i className="icon_lock_alt"></i></div>
                    <h2 className="popup_text">Brand Login</h2>
                    <input  type="email" className="form-control form-white" placeholder="Brand Email"/>
                    <input type="password" className="form-control form-white" placeholder="Password"/>
					<div className="">
                        <div className="">
                            <h4 className="popup_text">Or</h4>
                            <a className="btn_1" href="#0" data-toggle="modal" data-target="#register">Register Here</a>
                        </div>
					</div>
					<button type="submit" className="btn btn-submit">Submit</button>
				</form>
			</div>
		</div>
	</div>

   
    <div className="modal fade" id="Influencer_login" tabindex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content modal-popup">
                <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
				<form action="#" className="popup-form" id="myLogin">
                    <div className="login_icon"><i className="icon_lock_alt"></i></div>
                    <h2 className="popup_text">Influencer Login</h2>
                    <input type="email" className="form-control form-white" placeholder="Email"/>
                    <input type="password" className="form-control form-white" placeholder="Password"/>
					<div className="">
                        <h4 className="popup_text">Or</h4>
						<a className="btn_1" href="#0" data-toggle="modal" data-target="#register">Register Here</a>
					</div>
					<button type="submit" className="btn btn-submit">Submit</button>
				</form>
			</div>
		</div>
	</div>  
    
 
  <div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="myRegister" aria-hidden="true">
		<div className="modal-dialog">
			<div className="modal-content modal-popup">
				<a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
				<form  action="#" className="popup-form" id="myRegister"/>
                	<div className="login_icon"><i className="icon_lock_alt"></i></div>
					<input type="text" className="form-control form-white" placeholder="Name"/>
					<input type="text" className="form-control form-white" placeholder="Last Name"/>
                    <input type="email" className="form-control form-white" placeholder="Email"/>
                    <input type="text" className="form-control form-white" placeholder="Adhaar Number"/>
                    <input type="password" className="form-control form-white" placeholder="Password"  id="password1"/>
                    <input type="password" className="form-control form-white" placeholder="Confirm password"  id="password2"/>
                    <div id="pass-info" className="clearfix"></div>
					<div className="checkbox-holder text-left">
						<div className="checkbox">
							<input type="checkbox" value="accept_2" id="check_2" name="check_2" />
							<label for="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
						</div>
					</div>
					<button type="submit" className="btn btn-submit">Register</button>
				<form/>
			</div>
		</div>
        </div>
	
    </React.Fragment>
  )
  } 

  

export default Home
