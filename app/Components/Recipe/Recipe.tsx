import './Recipe.css'
const Recipe = ({props}:any) => {
    console.log(props)
    return (
        <div className='recipe-container'>
            <h2>{props.name}</h2>
            <p>{props.recipe.name}</p>
            <p>{props.recipe.indgredents}</p>
        </div>

    )
}
export default Recipe