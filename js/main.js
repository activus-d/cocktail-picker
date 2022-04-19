//create variables for DOM nodes
let imageDom1 = document.createElement("img")
let imageDom2 = document.createElement("img")
let imageDom3 = document.createElement("img")
let imageDom4 = document.createElement("img")
let nameDom1 = document.querySelector(".name1")
let nameDom2 = document.querySelector(".name2")
let nameDom3 = document.querySelector(".name3")
let nameDom4 = document.querySelector(".name4")
let categoryDom1 = document.querySelector(".category1")
let categoryDom2 = document.querySelector(".category2")
let categoryDom3 = document.querySelector(".category3")
let categoryDom4 = document.querySelector(".category4")
let alcoholDom1 = document.querySelector(".alcohol1")
let alcoholDom2 = document.querySelector(".alcohol2")
let alcoholDom3 = document.querySelector(".alcohol3")
let alcoholDom4 = document.querySelector(".alcohol4")
let ingredientDom1 = document.querySelector(".ingredient1")
let ingredientDom2 = document.querySelector(".ingredient2")
let ingredientDom3 = document.querySelector(".ingredient3")
let ingredientDom4 = document.querySelector(".ingredient4")
let instructionDom1 = document.querySelector(".instruction1")
let instructionDom2 = document.querySelector(".instruction2")
let instructionDom3 = document.querySelector(".instruction3")
let instructionDom4 = document.querySelector(".instruction4")
let mix1 = document.querySelector(".mix1")
let imageDiv1 = document.querySelector(".imageDiv1")
let mix2 = document.querySelector(".mix2")
let imageDiv2 = document.querySelector(".imageDiv2")
let mix3 = document.querySelector(".mix3")
let imageDiv3 = document.querySelector(".imageDiv3")
let mix4 = document.querySelector(".mix4")
let imageDiv4 = document.querySelector(".imageDiv4")


document.querySelector('.fa-search').onclick = display
function display() {
    let drink = (document.querySelector('input').value).toLowerCase()
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then( res => res.json() )
        .then( data => {
            console.log(data)
            let [cocktail1, cocktail2, cocktail3, cocktail4, cocktail5] = data.drinks //destructure the value of data and assign new variables to it's value 
            //console.log(cocktail1)
            //link the class declaration with the destructured variables
            option1 = new Cocktail(cocktail1)
            option2 = new Cocktail(cocktail2)
            option3 = new Cocktail(cocktail3)
            option4 = new Cocktail(cocktail4)
            option5 = new Cocktail(cocktail5)
            inputData(option1, imageDiv1, mix1, imageDom1, nameDom1, categoryDom1, alcoholDom1, ingredientDom1, instructionDom1)
            inputData(option2, imageDiv2, mix2, imageDom2, nameDom2, categoryDom2, alcoholDom2, ingredientDom2, instructionDom2)
            inputData(option3, imageDiv3, mix3, imageDom3, nameDom3, categoryDom3, alcoholDom3, ingredientDom3, instructionDom3)
            inputData(option4, imageDiv4, mix4, imageDom4, nameDom4, categoryDom4, alcoholDom4, ingredientDom4, instructionDom4)

            let h2InlineBlock = document.querySelectorAll("h2").style.display = "inlineBlock"


        })
        .catch( err => {
            console.log( `error: ${err}` )
        } )

}
//make a class constructor to create objects for the properties of the search result/data.drinks
class Cocktail {
    constructor(option) {
        this.name = option.strDrink;
        this.image = option.strDrinkThumb;
        this.category = option.strCategory;
        this.alcohol = option.strAlcoholic;
        this.ingredient1 = option.strIngredient1;
        this.ingredient2 = option.strIngredient2;
        this.ingredient3 = option.strIngredient3;
        this.ingredient4 = option.strIngredient4;
        this.instruction = option.strInstructions;
    }
    getIngredients() {
        return (`${this.ingredient1}, ${this.ingredient2}, ${this.ingredient3}, ${this.ingredient4}`)
    }
    getName() {
        return this.name
    }
    getCategory() {
        return this.category
    }
    getImage() {
        return this.image
    }
    getAlcohol() {
        return this.alcohol
    }
    getInstructions() {
        return this.instruction
    }
}

function inputData(input, imageDiv, section, imageDom, nameDom, categoryDom, alcoholDom, ingredientDom, instructionDom) {
    imageDom.src = `${input.getImage()}`
    imageDiv.append(imageDom)
    //console.log(input.getImage())
    //if(get)
    nameDom.textContent = `${input.getName()}`
    categoryDom.innerHTML = `${input.getCategory()}`
    alcoholDom.innerHTML = `${input.getAlcohol()}`
    ingredientDom.innerHTML = `${input.getIngredients()}`
    instructionDom.innerHTML = `${input.getInstructions()}`
}

