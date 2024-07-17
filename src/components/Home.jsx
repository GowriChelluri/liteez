import React from 'react';
import '../styles/Home.css';
import SearchIcon from '@mui/icons-material/Search';
import chitti from '../images/LittiChokha.jpg';
import zomoto from '../images/zomoto.png';
import swiggy from '../images/swiggy.png';
import magicpin from '../images/magicpin.png';

import { TextField, InputAdornment, IconButton } from '@mui/material';

const Home = () => {


  const cards = [
    {
      id: 1,
      imageUrl: 'https://imgs.search.brave.com/Anb4km4AmgIbONmu0s2gxGTgfM_s_rc14k9C8_1XFl4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVsaWNpb3VzbWFn/YXppbmUuY28udWsv/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDcvNjU4NjM5LTEt/ZW5nLUdCX2xpdHRp/LWNob2toYS03Njh4/OTYwLmpwZw',
      description: 'Litti Choka - Mouthwatering fusion of roasted wheat balls stuffed with sattu (Indian superfood), dipped in pure ghee and paired with smoky mashed vegetables like eggplant and potato, delivering a burst of rustic taste in every bite.'
    },
    {
      id: 2,
      imageUrl: 'https://imgs.search.brave.com/ZYogTD-wXqIH-UmOEiI_hrwKxfMcn6HaQSTnlN-2zno/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFudmVnZ2ll/ZGVsaWdodC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvc2F0dHUtZHJp/bmstc2F2b3J5LTMu/anBn',
      description: 'Sattu Drink - Sattu Sharbat, is a traditional Indian drink made from roasted chickpea flour, also known as chana flour or gram flour.'
    },
    {
      id: 3,
      imageUrl: 'https://imgs.search.brave.com/VTEnOVW3Sq63TSZTt-SJ2_0gJlAEgZMtbwemQ2_NSU8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW5kaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzEyL2RhaGktZ29s/Z2FwcGUuanBnP2lt/cG9saWN5PU1lZGl1/bV9XaWR0aG9ubHkm/dz03MDA',
      description: 'Dahi Litti - complete meal from the bihar state, made with curd, wheat flour & tomato curry'
    },

    {
      id: 4,
      imageUrl: 'https://imgs.search.brave.com/0_Rb2VLx_eD2lb2kIXB7goSGdSC9-PJLMEGDlhRtmt0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9jb3Ju/LXJlY2lwZXMtNjYx/MDQ5OWQ1NmEyMS5q/cGVnP2Nyb3A9MS4w/MHh3OjEuMDB4aDsw/LDAmcmVzaXplPTY0/MDoq',
      description: 'Corn Litti - A unique twist to tradition with our Corn Litti, roasted wheat balls and a Sattu stuffing, in fusion with the sweetness of corn kernels with a serving of CHOKHA elevating the classic experience.'
    }
  ];



  return (
    <div className="container-fluid bg-gradent text-white p-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 ms-5 mt-5 pt-4 font-weight-bold">Hyderabad's Litti Revolution  Crunchy, munchy, and a little bit punchy! </h1>

          <div className="search-box mt-5">
            <TextField
              variant="outlined"
              placeholder="Search here"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { backgroundColor: 'white', borderRadius: '25px' }
              }}
            />
          </div>

        </div>
        <div className="col-md-6 text-center">
          <img src={chitti} alt="Litteez" className="img-fluid burger-img" />
        </div>
      </div>




      <div className="container l-service ">
        <div className="row">
          <div className="col-md-8  our-service">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="icon mb-3">
                      <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Warm & Enjoy" />
                    </div>
                    <h5 className="card-title">Healthy</h5>
                    <p className="card-text">we offer a variety of healthy food options made from fresh, organic ingredients to nourish your body and delight your taste buds.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="icon mb-3">
                      <img src="https://cdn-icons-png.flaticon.com/512/3171/3171069.png" alt="Savour & Replay" />
                    </div>
                    <h5 className="card-title">Superfood</h5>
                    <p className="card-text">Experience the ultimate in nutrition and taste with our signature superfood dish, crafted to boost your energy and well-being.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="icon mb-3">
                      <img src="https://cdn-icons-png.flaticon.com/512/3468/3468414.png" alt="Delivery Services" />
                    </div>
                    <h5 className="card-title">Pure Ghee dipped</h5>
                    <p className="card-text">The signature dessert was decadently dipped in pure ghee, leaving a lingering taste of indulgence.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="icon mb-3">
                      <img src="https://cdn-icons-png.flaticon.com/512/2909/2909670.png" alt="Organic Food" />
                    </div>
                    <h5 className="card-title">Delicious</h5>
                    <p className="card-text">The chef at the restaurant prepared a delicious dish that was the highlight of our evening.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div>
              <h2 className="mb-4">The Choice of <span className="text-dark fw-bold">Taste</span></h2>
              <p className="mb-4">Experience the heartfelt essence of <span>LETTEEZ </span> through its tantalizing flavors, sure to satisfy and delight with every bite.</p>
              {/* <button className="btn btn-warning">View More <span className="arrow">→</span></button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className='ps-5 ms-5'>
          <h3 className='ps-5 ms-5'>Our Delivery Partners</h3>
        </div>
        <div className="card mx-auto bg-dark" style={{ width: '57rem' }}>
          <div className="card-body ">

            <div className="d-flex justify-content-between  align-items-center">
              <img
                src={zomoto}
                alt="Zomato"
                className="img-fluid"
                style={{ height: '50px' }}
              />
              <img
                src={swiggy}
                alt="Siggy"
                className="img-fluid"
                style={{ height: '50px' }}
              />
              <img
                src={magicpin}
                alt="magicpin"
                className="img-fluid"
                style={{ height: '50px' }}
              />

            </div>
          </div>
        </div>
      </div>




      <div className="container mt-5  pt-5">
        <h1 className='text-center'>TOP PICKS</h1>
        <div className="row ">
          {cards.map(card => (
            <div key={card.id} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={card.imageUrl}
                  className="card-img-top"
                  alt={`Card ${card.id}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ height: '100px', overflow: 'hidden' }}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>





      <div>




        <div className='w-50 mx-auto form-control git mt-5'>
          <h1 className='text-center'> Get In Touch</h1>
          <div className='d-flex '>
            <input className='form-control w-50 me-2' type="text" placeholder='First Name' />
            <input className='form-control w-50 ms-2' type="text" placeholder='Last Name' />
          </div>
          <input className='form-control mt-2' type="text" placeholder='Email' />
          <input className='form-control mt-2' type="text" placeholder='Phone Number' />
          <textarea className='form-control mt-2 home-desc' placeholder='Description'></textarea>
          <button className='btn btn-success mt-2'>Submit</button>

        </div>







      </div>




    </div>
  );
};

export default Home;


