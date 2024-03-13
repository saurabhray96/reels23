let imgCake = document.getElementById("imgCake");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let cursorBtn = document.getElementById("cursorBtn");
let bgColor = document.getElementById("body");
let flvName = document.getElementById("flavorName");
let flvText = document.querySelector("#flvName");
let c = 1;
let mt = "-70px", ml = "-500px", CakeImg = "url(img/orangeCake.png)", rt = 0, imgl = "url(img/lemonLeft.png)", imgr = "url(img/lemonR.png)", bgc = "linear-gradient(to right,red,orange)";
function btn(n) {
    if (n === 1) c++;
    else
        c--;
    if (c < 1) c = 5;
    else if (c > 5) c = 1;


    bgColor.style.transition = "2s";
    switch (c) {
        case 1:
            {
                flvName.innerHTML = "Orange Cake";
                bgc = "linear-gradient(to right,red,orange) "
                imgl = "url(img/orangebite-.png)";
                imgr = "url(img/oranger.png)";
                rt = 60 + "deg";
                mt = "-70px", ml = "-500px";
                CakeImg = "url(img/orangeCake.png)";
            }
            break;
        case 2:
            {
                flvName.innerHTML = "PineApple Cake"
                flvText.innerHTML = "Indulge in a delightful blend of sweet and tangy flavors with our pineapple cake. Moist sponge layered with juicy pineapple pieces offers a tropical treat for your taste buds.";
                bgc = " linear-gradient(to right,yellow,green)"
                imgl = "url(img/pineRight.png)";
                imgr = "url(img/pinl.png)";
                rt = 120 + "deg";
                CakeImg = "url(img/pineCake.png)";
                mt = "-270px", ml = "-385px";
            }
            break;
        case 3:
            {
                flvName.innerHTML = "Lemon Cake"
                flvText.innerHTML = "Delight in the zesty flavor of our lemon cake, a citrusy indulgence that refreshes your taste buds with every bite. Perfectly moist and tangy, it's a burst of sunshine in every slice.";
                bgc = "linear-gradient(to right,#ffff31,#f4ca16) "
                imgl = "url(img/lemonLeft.png)";
                imgr = "url(img/lemonR.png)";
                rt = 200 + "deg";
                CakeImg = "url(img/lemonCake.png)";
                mt = "-450px", ml = "30px";

            }
            break;
        case 4:
            {
                flvName.innerHTML = "Chocolate Cake"
                flvText.innerHTML = "Indulge in rich, decadent chocolate cake, crafted to perfection with layers of moist sponge and velvety chocolate ganache, creating a heavenly treat for your taste buds.";
                bgc = "linear-gradient(to right,#7d3e12,#4c260b)  "
                imgl = "url(img/chocolateRight.png)";
                imgr = "url(img/chocol.png)";
                rt = 360 + "deg";
                CakeImg = "url(img/chocoCake.png)";
                mt = "-250px", ml = "430px";

            }
            break;
        case 5:
            {
                flvName.innerHTML = "strawberry Cake"
                flvText.innerHTML = "Indulge in the luscious sweetness of our strawberry cake, bursting with fresh flavors and irresistible charm.";
                bgc = "linear-gradient(to right,#f799c1,#ce6892)"
                imgl = "url(img/straLeft.png)";
                imgr = "url(img/strar.png)";
                rt = 420 + "deg";
                CakeImg = "url(img/str.png)";
                mt = "-70px", ml = "565px";

            }
            break;
        default:
            break;
    }
    imgCake.style.transform = "rotate(" + rt + ")"; //all time rotation
    img1.style.transition = "2s";// all
    img2.style.transition = "2s";// all
    cursorBtn.style.marginTop = mt;
    cursorBtn.style.marginLeft = ml;
    img1.style.backgroundImage = imgl;
    img2.style.backgroundImage = imgr;
    bgColor.style.background = bgc;
    setTimeout(() => {

        imgCake.style.backgroundImage = CakeImg;
    }, 500);

}
