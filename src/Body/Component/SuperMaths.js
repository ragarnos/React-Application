

export function SuperMaths(){
    class obj {
        constructor(x, y, znak) {
          this.x = x;
          this.y = y;
          this.znak = znak;
        }
      }
    class SuperMath {
        
        input(bool) {
            if(bool === true){
                const znak = window.prompt("Укажите знак для решения математического уравнения.");
                const x = window.prompt("Укажите первый символ.");
                const y = window.prompt("Укажите второй символ.");
                return new obj(x,y,znak)
            }else{
                alert('Отмена действий')
            }
            
        }
        check(object){ 
            console.log(object); 
            const calculate = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                '*': (a, b) => a * b,
                '/': (a, b) => a / b,
                '%': (a, b) => (a * b)/100
            };
            return calculate[object.znak](Number(object.x), Number(object.y));

        }
    }
    function start(){
        let p = new SuperMath()
        const start = window.confirm("чи хочете зробити дію znak c Х і У");
        const input = p.input(start);
        const result = p.check(input);
        document.querySelector("#resultat").innerHTML = result;

    }
    return(
        <>
            <div class="card__btn" onClick={()=>start()}><button>Калькулятор</button></div>
            <div class="card__btn"><button id="resultat"></button></div>
        </>
       
    );
}