import { v4 as uuidv4 } from 'uuid';
import ToDo from '../to-do-object';
import Project from '../project';
import CheckList from '../checkListObject'
import { findProject } from '../localStorageUpdate'
import { deletePreviousContent } from '../DOM'
const mockSaveProject = (element) => {
    if (element != null) {
        const actualProjectIndex = findProject(element, true);
        const projects = JSON.parse(localStorage.getItem('Projects'));
        const holderToDo = document.getElementById('to-do-holder');
        let array = [];
        let arrayChecklist = [];
        let arrayCheck = [];
        let priorityBoolean = false;
        console.log(holderToDo.innerHTML);
        for (let i = 0; i < holderToDo.children.length; i += 1) {
            const toDoDiv = holderToDo.children[i].children;
            for (let j = 0; j < toDoDiv.length; j += 1) {
                const element = toDoDiv[j];
                if (element.tagName === 'LABEL') {
                    array.push(element.children[0].value);
                } else if (element.tagName === 'DIV') {
                    if (element.classList.contains('radio-holder')) {
                        const radio = element.children[1].children;
                        for (let u = 0; u < radio.length; u += 1) {
                            const radioInput = radio[u].children[0];
                            if (radioInput.checked) {
                                array.push(radioInput.value);
                                priorityBoolean = true;
                            }
                        }
                        if (!priorityBoolean) {
                            array.push('medium');
                        }
                        priorityBoolean = false;
                    } else if (element.children[0] && !element.children[0].classList.contains('button')) {
                        const checkDiv = element.children;
                        for (let k = 0; k < checkDiv.length; k += 1) {
                            const checkElement = checkDiv[k].children[0];
                            arrayChecklist = checkElement.children[0].value;
                            arrayCheck.push(CheckList(uuidv4(), arrayChecklist));
                        }
                    }
                }
            }
            projects[actualProjectIndex].toDo.push(ToDo(uuidv4(), ...array, arrayCheck));
            array = [];
            arrayCheck = [];
        }
        localStorage.setItem('Projects', JSON.stringify(projects));
    } else {
        const projectTitle = document.getElementById('pTitle').value;
        const projectDescription = document.getElementById('pDescription').value;
        const holderToDo = document.getElementById('to-do-holder');
        let array = [];
        let arrayChecklist = [];
        let arrayCheck = [];
        const arrayToDo = [];
        let priorityBoolean = false;
        for (let i = 0; i < holderToDo.children.length; i += 1) {
            const toDoDiv = holderToDo.children[i].children;
            for (let j = 0; j < toDoDiv.length; j += 1) {
                const element = toDoDiv[j];
                if (element.tagName === 'LABEL') {
                    array.push(element.children[0].value);
                } else if (element.tagName === 'DIV') {
                    if (element.classList.contains('radio-holder')) {
                        const radio = element.children[1].children;
                        for (let u = 0; u < radio.length; u += 1) {
                            const radioInput = radio[u].children[0];
                            if (radioInput.checked) {
                                array.push(radioInput.value);
                                priorityBoolean = true;
                            }
                        }
                        if (!priorityBoolean) {
                            array.push('medium');
                        }
                        priorityBoolean = false;
                    } else {
                        const checkDiv = element.children;
                        for (let k = 0; k < checkDiv.length; k += 1) {
                            const checkElement = checkDiv[k].children[0];
                            arrayChecklist = checkElement.children[0].value;
                            arrayCheck.push(CheckList(uuidv4(), arrayChecklist));
                        }
                    }
                }
            }
            arrayToDo.push(ToDo(uuidv4(), ...array, arrayCheck));
            array = [];
            arrayCheck = [];
        }

        const projects = JSON.parse(localStorage.getItem('Projects'));
        const pholder = Project(
            uuidv4(),
            projectTitle,
            projectDescription,
            arrayToDo,
        );
        projects.push(pholder);
        localStorage.setItem('Projects', JSON.stringify(projects));
    }
};


const mockEditToDo = (element) => {
    const main = document.getElementsByTagName('body')[0];
    main.id = 'main-div';
    main.innerHTML = ''
    const mainForm = document.createElement('div');
    const submitB = document.createElement('input');
    const formB = document.createElement('div');
    formB.classList.toggle('formProject');
    main.classList.add('is-flex', 'is-flex-direction-column', 'column', 'is-9');
    mainForm.id = 'main-form';
    const toDoHolder = document.createElement('div');
    toDoHolder.style.position = 'relative';
    toDoHolder.id = 'to-do-holder';
    toDoHolder.classList.add('my-2');

    submitB.type = 'submit';
    submitB.value = 'Save Project';
    submitB.classList.add('button', 'is-success', 'is-align-self-center');
    const holdProject = document.createElement('div');
    const pTitle = document.createElement('input');
    pTitle.classList.add('input', 'input-form');
    pTitle.value = element.title;
    pTitle.placeholder = 'Add a title for your new project.';
    const pTitleL = document.createElement('label');
    pTitleL.classList.add('label');
    pTitle.setAttribute('type', 'text');
    pTitle.id = 'pTitle';
    pTitleL.textContent = 'Title';
    pTitleL.appendChild(pTitle);

    const pDescription = document.createElement('textarea');
    pDescription.placeholder = 'Add a description of your new project.';
    pDescription.rows = '5';
    pDescription.classList.add('textarea', 'input-form');
    pDescription.value = element.description;
    const pDescriptionL = document.createElement('label');
    pDescriptionL.classList.add('label');
    pDescription.setAttribute('type', 'text');
    pDescription.id = 'pDescription';
    pDescriptionL.textContent = 'Description';
    pDescriptionL.appendChild(pDescription);

    const h2Project = document.createElement('h2');
    h2Project.textContent = 'Project Info';

    const addToDo = document.createElement('input');
    addToDo.type = 'submit';
    addToDo.value = 'Add New ToDo';
    addToDo.classList.add('button', 'is-link', 'is-light', 'is-outlined', 'my-4');

    // eslint-disable-next-line consistent-return
    element.toDo.forEach((todo) => {
        toDoHolder.style.position = 'relative';
        toDoHolder.id = 'to-do-holder';
        const formToDo = document.createElement('div');
        formToDo.style.backgroundColor = 'skyblue';
        formToDo.id = todo.id;
        formToDo.classList.add('box');
        formToDo.style.position = 'relative';
        const namePriority = uuidv4();

        const pToDoTitle = document.createElement('input');
        pToDoTitle.setAttribute('required', true);
        pToDoTitle.placeholder = 'Add a title for something you need ToDo in this project.';
        pToDoTitle.classList.add('input', 'is-small', 'is-info', 'input-form');
        pToDoTitle.value = todo.title;
        const pToDoTitleL = document.createElement('label');
        pToDoTitleL.classList.add('label', 'is-small');

        pToDoTitle.setAttribute('type', 'text');
        pToDoTitleL.textContent = 'ToDo Title';
        pToDoTitleL.appendChild(pToDoTitle);

        const pToDoDescription = document.createElement('textarea');
        pToDoDescription.placeholder = 'Add the description of this ToDo.';
        pToDoDescription.classList.add('textarea', 'is-small', 'is-info', 'input-form');
        pToDoDescription.value = todo.description;
        pToDoDescription.rows = '5';
        const pToDoDescriptionL = document.createElement('label');
        pToDoDescriptionL.classList.add('label', 'is-small');

        pToDoDescription.setAttribute('type', 'text');
        pToDoDescriptionL.textContent = 'ToDo Description';
        pToDoDescriptionL.appendChild(pToDoDescription);

        const pToDoDueDate = document.createElement('input');
        pToDoDueDate.classList.add('mx-2', 'is-small');
        const pToDoDueDateL = document.createElement('label');
        pToDoDueDateL.classList.add('is-small', 'is-info', 'label', 'input-form');

        pToDoDueDate.setAttribute('type', 'date');
        pToDoDueDate.value = `${todo.dueDate.split('-').reverse().join('-')}`;
        pToDoDueDateL.textContent = 'ToDo Due Date';
        pToDoDueDateL.appendChild(pToDoDueDate);

        const pToDoPriorityH = document.createElement('input');
        pToDoPriorityH.classList.add('ml-1');
        const pToDoPriorityHL = document.createElement('label');
        pToDoPriorityHL.classList.add('is-small', 'label');

        pToDoPriorityH.setAttribute('type', 'radio');
        pToDoPriorityH.setAttribute('value', 'high');
        pToDoPriorityH.setAttribute('name', `${namePriority}`);
        pToDoPriorityHL.textContent = 'High';
        pToDoPriorityHL.appendChild(pToDoPriorityH);

        const pToDoPriorityM = document.createElement('input');
        pToDoPriorityM.classList.add('ml-1');
        const pToDoPriorityML = document.createElement('label');
        pToDoPriorityML.classList.add('is-small', 'label');

        pToDoPriorityM.setAttribute('type', 'radio');
        pToDoPriorityM.setAttribute('value', 'medium');
        pToDoPriorityM.setAttribute('name', `${namePriority}`);
        pToDoPriorityML.textContent = 'Medium';
        pToDoPriorityML.appendChild(pToDoPriorityM);

        const pToDoPriorityL = document.createElement('input');
        pToDoPriorityL.classList.add('ml-1');
        const pToDoPriorityLL = document.createElement('label');
        pToDoPriorityLL.classList.add('is-small', 'label');

        pToDoPriorityL.setAttribute('type', 'radio');
        pToDoPriorityL.setAttribute('value', 'low');
        pToDoPriorityL.setAttribute('name', `${namePriority}`);
        pToDoPriorityLL.textContent = 'Low';
        pToDoPriorityLL.appendChild(pToDoPriorityL);

        const radioHold = document.createElement('div');
        radioHold.classList.toggle('radio-holder');
        radioHold.classList.add('py-2');
        const radioText = document.createElement('p');
        radioText.classList.add('is-small', 'label');
        radioText.textContent = 'Pick your ToDo level of priority';
        const hold = document.createElement('div');

        if (todo.priority === 'high') {
            pToDoPriorityH.checked = true;
        } else if (todo.priority === 'medium') {
            pToDoPriorityM.checked = true;
        } else {
            pToDoPriorityL.checked = true;
        }

        hold.append(pToDoPriorityHL, pToDoPriorityML, pToDoPriorityLL);
        radioHold.append(radioText, hold);

        const pToDoNotes = document.createElement('textarea');
        pToDoNotes.placeholder = 'Here you can add some notes for the ToDo.';
        pToDoNotes.classList.add('textarea', 'is-small', 'is-info', 'input-form');
        pToDoNotes.row = '5';
        pToDoNotes.value = todo.notes;
        const pToDoNotesL = document.createElement('label');
        pToDoNotesL.textContent = 'Notes';
        pToDoNotesL.classList.add('label', 'is-small', 'is-info');

        pToDoNotesL.append(pToDoNotes);

        const checkToDoHolder = document.createElement('div');
        const addCheckTodo = document.createElement('input');
        addCheckTodo.classList.add('is-link', 'button');
        addCheckTodo.type = 'submit';
        addCheckTodo.value = 'Add Check-ToDo (List of things you need to accomplish to finish the ToDo).';

        todo.checkList.forEach(element => {
            const pCheckTitle = document.createElement('input');
            pCheckTitle.placeholder = 'Title for the Check-ToDo.';
            pCheckTitle.classList.add('input', 'is-small', 'is-primary', 'input-form');
            const pCheckTitleL = document.createElement('label');
            pCheckTitleL.classList.add('label', 'is-small', 'is-primary', 'my-4');
            const holdCheck = document.createElement('div');
            holdCheck.classList.add('is-flex', 'center');
            const closeButton = document.createElement('span');
            const checkId = element.id;
            holdCheck.id = checkId;

            closeButton.style.cursor = 'pointer';
            closeButton.classList.add('delete', 'mt-4', 'ml-3');
            closeButton.classList.toggle = 'close';
            closeButton.innerHTML = '&times;';

            pCheckTitle.setAttribute('type', 'text');
            pCheckTitle.value = element.title;
            pCheckTitleL.textContent = 'Add a CheckList';

            pCheckTitleL.append(pCheckTitle);
            holdCheck.append(pCheckTitleL, closeButton);
            checkToDoHolder.append(holdCheck);
            closeButton.addEventListener('click', () => {
                document.getElementById(holdCheck.id).remove();
            });
        });

        addCheckTodo.addEventListener('click', () => {
            checkToDo(checkToDoHolder);
        });

        const closeButton = document.createElement('span');
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.classList.add('delete');
        closeButton.style.cursor = 'pointer';
        closeButton.classList.toggle = 'close';
        closeButton.innerHTML = '&times;';

        formToDo.append(
            pToDoTitleL,
            pToDoDescriptionL,
            pToDoDueDateL,
            radioHold,
            pToDoNotesL,
            closeButton,
            addCheckTodo,
            checkToDoHolder,
        );
        toDoHolder.append(formToDo);
        mainForm.append(toDoHolder);

        closeButton.addEventListener('click', () => {
            deleteContent(formToDo);
        });
    });

    addToDo.addEventListener('click', () => {
        // eslint-disable-next-line no-use-before-define
        toDoForm(false);
    });

    formB.append(h2Project);
    holdProject.append(h2Project, pTitleL, pDescriptionL, toDoHolder);
    mainForm.append(holdProject);
    const buttonHolder = document.createElement('div');
    buttonHolder.append(addToDo, submitB);
    buttonHolder.classList.add('is-flex', 'is-justify-content-space-between');
    main.append(mainForm, buttonHolder);

    console.log(main)
    mockSaveProject(element);

};

export { mockSaveProject, mockEditToDo }