document.addEventListener('DOMContentLoaded', (event) => {

    let resultData = document.querySelector('.iner-order');
    let orders = JSON.parse(localStorage.getItem('Order'));
    let keysOrder = Object.keys(orders);

    for(let i = 0; i < keysOrder.length; i++){

        resultData.innerHTML += `
            <div class="">
                <h3>${keysOrder[i]}</h3>
                <div class="result_data">
                </div>
            </div>`;                 
            
        let resultBlock = document.querySelectorAll('.result_data');
        let resultObj = orders[keysOrder[i]]
        for (res in resultObj) {
            resultBlock[i].innerHTML += `<p>${res}: <span>${resultObj[res]}</span></p>`;
        }                   
    }
                
});