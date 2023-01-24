export default function Hero(props){
    
    return(
        <main className={props.darkMode ? "dark": ""}>
            <div className="hero-left">
                <img src={`${window.location.origin}/assets/${props.imgUrl}`} key={props.id} alt="" className="card-pics" />
            
            </div>
            <div className="hero-right">
                <div className="hero-navTop">
                    <h2 className='location-name'>{props.location}</h2>
                    <a href={`${props.googleMap}`} target="_blank" className='location-map'>View on Google Maps</a>
                </div>
                <h1 className='hero-header'>{props.title}</h1>
                <span className='hero-date'>{props.startDate} - {props.endDate}</span>
                <p className='hero-desc'>{props.desc}</p>
            </div>
        </main>
    )
}