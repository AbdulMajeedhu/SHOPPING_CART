function CardItem(props){
    return(
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{props.data.title}</div>
          {props.data.price}
        </div>
        <span  onClick={()=>props.handleRemoveCard(props.data.id)} class="badge text-bg-primary rounded-pill">X</span>
      </li>
    )
};
 export default CardItem;