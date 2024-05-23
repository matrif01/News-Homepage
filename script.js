function openNav(){
    const sideNav= document.querySelector('.sideNav')
    sideNav.classList.add('w-[250px]')
    sideNav.classList.remove('hidden')
}

function closeNav(){
    const sideNav= document.querySelector('.sideNav')
    sideNav.classList.remove('w-[250px]')
    sideNav.classList.add('hidden')
}