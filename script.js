let new_task = $("#new_task")
let task_list = $("#task_list")
let btn_add = $("#btn_add")
let btn_clear = $("#btn_clear")
let btn_reset = $("#btn_reset")
let btn_sort = $("#btn_sort")

function add_item_to_list() {

    if(new_task.val() === "") return;


    let list_item = $('<li>', {
        'class': 'list-group-item',
        text: new_task.val()
    });

    list_item.click((event) => {
        $(event.target).toggleClass("done")
    });
    
    task_list.append(list_item);
    new_task.val("")
}

btn_add.click(add_item_to_list);
new_task.keypress((e) => {
    if(e.which === 13)  add_item_to_list();
});

btn_clear.click(() => {
    $("#task_list .done").remove();
})


btn_reset.click(() => {
    $("#task_list li").remove();
})

btn_sort.click(() => {
    $("#task_list .done").appendTo(task_list);
})
