import React from "react";

const Meal = () => {
    
    const protein = ['Chicken Breast', 'Lean Ground Beef', 'Ground Turkey', 'Pork Chop', 'Eggs','Salmon', 'Tuna', 'Sirloin']
    const carb = ['Brown Rice', 'Oats', 'Quinoa', 'Russet Potatoes', 'Jasmine Rice', 'Sweet Potatoes', 'Chickpea Pasta']
    const snacks = ['Greek yogurt', 'Almonds', 'Salami', 'Cheese cubes', 'Rice cakes', 'Veggies', 'Fruit (in moderation)', 'Granola']


    return (
        <div>
            <div className="food-header"><h1>Food for Thought</h1></div>
                <div className="options">
                    <div className="protein-header">
                    <h3>Protein Options:</h3>
                        {protein.map((item, i) => {
                            return (
                                <div key={i}>
                                <li>{item}</li>
                                </div>
                            )
                        })}
                        </div>
                            <div className="carb">
                                <h3>Carb Options:</h3>
                                {carb.map((item, i) => {
                                    return (
                                        <div key={i}>
                                        <li>{item}</li>
                                        </div>
                                    )
                                })}
                            </div>
                                <div className="snack">
                                    <h3>Snack Options:</h3>
                                    {snacks.map((item, i) => {
                                        return (
                                            <div key={i}>
                                            <li>{item}</li>
                                            </div>
                                        )
                                    })}
                                </div>      
                </div>
                                    {/* <div className="tracking">
                                        <h2>Track your Meal</h2>
                                        <div>What is your meal?<input className="meal"></input></div>
                                        <div className="macros">
                                            Protein<input></input>&nbsp;
                                            Carbs<input></input>&nbsp;
                                            Calories<input></input>
                                            <button>Add</button>
                                        </div>
                                    </div> */}
        </div>
    )
}

export default Meal;