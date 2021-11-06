import { IRecipe } from "./IRecipe";

const RecipeComponent = (props: { recipe: IRecipe }) => {
    const { recipe } = props;
    return (
        <div className="recipe">
            <div className="title">
                <img src={recipe.image || 'http://localhost:3000/logo192.png'} alt={recipe.title} />
                <p>{recipe.title}</p>
            </div>
            {recipe.usedIngredients &&
                <ul>
                    {recipe.usedIngredients.split(',').map(ingredient => <li>{ingredient}</li>)}
                </ul>
            }
            <p>Likes: {recipe.likes}</p>
        </div>
    )
};

export default RecipeComponent;