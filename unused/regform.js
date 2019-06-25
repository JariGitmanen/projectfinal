const formdata = {};


function handleSubmit(event){
    //debugger;

    for(let control of event){
        formdata[control.id] = control.value
    }

    console.log('it happened!', formdata);

    return false;
}