import React from 'react'
import Banner from './Banner';
import './Home.css'
import Card from "./Card"

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className="home__section">
                <Card src="https://images.unsplash.com/photo-1593604454703-20ecca9bb373?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YW1hemluZyUyMGhvdXNlfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" title="Entire Homes" description="Comfortable private places, with room for friends or family."/>
                <Card src="https://images.unsplash.com/photo-1564047046531-fe7ceae81291?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFtYXppbmclMjBob3VzZXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" title="Unique Stays" description="Spaces that are more than just a place to sleep."/>
                <Card src="https://images.unsplash.com/photo-1511493321267-ccd4cfc31af7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZ1bnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" title="Online Experiences" description="Unique activities we can do together, led by a world of hosts."/>
            </div>
            <div className="home__section">
                <Card src="https://images.unsplash.com/photo-1595524362625-fcbe45feafa0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVudGhvdXNlfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" title="Penthouse in London" description="Enjoy the amazing sights of London with this stunning penthouse." price="$350/night"/>
                <Card src="https://images.unsplash.com/photo-1588625500633-a0cd518f0f60?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" title="Apartment in Westminster" description="Superhost with great amenities and a fabulous shopping complex nearby." price="$70/night"/>
                <Card src="https://images.unsplash.com/photo-1603198132334-5478a1ec5bc1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" title="Cozy Flat" description="Superhost with a stunning view of the beachside in Sunny Bournemouth." price="$50/night"/>
            </div>
        </div>
    )
}

export default Home;
