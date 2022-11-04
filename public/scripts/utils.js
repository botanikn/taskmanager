let stages_collection = []; // Массив, хранящий id всех стадий
let filterTask; // Массив, хранящий task'и определённых стадий, необходимо для первоначальной отрисовки страницы
let fi_t_2; // Массив, хранящий task'и определённой стадии, необходимо для сортировки
let stages_num_id = []; // Массив, хранящий id стадий
let fil_sor; // Отсортированный массив fi_t_2
let counter = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
let first = 0;
let second = 0;

$(document).ready(function() {

    // Получение стадий

    axios.get('/api/v1/stages'
    
        ).then((stages_response) => {

            stages_collection = stages_response.data.stages;

            for (let i = 0; i < 4; i++) {

                if (stages_response.data.stages[i].name == "ready") {

                    stages_num_id[0] = stages_response.data.stages[i]._id;

                }
                else if (stages_response.data.stages[i].name == "progress") {

                    stages_num_id[1] = stages_response.data.stages[i]._id;

                }
                else if (stages_response.data.stages[i].name == "review") {

                    stages_num_id[2] = stages_response.data.stages[i]._id;

                }
                else if (stages_response.data.stages[i].name == "done") {

                    stages_num_id[3] = stages_response.data.stages[i]._id;

                }

            }

        }).catch(function() {

            console.log('nothing');

        })

    // Получение task'ов

    axios.get('/api/v1/tasks'
        
        ).then((response) => {

            let donetasks = response.data.tasks.filter((item) => {

                return item.stage == stages_num_id[3];

            })

            let coli = $(`<p>${donetasks.length} / ${response.data.tasks.length}</p>`).appendTo("#coli");
            let find = $(`<center><progress max="${response.data.tasks.length}" value="${donetasks.length}"></progress>`).appendTo("#pr");

            stages_collection.map((stage) => {
                
                filterTask = response.data.tasks.filter((item) => {

                    return item.stage == stage._id;

                })

                // Отрисовка task'ов

                filterTask.map((tasks) => {

                    let div = $(`
            
                    <div class="task${stage.name}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="${stage.name}_color">${tasks.title}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="Red" class="redak" id="${tasks.title + " " + tasks.value + " " + tasks.completeProgress + " " + tasks.expiredDate.substr(0, 10) + " " + stage._id + " " + tasks._id}">Редактировать</button>
                                    <button value="${tasks._id}" class="udalen" id="${tasks._id}">Удалить</button>
                                </div>
                            </div>
                        </div>
                        <div class="middle">
                            <p>${tasks.value}</p>
                        </div>
                        <div class="progressbar">
                            <progress max="100" value="${tasks.completeProgress}"></progress>
                        </div>
                        <div class="start_date">
                            <p>Дата начала - ${tasks.creationDate.substr(0, 10)}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${tasks.expiredDate.substr(0, 10)}</p>
                        </div>
                    </div>
                
                `).appendTo(`div#${stage.name}`);

                })

            }
                
            )

            function sor(parametr, stage_id, stage_name, index, tr_id) {

                fi_t_2 = response.data.tasks.filter((item) => {

                    return item.stage == stage_id;

                })

                console.log(counter[index])

                if (counter[index] % 2 == 0) {

                    first = -1;
                    second = 1;
                    console.log('Counter делится на 2');
                    $(`#${tr_id}`).addClass('tr_up').removeClass('tr_down')

                }
                else if (counter[index] % 2 == 1) {

                    first = 1;
                    second = -1;
                    console.log('Counter не делится на 2');
                    $(`#${tr_id}`).addClass('tr_down').removeClass('tr_up')
                    
                }

                if (parametr == "title") {

                    fil_sor = fi_t_2.sort((a, b) => {

                        if (a.title.toLowerCase() < b.title.toLowerCase()) {
    
                            return first;
    
                        }
                        else if (a.title.toLowerCase() > b.title.toLowerCase()) {
    
                            return second
    
                        }
                        else return 0
    
                    })

                }
                else if (parametr == "cr_date") {

                    fil_sor = fi_t_2.sort((a, b) => {

                        if (a.creationDate.toLowerCase() < b.creationDate.toLowerCase()) {
    
                            return first;
    
                        }
                        else if (a.creationDate.toLowerCase() > b.creationDate.toLowerCase()) {
    
                            return second
    
                        }
                        else return 0
    
                    })

                }
                else if (parametr == "en_date") {

                    fil_sor = fi_t_2.sort((a, b) => {

                        if (a.expiredDate.toLowerCase() < b.expiredDate.toLowerCase()) {
    
                            return first;
    
                        }
                        else if (a.expiredDate.toLowerCase() > b.expiredDate.toLowerCase()) {
    
                            return second
    
                        }
                        else return 0
    
                    })

                }

                $(`.task${stage_name}`).remove();

                fil_sor.map((tasks) => {

                    let so = $(`
            
                    <div class="task${stage_name}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="${stage_name}_color">${tasks.title}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="Red" class="redak" id="${tasks.title + " " + tasks.value + " " + tasks.completeProgress + " " + tasks.expiredDate.substr(0, 10) + " " + stage_id + " " + tasks._id}">Редактировать</button>
                                    <button value="${tasks._id}" class="udalen" id="${tasks._id}">Удалить</button>
                                </div>
                            </div>
                        </div>
                        <div class="middle">
                            <p>${tasks.value}</p>
                        </div>
                        <div class="progressbar">
                            <progress max="100" value="${tasks.completeProgress}"></progress>
                        </div>
                        <div class="start_date">
                            <p>Дата начала - ${tasks.creationDate.substr(0, 10)}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${tasks.expiredDate.substr(0, 10)}</p>
                        </div>
                    </div>
                
                `).appendTo(`div#${stage_name}`);

                })

                counter[index]++;

            }

            

            // Слушатели событий

            $('#sort_ready').click(function() {
    
                sor("title", stages_num_id[0], "ready", 0, "first_row_tr_ready")
                $("#second_row_tr_ready").removeClass('tr_up').removeClass('tr_down')
                $("#third_row_tr_ready").removeClass('tr_up').removeClass('tr_down')
                counter[1] = 2;
                counter[2] = 2;
            
            });

            $('#sort_cr_date_ready').click(function() {

                sor("cr_date", stages_num_id[0], "ready", 1, "second_row_tr_ready")
                $("#first_row_tr_ready").removeClass('tr_up').removeClass('tr_down')
                $("#third_row_tr_ready").removeClass('tr_up').removeClass('tr_down')
                counter[0] = 2;
                counter[2] = 2;
            
            });
        
            $('#sort_en_date_ready').click(function() {
        
                sor("en_date", stages_num_id[0], "ready", 2, "third_row_tr_ready")
                $("#second_row_tr_ready").removeClass('tr_up').removeClass('tr_down')
                $("#first_row_tr_ready").removeClass('tr_up').removeClass('tr_down')
                counter[0] = 2;
                counter[1] = 2;
        
            });
        
            $('#sort_progress').click(function() {
        
                sor("title", stages_num_id[1], "progress", 3, "first_row_tr_progress")
                $("#second_row_tr_progress").removeClass('tr_up').removeClass('tr_down')
                $("#third_row_tr_progress").removeClass('tr_up').removeClass('tr_down')
                counter[4] = 2;
                counter[5] = 2;
        
            });
        
            $('#sort_cr_date_progress').click(function() {
        
                sor("cr_date", stages_num_id[1], "progress", 4, "second_row_tr_progress")
                $("#first_row_tr_progress").removeClass('tr_up').removeClass('tr_down')
                $("#third_row_tr_progress").removeClass('tr_up').removeClass('tr_down')
                counter[3] = 2;
                counter[5] = 2;
         
            });
        
            $('#sort_en_date_progress').click(function() {
        
                sor("en_date", stages_num_id[1], "progress", 5, "third_row_tr_progress")
                $("#second_row_tr_progress").removeClass('tr_up').removeClass('tr_down')
                $("#first_row_tr_progress").removeClass('tr_up').removeClass('tr_down')
                counter[3] = 2;
                counter[4] = 2;
                
            });
        
            $('#sort_review').click(function() {
        
                sor("title", stages_num_id[2], "review", 6, "first_row_tr_review")
                $("#second_row_tr_review").removeClass('tr_up').removeClass('tr_down')
                $("#third_row_tr_review").removeClass('tr_up').removeClass('tr_down')
                counter[7] = 2;
                counter[8] = 2;
                
            });
        
            $('#sort_cr_date_review').click(function() {
        
                sor("cr_date", stages_num_id[2], "review", 7, "second_row_tr_review")
                $("#first_row_tr_review").removeClass('tr_up').removeClass('tr_down')
                $("#third_row_tr_review").removeClass('tr_up').removeClass('tr_down')
                counter[6] = 2;
                counter[8] = 2;
                
            });
        
            $('#sort_en_date_review').click(function() {
        
                sor("en_date", stages_num_id[2], "review", 8, "third_row_tr_review")
                $("#second_row_tr_review").removeClass('tr_up').removeClass('tr_down')
                $("#first_row_tr_review").removeClass('tr_up').removeClass('tr_down')
                counter[6] = 2;
                counter[7] = 2;
                
            });
        
            $('#sort_done').click(function() {
        
                sor("title", stages_num_id[3], "done", 9, "first_row_tr_done")
                $("#second_row_tr_done").removeClass('tr_up').removeClass('tr_down')
                $("#third_row_tr_done").removeClass('tr_up').removeClass('tr_down')
                counter[10] = 2;
                counter[11] = 2;
        
            });
        
            $('#sort_cr_date_done').click(function() {
        
                sor("cr_date", stages_num_id[3], "done", 10, "second_row_tr_done")
                $("#first_row_tr_done").removeClass('tr_up').removeClass('tr_down')
                $("#third_row_tr_done").removeClass('tr_up').removeClass('tr_down')
                counter[9] = 2;
                counter[11] = 2;
                
            });
        
            $('#sort_en_date_done').click(function() {
        
                sor("en_date", stages_num_id[3], "done", 11, "third_row_tr_done")
                $("#second_row_tr_done").removeClass('tr_up').removeClass('tr_down')
                $("#first_row_tr_done").removeClass('tr_up').removeClass('tr_down')
                counter[9] = 2;
                counter[10] = 2;
        
            });

        });

})