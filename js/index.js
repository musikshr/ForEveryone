const events = document.querySelector('.events');

const elements = {
    item1: {
        img: 'https://s3-alpha-sig.figma.com/img/bc92/128a/2ea4927f9ac4f6782ec5faa861812137?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AaovCsnDt50vkOviXOc08Yk2u1ZSI~hr5Je5NwFxxJfe-MpkJVfaczPQwGYRyxfqpp7ar9NlXM7gxNyRWSbdXUVsGS8uuLoy93pHHal9GeygtvX5OxbGds0OsOIeDKmtIWsrM~ebqcmAypB0bn765VCrS7fNvPpKqtlfrl-vSsxKBrmLZeCUmw-E0iDKXyVByyrgqU9sGbjB3vCofm7ztY5-k9p5sPT9wNzVSOV9LgJJpjIga8ZZAyQUZohCyN0DN1H3Zz30fcVQC02fK6XNyCUpvGn8t5QvU4Six1Y7vWd4PyHdYWTB2005aAcrGuTB~0ZdSUr5RgaXpW1ENGfbDg__',
        name: 'Тур в Гуниб',
        number__data: '25',
        month__data: 'Апреля',
        year__data: '2025',
        time__start: '19:30',
        time__end: '21:15',
        text: 'Что общего в йоге, беге и горных походах? Поговорим про топ ошибок: почему люди сходятс дистанции, травмируются и выгорают. Встреча пройдёт в формате лекции, дискуссии и общей практики'
    },
    item2: {
        img: 'https://s3-alpha-sig.figma.com/img/bc92/128a/2ea4927f9ac4f6782ec5faa861812137?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AaovCsnDt50vkOviXOc08Yk2u1ZSI~hr5Je5NwFxxJfe-MpkJVfaczPQwGYRyxfqpp7ar9NlXM7gxNyRWSbdXUVsGS8uuLoy93pHHal9GeygtvX5OxbGds0OsOIeDKmtIWsrM~ebqcmAypB0bn765VCrS7fNvPpKqtlfrl-vSsxKBrmLZeCUmw-E0iDKXyVByyrgqU9sGbjB3vCofm7ztY5-k9p5sPT9wNzVSOV9LgJJpjIga8ZZAyQUZohCyN0DN1H3Zz30fcVQC02fK6XNyCUpvGn8t5QvU4Six1Y7vWd4PyHdYWTB2005aAcrGuTB~0ZdSUr5RgaXpW1ENGfbDg__',
        name: 'Тур в Гуниб',
        number__data: '25',
        month__data: 'Апреля',
        year__data: '2025',
        time__start: '19:30',
        time__end: '21:15',
        text: 'Что общего в йоге, беге и горных походах? Поговорим про топ ошибок: почему люди сходятс дистанции, травмируются и выгорают. Встреча пройдёт в формате лекции, дискуссии и общей практики'
    },
    item3: {
        img: 'https://s3-alpha-sig.figma.com/img/bc92/128a/2ea4927f9ac4f6782ec5faa861812137?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AaovCsnDt50vkOviXOc08Yk2u1ZSI~hr5Je5NwFxxJfe-MpkJVfaczPQwGYRyxfqpp7ar9NlXM7gxNyRWSbdXUVsGS8uuLoy93pHHal9GeygtvX5OxbGds0OsOIeDKmtIWsrM~ebqcmAypB0bn765VCrS7fNvPpKqtlfrl-vSsxKBrmLZeCUmw-E0iDKXyVByyrgqU9sGbjB3vCofm7ztY5-k9p5sPT9wNzVSOV9LgJJpjIga8ZZAyQUZohCyN0DN1H3Zz30fcVQC02fK6XNyCUpvGn8t5QvU4Six1Y7vWd4PyHdYWTB2005aAcrGuTB~0ZdSUr5RgaXpW1ENGfbDg__',
        name: 'Тур в Гуниб',
        number__data: '25',
        month__data: 'Апреля',
        year__data: '2025',
        time__start: '19:30',
        time__end: '21:15',
        text: 'Что общего в йоге, беге и горных походах? Поговорим про топ ошибок: почему люди сходятс дистанции, травмируются и выгорают. Встреча пройдёт в формате лекции, дискуссии и общей практики'
    },
    item4: {
        img: 'https://s3-alpha-sig.figma.com/img/bc92/128a/2ea4927f9ac4f6782ec5faa861812137?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AaovCsnDt50vkOviXOc08Yk2u1ZSI~hr5Je5NwFxxJfe-MpkJVfaczPQwGYRyxfqpp7ar9NlXM7gxNyRWSbdXUVsGS8uuLoy93pHHal9GeygtvX5OxbGds0OsOIeDKmtIWsrM~ebqcmAypB0bn765VCrS7fNvPpKqtlfrl-vSsxKBrmLZeCUmw-E0iDKXyVByyrgqU9sGbjB3vCofm7ztY5-k9p5sPT9wNzVSOV9LgJJpjIga8ZZAyQUZohCyN0DN1H3Zz30fcVQC02fK6XNyCUpvGn8t5QvU4Six1Y7vWd4PyHdYWTB2005aAcrGuTB~0ZdSUr5RgaXpW1ENGfbDg__',
        name: 'Тур в Гуниб',
        number__data: '25',
        month__data: 'Апреля',
        year__data: '2025',
        time__start: '19:30',
        time__end: '21:15',
        text: 'Что общего в йоге, беге и горных походах? Поговорим про топ ошибок: почему люди сходятс дистанции, травмируются и выгорают. Встреча пройдёт в формате лекции, дискуссии и общей практики'
    },
    item5: {
        img: 'https://s3-alpha-sig.figma.com/img/bc92/128a/2ea4927f9ac4f6782ec5faa861812137?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AaovCsnDt50vkOviXOc08Yk2u1ZSI~hr5Je5NwFxxJfe-MpkJVfaczPQwGYRyxfqpp7ar9NlXM7gxNyRWSbdXUVsGS8uuLoy93pHHal9GeygtvX5OxbGds0OsOIeDKmtIWsrM~ebqcmAypB0bn765VCrS7fNvPpKqtlfrl-vSsxKBrmLZeCUmw-E0iDKXyVByyrgqU9sGbjB3vCofm7ztY5-k9p5sPT9wNzVSOV9LgJJpjIga8ZZAyQUZohCyN0DN1H3Zz30fcVQC02fK6XNyCUpvGn8t5QvU4Six1Y7vWd4PyHdYWTB2005aAcrGuTB~0ZdSUr5RgaXpW1ENGfbDg__',
        name: 'Тур в Гуниб',
        number__data: '25',
        month__data: 'Апреля',
        year__data: '2025',
        time__start: '19:30',
        time__end: '21:15',
        text: 'Что общего в йоге, беге и горных походах? Поговорим про топ ошибок: почему люди сходятс дистанции, травмируются и выгорают. Встреча пройдёт в формате лекции, дискуссии и общей практики'
    },
    item6: {
        img: 'https://s3-alpha-sig.figma.com/img/bc92/128a/2ea4927f9ac4f6782ec5faa861812137?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AaovCsnDt50vkOviXOc08Yk2u1ZSI~hr5Je5NwFxxJfe-MpkJVfaczPQwGYRyxfqpp7ar9NlXM7gxNyRWSbdXUVsGS8uuLoy93pHHal9GeygtvX5OxbGds0OsOIeDKmtIWsrM~ebqcmAypB0bn765VCrS7fNvPpKqtlfrl-vSsxKBrmLZeCUmw-E0iDKXyVByyrgqU9sGbjB3vCofm7ztY5-k9p5sPT9wNzVSOV9LgJJpjIga8ZZAyQUZohCyN0DN1H3Zz30fcVQC02fK6XNyCUpvGn8t5QvU4Six1Y7vWd4PyHdYWTB2005aAcrGuTB~0ZdSUr5RgaXpW1ENGfbDg__',
        name: 'Тур в Гуниб',
        number__data: '25',
        month__data: 'Апреля',
        year__data: '2025',
        time__start: '19:30',
        time__end: '21:15',
        text: 'Что общего в йоге, беге и горных походах? Поговорим про топ ошибок: почему люди сходятс дистанции, травмируются и выгорают. Встреча пройдёт в формате лекции, дискуссии и общей практики'
    },
    item7: {
        img: 'https://s3-alpha-sig.figma.com/img/bc92/128a/2ea4927f9ac4f6782ec5faa861812137?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AaovCsnDt50vkOviXOc08Yk2u1ZSI~hr5Je5NwFxxJfe-MpkJVfaczPQwGYRyxfqpp7ar9NlXM7gxNyRWSbdXUVsGS8uuLoy93pHHal9GeygtvX5OxbGds0OsOIeDKmtIWsrM~ebqcmAypB0bn765VCrS7fNvPpKqtlfrl-vSsxKBrmLZeCUmw-E0iDKXyVByyrgqU9sGbjB3vCofm7ztY5-k9p5sPT9wNzVSOV9LgJJpjIga8ZZAyQUZohCyN0DN1H3Zz30fcVQC02fK6XNyCUpvGn8t5QvU4Six1Y7vWd4PyHdYWTB2005aAcrGuTB~0ZdSUr5RgaXpW1ENGfbDg__',
        name: 'Тур в Гуниб',
        number__data: '25',
        month__data: 'Апреля',
        year__data: '2025',
        time__start: '19:30',
        time__end: '21:15',
        text: 'Что общего в йоге, беге и горных походах? Поговорим про топ ошибок: почему люди сходятс дистанции, травмируются и выгорают. Встреча пройдёт в формате лекции, дискуссии и общей практики'
    },
}

for (var key in elements) {
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
                            <div class="name__of__event">
                                <a href="#">
                                    <p>${key.name}</p>
                                </a>
                            </div>
                            <div class="text">
                                <p>${key.text}</p>
                            </div>
                            <div class="time__and__data">
                                <div class="time">
                                    <div class="svg__clock">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 18.5C12.1217 18.5 14.1566 17.6571 15.6569 16.1569C17.1571 14.6566 18 12.6217 18 10.5C18 8.37827 17.1571 6.34344 15.6569 4.84315C14.1566 3.34285 12.1217 2.5 10 2.5C7.87827 2.5 5.84344 3.34285 4.34315 4.84315C2.84285 6.34344 2 8.37827 2 10.5C2 12.6217 2.84285 14.6566 4.34315 16.1569C5.84344 17.6571 7.87827 18.5 10 18.5ZM10 0.5C11.3132 0.5 12.6136 0.758658 13.8268 1.2612C15.0401 1.76375 16.1425 2.50035 17.0711 3.42893C17.9997 4.35752 18.7362 5.45991 19.2388 6.67317C19.7413 7.88642 20 9.18678 20 10.5C20 13.1522 18.9464 15.6957 17.0711 17.5711C15.1957 19.4464 12.6522 20.5 10 20.5C4.47 20.5 0 16 0 10.5C0 7.84784 1.05357 5.3043 2.92893 3.42893C4.8043 1.55357 7.34784 0.5 10 0.5ZM10.5 5.5V10.75L15 13.42L14.25 14.65L9 11.5V5.5H10.5Z" fill="black" fill-opacity="0.5"/>
                                        </svg>
                                    </div>
                                    <span class="time__start time__time">${key.time__start}</span>
                                    <span class="time__end time__time">${key.time__end}</span>
                                </div>
                                <div class="data">
                                    <div class="svg__calendar">
                                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 11.5H14V16.5H9V11.5ZM16 2.5H15V0.5H13V2.5H5V0.5H3V2.5H2C0.9 2.5 0 3.4 0 4.5V18.5C0 19.6 0.9 20.5 2 20.5H16C17.1 20.5 18 19.6 18 18.5V4.5C18 3.4 17.1 2.5 16 2.5ZM16 4.5V6.5H2V4.5H16ZM2 18.5V8.5H16V18.5H2Z" fill="black" fill-opacity="0.5"/>
                                        </svg>
                                    </div>
                                    <div class="data__data">
                                        <span class="number__data">${key.number__data}</span>
                                    <span class="month__data">${key.month__data}</span>
                                    <span class="year__data">${key.year__data}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href = "#" class="link__arrow">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z" fill="#777777"/>
                        </svg>
                    </a>`;
    events.append(div);
}

const mainBtn = document.querySelector('.main__btn');

document.addEventListener('scroll', () => {
    if (scrollY >= 200) {
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
    if (scrollDistance >= headerHeight) {
        searchHeader.classList.add('header--fixed');
        header.style.marginTop = `${searchHeaderHeight}px`;
    } else {
        searchHeader.classList.remove('header--fixed');
        header.style.marginTop = null;
    }
})