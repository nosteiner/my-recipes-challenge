var RecipeApp = function () {

    var recipes = [
        // { 
        //     name: 'Best Chicken Soup!', 
        //     image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
        //     ingredients: [
        //         { name: 'whole chicken' },
        //         { name: 'medium carrots'},
        //         { name: 'onions' },
        //     ] 
        // }
    ];

    var $recipes = $('.recipes');

    //id's for recipes
    var recId = 0;

    //id's for ingredients
    var ingId = 0;


    var _findRecipeById = function (id) {
        for (var i = 0; i < recipes.length; i += 1) {
            if (recipes[i].id === id) {
                return recipes[i];
            }
        }
    }

    var createRecipe = function (name, image) {
        var recipe = {
            name: name,
            image: image,
            ingredients: [],
            id: recId
        };

        //keeps recipe ids unique 
        recId++;

        recipes.push(recipe);
    };

    var createIngredients = function (recipe) {
        var $clickeIngredient = $(recipe).closest('.recipe');
        var id = $clickedIngredient.data().id;//add code
        var recipe = _findRecipeById(id)
        var recipeIndex = recipes.indexOf(recipe)

        var IngredientText = $clickedRecipeIngredient.find('.ingInput').val()
        
        var Ingredient = {
            text: IngredientText
            id: ingId

        }
        ingId = ;////////////////////////////// setting the id in order to being able to write the _getIngredients function

        recipes[recipeIndex].ingredients.push(Ingredient);
        console.log(recipes[recipeIndex].ingredients)
    };

    var _getIngredients = function (recipe) {
        //add code
        return "";
    };

    var renderRecipes = function () {
        //empty recipes div
        $recipes.empty();

        for (var i = 0; i < recipes.length; i++) {
            //current recipe in iteration
            var recipe = recipes[i];

            //return HTML for all ingredients
            var ingredients = _getIngredients(); //add code

            $recipes.append(
                '<div class="recipe col-md-6  offset-md-3 img-fluid shadow" data-id="' + recipe.id + '">' +
                '<h4 class="text-capitalize font-italic text-center">' + recipe.name + '</h4>' +
                '<img class="recipe-img" src="' + recipe.image + '"/>' +
                '<hr>' +
                '<h5 class="font-italic font-bold text-center">ingredients</h5>' +
                '<div class="input-group mb-3">' +
                '<div class="input-group-prepend">' +
                '<span class="add-ingredients input-group-text" id="basic-addon3">Add Ingredients</span>' +
                '</div>' +
                '<input type="text" class="form-control ingInput" id="basic-url" aria-describedby="basic-addon3">' +

                '</div>' +
                '<ul class="ingredients">' + ingredients + '</ul>' +
                '</div>'
            );
        }
    };

    return {
        createRecipe: createRecipe,
        renderRecipes: renderRecipes,
        createIngredients: createIngredients
    }
};

var app = RecipeApp();


//--------EVENTS

//add a recipe
$('.add-recipe').on('click', function () {
    //collect input text
    var name = $('#recipe-name').val();
    var image = $('#recipe-image').val();

    //add recipe to array and render
    app.createRecipe(name, image);
    app.renderRecipes();
    
    
});


$('.recipes').on('click', '.add-ingredients', function () {
app.createIngredients(this);
    
  
  });

