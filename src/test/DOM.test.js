import { findProject } from '../localStorageUpdate';
import ToDo from '../to-do-object';
import Project from '../project';
import CheckList from '../checkListObject';
import { mockSaveProject, mockEditToDo } from './mockFunctions';

describe('Test new, edit and delete Project ', () => {
  document.body.innerHTML = `<div id="main-form">
        <div>
        <h2>Project Info</h2>
        <label class="label">Title<input class="input" placeholder="Add a title for your new project." type="text" id="pTitle"></label>
        <label class="label">Description<textarea placeholder="Add a description of your new project." rows="5" class="textarea" type="text" id="pDescription" spellcheck="false">
        </textarea><grammarly-extension style="position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: auto;" class="cGcvT">
        </grammarly-extension></label></div><div style="position: relative;" id="to-do-holder" class="my-2">
        <div style="background-color: skyblue; position: relative;" id="3f625712-918e-422c-92f5-a41c7d086273" class="box">
        <label class="label is-small">ToDo Title<input placeholder="Add a title for something you need ToDo in this project." class="input is-small is-info" type="text">
        </label><label class="label is-small">ToDo Description<textarea placeholder="Add the description of this ToDo." class="textarea is-small is-info" rows="5" type="text" spellcheck="false">
        </textarea></label><label class="is-small is-info label">ToDo Due Date<input class="mx-2 is-small" type="date">
        </label><div class="radio-holder py-2"><p class="is-small label">Pick your ToDo level of priority</p>
        <div><label class="is-small label">High<input class="ml-1" type="radio" value="high" name="e93a2c7d-4af3-4e1c-ae24-df7790345582"></label>
        <label class="is-small label">Medium<input class="ml-1" type="radio" value="medium" name="e93a2c7d-4af3-4e1c-ae24-df7790345582"></label>
        <label class="is-small label">Low<input class="ml-1" type="radio" value="low" name="e93a2c7d-4af3-4e1c-ae24-df7790345582"></label>
        </div></div><label class="label is-small is-info">Notes<textarea placeholder="Here you can add some notes for the ToDo." class="textarea is-small is-info" spellcheck="false"></textarea></label>
        <span style="position: absolute; top: 10px; right: 10px; cursor: pointer;" class="delete">×</span><input class="is-link button" type="submit" value="Add Check-ToDo (List of things you need to accomplish to finish the ToDo).">
        <div><div class="is-flex center" id="9a82f7c9-fb6d-4d8d-9f2a-8fd1a9bd9954">
        <label class="label is-small is-primary my-4">Add a CheckList<input placeholder="Title for the Check-ToDo." class="input is-small is-primary input-form" type="text">
        </label><span style="cursor: pointer;" class="delete mt-4 ml-3">×</span></div><div class="is-flex center" id="a1f9b04f-2045-4cd8-90e3-ab71eb6e4dd7">
        <label class="label is-small is-primary my-4">Add a CheckList<input placeholder="Title for the Check-ToDo." class="input is-small is-primary input-form" type="text">
        </label><span style="cursor: pointer;" class="delete mt-4 ml-3">×</span></div></div></div>
        <div style="background-color: skyblue; position: relative;" id="d79ccf4f-14eb-4bd5-acb1-a7ca11056c6a" class="box">
        <label class="label is-small">ToDo Title<input placeholder="Add a title for something you need ToDo in this project." class="input is-small is-info" type="text"></label>
        <label class="label is-small">ToDo Description<textarea placeholder="Add the description of this ToDo." class="textarea is-small is-info" rows="5" type="text" spellcheck="false"></textarea>
        <grammarly-extension style="position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: auto;" class="cGcvT"></grammarly-extension></label>
        <label class="is-small is-info label">ToDo Due Date<input class="mx-2 is-small" type="date"></label>
        <div class="radio-holder py-2"><p class="is-small label">Pick your ToDo level of priority</p>
        <div><label class="is-small label">High<input class="ml-1" type="radio" value="high" name="4cb8b99d-4b3a-44e3-83db-1839d7960309">
        </label><label class="is-small label">Medium<input class="ml-1" type="radio" value="medium" name="4cb8b99d-4b3a-44e3-83db-1839d7960309">
        </label><label class="is-small label">Low<input class="ml-1" type="radio" value="low" name="4cb8b99d-4b3a-44e3-83db-1839d7960309">
        </label></div></div>
        <label class="label is-small is-info">Notes<textarea placeholder="Here you can add some notes for the ToDo." class="textarea is-small is-info" spellcheck="false">
        </textarea><grammarly-extension style="position: absolute; top: 0px; left: 0px; pointer-events: none; z-index: auto;" class="cGcvT"></grammarly-extension></label>
        <span style="position: absolute; top: 10px; right: 10px; cursor: pointer;" class="delete">×</span>
        <input class="is-link button" type="submit" value="Add Check-ToDo (List of things you need to accomplish to finish the ToDo)."><div></div></div></div></div>
        <div class="is-flex is-justify-content-space-between"><input type="submit" value="Add New ToDo" class="button is-link is-light is-outlined my-4"><input type="submit" value="Create new Project" class="button is-success is-align-self-center"></div>`;

  const testProject = Project(
    1,
    'Default Project',
    'All project are show here',
    [
      ToDo(
        2,
        'First Todo',
        'First Todo Description',
        '21-12-2020',
        'high',
        'First ToDo Note',
        [
          CheckList(3, 'first checklist', false),
          CheckList(4, 'second checklist', true),
        ],
      ),
      ToDo(
        5,
        'Second Todo',
        'Second Todo Description',
        '21-12-2020',
        'high',
        'First ToDo Note',
      ),
    ],
  );

  const projects = [testProject];
  localStorage.setItem('Projects', JSON.stringify(projects));

  const deleteProject = (element) => {
    const actualP = findProject(element, true);
    const projects = JSON.parse(localStorage.getItem('Projects'));
    projects.splice(actualP, 1);
    localStorage.setItem('Projects', JSON.stringify(projects));
  };

  test('Expect project to be removed from localStorage', () => {
    deleteProject(testProject);
    expect(localStorage.getItem('Projects')).toBe('[]');
  });
  test('Expect to save a project', () => {
    mockSaveProject();
    expect(JSON.parse(localStorage.getItem('Projects')).length).toBe(1);
  });
  test('Expect to sequence of function to mock the edit dom manipulation of the project.', () => {
    const projects = [testProject];
    localStorage.setItem('Projects', JSON.stringify(projects));
    const oldProject = JSON.parse(localStorage.getItem('Projects'))[0];
    oldProject.title = 'Changed';
    mockEditToDo(oldProject);
    const loadedProject = JSON.parse(localStorage.getItem('Projects'))[0];
    expect(loadedProject.title).toBe('Changed');
  });
});
