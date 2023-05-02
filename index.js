
const menuItems = document.querySelectorAll('.menu-item')

//Messages
const messageNotification = document.querySelector('#message-notifications');
const messages= document.querySelector('.messages');

const message= document.querySelectorAll('.message');
const messageSearch= document.querySelector('#search-message');

//Theme

const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

//SIDEBAR

//remove active class from all menu items

const changeActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.remove("active");
    })
}

menuItems.forEach((item) => {
    item.addEventListener('click',() =>{
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display='none'
        }else{
            document.querySelector('.notification-popup').style.display='block'
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
});

//  messages

//search chat

 const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display='flex'
        }else{
            user.style.display='none';
        }
    })
 }

 messageSearch.addEventListener('keyup',searchMessage);

//highlight
messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000)
})

// Theme Customization 

//open modal
const openThemeModal=()=>{
    themeModel.style.display= 'grid';
}

//close modal

const closeThemeModal = (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display='none'
    }
}

//close modal
themeModel.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal);


// fonts

const removeSizeSelector = (size => {
    fontSize.forEach(size=>{
        size.classList.remove('active')
    })
})

fontSize.forEach(size =>{

    size.addEventListener('click' ,() =>{

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
        }
    
        // change the font size of the root html element
    
        document.querySelector('html').style.fontSize = fontSize;
    })
})