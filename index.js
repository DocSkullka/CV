const langArr = {
    'home': {
        'eng': 'Home',
        'ru': 'Домашняя страница'
    },
    'about': {
        'eng': 'About me',
        'ru': 'Обо мне'
    },
    'skills': {
        'eng': 'Skills',
        'ru': 'Навыки'
    },
    'contacts': {
        'eng': 'Contacts',
        'ru': 'Контакты'
    },
    'name': {
        'eng': 'Artem Buyak',
        'ru': 'Артём Буяк'
    },
    'front': {
        'eng': 'Front-End Developer',
        'ru': 'Фронтенд Разработчик'
    },
    'frontSecond': {
        'eng': '22 years old, Minsk',
        'ru': '22 года, Минск'
    },
    'aboutMeOne': {
        'eng': "I'm Artem – Front-End Developer from Minsk.",
        'ru': "Я Артём - Фронтенд разработчки из Минска."
    },
    'aboutMeTwo': {
        'eng': "I'm interested in Front-End development and everything connected with it.",
        'ru': "Я интересуюсь Фронтенд разработкой и всем, что с ней связано."
    },
    'aboutMeThree': {
        'eng': "I'm studying at courses 'Front-End developer' in RS School.",
        'ru': "Я учусь на курсах 'Фронтенд разработчик' в RS School. "
    },
    'aboutMeFour': {
        'eng': "Ready to implement excellent projects with wonderful people. ",
        'ru': "Готов реализовать отличные проекты с замечательными людьми."
    },
    'aboutMeFive': {
        'eng': "Education:",
        'ru': "Образование:"
    },
    'aboutMeSix': {
        'eng': "BNTU(in progress, extramural studies, start in 2021)",
        'ru': "БНТУ(в процессе, заочное обучение, начал в 2021)"
    },
    'aboutMeSeven': {
        'eng': "MSPC(2017-2020)",
        'ru': "МГПК(2017-2020)"
    },
    'skillsText': {
        'eng': 'I work in such programs as:',
        'ru': 'Работаю в таких программах как:'
    },
    'certificateText': {
        'eng': 'Certificate',
        'ru': 'Сертификат'
    },
    'portfolioText': {
        'eng': 'Portfolio',
        'ru': 'Портфолио'
    },
    'contactText': {
        'eng': 'Want to know more or just chat? \n You are welcome!',
        'ru': 'Хотите узнать больше или просто поболтать? \n Пожалуйста!'
    },
    'message': {
        'eng': 'Send message',
        'ru': 'Отправить сообщение'
    },
    'subscribe': {
        'eng': ' Follow me on \n LinkedIn, GitHub, Telegram',
        'ru': 'Подпишитесь на меня в \n LinkedIn, GitHub, Telegram'
    },
}

// Multi lang
const allLang = ['eng', 'ru']

document.querySelector('.ru').addEventListener('click', function () {
    document.querySelector('.eng').classList.remove('active')
    document.querySelector('.ru').classList.add('active')
    location.href = window.location.pathname + '#ru'
    location.reload()
})


document.querySelector('.eng').addEventListener('click', function () {
    document.querySelector('.ru').classList.remove('active')
    document.querySelector('.eng').classList.add('active')
    location.href = window.location.pathname + '#eng'
    location.reload()
})


let hash = window.location.hash
hash = hash.substr(1)
if(!allLang.includes(hash)){
   location.href = window.location.pathname + '#eng'
   location.reload()
}

if (hash === 'ru') {
    document.querySelector('.eng').classList.remove('active')
    document.querySelector('.ru').classList.add('active')
}


function changeLanguage() {
    document.querySelector('.home').innerHTML = langArr['home'][hash]
    document.querySelector('.about').innerHTML = langArr['about'][hash]
    document.querySelector('.aboutSecond').innerHTML = langArr['about'][hash]
    document.querySelector('.skills').innerHTML = langArr['skills'][hash]
    document.querySelector('.skillsSecond').innerHTML = langArr['skills'][hash]
    document.querySelector('.contacts').innerHTML = langArr['contacts'][hash]
    document.querySelector('.portfolioText').innerHTML = langArr['portfolioText'][hash]
    document.querySelector('.contactText').innerHTML = langArr['contactText'][hash]
    document.querySelector('.contactsSecond').innerHTML = langArr['contacts'][hash]
    document.querySelector('.portfolioTextSecond').innerHTML = langArr['portfolioText'][hash]
    document.querySelector('.name').innerHTML = langArr['name'][hash]
    document.querySelector('.front').innerHTML = langArr['front'][hash]
    document.querySelector('.frontSecond').innerHTML = langArr['frontSecond'][hash]
    document.querySelector('.aboutMeOne').innerHTML = langArr['aboutMeOne'][hash]
    document.querySelector('.aboutMeTwo').innerHTML = langArr['aboutMeTwo'][hash]
    document.querySelector('.aboutMeThree').innerHTML = langArr['aboutMeThree'][hash]
    document.querySelector('.aboutMeFour').innerHTML = langArr['aboutMeFour'][hash]
    document.querySelector('.aboutMeFive').innerHTML = langArr['aboutMeFive'][hash]
    document.querySelector('.aboutMeSix').innerHTML = langArr['aboutMeSix'][hash]
    document.querySelector('.aboutMeSeven').innerHTML = langArr['aboutMeSeven'][hash]
    document.querySelector('.skillsText').innerHTML = langArr['skillsText'][hash]
    document.querySelector('.certificateText').innerHTML = langArr['certificateText'][hash]
    document.querySelector('.subscribe').innerHTML = langArr['subscribe'][hash]
    document.querySelector('.message').innerHTML = langArr['message'][hash]
}

changeLanguage()


// POP Up

document.querySelector('.burgerImg').addEventListener('click', function(){
    document.querySelector('.popUpHeader').style.display = 'flex'
    document.querySelector('.popUpHeader').style.top = '0'
    document.querySelector('.popUpHeader').style.bottom = '0'
    document.querySelector('.popUpHeader').style.left = '0'
    document.querySelector('.popUpHeader').style.right = '0'
    document.querySelector('.popUpHeader').style.margin = 'auto'
    document.querySelector('.popUpHeader').style.position = 'fixed'
})


document.addEventListener('click', function(el){
    if(el.target.id != 'popUp' && el.target.id != 'header__nav' && el.target.id != 'burgerImg'){
        document.querySelector('.popUpHeader').style.display = 'none'
    }
})

