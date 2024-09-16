import { Link } from "react-router-dom";
function MultiCardsHome(){
    //this code for multiple cards 
    const multicards = [
        {
            id:1,
            imgScr:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_april/central/Women_Monogram_Bags_WW_HP_Product_Push_20240419_DI2.jpg?wid=600",
            title:"Women's Bag",
            description:"Explore the Selection"
        },
        {
            id:2,
            imgScr:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_april/central/Women_SG_WW_HP_Product_Push_20240419_DI2.jpg?wid=600",
            title:"Women's Sunglass",
            description:"Explore the Selection"
        },
        {
            id:3,
            imgScr:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_april/central/LV_Trainer_WW_HP_Product_Push_20240419_DI2.jpg?wid=600",
            title:"Women's Shoes",
            description:"Explore the Selection"
        },
    ];
    return(
        <>
         {/* this container for multiple cards */}
         <div className='container my-4 p-0'>
            <div className='row'>
               {multicards.map(items =>(
                 <div className="col-12 col-md-4 mb-4" key={items.id}>   
                 <div className='card border-0'>
                    <Link to={'/product'}><img className='card-img-top' src={items.imgScr} alt='image' style={{height:"430px", objectFit:"cover"}}/></Link>
                  <div className='card-body'>
                     <h5 className='card-title'>{items.title}</h5>
                     <Link to={'/product'} style={{color:'black',textUnderlineOffset:'5px', textDecorationColor:'black'}}><p className='card-text'>{items.description}</p></Link>
                     {/* textUnderlineOffset Adjust this value to control the gap between the text and the underline  */}
                  </div>
                 </div>
                 </div>
               ))}
            </div>
        </div>
        </>
    )
}
export default MultiCardsHome;