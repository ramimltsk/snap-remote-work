const features = document.querySelector (".features")

const bltf = document.querySelector (".bltf")



const up1 = document.querySelector (".up1")

const up2 = document.querySelector (".up2")

const down1 = document.querySelector (".down1")

const down2 = document.querySelector (".down2")

const companybtn = document.querySelector (".companybtn")

const cmpn = document.querySelector (".cmpn")

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







