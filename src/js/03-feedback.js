import throttle from 'lodash.throttle';

const textarea = document.querySelector(`textarea`);
const email = document.querySelector(`input`)
const form = document.querySelector(`form`);

form.addEventListener(`input`, throttle(onInputChange,500));
form.addEventListener(`submit`, onFormSubmit);

const STORAGE_KEY= `feedback-form-state`;
const formData={};

onPutSavedInfo ()

function onInputChange(event){
   formData[event.target.name]=event.target.value
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit(event){
    if (!textarea.value || !email.value){
        alert(`Please fill in all the fields`)
    }
    else {
        event.preventDefault();
    
        // очищаем форму после отправки
        console.log(formData);
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
     
    
    }
    
};

function onPutSavedInfo (){

    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data){
        for (const key in data) {
            // Если это собственное свойство - выполняем тело if
            if (data.hasOwnProperty(key)) {
            // console.log(data[key]);
            textarea.value = data.message  || ``;
            email.value= data.email || ``;     
            }
        }

    }

    
      

}

