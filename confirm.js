const formdata = {};


function handleSubmit(formEl){

    for(let control of formEl){
            formdata[control.id] = control.value;   
    }
    console.log('it happened!', formEl, formdata);
    formEl.reset();

    sessionStorage.setItem('userData', JSON.stringify(formdata));
    window.location='updateconfirmed.html';
    return false;
    

}

