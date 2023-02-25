function handleMouseEnter(){
    this.classList.add('s-card--hovered');
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
}

function addEventListerCards(){
    const cardElements = document.getElementsByClassName('s-card');
    for(let index in cardElements){
        const card = cardElements[index]; 
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListerCards, false);