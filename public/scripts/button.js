let stage_change = ""; // Переменная, хранящая стадию task'а после его редактирования
let title = ""; // Переменная, хранящая будущее название task'а после редактирования
let value = ""; // Переменная, хранящая будущее содержание task'а после редактирования
let progress; // Переменная, хранящая будущую шкалу прогресса task'а после редактирования
let en = ""; // Переменная, хранящая будущую введённую дату планируемого окончания task'а после редактирования
let en_cor; // Переменная, хранящая обработанную переменную en
let t = ""; // Переменная, хранящая название task'а во время его создания
let v = ""; // Переменная, хранящая содержание task'а во время его создания
let d = ""; // Переменная, хранящая дату планируемого окончания task'а во время его создания
let cl; // Переменная, хранящая class task'а
let stages_collection = []; // Массив, хранящий id всех стадий
let filterTask; // Массив, хранящий task'и определённых стадий, необходимо для первоначальной отрисовки страницы
let fi_t_2; // Массив, хранящий task'и определённой стадии, необходимо для сортировки
let stages_num_id = []; // Массив, хранящий id стадий
let fil_sor; // Отсортированный массив fi_t_2

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

                // Сортировка task'ов

                function sor(parametr, stage_id, stage_name) {

                    fi_t_2 = response.data.tasks.filter((item) => {

                        return item.stage == stage_id;
    
                    })

                    if (parametr == "title") {

                        fil_sor = fi_t_2.sort((a, b) => {

                            if (a.title.toLowerCase() < b.title.toLowerCase()) {
        
                                return -1;
        
                            }
                            else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        
                                return 1
        
                            }
                            else return 0
        
                        })

                    }
                    else if (parametr == "cr_date") {

                        fil_sor = fi_t_2.sort((a, b) => {

                            if (a.creationDate.toLowerCase() < b.creationDate.toLowerCase()) {
        
                                return -1;
        
                            }
                            else if (a.creationDate.toLowerCase() > b.creationDate.toLowerCase()) {
        
                                return 1
        
                            }
                            else return 0
        
                        })

                    }
                    else if (parametr == "en_date") {

                        fil_sor = fi_t_2.sort((a, b) => {

                            if (a.expiredDate.toLowerCase() < b.expiredDate.toLowerCase()) {
        
                                return -1;
        
                            }
                            else if (a.expiredDate.toLowerCase() > b.expiredDate.toLowerCase()) {
        
                                return 1
        
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

                }

                // Слушатели событий

                $('#sort_ready').click(function() {
        
                    sor("title", stages_num_id[0], "ready")
                
                });

                $('#sort_cr_date_ready').click(function() {

                    sor("cr_date", stages_num_id[0], "ready")
                
                });
            
                $('#sort_en_date_ready').click(function() {
            
                    sor("en_date", stages_num_id[0], "ready")
            
                });
            
                $('#sort_progress').click(function() {
            
                    sor("title", stages_num_id[1], "progress")
            
                });
            
                $('#sort_cr_date_progress').click(function() {
            
                    sor("cr_date", stages_num_id[1], "progress")
             
                });
            
                $('#sort_en_date_progress').click(function() {
            
                    sor("en_date", stages_num_id[1], "progress")
                    
                });
            
                $('#sort_review').click(function() {
            
                    sor("title", stages_num_id[2], "review")
                    
                });
            
                $('#sort_cr_date_review').click(function() {
            
                    sor("cr_date", stages_num_id[2], "review")
                    
                });
            
                $('#sort_en_date_review').click(function() {
            
                    sor("en_date", stages_num_id[2], "review")
                    
                });
            
                $('#sort_done').click(function() {
            
                    sor("title", stages_num_id[3], "done")
            
                });
            
                $('#sort_cr_date_done').click(function() {
            
                    sor("cr_date", stages_num_id[3], "done")
                    
                });
            
                $('#sort_en_date_done').click(function() {
            
                    sor("en_date", stages_num_id[3], "done")
            
                });

            }
                
            )

        });

    // Создание task'а

    $('#add').click(function() {

        t = document.querySelector('#title').value;
        v = document.querySelector('#value').value;
        d = document.querySelector('#date').value;
        let d_cor = Date.parse(d);
        console.log(`Название задачи - ${t}`);
        console.log(`Содержание задачи - ${v}`);
        console.log(`Планируемая дата завершения задачи - ${d}`);

        // Валидация

        if (t == "") {

            $('#title').addClass('inp_error').removeClass('inp');

        }

        if (t != "") {

            $('#title').addClass('inp').removeClass('inp_error');

        }

        if (v == "") {

            $('#value').addClass('inp_error').removeClass('inp');

        }

        if (v != "") {

            $('#value').addClass('inp').removeClass('inp_error');

        }

        if (d == "") {

            $('#date').addClass('inp_error').removeClass('inp');

        }

        if (d != "") {

            $('#date').addClass('inp').removeClass('inp_error');

        }

        if (t != "" && v != "" && d != "") {

            axios.post('/api/v1/tasks', {

                title: t,
                value: v,
                expiredDate: d_cor,
                stage: "1"
                

            }).then(function() {

                console.log("Query is successful");
                location.reload();

            }).catch(function() {

                console.log("Query is not successful");

            });

        }

    });

    let proba = document.querySelector("#main_part");
    proba.onclick = function(event) {

        // Редактирование

        if (event.target.className == 'redak') {

        let ev2 = event.target.id;

        let s_title = ev2.split(" ")[0];
        let s_value = ev2.split(" ")[1];
        let s_prog = ev2.split(" ")[2];
        let s_ex_date = ev2.split(" ")[3];
        let s_stage_id = ev2.split(" ")[4];
        let s_task_id = ev2.split(" ")[5];
        
        let main = document.querySelector("body");
        main.classList.add("readable");

        let pre_red_window = $(`
        
            <div class="pre_red_window">
            </div>
        
        `).appendTo('html')

        // Вывод окна редактирования

        let red_window = $(`
        
            <div class="red_window">
                <div class="window_name">
                    <center><h2>Редактирование</h2></center>
                </div>
                <div class="window_title">
                    <center><input type="text" class="title_input" placeholder="Введите название" value="${s_title}"></center>
                </div>
                <div class="window_value">
                    <center><input type="text" class="value_input" placeholder="Введите содержание" value="${s_value}"></center>
                </div>
                <div class="window_en_date">
                    <center><input type="date" class="en_date_input" placeholder="Введите дату завершения" value="${s_ex_date}"></center>
                </div>
                <div class="window_progress">
                    <center><input type="range" min="0" max="100" class="progressbar_input" value="${s_prog}"></center>
                </div>
                <div class="window_stage">
                    <div class="window_ready"><center><input type="button" id="ready_input" value="Ready"></div>
                    <div class="window_progress"><center><input type="button" id="progress_input" value="Progress"></div>
                    <div class="window_review"><center><input type="button" id="review_input" value="Review"></div>
                    <div class="window_done"><center><input type="button" id="done_input" value="Done"></div>
                </div>
                <div class="choice">
                    <div class="cancel">
                        <center><input type="button" class="no_input" value="Отменить"></center>
                    </div>
                    <div class="approve">
                        <center><input type="button" class="yes_input" value="Сохранить"></center>
                    </div>
                </div>
            </div>
        
        `).appendTo("html");

        stage_change = s_stage_id;

        $('#ready_input').click(function() {

            stage_change = stages_num_id[0];
            $('#ready_input').addClass("ready_pressed");
            $('#progress_input').removeClass("progress_pressed");
            $('#review_input').removeClass("review_pressed");
            $('#done_input').removeClass("done_pressed");

        })

        $('#progress_input').click(function() {

            stage_change = stages_num_id[1];
            $('#ready_input').removeClass("ready_pressed");
            $('#progress_input').addClass("progress_pressed");
            $('#review_input').removeClass("review_pressed");
            $('#done_input').removeClass("done_pressed");

        })

        $('#review_input').click(function() {

            stage_change = stages_num_id[2];
            $('#ready_input').removeClass("ready_pressed");
            $('#progress_input').removeClass("progress_pressed");
            $('#review_input').addClass("review_pressed");
            $('#done_input').removeClass("done_pressed");

        })

        $('#done_input').click(function() {

            stage_change = stages_num_id[3];
            $('#ready_input').removeClass("ready_pressed");
            $('#progress_input').removeClass("progress_pressed");
            $('#review_input').removeClass("review_pressed");
            $('#done_input').addClass("done_pressed");

        })

        $('.no_input').click(function() {

            $('.red_window').remove();
            $('.pre_red_window').remove();
            main.classList.remove("readable");

        })

        $('.yes_input').click(function() {

            main.classList.remove("readable");
            title = document.querySelector('.title_input').value;
            value = document.querySelector('.value_input').value;
            progress = document.querySelector('.progressbar_input').value;
            en = document.querySelector('.en_date_input').value;
            en_cor = Date.parse(en);

            /*Валидация*/

            if (title == "") {

                $('.title_input').addClass("error").removeClass("not_error");

            }

            if (title != "") {

                $('.title_input').addClass("not_error").removeClass("error");

            }

            if (value == "") {

                $('.value_input').addClass("error").removeClass("not_error");

            }

            if (value != "") {

                $('.value_input').addClass("not_error").removeClass("error");

            }

            if (en == "") {

                $('.en_date_input').addClass("error").removeClass("not_error");

            }

            if (en != "") {

                $('.en_date_input').addClass("not_error").removeClass("error");

            }

            /*Валидация - конец*/

            if (title != "" && value != "" && en != "" && stage_change != "") {

                console.log(s_task_id);
                $(`#${s_task_id}`).remove();

                axios.patch(`/api/v1/tasks/${s_task_id}`, {

                    completeProgress: progress,
                    title: title,
                    value: value,
                    expiredDate: en_cor,
                    stage: stage_change

                }).then(function() {

                    console.log("Query is successful");
                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    location.reload();
        
                }).catch(function() {
        
                    console.log("Query is not successful");
        
                });

            }

            title = "";
            value = "";
            en = "";
            stage_change = "";

        })

    }

    else if (event.target.classList == "udalen") {

        // Удаление

        let ev = event.target.value;

        axios.delete(`/api/v1/tasks/${ev}`
                        
            ).then(function() {

                console.log('Query is successful');
                $(`#${ev}`).remove();
                location.reload();


            }).catch(function() {

                console.log('Query is not successful');

            })

    }

} 

});