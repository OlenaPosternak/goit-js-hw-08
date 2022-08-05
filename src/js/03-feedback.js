import throttle from 'lodash.throttle';

const textarea = document.querySelector(`textarea`);
const email = document.querySelector(`input`)
const form = document.querySelector(`form`);

form.addEventListener(`input`, throttle(onInputChange,500));
form.addEventListener(`submit`, onFormSubmit);

const formData={};

onPutSavedInfo ()

function onInputChange(event){
   formData[event.target.name]=event.target.value
   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};


function onFormSubmit(event){
    event.preventDefault();
    // очищаем форму после отправки
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');

};

function onPutSavedInfo (){
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));

    for (const key in data) {
        // Если это собственное свойство - выполняем тело if
        if (data.hasOwnProperty(key)) {
        console.log(data[key]);
        textarea.value = data.message  || ``;
        email.value= data.email || ``;     
        }
    }
      
}

