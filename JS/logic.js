const buttons = document.getElementsByTagName("button");
const btnArry = Array.from(buttons);
let string = "";
const outPut = document.getElementById("output");
btnArry.forEach(button => {
    let bacCount = 0;
    button.addEventListener("click", () => {
        const btnValue = button.value;
        if (btnValue == "=") {
            // string = eval(string)
            outPut.value = eval(outPut.value)
        }
        else if (btnValue == "c") {
            outPut.value = "0"
        }
        else if (btnValue == "()") {
            bacCount++;
            console.log(outPut.value.length)
            if (outPut.value.length>0) {
                // string = `(${string})`
                outPut.value = `(${outPut.value})`;
            }
            else {
                // string = "(";
                outPut.value = "(";
            }
        }
        else if(btnValue == "delet") {
            let outPutForPop = Array.from(outPut.value);
            outPutForPop.pop()
            console.log(outPutForPop.toString());
            
            outPutForPop.forEach((e)=>{
                if (e!==",") {
                    console.log(outPutForPop.toString());
                    
                }
            })
            outPut.value = outPutForPop
        }
        else {
            if (bacCount > 0) {

            }
            // string += btnValue;
            outPut.value += btnValue;
        }
    })
})