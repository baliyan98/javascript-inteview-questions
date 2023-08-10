// Closure Definition: Closure is bundling of two or more functions where inner functions can access all the methods and properties of
// outer functions even after the execution of external function is done

function func1(x: number){
    function func2(y: number){
        function func3(z: number){
            return x + y + z;
        }
        return func3;
    }
    return func2;
}
const a = func1(10);
console.log(a);
const b = a(20);
console.log(b);
const c = b(30);
console.log(c);


