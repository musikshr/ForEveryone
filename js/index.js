const events = document.querySelector('.events');

const elements = {
    item1: {
        img: 'https://s3-alpha-sig.figma.com/img/7525/a9fe/547e3078621771f8f2e9c5ddbee2f6e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fqX-1lTb5SbKFAbDUhh7sHCLZUgf0jpp-mKYrWaHB4P3SzuA5HeQp0eDZ2A1U2Kf8OHkQMDegtz3jhj6ecxnzhrKjQ3uuf~sf5qoX5Udm4Z36E9rseJLr3hWuJ30O7ARWM-nO1rOLN1iyXdh8oeaSxjem3V4eAAo9sVKrAYPxE38B3d9OTxowElImrv3aV~bw6Zc2j7aWdl8PXXVg--cEmDCzXoZ6zdP1lM2TFGVihc44IovfPjgrZhfqgIaCNOs1Us26lhlnK9JhJojPwaQumzvE9yg3yu7C3cAhLEof7qtEW4iFN~Mo~IO1YZseX-x1pV-DtKYRrZ4nN2GuoAoSw__',
        name: 'Мототур в Гуниб',
        number__data: '1',
        month__data: 'Мая',
        year__data: '2025',
        gids: 'Заур Мужаидов',
        gids2: 'Рауф Магомедов',
        text: 'Приглашаем Вас окунуться в атмосферу свободы, эндуро, горных пейзажей и гастрономии!'
    },
    item2: {
        img: 'https://s3-alpha-sig.figma.com/img/fe61/7eff/25bcd6a3e1fd3de7af9a6918e16446ae?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e4zVmVC-h1iKB8ZOrycYMTqh~eP7SqZhAzihGIN2Pr2iDb4aKBXFkgI6-jVW1lXsIvIz5EvtRtdi~ug2h91Z9bdy0DkUbAgre9UVsTxtRMTMIhidflouGv44a6EggzsBrsHGYteXIGY44uN-S8OCnhahJQYgTBCg8KPoptO3dTyGGq3BO59RJ8RUAXZYad~2kytirvHYWov0qOwazHViCUdftgFjUTkdxMEgMwpTbQPFZ~KrSGTemxfLUDGMInPJRc1qKvbho73lGqA8GWLPcE8aTNK0gFybcQ4byvg526bXhMVaeDx-STGkADKtVNnm-UxNZBOwL2BwJghe1f6bBg__',
        name: 'Детский тур в Тарки',
        number__data: '20',
        month__data: 'Апреля',
        year__data: '2025',
        gids: 'Заур Мужаидов',
        gids2: '',
        text: ''
    },
    item3: {
        img: 'https://s3-alpha-sig.figma.com/img/2adb/4d6e/d3a4dc4948f221cba9bd099f5052bacb?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hEoDmneuvnxqDHqqb3yVaKlMld0Qsqx3rNjI0NZ9AIY5k7SXOvwXcBJRY0QUXD2ya6sRF-35bkVVgk-TTy7GbNElq-a6oT1RKpZJCBAeqJSdTtHAuX7f1tE-pxev2yddm41vbfTIFrHGlWPQJHkJTAdaKSqRNYTI9A3rvCWxgqvnRCS2ZFy~DByvKLpV5R3xElxmDAWpk~VklLmN7roneVQLfMPztTy4p7YXzatHMZVomOLK8YsUNMR9OewnQlVIve-A8Epc48Dylepj6kGvjfwmo1351mjyFPovhNY2e2oh-m2X8c0anlDdFcBzBPvzUuZv6kwe8kohQsH09PlSRQ__',
        name: 'Трехдневный тур по Юждагу',
        number__data: '11',
        month__data: 'Апреля',
        year__data: '2025',
        gids: 'Leki Travel',
        gids2: '',
        text: ''
    },
    item4: {
        img: 'https://s3-alpha-sig.figma.com/img/1a13/d3ce/6b75b849a056bf8dfe93e92b009e9414?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HxBd5SSHUzwCHfHE5wxL4dx~5W082EMMTby-6weahlF~26XxKjDbEv43GwAzN6d3voXhdEgTUAsX19o2PMg9TgllQEispitatgCzvv53fShNhN-RFzuZ3F6EuSXh9-MPG9DhvgQBQ8A568fJaYec80xqFpfJ2Rbndl0f0mFDMFp0Hc6B3p1hzAzCGgY0lVUpEuoMToWR7pBoxqZQBzCaCMCbaUL2Pki6BgiFoysgnTe5SfB9QoK2U4lBAJqOInQpdedmIgqnieby4wAvVxkJ5-Li~NXm7NAkDewmbwy8FNOp4zf0YSvsQLGC5FPkmWw1wHVtIc~Xbfq5q9-3srsyYQ__',
        name: 'Фестиваль ледолазания "Матлас 2025"',
        number__data: '20',
        month__data: 'Февраля',
        year__data: '2025',
        gids: '',
        gids2: '',
        text: 'Фестиваль ледолазания "Матлас 2025"'
    },
    item5: {
        img: 'https://s3-alpha-sig.figma.com/img/215c/a39b/4165bdf87d5b05cdbac6fbd6380ea761?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pp69sfcfKJXkeK4FXsBGRR0jBZFFGE3T5AM~~ebqzOkhG-YYI5y8LGytJefMayyOCxnYnGDt0XAZ3mlNqBYc6lCKrmYcws3L0Ar9DnlBV~IqvyYlvL5nl9y4zpst5yw4DUYzUKgmVcmHt7xR5RNQTx83VFCtLZG-AUQhIwoQVRb9DDbEOdrJ8aVChYJwQdYSVuKjRMlkB4medXJz9oCz9--IbjpTXiGny0vGDtehp0WgK7pC3yH9qk0mmirBM6AewdoXNuAwh49~lH~72HC6FEeojcTg4J8VlYzheY2uthLl4TX~Ry5XWmpFqTXa1KkaJ6E~G-3hECd9gHytj5p70g__',
        name: 'Трекинг к базовому лагерю Эвереста: сколько стоит, когда лучше идти',
        number__data: '2',
        month__data: 'Февраля',
        year__data: '2025',
        gids: '',
        gids2: '',
        text: ''
    }
}

for ( var key in elements){
    key = elements[key];
    const div = document.createElement('div');
    div.classList.add('event');
    div.innerHTML = `
                    <div class="image__and__info">
                        <div class="cont__image">
                            <a href='#'>
                                <img src="${key.img}"
                                alt="">
                            </a>
                        </div>
                        <div class="cont__info">
                            <div class="data">
                                <span class="number__data">${key.number__data}</span>
                                <span class="month__data">${key.month__data}</span>
                                <span class="year__data">${key.year__data}</span>
                            </div>
                            <div class="name__of__event">
                                <a href="#">
                                    <p>${key.name}</p>
                                </a>
                            </div>
                            <div class="text">
                                <p>${key.text}
                                </p>
                            </div>
                            <div class="gids">
                                <span>Гиды:</span>
                                <span class="name__of__gid"><a href="#">${key.gids}</a></span>
                                
                                <span class="name__of__gid"><a href="#">${key.gids2}</a></span>
                            </div>
                        </div>
                    </div>
                    <a href = "#" class="link__arrow">
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id='arrow' fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.6301 6.01001L8.61011 10.026C8.42274 10.2123 8.16934 10.3168 7.90515 10.3168C7.64097 10.3168 7.38756 10.2123 7.2002 10.026C7.10792 9.93427 7.03459 9.82521 6.98462 9.70508C6.93465 9.58494 6.90894 9.4561 6.90894 9.32599C6.90894 9.19588 6.93465 9.06703 6.98462 8.9469C7.03459 8.82677 7.10792 8.7177 7.2002 8.62598L9.52014 6.315H1.91016C1.64494 6.315 1.39054 6.20963 1.203 6.02209C1.01547 5.83456 0.910156 5.58022 0.910156 5.315C0.910156 5.04979 1.01547 4.79545 1.203 4.60791C1.39054 4.42037 1.64494 4.315 1.91016 4.315H9.52014L7.2002 1.99799C7.10816 1.90612 7.03505 1.79699 6.98523 1.67688C6.93541 1.55677 6.90979 1.42801 6.90979 1.29797C6.90979 1.16794 6.93541 1.03918 6.98523 0.919067C7.03505 0.798953 7.10816 0.689884 7.2002 0.598022C7.38756 0.411772 7.64097 0.30719 7.90515 0.30719C8.16934 0.30719 8.42274 0.411772 8.61011 0.598022L12.6301 4.61499C12.815 4.80006 12.9188 5.05093 12.9188 5.3125C12.9188 5.57407 12.815 5.82494 12.6301 6.01001Z"
                                fill="#999999" />
                        </svg>
                    </a>`;
    events.append(div);
}

const mainBtn = document.querySelector('.main__btn');

document.addEventListener('scroll', () => {
    if(scrollY >= 200){
        mainBtn.classList.remove('hidden');
    } else {
        mainBtn.classList.add('hidden');
    }
})

mainBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
 
const searchHeader = document.querySelector('.header__middle');
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const searchHeaderHeight = searchHeader.offsetHeight;

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= headerHeight ){
        searchHeader.classList.add('header--fixed');
        header.style.marginTop = `${searchHeaderHeight}px`;
    } else {
        searchHeader.classList.remove('header--fixed');
        header.style.marginTop = null;
    }
})