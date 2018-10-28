// 
document.addEventListener('change', buttonClicked);


function buttonClicked() {
    // retrieve all the element of the form
    var checkBoxNodes = document.querySelectorAll('.myClass');
    var inputField = document.querySelector('.inputClass').value;
    
    // elementArray will store all the elements of type checkbox 
    var elementArray = [];

    // First chek whether the email has value than the for loop iterate throught 
    // all the elements of checkBoxNodes if they are checked or not
    if (inputField) {
        for (let ele = 0; ele < checkBoxNodes.length; ele++) {
            if (checkBoxNodes[ele].checked == true) {
                elementArray.push(checkBoxNodes[ele]);
            }

        }
    }

    // if all the checkbox are checked the button will be enabled
    if (elementArray.length == checkBoxNodes.length) {
        document.getElementById('btn').removeAttribute('disabled');
    } else {
        document.getElementById('btn').setAttribute('disabled', 'disabled');
    }
};




