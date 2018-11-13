import React, { Component } from 'react';
import './App.css';
import logo from './img/logo/logo-odessa.png';

import mailH from './img/logo/socials/mail-c.png';
import fbH from './img/logo/socials/facebook-c.png';
import vkH from './img/logo/socials/vk-c.png';
import ytH from './img/logo/socials/youtube-c.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12 b-red d-flex fixed-top flex-column px-0">
              <div className="container d-none header-info d-md-flex justify-content-between b-green">
                <div className="col-4 b-yellow d-flex justify-content-start">
                  <a class="navbar-brand mx-1 py-0" href="/" target="_blank">
                    <img src={mailH} width="32" alt="name" />
                  </a>
                  <a class="navbar-brand mx-1 py-0" href="/" target="_blank">
                    <img src={fbH} width="32" alt="name" />
                  </a>
                  <a class="navbar-brand mx-1 py-0" href="#" target="_blank">
                    <img src={vkH} width="32" alt="name" />
                  </a>
                  <a class="navbar-brand mx-1 py-0" href="#" target="_blank">
                    <img src={ytH} width="32" alt="name" />
                  </a>
                </div>
                <div className="col-6 col-lg-5 b-yellow d-flex align-items-center justify-content-end">
                  <span className="px-2">+38 (093) 777-77-77</span>
                  <span className="px-2">info@gmail.com</span>
                </div>
              </div>
              <div className="d-flex b-yellow flex-column flex-md-row justify-content-around header-adv">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-md-none pl-0 pr-0">
                  <a class="navbar-brand ml-3" href="#">
                    <img src={logo} width="50" height="50" style={{opacity: "0.7"}} alt="zdvyzh" />
                  </a>
                  <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto align-items-start ml-3 mr-3">
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle text-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="glyphicon glyphicon-earphone"></span>О Команде
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Контакты</a>
                          <a class="dropdown-item" href="#">История</a>
                          <a class="dropdown-item" href="#">Достижения</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Состав
                        </a>
                        <div class="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Здвиж</a>
                          <a class="dropdown-item" href="#">Ю-19</a>
                          <a class="dropdown-item" href="#">Ю-17</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Календарь
                        </a>
                        <div class="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Предстоящие события</a>
                          <a class="dropdown-item" href="#">Прошедшие события</a>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Новости</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Медиа
                        </a>
                        <div class="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Фото</a>
                          <a class="dropdown-item" href="#">Видео</a>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <nav class="navbar navbar-expand-md navbar-dark bg-dark d-none d-md-block px-0">
                <div className="container">
                  <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto align-items-start ml-3 mr-3">
                      <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle text-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          О Команде
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Контакты</a>
                          <a class="dropdown-item" href="#">История</a>
                          <a class="dropdown-item" href="#">Достижения</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Состав
                        </a>
                        <div class="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Здвиж</a>
                          <a class="dropdown-item" href="#">Ю-19</a>
                          <a class="dropdown-item" href="#">Ю-17</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Календарь
                        </a>
                        <div class="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Предстоящие события</a>
                          <a class="dropdown-item" href="#">Прошедшие события</a>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Новости</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-left" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Медиа
                        </a>
                        <div class="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Фото</a>
                          <a class="dropdown-item" href="#">Видео</a>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
    
            </div>
          </div>
        </div>
      </header>
    )
  }
}

class Partners extends Component {
  render() {
    return (
      <div className="container partners">
        <div className="d-flex">
          <div className="d-none d-md-block col-md-2 px-0 b-red header--adv-logo">        
            <img style={{opacity: "0.7"}} width="100" src={logo} alt="zdvyzh" />
          </div>
          <div className="col-md-10 b-red d-flex justify-content-around align-items-center header--adv-partners">
            <div className="row mw-100 d-flex justify-content-around">
              <div className="col-4 col-md-2 px-1 py-2">
                <img src={logo} className="partner-logo" style={{}} alt="name" />
              </div>
              <div className="col-4 col-md-2 px-1 py-2">
                <img src={logo} className="partner-logo" alt="name" />
              </div>
              <div className="col-4 col-md-2 px-1 py-2">
                <img src={logo} className="partner-logo" alt="name" />
              </div>
              <div className="col-4 col-md-2 px-1 py-2">
                <img src={logo} className="partner-logo" alt="name" />
              </div>
              <div className="col-4 col-md-2 px-1 py-2">
                <img src={logo} className="partner-logo" alt="name" />
              </div>
              <div className="col-4 col-md-2 px-1 py-2">
                <img src={logo} className="partner-logo" alt="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <sidebar className="col-12 col-lg-4 align-items-center b-black">
        <div className="s-phans">  
          fans
        </div>
        <div className="s-photos">  
          ppotos
        </div>
        <div className="s-vodeos">  
          sidebar
        </div>
      </sidebar>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <main className="col-12 col-lg-8 b-black align-items-stretch"> 
      <div className="row">
          <div className="col-8 d-flex flex-row"  style={{paddingRight: "0"}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
              <ol class="carousel-indicators ci-position">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="https://image.tmdb.org/t/p/w500/pk1zexoUCtjFs761W48QyIPzwCj.jpg" alt="First slide" />
                  <div className="bblock"></div>
                  <div class="carousel-caption d-none d-md-block cc-position">
                    <h5>Film 1</h5>
                    <p>good film</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://image.tmdb.org/t/p/w500/5KhMpFJdnOAsDmIpT0TINUNDt8L.jpg" alt="Second slide" />
                  <div className="bblock"></div>
                  <div class="carousel-caption d-none d-md-block cc-position">
                    <h5>Film 2</h5>
                    <p>so-so dfsdfadfdaf a afadfafasfadfa asfasfadfafasfas asfasfasfafas asfasfasfas</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://image.tmdb.org/t/p/w500/ecHD0rmx8l4eZVSISLJVAgAaODU.jpg" alt="Third slide" />
                  <div className="bblock"></div>
                  <div class="carousel-caption d-none d-md-block cc-position">
                    <h5>Film 3</h5>
                    <p>best one</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-4 d-flex flex-column"  style={{paddingLeft: "0"}}>        
            <img class="d-block w-100" style={{height: "50%"}} src="https://image.tmdb.org/t/p/w500/pk1zexoUCtjFs761W48QyIPzwCj.jpg" alt="Second slide" />
            <img class="d-block w-100" style={{height: "50%"}} src="https://image.tmdb.org/t/p/w500/5KhMpFJdnOAsDmIpT0TINUNDt8L.jpg" alt="Second slide" />
          </div>
        </div>
      </main>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 b-black d-flex flex-column">
              <div className="d-flex flex-row f-info" >     
                <div className="col-2 f-info-logo">     
                  footer-logo 
                </div>
                <div className="col-3 f-info-contacts">     
                  footer-contacts 
                </div>
                <div className="col-4 f-info-socials">     
                  footer-socials 
                </div>
                <div className="col-3 f-info-fimaLogo">     
                  footer-fima_logo 
                </div>
              </div>
              <div className="f-other">     
                footer-other 
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Partners />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex flex-column flex-column-reverse flex-lg-row sidebar-main">
                <Sidebar />
                <Main />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;