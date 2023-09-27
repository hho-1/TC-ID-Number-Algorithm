let submitBtn: HTMLElement | null = document.querySelector(".btn-primary");
let resultMessage: HTMLElement | null = document.querySelector(".result");
let inputEntered: HTMLElement | null = document.querySelector(".num");
let form: HTMLElement | null = document.querySelector("#myForm");

let result: boolean = true;


   form?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    let enteredNumber: string = (document.querySelector("#tcNum") as HTMLInputElement).value;

    let digits: string[] = enteredNumber.split("");
    let odds: number = 0;
    let evens: number = 0;
    let digitsTotal: number = 0;

    let numbers: RegExp = /^[0-9]+$/;

    inputEntered!.innerHTML = `${enteredNumber}`;

    if (!enteredNumber.match(numbers)) {
        resultMessage!.innerHTML = `&#10060; Only numbers are accepted!`;
        (document.querySelector("#tcNum") as HTMLInputElement).value = "";
    }
    
    //console.log(digits);

    else if(digits.length !== 11){
        resultMessage!.innerHTML = "&#10060; TC Identity number must have 11 digits!";
        (document.querySelector("#tcNum") as HTMLInputElement).value = "";
    }
    else if(digits[0] == "0"){
        resultMessage!.innerHTML = "&#10060; First digit of TC ID Number cannot be 0!";
        (document.querySelector("#tcNum") as HTMLInputElement).value = "";
    }
    else{
        odds = parseInt(digits[0]) + parseInt(digits[2]) + parseInt(digits[4]) + parseInt(digits[6]) + parseInt(digits[8]);
        evens = parseInt(digits[1]) + parseInt(digits[3]) + parseInt(digits[5]) + parseInt(digits[7]);

        //console.log(odds);
        //console.log(evens);

        //console.log(digits[9]);
        if((odds * 7 - evens) % 10 == parseInt(digits[9])) {
            
            for (let i = 0; i < 10; i++) {
                digitsTotal += parseInt(digits[i]);
            }
            //console.log(digitsTotal);
            if (digitsTotal % 10 == parseInt(digits[10])) result = true;
            else result = false;
        }
        else{
            result = false;
        }

        /* if(result){
            resultMessage!.classList.add('text-success')
            console.log(resultMessage?.classList);
            resultMessage!.innerHTML = resultMessage!.innerHTML = `${enteredNumber} is a VALID TC ID Number!`
        }
        else{
            resultMessage!.classList.add('text-danger')
            resultMessage!.innerHTML = resultMessage!.innerHTML = `${enteredNumber} is NOT a valid TC ID Number!`
        } */
        result == false ? (resultMessage!.innerHTML = `&#10060; This is NOT a valid TC ID Number!`) : (resultMessage!.innerHTML = `&#9989; This is a VALID TC ID Number!`);
        (document.querySelector("#tcNum") as HTMLInputElement).value = "";
    }
    
}) 


