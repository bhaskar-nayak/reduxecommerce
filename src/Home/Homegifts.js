import { Link } from "react-router-dom";
import '../Styles/Homegifts.css';
function GiftsHome(){
    const giftImages =[
        {
            id:1,
            imgScr:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=600",
            title:"Services",
        },
        {
            id:2,
            imgScr:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=600",
            title:"Art of Gifting",

        },
        {
            id:3,
            imgScr:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=600",
            title:"Persolizations"
        }
    ]
    return(
        <div className='container my-3'>
        <div className='row'>
            {giftImages.map(gitsItem =>(
                <div className='col-md-4' key={gitsItem.id}>
                    <div className='card boder-0 img-fluid' style={{width:"420px"}}>
                        <Link to={'/product'}><img className='card-img-top imageheight' src={gitsItem.imgScr} alt='image product'/></Link>
                    </div>
                    <div className='card-body text-center'>
                        <p className='card-text lastImages'>{gitsItem.title}</p>
                    </div>
                </div>
            ))}
        </div>
     </div>
    )
}
export default GiftsHome;