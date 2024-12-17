const btn = document.createElement('button');

btn.onclick = function(){
    alert("Ez egy natív kód");
}

btn.innerHTML="Natív";

document.getElementById("nativ-button-container").appendChild(btn);
//react ->mit akarok látni? jsx ->nem js kód!!
const gomb = React.createElement("button",
{
    onclick: function()
    {
        alert("Ez egy natív kód");
    },
    
},
    "React"
)

//első paraméter az elemet amit használni szeretnénk,
//második paraméter egy referencia DOM elemre, hívatkozáspont megadása
ReactDOM.render(gomb, document.getElementById("react-button-container"));
//React 18 verzió óta
//ReactDOM.createRoot(gomb,document.getElementById("react-button-container"));