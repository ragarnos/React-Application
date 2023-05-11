import burger_img from '../../burger.jpg'

export function Hamburger(){

    class Element {
        constructor(price, calories) {
          this.price = price;
          this.calories = calories;
        }
      }
    class Hamburgers {
        static #SIZE_SMALL = new Element(50, 20);
        static #SIZE_BIG = new Element(100, 40);
        static #STUFFING_CHEESE = new Element(10, 20);
        static #STUFFING_SALAD = new Element(20, 5);
        static #STUFFING_POTATOE = new Element(15, 10);
        static #TOPPING_SAUCE = new Element(15, 0);
        static #TOPPING_MAYO = new Element(20, 5);
      
        static get SIZE_SMALL () { return Hamburgers.#SIZE_SMALL};
        static get SIZE_BIG () { return Hamburgers.#SIZE_BIG};
        static get STUFFING_CHEESE () { return Hamburgers.#STUFFING_CHEESE};
        static get STUFFING_SALAD () { return Hamburgers.#STUFFING_SALAD};
        static get STUFFING_POTATOE () { return Hamburgers.#STUFFING_POTATOE};
        static get TOPPING_SAUCE () { return Hamburgers.#TOPPING_SAUCE};
        static get TOPPING_MAYO () { return Hamburgers.#TOPPING_MAYO};
      
        #size = null;
        #stuff = null;
        #ingredients = [];
      
        constructor(...args) {
          args.forEach(this.#changeComposition.bind(this));
        }
      
        #changeComposition(element) {
          switch (element) {
            case Hamburgers.#SIZE_SMALL:
            case Hamburgers.#SIZE_BIG:
              this.#changeSize(element);
              break;
            case Hamburgers.#STUFFING_CHEESE:
            case Hamburgers.#STUFFING_SALAD:
            case Hamburgers.#STUFFING_POTATOE:
              this.#changeStuff(element);
              break;
            default:
              this.addIngredients(element);
          }
        }
      
        #changeSize(size) {
          this.#size = size;
        }
      
        #changeStuff(stuff) {
          this.#stuff = stuff;
        }
      
        addIngredients(ing) {
          this.#ingredients.push(ing);
        }
        addTopping(topping) {
          this.#stuff = topping;
        }
      
        calculate() {
          return this.#size.calories +
            this.#stuff.calories +
            this.#ingredients.reduce((totalCalories, ingredient) => totalCalories + ingredient.calories, 0);
        }
      
        calculatePrice() {
          return this.#size.price +
            this.#stuff.price +
            this.#ingredients.reduce((totalPrice, ingredient) => totalPrice + ingredient.price, 0);
        }
      
      }
        let burger;
        function widthBurger(size){
            burger = new Hamburgers(Hamburgers[size]);
            document.querySelector('#addTopping').style.display = 'block';
            document.querySelector('.flexRow').style.display = 'none';
        }
        function addDopping(topping){
          // , Hamburger.STUFFING_CHEESE
            burger.addTopping(Hamburgers[topping]);
            console.log(burger);
            document.querySelector('#addTopping').style.display = 'none';
            document.querySelector('#dopp').style.display = 'flex';
        }
        function inputckeck(e){
            const doping = e.target.name;
            burger.addIngredients(Hamburgers[doping]);
           
        }
        function result(){
            const calories = burger.calculate() +  'Калории <br>';
            const price = burger.calculatePrice() + 'Цена';
           document.querySelector("#result").innerHTML = calories + price;
        }
        

    return (
        <>
        <div className="flexRow">
          <div className="flexBurger">
            <div className='burger_content' onClick={() => widthBurger('SIZE_SMALL')}>
                <img className='small' src={burger_img} alt='small'/>
                <p>Small Burger</p>
            </div>
            <div className='burger_content' onClick={() => widthBurger('SIZE_BIG')}> 
                <img className='big' src={burger_img} alt='big'/>
                <p>Big Burger</p>
            </div>
          </div>
        </div>
        <div id='addTopping'>
          <div className="flexBurger">
                <div className='burger_content' onClick={(e) => addDopping('STUFFING_CHEESE',e)}>
                    <img className='small' src={burger_img} alt='small'/>
                    <p>C сыром</p>
                </div>
                <div className='burger_content' onClick={(e) => addDopping('STUFFING_SALAD',e)}> 
                    <img className='small' src={burger_img} alt='big'/>
                    <p>С салатом </p>
                </div>
                <div className='burger_content' onClick={(e) => addDopping('STUFFING_POTATOE',e)}> 
                    <img className='small' src={burger_img} alt='big'/>
                    <p>С картоплею </p>
                </div>
            </div>
            
          </div>
          <div className='flexRow' id='dopp'> 
                <div className="preference">
                    <label for="sous">посипати приправою</label>
                    <input type="checkbox" name="TOPPING_SAUCE" id="sous" onInput={(e) => inputckeck(e)}/>
                </div>
                <div className="preference">
                    <label for="cheese">посипати майонезом</label>
                    <input type="checkbox" name="TOPPING_MAYO" id="cheese" onInput={(e) => inputckeck(e)}/>
                </div>

                <button onClick={()=>result()}>Заказать</button>


                
            </div>
            <div id='result'></div>
        </>
        
    );
}