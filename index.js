class Order {
    constructor(size, sugar) {
      this.size = size;
      this.sugar = sugar;
    }
}

let newOrder = new Order('', 0);

const mainPanel = document.getElementById('main_panel');
const orderPanel = document.getElementById('currentOrder');
const sizePanel = document.getElementById('size_panel');
const sugarPanel = document.getElementById('sugar_panel');
const prepPanel = document.getElementById('prep_panel');
const orderBtn = document.getElementById('orderBtn');
const cancelBtn = document.getElementById('cancelBtn');
const newOrderBtn = document.getElementById('newOrderBtn');
const cappicinoBtn=document.getElementById('cappicinoBtn');

function startOrder () {
    orderBtn.classList.add('hidden');
    mainPanel.classList.add('hidden');
    orderPanel.classList.remove('hidden');
    sizePanel.classList.remove('hidden');
}

function cancelOrder () {
    cup.classList.add('hidden');
    cup.classList.remove('cup_fill--Large', 'cup_fill--Small' );
    orderBtn.classList.remove('hidden');
    mainPanel.classList.remove('hidden');
    orderPanel.classList.add('hidden');
    sizePanel.classList.add('hidden');
    sugarPanel.classList.add('hidden');
    prepPanel.classList.add('hidden');
    prepPanel.innerHTML = `
    <p class="panel_text">Preparing</p>
    <div class="levels">
        <div id="prep-1" class="sugar_pt sugar_pt--off"></div>
        <div id="prep-2" class="sugar_pt sugar_pt--off"></div>
        <div id="prep-3" class="sugar_pt sugar_pt--off"></div>
    </div>`;
    cancelBtn.classList.remove('hidden', 'cancel_btn--disabled');
    cancelBtn.classList.add('cancel_btn');
    cancelBtn.disabled = false;
    newOrderBtn.classList.add('hidden');
    newOrder.size = '';
    newOrder.sugar = 0;
    orderSize.innerHTML = `Size: `;
    orderSugar.innerHTML = `Sugar: `;
    document.getElementById(`lvl-1`).classList.add('sugar_pt--off');
    document.getElementById(`lvl-2`).classList.add('sugar_pt--off');
    document.getElementById(`lvl-3`).classList.add('sugar_pt--off');
    document.getElementById(`lvl-4`).classList.add('sugar_pt--off');
    document.getElementById(`lvl-5`).classList.add('sugar_pt--off');
}

const sizeBtns = document.querySelectorAll('.size_btn');
const orderSize = document.getElementById('orderSize');
sizeBtns.forEach(element => {
    element.addEventListener('click', (ev) => {
        newOrder.size = ev.target.value;
        orderSize.innerHTML = `Size: ${newOrder.size}`;
        sizePanel.classList.add('hidden');
        sugarPanel.classList.remove('hidden');
        orderSugar.innerHTML = `Sugar: ${newOrder.sugar}`;
    });
})

const sugarBtns = document.querySelectorAll('.sugar_btn');
const orderSugar = document.getElementById('orderSugar');
sugarBtns.forEach(element => {
    element.addEventListener('click', (ev) => {
        if (ev.target.value == 'increase' && newOrder.sugar < 5) {
            newOrder.sugar += 1;
            document.getElementById(`lvl-${newOrder.sugar}`).classList.remove('sugar_pt--off');
        }
        if (ev.target.value == 'decrease' && newOrder.sugar > 0) {
            newOrder.sugar -= 1;
            document.getElementById(`lvl-${newOrder.sugar+1}`).classList.add('sugar_pt--off');
        }

        orderSugar.innerHTML = `Sugar: ${newOrder.sugar}`;
        
    });
})

function startPrep() {
    cancelBtn.setAttribute('disabled', 'disabled');
    cancelBtn.classList.remove('cancel_btn');
    cancelBtn.classList.add('cancel_btn--disabled');
    sugarPanel.classList.add('hidden');
    prepPanel.classList.remove('hidden');
    setTimeout (()=> {
        document.getElementById('prep-1').classList.remove('sugar_pt--off');
    }, 1000)
    setTimeout (()=> {
        document.getElementById('prep-2').classList.remove('sugar_pt--off');
    }, 2000)
    setTimeout (()=> {
        document.getElementById('prep-3').classList.remove('sugar_pt--off');
    }, 3000)
    setTimeout (()=> {
        servingCoffee();
        prepPanel.innerHTML += `
        <p class="panel_text">Serving</p>
        <div class="levels">
          <div id="serv-1" class="sugar_pt sugar_pt--off"></div>
          <div id="serv-2" class="sugar_pt sugar_pt--off"></div>
          <div id="serv-3" class="sugar_pt sugar_pt--off"></div>
        </div>`
    }, 4000);
    setTimeout (()=> {
        document.getElementById('serv-1').classList.remove('sugar_pt--off');
    }, 6000)
    setTimeout (()=> {
        document.getElementById('serv-2').classList.remove('sugar_pt--off');
    }, 8000)
    setTimeout (()=> {
        document.getElementById('serv-3').classList.remove('sugar_pt--off');
    }, 10000)
    setTimeout (()=> {
        prepPanel.innerHTML = `
        <p class="panel_text">Your coffee is ready. ☕ </p>
        <p class="panel_text">Enjoy! </p>
        <p class="panel_text">Have a nice day </p>
        `
    }, 12000);
    setTimeout (()=> {
        cancelBtn.classList.add('hidden');
        newOrderBtn.classList.remove('hidden');
    }, 14000)

}

const cup = document.getElementById('cup');
const coffee = document.getElementById('coffee');

function servingCoffee () {
    cup.classList.remove('hidden');  
    setTimeout (()=> {
        coffee.classList.remove('hidden');
        let cupFillSize = `cup_fill--${newOrder.size}`;
        cup.classList.add(cupFillSize); 
    }, 2000)
    setTimeout (()=> {
        coffee.classList.add('hidden');
    }, 6000)

} 