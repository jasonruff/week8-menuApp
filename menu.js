// My menu app will allow users to create, view and delete beverages from a drink menu) 
class Drink {
    constructor(name, size){
        this.name = name;  //here is where we store our drink name
        this.size = size;   // here is where we store our drink size
    }
    describe(){
        return `This ${this.drink} is a ${this.size}.`;
    }
}

//Next we need to create category for the drinks, the category will be Iced, Hot, and Freeze.
class Category {
    constructor(name){
        this.name = name;
        this.drinks= [];  // here we are creating our empy array where we will store the names of the drinks in each category
    }

addDrink(drink){
   let newDrink = new drink()   
    if (drink instanceof Drink){
        this.drinks.push(drink);
    }else {
        throw new Error(`You can only add a new drink. This is not a drink: ${drink}`);
    }
  } 
  
  describe(){
    return `${this.name} has ${this.drinks.length} drinks.`;
  }
}

class Menu{
    constructor(){
        this.category = [];
        this.selectedCategory = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection){
                case '1':
                    this.createCategory();
                    break;
                case '2':
                    this.viewCategory();
                    break;
                case '3':
                    this.deleteCategory();
                    break;
                case '4':
                    this.displayCategories();
                    break;
                default:
                    selection =0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye!");
    }

    showMainMenuOptions(){
        return prompt(`
            0) exit
            1) create new drink category
            2) view category
            3) delete category
            4) display all category
            `);
    }


showCategoryMenuOptions(categoryInfo){
    return prompt (`
        0) back
        1) create new drink
        2) delete drink
        -------------------------
        ${categoryInfo}
        `);
}

    displayCategories(){
        let categoryString = '';
        for (let i =0; i<this.category.length; i++){
            categoryString += i + ')' + this.category[i].name + '\n';
        }
        alert(categoryString);
    }

    createCategory(){
        let name = prompt('Ener name for a new category:');
        this.category.push(new Category(name))
    }

    deleteCategory(){
        let index = prompt("Enter the category you wish to delete ")
        this.selectedCategory.splice(index,1)
    }

    viewCategory(){
        let index = prompt('Enter the name of the category you wish to view:');
        if (index > -1 && index < this.category.length){
            this.selectedCategory = this.category[index];
            let description = 'Category Name: ' + this.selectedCategory.name + '\n';

            for(let i=0; i< this.selectedCategory.drinks.length; i++){
                description += i + ') ' + this.selectedCategory.drinks[i].name + ' - ' + this.selectedCategory.drinks[i].size + '\n';
            }
        let selection = this.showCategoryMenuOptions(description);
        switch(selection){
            case '1': 
            this.createDrink();
            break;
            case '2': 
            this.deleteDrink();
        }
      }
    }

    createDrink() {
        let drink = prompt ('Enter the name of the new drink: ');
        let size = prompt ("Enter the size of the drink: ")
        this.selectedCategory.drinks.push(new Drink(drink,size))
    }

    deleteDrink(){
        let index = prompt ("Enter the name of the drink you wish to delete:")
        if(index > -1 && index < this.selectedCategory.length){
            this.selectedCategory.drinks.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();