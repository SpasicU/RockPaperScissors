function computerChoice(){
    let choice;
    let random = Math.floor(Math.random() * 3);
    if(random == 0)
    {
        choice = "papir";
    }
    else if(random == 1){
        choice = "kamen";
    }
    else {
        choice = "makaze";
    }

    return console.log(choice);
}