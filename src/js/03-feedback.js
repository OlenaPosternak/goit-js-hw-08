const textarea = document.querySelector(`textarea`);
const form = document.querySelector(`form`);

form.addEventListener(`input`, onInputChange);
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
    const savedData = localStorage.getItem('feedback-form-state');
    const data = JSON.parse(savedData);

    for (const key in data) {
        // Если это собственное свойство - выполняем тело if
        if (data.hasOwnProperty(key)) {
          console.log(data[key]);
         form.name.textContent = data[key];

     
        }
    }
      
}

