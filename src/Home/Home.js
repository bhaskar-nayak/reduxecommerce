import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import MultiCardsHome from './multiCards';
import HomeImages2 from './HomeImages2';
import GiftsHome from './Homegifts';
function Home(){
    const homeImgs=[
        {
            id:1,
            imgScr:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/men/2024/category/shoes/M_BC_MSHOES_LV_Trainer_Evergreen_Apr24_03_DI3.jpg?wid=2400",
        },
    ]
    
    return(
                 <>    
                <div className='image-container'>
                {homeImgs.map(item => (
                    <div className='homeImg border-0' key={item.id}>
                        <div className='img-wrapper'>
                            <Link to='/product'>
                                <img className='img-fluid' src={item.imgScr} alt='image' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <MultiCardsHome/>
            <HomeImages2/>
            <GiftsHome/>
       </>
    )
}
export default Home;