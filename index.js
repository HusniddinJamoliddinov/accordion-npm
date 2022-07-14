const wrapper = document.querySelector(".wrapper");

let items = ["salom", "hello", "namaste"];

function collapse(wrapper, items = []){
  const body = document.body;
  body.style.backgroundColor = "rgb(97, 13, 175)";
  body.style.display = "grid";
  body.style.placeItems = "center";
  body.style.minHeight = "100vh";
  body.style.fontFamily = "sans-serif";
  body.style.boxSizing = "border-box";
  body.style.margin = "0px";
  body.style.padding = "0px";


  wrapper.className = "wrapper";
  wrapper.style.width = "85%";
  wrapper.style.height = "auto";
  wrapper.style.margin = "auto";
  wrapper.style.padding = "10px";
  wrapper.style.backgroundColor = "white";

  for(let i = 0; i < items.length; i++){
    const toggleBtn = document.createElement('div');
    toggleBtn.innerText = "Accordion item";
    toggleBtn.className = "item";
    toggleBtn.style.border = "1.5px solid black";
    toggleBtn.style.marginBottom = "5px";
    toggleBtn.style.marginTop = "20px";
    toggleBtn.style.color = "rgb(12, 17, 83)";
    toggleBtn.style.fontSize = "25px";
    toggleBtn.style.fontWeight = "700";
    toggleBtn.style.padding = "5px";
    toggleBtn.style.textAlign = "center";
    wrapper.appendChild(toggleBtn);

    const toggleText = document.createElement('p');
    toggleText.style.display = "block";
    toggleText.className = "item-text";
    toggleText.innerText = items[i];
    toggleText.style.color = "rgb(12, 17, 83)";
    toggleText.style.fontSize = "16px";
    toggleText.style.fontWeight = "600";
    toggleText.style.textAlign = "center";
    wrapper.appendChild(toggleText);

  }

  body.appendChild(wrapper);


  function init (){
    const btns = document.querySelectorAll(".item");
    const texts = document.querySelectorAll(".item-text");

    for (let i = 0; i < btns.length; i++){
      btns[i].addEventListener("click", ()=>{
        if(texts[i].style.display == "none"){
          texts.forEach((text)=>{
            text.style.display = "none";
          })
          texts[i].style.display = "block";
        }else{
          texts[i].style.display = "none";
        }
      })
    } 
  }

  init();
}

collapse(wrapper, items);

module.exports = {
  collapse,
}
