//Wait until page loads
window.addEventListener('load', () => {

    //Select elements to manipulate
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const date_El = document.querySelector('#date');
    
    //Format date display
    const options = {weekday: "long", month: "short", day:"numeric"};
    //Date(); -> constructor collects local date and saves in variable 'today'
    const today = new Date(); 

    date_El.innerText = today.toLocaleDateString("en-US", options);

    //Prevent refresh after submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        //Check if user has submitted value
        const task = input.value;

        /* task_el */ 

        //Create DOM nodes div elements 
        const task_el = document.createElement("div");
        //Add class "task" to element "task_el"
        task_el.classList.add("task");
        
        /* task_content_el */  

        //Create div element 
        const task_content_el = document.createElement("div");
        //Add class "content" 
        task_content_el.classList.add("content");
        
        //Append divs "task_content_el" for content display created to parent "task_el"
        task_el.appendChild(task_content_el);

        /* task_input_el */

        //Create text input elements with class of "text"
        const task_input_el = document.createElement("input");
        //Add class "text"
        task_input_el.classList.add("text");
        //Set text type 
        task_input_el.type = "text";
        //Value of task entered assigned to "task" variable
        task_input_el.value = task;
        //Read only - cannot edit
        task_input_el.setAttribute("readonly", "readonly");

        //Append node "task_input_el" to parent "task_content_el"
        task_content_el.appendChild(task_input_el);

        /* task_action_el */

        //Create div element button - add 
        const task_actions_el = document.createElement("div");
        //Add class "actions"
        task_actions_el.classList.add("actions");
        

         /* task_edit_el */

         //Create div element - edit
        const task_edit_el = document.createElement("button");
        //Add class "edit"
        task_edit_el.classList.add("edit");
        //Set text "edit" content in DOM element
        task_edit_el.innerText = "edit";

         /* task_delete_el */
        
        //Create div element - delete
        const task_delete_el = document.createElement("button");
        //Add class "edit"
        task_delete_el.classList.add("delete");
        //Set text "delete" content in DOM element
        task_delete_el.innerText = "delete";

        //Append children edit + delete elements to "actions" element
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        //Appendchild action element to task element
        task_el.appendChild(task_actions_el);

        //Append "task_el" node to parent "list_el"
        list_el.appendChild(task_el);

        //Clear input
        input.value = " ";

        //Action by user interaction
        task_edit_el.addEventListener('click', (e) => {
            //Lowercase to match text
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                //Remove read only attribute in order to edit text
                task_input_el.removeAttribute("readonly");
                //Instant focus without click
                task_input_el.focus();
                //Swap edit button to save button
            task_edit_el.innerText = "Save";
            } else {
                //Readonly attribute
                task_input_el.setAttribute("readonly", "readonly");
                //Switch to Edit
                task_edit_el.innerText = "Edit";
            }
        });
        //.addEventListener 'click' actions function -> Function excutes .removeChild
        task_delete_el.addEventListener('click', ()=> {
            list_el.removeChild(task_el);
        });
     });
});
