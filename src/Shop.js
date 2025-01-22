 function Shop(props){
    return(
        <div className='col-lg-4'>
        <div className="card" style={{ width: '18rem' }} />
        <img 
        // src={`https://picsum.photos/id/1/200/150?random=${Math.floor(Math.random()*100)}`} 
        // src={`https://picsum.photos/200/150?random=${Math.floor(Math.random()*100)}`} 
        src={props.data.image}
         className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <h6 className="card-price">{props.data.price}</h6>
          <p className="card-text">But it now ! get unbelivable prices. Limited , it's Only for this season.Buy it quickly
          </p>

          <button
           disabled={props.cardItem.some(obj => obj.id===props.data.id)} 
           onClick={() => props.handleAddCard(props.data.id)}
            className="btn btn-primary">Add Card</button>
        </div>
      </div> 
    )
};
export default Shop;

