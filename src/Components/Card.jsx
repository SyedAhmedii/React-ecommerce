import React from 'react'

const Card = (props) => {
    return (
        <>
            <div class="card bg-base-100 w-96 shadow-xl min-w-[200px] min-h-[250px]">
                <figure class="px-10 pt-10">
                    <img
                        className='max-w-[150px] max-h-[150px]'
                        src={props.image}
                        alt="Shoes"
                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{props.title}</h2>
                    <p>{props.description}</p>
                    <p>{props.price}</p>
                    <div class="card-actions">
                        <button onClick={props.showMore} class="btn btn-primary">Check Info</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card