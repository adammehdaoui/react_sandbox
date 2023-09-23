import '../styles/Recommendation.css'

function Recommentation() {
    const moisCourant = new Date().getMonth();
    const isSpring = moisCourant >= 2 && moisCourant <= 5;

    return(isSpring ? 
        <h3 className='lmj-reco'>C'est le printemps, rempotez <span>🍃</span></h3> : 
        <h3 className='lmj-reco'>Ce n'est pas le moment de rempoter</h3>);
}

export default Recommentation;