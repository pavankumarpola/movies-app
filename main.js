import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './main.css'
import { Link } from 'react-router-dom';

function Main({ gen,setProgress }) {
    const [result, setResult] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://ott-details.p.rapidapi.com/advancedsearch',
                params: {
                    start_year: '1970',
                    end_year: '2020',
                    min_imdb: '6',
                    max_imdb: '7.8',
                    genre: `${ gen }`,
                    language: selectedLanguage,
                    type: 'movie',
                    title: searchTerm,
                    sort: 'latest',
                    page: '1'
                },
                headers: {
                    'X-RapidAPI-Key': '9ecf9d6cc9msh859fd68cc6ae889p196acajsnddc833a9ce9e',
                    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setResult(response.data.results.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())));
                console.log(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [gen, selectedLanguage, searchTerm]);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };
    useEffect(() => {
        setProgress(20);
        setTimeout(() => {
          setProgress(100);
        }, 3000);
      }, [setProgress,gen]);

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="dfsfs">
                        <img src='https://i.pinimg.com/564x/40/8b/19/408b1983473d268e24c0ac4255f257c2.jpg' width={'100'} height={'60'} class="d-inline-block align-top" alt=""></img>

                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to="/">Action</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/come">Comedy</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/horr">Horror</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dram">Drama</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="/thri">Thriller</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/anim">Animation</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/roma">Romance</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/adve">Adventue</Link>
                            </li>
                            <li class="nav-item active">
                                <select
                                    className="form-select" style={{color:'blue', fontWeight:'900', borderStyle:'none', cursor:'pointer'}}
                                    value={selectedLanguage}
                                    onChange={(e) => handleLanguageChange(e.target.value)}>
                                    <option value="">Select Language</option>
                                    <option value="malayalam">Malayalam</option>
                                    <option value="telugu">telugu</option>
                                    <option value="tamil">tamil</option>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Kannada">Kannada</option>
                                    <option value="France">France</option>
                                    <option value="Chines">chines</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Bengali">Bengali</option>
                                    <option value="Marathi">Marathi</option>
                                    <option value="Urdu">Urdu</option>
                                </select>
                            </li>
                        </ul>
                        <button className='button' id='button'>LogIn</button>
                        <button className='button' id='button'>SignUp</button>
                    </div>
                </nav>
               {/* ----------- */}
                <div className='banner'>

                    <div className='all'>
                        <h1 className='h1'>Unlimited movies, TV shows, and more</h1>
                        <h4 className='h4'>Watch anywhere, cancel anytime.</h4>
                        <h5 className='h5'>To Search the movies. </h5>
                    </div>
                    <form className='search'>
                        <input type='text' placeholder='Search' className='searchinput' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <button type='button' className='searchbutton' >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
                </div>
                <div className='container-fluid bg-dark'>
                <h2 className='text-center mt-5 mb-5 text-white'>All Movies</h2>
                <div className='row ms-5 ps-5'>
                    {
                        result  && result.map(data =>

                            <div className='col-lg-3 pb-5  text-center  content'>

                                <div class="card" style={{ width: "18rem", height: "100%" }}>
                                    <div class="card-body ">

                                        <h2 className='card-title' style={{fontWeight:'bold', fontSize:'20px'}}>TITLE:{data.title.slice(0,15)}</h2>
                                        <img style={{width:'15rem', height:'15rem'}} src={!data.imageurl[0] ? 'https://www.hindustantimes.com/ht-img/img/2024/02/16/550x309/ntrjr_1708084252252_1708084252607.jpg' :data.imageurl[0]} />
                                        <h5 className='card-text' style={{color:'black', fontWeight:'bold'}}>GENRE:{data.genre[0]},{data.genre[1]},{data.genre[2]}</h5>
                                        <h5 class="card-text" style={{color:'black'}}>IMDBID:{data.imdbid}</h5>
                                        <h5 className='card-text' style={{fontWeight:'bold', color:'black'}}>IMDBRATING{data.imdbrating}</h5>
                                        <h5 class="card-title mt-2" style={{color:'black'}}>Realease Date:{data.released}</h5>
                                        <h6 className='card-text' style={{fontWeight:'bold', color:'black'}}>TYPE:{data.type}</h6>
                                        <p className='card-description'>DECRIPTION:{!data.synopsis ? 'This movie details are inside the url and outside are not shown!' :data.synopsis.slice(0,50)}</p>

                                    </div>
                                </div>
                            </div>


                        )
                    }</div>
            </div>
        </div>
    );
}

export default Main;
