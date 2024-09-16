import { Link } from "react-router-dom";
import '../Styles/HomeImages2.css'
function HomeImages2(){
    const homeImg2 =[
        {
            id:1,
            images:"https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/men/2024/collection/lv-fall-24/M_BC_LVFall_Aug24_08_DI3.jpg?wid=2400",
            title:"women",
            description:"Women's Day Gifts",
            btns:"Discover The Gift Guide"
        },
        {
            id:2,
            images:"https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/women/2024/category/city-bags/lg-curation/W_BC_LG_SLOUCHY_JUL24_01_DI3.jpg?wid=2400",
            title:"women",
            description:"Women's Day Gifts",
            btns:"Discover the Gifts"
        },
        {
            id:3,
            images:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2023/2023_november/LV_Services_WW_HP_Push_DI3.jpg?wid=2400",
            title:"men",
            description:"Spring Collection 2024 feat Tyler",
            btns:"Discover the Collections"
        }
    ]
    return(
        <>
         <div className='image-container my-4'>
  {homeImg2.map(item => (
    <div className='homeImg2 border-0 my-4 mx-2 position-relative' key={item.id}>
      <div className='img-wrapper'>
        <Link to='/product'>
          <img className='img-fluid imgWidth' src={item.images} alt='image' />
        </Link>
      </div>
      <div className="overlay">
        <h2 className='text'>{item.title}</h2>
        <p className='texts'>{item.description}</p>
        <button className="btndesign">{item.btns}</button>
      </div>
    </div>
  ))}
</div>
        </>
    )
}
export default HomeImages2;