import { Button } from '@material-ui/core';
import React from 'react'
import "./SearchPage.css"
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 stays  •  26 august to 30 august  •  2 guests</p>
                <h1> Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Roomns and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
              <SearchResult img="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" location="Minimalistic apartment near train station" title="Stay at this modern apartment in the heart of the city" description="1 guest •  1 bedroom  •  1 kitchen •  Wifi  •  Free Parking" star={4.73} price="$30/night" total="$117 total"/>
              <SearchResult img="https://images.unsplash.com/photo-1497366216548-37526070297c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" location="Minimalistic apartment near train station" title="Amazing loft with 2 bedrooms" description="4 guest •  2 bedroom  •  1 kitchen •  Wifi  •  Free Parking •  Pool table  •  Garage " star={3.49} price="$100/night" total="$324 total"/>
              <SearchResult img="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" location="Minimalistic apartment near train station" title="Room with harbour view and promenade access" description="2 guest •  1 bedroom •  Wifi  •  Nest thermostat •  Swimming pool access  •  Laundry Service  " star={5.00} price="$50/night" total="$250 total"/>
              <SearchResult img="https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" location="Minimalistic apartment near train station" title="Artist studio near shopping center" description="2 guest •  1 bedroom  •  1 kitchen •  Metro access  •  Pet friendly •  Cinema projector •  No smoking" star={4.44} price="$120/night" total="$480 total"/>
              <SearchResult img="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" location="Minimalistic apartment near train station" title="3 bedroom house near museum" description="6 guest •  3 bedroom  •  1 kitchen •  Wifi  •  Netflix •  2 bathrooms •  24/7 security" star={3.91} price="$125/night" total="$657 total"/>
        </div>
    )
}

export default SearchPage;

