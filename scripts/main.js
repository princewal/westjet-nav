window.addEventListener('DOMContentLoaded', ()=> {
    window.navigationApp = {
        cityTime :{},
        navigation: []
    }
    fetch("./data/navigation.json")
        .then(response => response.json())
        .then(data => {
            
            document.querySelector('.menu-list').innerHTML = data.cities.map(item => `<li class="menu-list-item" data-city-section="${item.section}">${item.label}</li>`).join('');
            setupMenu()   
         })
        .catch(error => { 
            setupMenu()
            console.error('Error loading JSON:', error)
        });


})

function setupMenu() {
    const menu = document.querySelector('.menu-list')

    menu.addEventListener('click', (e)=>{
        menu.querySelector('.active')?.classList.remove('active')
        if(e.target.classList.contains("menu-list-item")) {
            e.target.classList.add('active')
            menu.style.setProperty("--indicator-bar-offset-x", `${e.target.offsetLeft}px`)
            menu.style.setProperty("--indicator-bar-width", `${e.target.offsetWidth}px`)
        }
    })
}