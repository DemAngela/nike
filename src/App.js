import logo from '../src/assets/logoNike.png'
import Search from '../src/assets/Vector (1).png'
import Favorite from '../src/assets/Favorite.png'
import Cart from '../src/assets/Cart.png'
import Ellipse from '../src/assets/Ellipse 2.png'
import nba from '../src/assets/Group 1.png'
import pict from '../src/assets/Pict.png'
import product from '../src/assets/Pict (1).png'
import line from '../src/assets/Line 7.png'
import nbmSmall from '../src/assets/Group 2.png'


function App() {
    return (
        <>
            <header className={'header'}>
                <div className="container">
                    <div className={'header-box'}>
                        <a href="#" className={'header-logo'}>
                            <img src={logo} alt="" className={'header-logo__Img'}/>
                        </a>
                        <nav className={'header-nav'}>
                            <a href="#" className={'header-nav__Link'}>Man</a>
                            <a href="#" className={'header-nav__Link'}>Woman</a>
                            <a href="#" className={'header-nav__Link'}>Jersey</a>
                            <a href="#" className={'header-nav__Link'}>Teams</a>
                            <a href="#" className={'header-nav__Link'}>App</a>
                        </nav>
                        <div className={'header-icons'}>
                            <a href="#" className={'header-icons__icon'}>
                                <img src={Search} alt="" className={'header-icons__img'}/>
                            </a>
                            <a href="#" className={'header-icons__icon'}>
                                <img src={Favorite} alt="" className={'header-icons__img'}/>
                            </a>
                            <a href="#" className={'header-icons__icon'}>
                                <img src={Cart} alt="" className={'header-icons__img'}/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <main className={'main'}>
                <section className={'first'}>
                    <div className="container">
                        <h3 className={'first-text'}>
                             <span>
                                 <img src={Ellipse} alt=""/>
                             </span>
                             Jersey
                            <span>
                                 <img src={Ellipse} alt=""/>
                            </span>
                             Nike & NBA Collaboration
                        </h3>
                        <h1 className={'first-title'}>
                            Jersey
                            <span>
                                <img src={nba} alt=""/>
                            </span>
                            Nba
                        </h1>
                        <div className={'first-subtitle'}>
                            <h2 className={'first-subtitle__text'}>
                                whichever <span className={'first-subtitle__text__Blue'}>nba</span> <span className={'first-subtitle__text__red'}>team</span> your support, get your jersey here today.
                            </h2>
                        </div>
                        <img src={pict} alt="" className={'first-picture'}/>
                    </div>
                </section>
                <section className={'CardBlockRed'}>
                    <div className="container">
                        <h5 className={'CardBlockRed-text'}>Jerseys bestsellers</h5>
                        <h1 className={'CardBlockRed-title'}>bestsellers</h1>
                        <h2 className={'CardBlockRed-subtitle'}>Collection</h2>
                        <h5 className={'CardBlockRed-subtext'}>The jerseys of the best nba players of the regular seasons.</h5>
                        <div className={'row'}>
                            <div className={'col-4'}>
                                <div className={'box'}>
                                    <div className={'card'}>
                                        <img src={product} alt="" className={'card-img'}/>
                                        <div className={'card-text'}>
                                            <h6 className={'card-title'}>LeBron James Lakers City Edition</h6>
                                            <p className={'card-subtitle'}>Nike NBA Swingman Jersey</p>
                                        </div>
                                        <h4 className={'card-price'}>$290</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-4'}>
                                <div className={'box'}>
                                    <div className={'card'}>
                                        <img src={product} alt="" className={'card-img'}/>
                                        <div className={'card-text'}>
                                            <h6 className={'card-title'}>LeBron James Lakers City Edition</h6>
                                            <p className={'card-subtitle'}>Nike NBA Swingman Jersey</p>
                                        </div>
                                        <h4 className={'card-price'}>$290</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-4'}>
                                <div className={'box'}>
                                    <div className={'card'}>
                                        <img src={product} alt="" className={'card-img'}/>
                                        <div className={'card-text'}>
                                            <h6 className={'card-title'}>LeBron James Lakers City Edition</h6>
                                            <p className={'card-subtitle'}>Nike NBA Swingman Jersey</p>
                                        </div>
                                        <h4 className={'card-price'}>$290</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'CardBlockRed-block'}>
                            <h6 className={'CardBlockRed-block__text'}>View all <span><img src={line} alt=""/></span> </h6>
                            <img src={nbmSmall} alt="" className={'CardBlockRed-block__img'} />
                        </div>
                    </div>
                </section>
                <section className={'blockLogo'}>
                    <div className="container">
                        <h5 className={'blockLogo-text'}>Every team</h5>
                        <h1 className={'blockLogo-title'}> <span>One</span> store</h1>
                        <h2 className={'blockLogo-subtitle'}> <span>Every</span> team</h2>
                        <h5 className={'blockLogo-subtext'}>SElect your favorite team to view it’s jersys.</h5>
                        <div className="row">
                            <div className="col-6">
                                <div className="box">
                                    <h5 className={'blockLogo-east'}>East</h5>
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="box">
                                    <h5 className={'blockLogo-West'}>West</h5>
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="box">
                                                <div className={'square'}></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className={'blockLogo__text'}>About Team <span><img src={line} alt=""/></span> </h6>
                    </div>
                </section>
            </main>
            <footer className={'footer'}></footer>
        </>
    );
}

export default App;
