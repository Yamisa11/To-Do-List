document.querySelector('#btnAdd').onclick = function(){
    if (document.querySelector('#addTask input').value.length == 0){
        alert("You did not enter any task. Please enter one");
    }else{
        document.querySelector('#Tasks').innerHTML += `
        <div class="Tasks">
            <span id="TaskName">
                ${document.querySelector('#addTask input').value}</span>
                <button class="delete">DELETE
                </button>
        `
    }
}