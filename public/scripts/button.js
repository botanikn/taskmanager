let text_title = []; // Массив, хранящий названия всех task'ов
let text_value = []; // Массив, хранящий содержание всех task'ов
let text_progressbar = []; // Массив, хранящий прогресс всех task'ов
let text_cr_date = []; // Массив, хранящий даты создания всех task'ов
let text_cr_dare_pars = ""; // Переменная хранящая дату создания task'a в удобном виде
let text_ex_date = []; // Массив, хранящий даты предполагаемого окончания всех task'ов
let text_ex_date_pars = ""; // Переменная хранящая дату редполагаемого окончания task'a в удобном виде
let text_stage = []; // Массив, хранящий стадии всех task'ов
let title_s = []; // Массив, хранящий отсортированный массив nas
let title_id = []; // Массив, хранящий только определённые и отсортированные task'и
let text_id = []; // Массив, хранящий id всех task'ов
let number = 0; // Переменная, хранящая количество task'ов в коллекции
let bd = []; // Переменная, хранящая все task'и
let stage_change = ""; // Переменная, хранящая стадию task'а после его редактирования
let div_stage; // Переменная, хранящая информацию, в какой столбец будет отнесён task
let style; // Переменная, хранящая информацию, каким цветом будет отображаться название task'а
let done = 0; // Переменная, хранящая количество выполненных заданий
let title = ""; // Переменная, хранящая будущее название task'а после редактирования
let value = ""; // Переменная, хранящая будущее содержание task'а после редактирования
let progress; // Переменная, хранящая будущую шкалу прогресса task'а после редактирования
let en = ""; // Переменная, хранящая будущую введённую дату планируемого окончания task'а после редактирования
let en_cor; // Переменная, хранящая обработанную переменную en
let t = ""; // Переменная, хранящая название task'а во время его создания
let v = ""; // Переменная, хранящая содержание task'а во время его создания
let d = ""; // Переменная, хранящая дату планируемого окончания task'а во время его создания
let extra = 0; // Переменная, хранящая количество ненужных task'ов во время сортировки
let needed = 0; // Переменная, хранящая количество нужных task'ов во время сортировки
let cl; // Переменная, хранящая class task'а
let cl_change; // Переменная, хранящая class task'a, который он получит после редактирования
let div_stage_change; // Переменная, хранящая хранящая информацию, в какой столбец будет отнесён task после редактирования
let style_change; // Переменная, хранящая цвет отображения названия task'а после редактирования
let text_cr_dare_pars_mas = []; // Массив, хранящий все даты создания task'ов в удобном виде
let text_ex_date_pars_mas = []; // Массив, хранящий все даты предполагаемого окончания task'ов в удобном виде
let stages_collection_id = []; // Массив, хранящий id всех стадий

$(document).ready(function() {

    // Получение стадий

    axios.get('/api/v1/stages'
    
        ).then((stages_response) => {

            for (let t = 0; t < 4; t++) {

                if (stages_response.data.stages[t].name == "ready") {

                    stages_collection_id[0] = stages_response.data.stages[t]._id;

                }
                else if (stages_response.data.stages[t].name == "progress") {

                    stages_collection_id[1] = stages_response.data.stages[t]._id;

                }
                else if (stages_response.data.stages[t].name == "review") {

                    stages_collection_id[2] = stages_response.data.stages[t]._id;

                }
                if (stages_response.data.stages[t].name == "done") {

                    stages_collection_id[3] = stages_response.data.stages[t]._id;

                }

            }

        }).catch(function() {

            console.log('nothing');

        })

    console.log(stages_collection_id);

    // Получение task'ов

    axios.get('/api/v1/tasks'
        
        ).then((response) => {

            number = response.data.tasks.length;
            bd = response.data.tasks;

            for (let i = 0; i < number; i++) {

                text_id.push(bd[i]._id);
                text_title.push(bd[i].title);
                text_value.push(bd[i].value);
                text_progressbar.push(bd[i].completeProgress);
                text_cr_date.push(bd[i].creationDate);
                text_ex_date.push(bd[i].expiredDate);
                text_stage.push(bd[i].stage);

                for (let f1 = 0; f1 < 10; f1++) {
                        
                    text_cr_dare_pars = text_cr_dare_pars + text_cr_date[i][f1];

                }

                text_cr_dare_pars_mas.push(text_cr_dare_pars);

                for (let f2 = 0; f2 < 10; f2++) {
                        
                    text_ex_date_pars = text_ex_date_pars + text_ex_date[i][f2];

                }

                text_ex_date_pars_mas.push(text_ex_date_pars);

                if (text_stage[i] == stages_collection_id[0]) {

                    div_stage = "div#ready";
                    style = "ready_color";
                    cl = "taskready";

                }
                else if (text_stage[i] == stages_collection_id[1]) {

                    div_stage = "div#progress";
                    style = "progress_color";
                    cl = "taskprogress";

                }
                else if (text_stage[i] == stages_collection_id[2]) {

                    div_stage = "div#review";
                    style = "review_color";
                    cl = "taskreview";

                }
                else if (text_stage[i] == stages_collection_id[3]) {

                    div_stage = "div#done";
                    style = "done_color";
                    cl = "taskdone";
                    done++;

                }

                // Вывод task'ов

                let main_div = $(`
            
                    <div class="${cl}" id="${text_id[i]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="${style}">${text_title[i]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="${text_id[i]}" id="sel_r${i}" class="redak">Редактировать</button>
                                    <button value="${text_id[i]}" id="sel_u${i}" class="udalen">Удалить</button>
                                </div>
                            </div>
                        </div>
                        <div class="middle">
                            <p>${text_value[i]}</p>
                        </div>
                        <div class="progressbar">
                            <progress max="100" value="${text_progressbar[i]}"></progress>
                        </div>
                        <div class="start_date">
                            <p>Дата начала - ${text_cr_dare_pars}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${text_ex_date_pars}</p>
                        </div>
                    </div>
                
                `).appendTo(div_stage);

                // Кнопка удаления

                text_cr_dare_pars = "";
                text_ex_date_pars = "";

            }

            let coli = $(`<p>${done} / ${number}</p>`).appendTo("#coli");
            let find = $(`<center><progress max="${number}" value="${done}"></progress>`).appendTo("#pr");
            

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

            $('#title').css({

                'border-color': 'red',
                'border-width': '1px',
                'border-style': 'solid'
                
            });

        }

        if (t != "") {

            $('#title').css({

                'border-style': 'none'
                
            });

        }

        if (v == "") {

            $('#value').css({

                'border-color': 'red',
                'border-width': '1px',
                'border-style': 'solid'
                
            });

        }

        if (v != "") {

            $('#value').css({

                'border-style': 'none'
                
            });

        }

        if (d == "") {

            $('#date').css({

                'border-color': 'red',
                'border-width': '1px',
                'border-style': 'solid'
                
            });

        }

        if (d != "") {

            $('#date').css({

                'border-style': 'none'
                
            });

        }

        if (t != "" && v != "" && d != "") {

            axios.post('/api/v1/tasks', {

                title: t,
                value: v,
                expiredDate: d_cor,
                stage: stages_collection_id
                

            }).then(function() {

                console.log("Query is successful");
                location.reload();

            }).catch(function() {

                console.log("Query is not successful");

            });

        }

    });

    // Кнопка сортировки по названию в стадии ready

    function sort(parametr, sort_stage, sort_class, sort_color, sorted_div) {

        let nas = []; // Массив, хранящий id только определённые task'и, например только стадию ready ( и нули, которые обозначают не подходящие)
        title_s = [];
        title_id = [];
        extra = 0;
        needed = 0;

        console.log(`sort_stage = ${sort_stage}`);
        console.log(`sort_class = ${sort_class}`);
        console.log(`sort_color = ${sort_color}`);
        console.log(`sorted_div = ${sorted_div}`);
        console.log(`parametr = ${parametr}`);


        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == `${sort_stage}`) {

                nas[a] = parametr[a].toLowerCase() + a;
                needed++;

            }

            else {

                nas[a] = 0;

            }
        }

        console.log(`first mas = ${nas}`)

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                extra++;

            }

        }

        title_s = nas.sort();
        console.log(title_s);

        if (sort_stage == stages_collection_id[3]) {

            extra = extra - 1;

        }

        for (let b = extra + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`extra = ${extra}`);
        extra = extra + 1;
        let text_cr_dare_pars_mas_dop = [];
        let text_ex_date_pars_mas_dop = [];

        $(`.${sort_class}`).remove();


        for (let c = 0; c < needed; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                text_cr_dare_pars = text_cr_dare_pars + text_cr_date[title_id[c]][f1];

            }

            text_cr_dare_pars_mas_dop.push(text_cr_dare_pars);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                text_ex_date_pars = text_ex_date_pars + text_ex_date[title_id[c]][f2];

            }

            text_ex_date_pars_mas_dop.push(text_ex_date_pars);

            // Вывод отсортированных task'ов

            let sort_div = $(`
            
                    <div class=${sort_class} id="id${text_id[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class=${sort_color}>${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="${text_id[title_id[c]]}" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="${text_id[title_id[c]]}" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                </div>
                            </div>
                        </div>
                        <div class="middle">
                            <p>${text_value[title_id[c]]}</p>
                        </div>
                        <div class="progressbar">
                            <progress max="100" value="${text_progressbar[title_id[c]]}"></progress>
                        </div>
                        <div class="start_date">
                            <p>Дата начала - ${text_cr_dare_pars}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${text_ex_date_pars}</p>
                        </div>
                    </div>
                
                `).appendTo(sorted_div);

            text_cr_dare_pars = "";
            text_ex_date_pars = "";

        }

        
    }

    $('#sort_ready').click(function() {
        
        sort(text_title, stages_collection_id[0], "taskready", "ready_color", "div#ready")
    
    });
    

    $('#sort_cr_date_ready').click(function() {

        sort(text_cr_date, stages_collection_id[0], "taskready", "ready_color", "div#ready")
    
    });

    $('#sort_en_date_ready').click(function() {

        sort(text_ex_date, stages_collection_id[0], "taskready", "ready_color", "div#ready")

    });

    $('#sort_progress').click(function() {

        sort(text_title, stages_collection_id[1], "taskprogress", "progress_color", "div#progress")

    });

    $('#sort_cr_date_progress').click(function() {

        sort(text_cr_date, stages_collection_id[1], "taskprogress", "progress_color", "div#progress")
 
    });

    $('#sort_en_date_progress').click(function() {

        sort(text_ex_date, stages_collection_id[1], "taskprogress", "progress_color", "div#progress")
        
    });

    $('#sort_review').click(function() {

        sort(text_title, stages_collection_id[2], "taskreview", "review_color", "div#review")
        
    });

    $('#sort_cr_date_review').click(function() {

        sort(text_cr_date, stages_collection_id[2], "taskreview", "review_color", "div#review")
        
    });

    $('#sort_en_date_review').click(function() {

        sort(text_ex_date, stages_collection_id[2], "taskreview", "review_color", "div#review")
        
    });

    $('#sort_done').click(function() {

        sort(text_title, stages_collection_id[3], "taskdone", "done_color", "div#done")

    });

    $('#sort_cr_date_done').click(function() {

        sort(text_cr_date, stages_collection_id[3], "taskdone", "done_color", "div#done")
        
    });

    $('#sort_en_date_done').click(function() {

        sort(text_ex_date, stages_collection_id[3], "taskdone", "done_color", "div#done")

    });



    let proba = document.querySelector("#main_part");
    proba.onclick = function(event) {

        // Редактирование

        if (event.target.className == 'redak') {

        let ev = event.target.value;
        
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
                    <center><input type="text" class="title_input" placeholder="Введите название"></center>
                </div>
                <div class="window_value">
                    <center><input type="text" class="value_input" placeholder="Введите содержание"></center>
                </div>
                <div class="window_en_date">
                    <center><input type="date" class="en_date_input" placeholder="Введите дату завершения"></center>
                </div>
                <div class="window_progress">
                    <center><input type="range" min="0" max="100" class="progressbar_input"></center>
                </div>
                <div class="window_stage">
                    <div class="window_ready"><center><input type="button" class="ready_input" value="Ready"></div>
                    <div class="window_progress"><center><input type="button" class="progress_input" value="Progress"></div>
                    <div class="window_review"><center><input type="button" class="review_input" value="Review"></div>
                    <div class="window_done"><center><input type="button" class="done_input" value="Done"></div>
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

        $('.ready_input').click(function() {

            stage_change = stages_collection_id[0];
            cl_change = "taskready";
            div_stage_change = "div#ready";
            style_change = "ready_color";

        })

        $('.progress_input').click(function() {

            stage_change = stages_collection_id[1];
            cl_change = "taskprogress";
            div_stage_change = "div#progress";
            style_change = "progress_color";

        })

        $('.review_input').click(function() {

            stage_change = stages_collection_id[2];
            cl_change = "taskreview";
            div_stage_change = "div#review";
            style_change = "review_color";

        })

        $('.done_input').click(function() {

            stage_change = stages_collection_id[3];
            cl_change = "taskdone";
            div_stage_change = "div#done";
            style_change = "done_color";

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

                $('.title_input').css({

                    'border-color': 'red',
                    'border-width': '1px',
                    'border-style': 'solid'
                    
                });

            }

            if (title != "") {

                $('.title_input').css({

                    'border-style': 'none'
                    
                });

            }

            if (value == "") {

                $('.value_input').css({

                    'border-color': 'red',
                    'border-width': '1px',
                    'border-style': 'solid'
                    
                });

            }

            if (value != "") {

                $('.value_input').css({

                    'border-style': 'none'
                    
                });

            }

            if (en == "") {

                $('.en_date_input').css({

                    'border-color': 'red',
                    'border-width': '1px',
                    'border-style': 'solid'
                    
                });

            }

            if (en != "") {

                $('.en_date_input').css({

                    'border-style': 'none'
                    
                });

            }

            /*Валидация - конец*/

            if (title != "" && value != "" && en != "" && stage_change != "") {

                console.log(ev);
                $(`#${ev}`).remove();

                axios.patch(`/api/v1/tasks/${ev}`, {

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
                $(`#id${ev}`).remove();


            }).catch(function() {

                console.log('Query is not successful');

            })

    }

} 

});