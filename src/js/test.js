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

};

function onPutSavedInfo (){
    const savedData = localStorage.getItem('feedback-form-state');
    // console.log(JSON.parse(savedData));


    for (const key in formData) {

        console.log(key);
        // Если это собственное свойство - выполняем тело if
        if (formData.hasOwnProperty(key)) {
          console.log(key);
          console.log(JSON.parse(savedData));

        }
    }
      
}

