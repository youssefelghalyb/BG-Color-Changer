var index = 0;

function changeColor(){
    let colors = ["red" , "green", "blue" ,"purple" , "yellow" , "pink"]
    document.getElementsByTagName('body')[0].style.background = colors[index++]

    if (index > colors.length -1){
        index = 0 ;
    }
}
