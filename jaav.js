const features = document.querySelector(".features")

const bltf = document.querySelector(".bltf")



const up1 = document.querySelector(".up1")

const up2 = document.querySelector(".up2")

const down1 = document.querySelector(".down1")

const down2 = document.querySelector(".down2")

const companybtn = document.querySelector(".companybtn")

const cmpn = document.querySelector(".cmpn")

const menubtn = document.querySelector(".menubutton")

const popups = document.querySelector(".popups")

const featuresalt = document.querySelector(".features-alt")

const companyalt = document.querySelector(".company-alt")

const altfeatures = document.querySelector(".altfeatures")

const cmpnalt = document.querySelector(".cmpnalt")

const closemenu = document.querySelector(".closemenu")


bltf.addEventListener("click", () => {
    features.classList.toggle("active");
    up1.classList.toggle("activeup")
    down1.classList.toggle("activedown")

})

companybtn.addEventListener("click", () => {
    up2.classList.toggle("activeup2")
    down2.classList.toggle("activedown2")
    cmpn.classList.toggle("acctive");
})

menubtn.addEventListener("click", () => {
    popups.style.display = "block"
    popups.style.right = "0"
})

featuresalt.addEventListener("click", () => {
    altfeatures.classList.toggle("active")

})

companyalt.addEventListener("click", () => {
    cmpnalt.classList.toggle("active")
})

closemenu.addEventListener("click", () => {
    popups.style.display = "none"
    popups.style.right = "-400"
})











