let ele = null;

function check(id, txt){
    let ele = document.getElementById(id);

    if(ele.value == txt){
        ele.style.borderColor = 'green';
    } else{
        ele.style.borderColor = 'red'
    }
}