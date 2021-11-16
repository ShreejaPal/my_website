//Not really the best way to do this, but it works.

let body = document.getElementsByTagName('body')[0];

let images = document.getElementById('certificates').getElementsByTagName('img');

let certLine1 = document.getElementById("certLine1");
let certLine2 = document.getElementById("certLine2");
let certLine3 = document.getElementById("certLine3");

let dataScience = document.getElementById("dataScience");
let machineLearning = document.getElementById("machineLearning");
let blockchain = document.getElementById("blockchain");
let iot = document.getElementById("iot");
let rpa = document.getElementById("rpa");
let softSkills = document.getElementById("softSkills");

let dataScienceImg = document.getElementById("dataScienceImg");
let machineLearningImg = document.getElementById("machineLearningImg");
let blockchainImg = document.getElementById("blockchainImg");
let iotImg = document.getElementById("iotImg");
let rpaImg = document.getElementById("rpaImg");
let softSkillsImg = document.getElementById("softSkillsImg");

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

body.addEventListener('mousemove', (e) => {
    let x = e.pageX - vw/2;
    let y = e.pageY - vw/2;

    certLine1.style.transform = `translateX(${-x/4}px)`;
    certLine2.style.transform = `translateX(${-x/6}px)`;
    certLine3.style.transform = `translateX(${-x/4}px)`;

    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(${x/2}px,${y/4}px)`;
    }
})

dataScience.addEventListener('mouseover', (e) => {
    dataScienceImg.style.opacity = "0.5";
})

dataScience.addEventListener('mouseout', (e) => {
    dataScienceImg.style.opacity = "0";
})

machineLearning.addEventListener('mouseover', (e) => {
    machineLearningImg.style.opacity = "0.5";
})

machineLearning.addEventListener('mouseout', (e) => {
    machineLearningImg.style.opacity = "0";
})

blockchain.addEventListener('mouseover', (e) => {
    blockchainImg.style.opacity = "0.5";
})  

blockchain.addEventListener('mouseout', (e) => {
    blockchainImg.style.opacity = "0.0";
})  

iot.addEventListener('mouseover', (e) => {
    iotImg.style.opacity = "0.5";
})  

iot.addEventListener('mouseout', (e) => {
    iotImg.style.opacity = "0.0";
})  

rpa.addEventListener('mouseover', (e) => {
    rpaImg.style.opacity = "0.5";
})  

rpa.addEventListener('mouseout', (e) => {
    rpaImg.style.opacity = "0.0";
})  

softSkills.addEventListener('mouseover', (e) => {
    softSkillsImg.style.opacity = "0.5";
})  

softSkills.addEventListener('mouseout', (e) => {
    softSkillsImg.style.opacity = "0.0";
}) 