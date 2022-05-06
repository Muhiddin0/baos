
const scrollWindow = () => {

    let w_Hg = window.innerHeight
    let scroll_Y = window.scrollY
    let cards = document.querySelectorAll('.baos-card')

    // test endi point for user
    if(cards) {
        for (let i = 0; i < cards.length; i++) {
    
            let elAttr = cards[i].attributes

            // ===> content true or false<===
            if (cards[i].offsetTop + cards[i].clientHeight < w_Hg + scroll_Y) {
                if (elAttr.getNamedItem('baos-data').value[0] === '.') {
                    let attrVL = elAttr.getNamedItem('baos-data').value
                    attrVL = attrVL.split('.')
                    cards[i].classList.add(attrVL[1])
                }else {
                    let delay = elAttr.getNamedItem('baos-anm-delay')
                    delay = delay ? delay.value : '0s';

                    cards[i].style = `
                        transition: 0.7s;
                        transition-delay: ${delay};
                        opacity: 1;
                        animation: ${elAttr.getNamedItem('baos-data').value} 1s 1 cubic-bezier(.175,.885,.32,1.275)  ${delay};
                    `
                }
            } else {
                if (elAttr.getNamedItem('baos-data').value[0] === '.') {
                    let attrVL = elAttr.getNamedItem('baos-data').value
                    attrVL = attrVL.split('.')
                    cards[i].classList.remove(attrVL[1])
                } else {
                    cards[i].style = `
                        opacity: 0;
                        transition: 0.7s;
                    `
                }
            }
        }
    } else{
    console.warn(
        `Baos message)
            scrol uchun qobiq elemet topilmadi yoki
            animatsion cardlar aniqlanmadi
    `)
    }
}

const scrollDom = (domClass) => {

    let doc = document.querySelector(domClass)
    let w_Hg = doc.clientHeight
    let scroll_Y = doc.scrollTop
    let cards = doc.querySelectorAll('.baos-card')
   
    if(doc || cards) {
        for (let i = 0; i < cards.length; i++) {
    
            let elAttr = cards[i].attributes

            // ===> content true or false<===
            if (cards[i].offsetTop + cards[i].clientHeight < w_Hg + scroll_Y) {

                if (elAttr.getNamedItem('baos-data').value[0] === '.') {
                    let attrVL = elAttr.getNamedItem('baos-data').value
                    attrVL = attrVL.split('.')
                    cards[i].classList.add(attrVL[1])
                }else {
                    let delay = elAttr.getNamedItem('baos-anm-delay')
                    delay = delay ? delay.value : '0s';

                    cards[i].style = `
                        transition: 0.7s;
                        transition-delay: ${delay};
                        opacity: 1;
                        animation: ${elAttr.getNamedItem('baos-data').value} 1s 1 cubic-bezier(.175,.885,.32,1.275)  ${delay};
                    `
                }
            } else {
                if (elAttr.getNamedItem('baos-data').value[0] === '.') {
                    let attrVL = elAttr.getNamedItem('baos-data').value
                    attrVL = attrVL.split('.')
                    cards[i].classList.remove(attrVL[1])
                } else {
                    cards[i].style = `
                        opacity: 0;
                        transition: 0.7s;
                    `
                }
            }
        }
    } else{
    console.warn(`Baos Message ⚠
    siz bergan argumentdan hech narsa topilmadi yoki cardlar aniqlanmadi
    qo'llanmani shu yerdan olasiz  => https://salom.tm
    video yordam oling => https://watch
    `);
    }
}

// ==> main dispatcher <====
const init = (domClass) => {
    if (domClass) {
        
        // ===> window  <===
        if (typeof domClass === "object") {
            scrollWindow()                
            window.onscroll = () => {
                scrollWindow()               
            }
        }
        else {
            let doc = document.querySelector(domClass)
            if (doc != null) {
                scrollDom(domClass)

                doc.style = 'overflow-x: hidden; position: relative;'
                
                console.warn(`Baos Message ⚠
                dom elementlarni conatainer qilsangiz dom
                contentlar anmimatsi olishi uchun
                dom containerga scroll hossasini qo'shish
                kerak
                qo'llanmani shu yerdan olasiz  => https://salom.tm
                video yordam oling => https://watch
                `);

                doc.onscroll = () => {
                    scrollDom(domClass)
                }
                
            } else {
                console.warn(
                `Baos Message ❌
                siz init() functsiyasiga not'g'ri argument berdinigiz
                qo'llanmani shu yerdan olasiz  => https://salom.tm
                video yordam oling => https://watch
                `);
            }
        }
    }else {
    console.warn(
    `Baos Message ❌
    siz init() functsiyasiga argumet bermadinigiz
    qo'llanmani shu yerdan olasiz  => https://salom.tm
    video yordam oling => https://watch
    `);
    }
}