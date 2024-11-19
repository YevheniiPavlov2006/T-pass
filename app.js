const headerItem1 = document.querySelector(".item1")
const headerItem2 = document.querySelector(".item2")
const headerButton = document.querySelector(".header-button")

const headerItem1Content = headerItem1.textContent;
headerItem1.textContent = `Stores`

const headerItem2Content = headerItem2.textContent;
headerItem2.textContent = `Help & Support`

const headerButtonContent = headerButton.textContent;
headerButton.textContent = `Download`



const mainText = document.querySelector(".main-content-text")
const mainTextContent = mainText.innerHTML;
mainText.innerHTML = `
  <p>${mainTextContent}<p/> 

  <p class="main-content-text-title"><span class="main-content-text-blue">Order ahead </span><br/>
  and earn rewards for<br/>
  every purchase<p/>

  <button class="main-content-button">
    <p>Discover how<p/>
    <img class="main-content-button-arrow" src="img/main-content-button-arrow.svg" alt="">
  <button/>`;


  const advText1 = document.querySelector(".adv-t1")
  const advText2 = document.querySelector(".adv-t2")
  const advText3 = document.querySelector(".adv-t3")

  const advText1Content = advText1.innerHTML;
  advText1.innerHTML = `
    <p class="advantage-title">Order ahead, skip the line<p/>
    <p class="advantage-subtitle">Feel like a rock star when you bypass the line and save a bunch of time.<p/>
  `

  const advText2Content = advText2.innerHTML;
  advText2.innerHTML = `
    <p class="advantage-title">Bonus and discounts<p/>
    <p class="advantage-subtitle">You can enjoy lots of discounts from the selected stores, or accumulate points.<p/>
  `

  const advText3Content = advText3.innerHTML;
  advText3.innerHTML = `
    <p class="advantage-title">Share with your friends<p/>
    <p class="advantage-subtitle">Send gifts to your friends and family, and pick up for your coworkers when they can't get away .<p/>
  `


  const howWork = document.querySelector(".how-work-content")
  const howWorkContent = howWork.innerHTML;
  howWork.innerHTML = `
    <p class="block-uptitle">Your daily pick-me-up<p/>
    <p class="block-title">How does<br/> it work.<p/>
    <p class="block-text">Start choosing your favorite teas and snacks in your nearby stores and place your orders, accumulate points, share gifts and teas with your friends and co-workers, and finally use our T-Pass to get your free drinks.<p?>
  `

  const send = document.querySelector(".send-content")
  const sendContent = send.innerHTML;
  send.innerHTML = `
    <p class="block-uptitle">Please your friends<p/>
    <p class="block-title">Send gifts and <br/>order for groups.<p/>
    <p class="block-text">Send Gifts with a value for your friends and family and use it on their favorite stores. Be the rock star make Group Orders and pick up for your coworkers when they can't get away.<p?>
  `


  const infoItem1 = document.querySelector(".info-content-item1")
  const infoItemContent1 = infoItem1.innerHTML;
  infoItem1.innerHTML = `
    <img src="img/info-img1.svg" alt="">
       <div class="info-content-item-text">
            <p class="info-content-item-title">Loyalty Points</p>
            <p class="info-content-item-subtitle">Collect points on each store and redeem them to change for Teas.</p>
       </div>
  `

  const infoItem2 = document.querySelector(".info-content-item2")
  const infoItemContent2 = infoItem2.innerHTML;
  infoItem2.innerHTML = `
    <img src="img/info-img2.svg" alt="">
       <div class="info-content-item-text">
            <p class="info-content-item-title">Exclusive Store Discounts</p>
            <p class="info-content-item-subtitle">You can enjoy lots of discounts from the selected stores near you.</p>
       </div>
  `

  const infoItem3 = document.querySelector(".info-content-item3")
  const infoItemContent3 = infoItem3.innerHTML;
  infoItem3.innerHTML = `
    <img src="img/info-img3.svg" alt="">
       <div class="info-content-item-text">
            <p class="info-content-item-title">T.Pass Free Drinks</p>
            <p class="info-content-item-subtitle">2 Teas for $5.99 each month. and you can carry them over to the next month.</p>
       </div>
  `


  