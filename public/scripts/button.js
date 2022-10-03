let text_title = [];
let text_value = [];
let text_progressbar = [];
let text_cr_date = [];
let conc = "";
let text_ex_date = [];
let sonc = "";
let text_stage = [];
let some = [];
let title_s = [];
let rar;
let title_id = [];
let text_id = [];
let number = 0;
let id_b = 0;
let bd = [];
let a_s = "";
let div_stage;
let style;
let done = 0;
let title = "";
let title_cl = "";
let value = "";
let value_cl = "";
let progress;
let en = "";
let en_cl = "";
let en_cor;
let a_s_cl;
let t = "";
let v = "";
let d = "";
let odin = 0;
let bon = 0;
let cl;
let zam = [];
let cl_ch;
let div_stage_ch;
let style_ch;
let conc_mas = [];
let sonc_mas = [];

$(document).ready(function() {

    axios.get('/api/v1/tasks'
        
        ).then((response) => {

            number = response.data.tasks.length;
            console.log(number);
            bd = response.data.tasks;
            console.log(bd);

            for (let i = 0; i < number; i++) {

                text_id.push(bd[i]._id);
                text_title.push(bd[i].title);
                text_value.push(bd[i].value);
                text_progressbar.push(bd[i].completeProgress);
                text_cr_date.push(bd[i].creationDate);
                text_ex_date.push(bd[i].expiredDate);
                text_stage.push(bd[i].stage);

                for (let f1 = 0; f1 < 10; f1++) {
                        
                    conc = conc + text_cr_date[i][f1];

                }

                conc_mas.push(conc);

                for (let f2 = 0; f2 < 10; f2++) {
                        
                    sonc = sonc + text_ex_date[i][f2];

                }

                sonc_mas.push(sonc);

                if (text_stage[i] == "63132585fdc7b119e4989363") {

                    div_stage = "div#ready";
                    style = "ready_color";
                    cl = "taskready";

                }
                else if (text_stage[i] == "63132585fdc7b119e4989364") {

                    div_stage = "div#progress";
                    style = "progress_color";
                    cl = "taskprogress";

                }
                else if (text_stage[i] == "63132585fdc7b119e4989365") {

                    div_stage = "div#review";
                    style = "review_color";
                    cl = "taskreview";

                }
                else if (text_stage[i] == "63132585fdc7b119e4989366") {

                    div_stage = "div#done";
                    style = "done_color";
                    cl = "taskdone";
                    done++;

                }

                let main_div = $(`
            
                    <div class="${cl}" id="id${i}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="${style}">${text_title[i]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${i}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${i}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo(div_stage);

                
                

                $(`#sel_r${i}`).click(function () {

                    console.log(`conc = ${conc_mas[i]}`);
                    
                    let main = document.querySelector("body");
                    main.classList.add("readable");

                    let pre_red_window = $(`
                    
                        <div class="pre_red_window">
                        </div>
                    
                    `).appendTo('html')

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

                    a_s = text_stage[i];

                    $('.ready_input').click(function() {

                        a_s = "63132585fdc7b119e4989363";
                        cl_ch = "taskready";
                        div_stage_ch = "div#ready";
                        style_ch = "ready_color";

                    })

                    $('.progress_input').click(function() {

                        a_s = "63132585fdc7b119e4989364";
                        cl_ch = "taskprogress";
                        div_stage_ch = "div#progress";
                        style_ch = "progress_color";

                    })

                    $('.review_input').click(function() {

                        a_s = "63132585fdc7b119e4989365";
                        cl_ch = "taskreview";
                        div_stage_ch = "div#review";
                        style_ch = "review_color";

                    })

                    $('.done_input').click(function() {

                        a_s = "63132585fdc7b119e4989366";
                        cl_ch = "taskdone";
                        div_stage_ch = "div#done";
                        style_ch = "done_color";

                    })

                    $('.no_input').click(function() {

                        $('.red_window').remove();
                        $('.pre_red_window').remove();
                        main.classList.remove("readable");

                    })

                    $('.yes_input').click(function() {

                        main.classList.remove("readable");
                        title = document.querySelector('.title_input').value;
                        title_cl = document.querySelector('.title_input');
                        value = document.querySelector('.value_input').value;
                        value_cl = document.querySelector('.value_input');
                        progress = document.querySelector('.progressbar_input').value;
                        en = document.querySelector('.en_date_input').value;
                        en_cl = document.querySelector('.en_date_input');
                        en_cor = Date.parse(en);
                        a_s_cl = document.querySelector('.window_stage');

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

                        if (title != "" && value != "" && en != "" && a_s != "") {

                            console.log(text_id[i]);
                            $(`#id${i}`).remove();

                            let change_div = $(`
            
                                    <div class="${cl_ch}" id="id${i}">
                                        <div class="header">
                                            <div class="header_title">
                                                <center><p class="${style_ch}">${title}</p></center>
                                            </div>
                                            <div class="menu">
                                                <input class="drop_button" value="..." type="button">
                                                <div class="drop_content">
                                                    <button value="red" id="sel_r${i}" class="redak">Редактировать</button>
                                                    <button value="udal" id="sel_u${i}" class="udalen">Удалить</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="middle">
                                            <p>${value}</p>
                                        </div>
                                        <div class="progressbar">
                                            <progress max="100" value="${progress}"></progress>
                                        </div>
                                        <div class="start_date">
                                            <p>Дата начала - ${conc_mas[i]}</p>
                                        </div>
                                        <div class="final_date">
                                            <p>Дата завершения - ${sonc_mas[i]}</p>
                                        </div>
                                    </div>
                                
                                `).appendTo(div_stage_ch);

                            axios.patch(`/api/v1/tasks/${text_id[i]}`, {

                                completeProgress: progress,
                                title: title,
                                value: value,
                                expiredDate: en_cor,
                                stage: a_s

                            }).then(function() {

                                console.log("Query is successful");
                                $('.red_window').remove();
                                $('.pre_red_window').remove();
                                
                                
                                // location.reload();
                    
                            }).catch(function() {
                    
                                console.log("Query is not successful");
                    
                            });

                        }

                        title = "";
                        value = "";
                        en = "";
                        a_s = "";

                    })

                })

                $(`#sel_u${i}`).click(function() {

                    axios.delete(`/api/v1/tasks/${text_id[i]}`
                        
                        ).then(function() {

                            console.log('Query is successful');
                            $(`#id${i}`).remove();


                        }).catch(function() {

                            console.log('Query is not successful');

                        })

                })

                conc = "";
                sonc = "";

            }

            let coli = $(`<p>${done} / ${number}</p>`).appendTo("#coli");
            let find = $(`<center><progress max="${number}" value="${done}"></progress>`).appendTo("#pr");
            

        });

        

        

    $('#add').click(function() {

        t = document.querySelector('#title').value;
        let t_cl = document.querySelector('#title');
        v = document.querySelector('#value').value;
        let v_cl = document.querySelector('#value');
        d = document.querySelector('#date').value;
        let d_cl = document.querySelector('#date');
        let d_cor = Date.parse(d);
        console.log(`Название задачи - ${t}`);
        console.log(`Содержание задачи - ${v}`);
        console.log(`Планируемая дата завершения задачи - ${d}`);

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
                stage: "63132585fdc7b119e4989363"
                

            }).then(function() {

                console.log("Query is successful");
                location.reload();

            }).catch(function() {

                console.log("Query is not successful");

            });

        }

    });

    

    $('#test').click(function() {



    });

    $('#sort_ready').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989363") {

                nas[a] = text_title[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(title_s);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskready").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskready" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="ready_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#ready");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                console.log(`sonc_mas_dop[title_id[c]] = ${sonc_mas_dop[c]}`)

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();
                        

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

    $('#sort_cr_date_ready').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989363") {

                nas[a] = text_cr_date[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(`Сортированные даты = ${title_s}`);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskready").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskready" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="${style}">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#ready");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

    $('#sort_en_date_ready').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989363") {

                nas[a] = text_ex_date[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(`Сортированные даты = ${title_s}`);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskready").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskready" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="${style}">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#ready");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

    $('#sort_progress').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989364") {

                nas[a] = text_title[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(title_s);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskprogress").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskprogress" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="progress_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${title_id[c]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${title_id[c]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#progress");

                $(`#sel_r${title_id[c]}`).click(function () {
                        
                    let main = document.querySelector("body");
                    main.classList.add("readable");
        
                    let pre_red_window = $(`
                    
                        <div class="pre_red_window">
                        </div>
                    
                    `).appendTo('html')
        
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
        
                    a_s = text_stage[title_id[c]];
        
                    $('.ready_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989363";
                        cl_ch = "taskready";
                        div_stage_ch = "div#ready";
                        style_ch = "ready_color";
        
                    })
        
                    $('.progress_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989364";
                        cl_ch = "taskprogress";
                        div_stage_ch = "div#progress";
                        style_ch = "progress_color";
        
                    })
        
                    $('.review_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989365";
                        cl_ch = "taskreview";
                        div_stage_ch = "div#review";
                        style_ch = "review_color";
        
                    })
        
                    $('.done_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989366";
                        cl_ch = "taskdone";
                        div_stage_ch = "div#done";
                        style_ch = "done_color";
        
                    })
        
                    $('.no_input').click(function() {
        
                        $('.red_window').remove();
                        $('.pre_red_window').remove();
                        main.classList.remove("readable");
        
                    })
        
                    $('.yes_input').click(function() {
        
                        main.classList.remove("readable");
                        title = document.querySelector('.title_input').value;
                        title_cl = document.querySelector('.title_input');
                        value = document.querySelector('.value_input').value;
                        value_cl = document.querySelector('.value_input');
                        progress = document.querySelector('.progressbar_input').value;
                        en = document.querySelector('.en_date_input').value;
                        en_cl = document.querySelector('.en_date_input');
                        en_cor = Date.parse(en);
                        a_s_cl = document.querySelector('.window_stage');
        
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
        
                        if (title != "" && value != "" && en != "" && a_s != "") {
        
                            console.log(text_id[title_id[c]]);
                            $(`#id${[title_id[c]]}`).remove();

                            let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">    
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);
        
                            axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {
        
                                completeProgress: progress,
                                title: title,
                                value: value,
                                expiredDate: en_cor,
                                stage: a_s
        
                            }).then(function() {
        
                                console.log("Query is successful");
                                $('.red_window').remove();
                                $('.pre_red_window').remove();
                    
                            }).catch(function() {
                    
                                console.log("Query is not successful");
                    
                            });
        
                        }
        
                        title = "";
                        value = "";
                        en = "";
                        a_s = "";
        
                    })
        
                })
        
                $(`#sel_u${title_id[c]}`).click(function() {
        
                    axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                        
                        ).then(function() {
        
                            console.log('Query is successful');
                            $(`#id${[title_id[c]]}`).remove();
        
                        }).catch(function() {
        
                            console.log('Query is not successful');
        
                        })
        
                })

            sonc = " ";
            conc = " ";

        }

        console.log(`text_title = ${text_title}`);

        
        

    });

    $('#sort_cr_date_progress').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989364") {

                nas[a] = text_cr_date[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(`Сортированные даты = ${title_s}`);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskprogress").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskprogress" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="progress_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#progress");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

    $('#sort_en_date_progress').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989364") {

                nas[a] = text_ex_date[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(`Сортированные даты = ${title_s}`);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskprogress").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskprogress" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="progress_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#progress");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

    $('#sort_review').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989365") {

                nas[a] = text_title[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(title_s);
        // let title_id = [];

        for (let b = odin; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskreview").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskreview" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="review_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${c}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${c}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#review");

                $(`#sel_r${title_id[c]}`).click(function () {
                        
                    let main = document.querySelector("body");
                    main.classList.add("readable");
        
                    let pre_red_window = $(`
                    
                        <div class="pre_red_window">
                        </div>
                    
                    `).appendTo('html')
        
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
        
                    a_s = text_stage[title_id[c]];
        
                    $('.ready_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989363";
                        cl_ch = "taskready";
                        div_stage_ch = "div#ready";
                        style_ch = "ready_color";
        
                    })
        
                    $('.progress_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989364";
                        cl_ch = "taskprogress";
                        div_stage_ch = "div#progress";
                        style_ch = "progress_color";
        
                    })
        
                    $('.review_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989365";
                        cl_ch = "taskreview";
                        div_stage_ch = "div#review";
                        style_ch = "review_color";
        
                    })
        
                    $('.done_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989366";
                        cl_ch = "taskdone";
                        div_stage_ch = "div#done";
                        style_ch = "done_color";
        
                    })
        
                    $('.no_input').click(function() {
        
                        $('.red_window').remove();
                        $('.pre_red_window').remove();
                        main.classList.remove("readable");
        
                    })
        
                    $('.yes_input').click(function() {
        
                        main.classList.remove("readable");
                        title = document.querySelector('.title_input').value;
                        title_cl = document.querySelector('.title_input');
                        value = document.querySelector('.value_input').value;
                        value_cl = document.querySelector('.value_input');
                        progress = document.querySelector('.progressbar_input').value;
                        en = document.querySelector('.en_date_input').value;
                        en_cl = document.querySelector('.en_date_input');
                        en_cor = Date.parse(en);
                        a_s_cl = document.querySelector('.window_stage');
        
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
        
                        if (title != "" && value != "" && en != "" && a_s != "") {
        
                            console.log(text_id[title_id[c]]);
                            $(`#id${[title_id[c]]}`).remove();

                            let change_div = $(`
            
                                <div class="${cl_ch}" id="id${[title_id[c]]}">
                                    <div class="header">
                                        <div class="header_title">
                                            <center><p class="${style_ch}">${title}</p></center>
                                        </div>
                                        <div class="menu">
                                            <input class="drop_button" value="..." type="button">
                                            <div class="drop_content">
                                                <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                                <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="middle">
                                        <p>${value}</p>
                                    </div>
                                    <div class="progressbar">
                                        <progress max="100" value="${progress}"></progress>
                                    </div>
                                    <div class="start_date">
                                        <p>Дата начала - ${conc_mas_dop[c]}</p>
                                    </div>
                                    <div class="final_date">
                                        <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                    </div>
                                </div>
                        
                            `).appendTo(div_stage_ch);
        
                            axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {
        
                                completeProgress: progress,
                                title: title,
                                value: value,
                                expiredDate: en_cor,
                                stage: a_s
        
                            }).then(function() {
        
                                console.log("Query is successful");
                                $('.red_window').remove();
                                $('.pre_red_window').remove();
                                        
                            }).catch(function() {
                    
                                console.log("Query is not successful");
                    
                            });
        
                        }
        
                        title = "";
                        value = "";
                        en = "";
                        a_s = "";
        
                    })
        
                })
        
                $(`#sel_u${title_id[c]}`).click(function() {
        
                    axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                        
                        ).then(function() {
        
                            console.log('Query is successful');
                            $(`#id${[title_id[c]]}`).remove();
        
                        }).catch(function() {
        
                            console.log('Query is not successful');
        
                        })
        
                })

            conc = "";
            sonc = "";

        }

        console.log(`text_title = ${text_title}`);
        

    });

    $('#sort_cr_date_review').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989365") {

                nas[a] = text_cr_date[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(`Сортированные даты = ${title_s}`);
        // let title_id = [];

        for (let b = odin; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskreview").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskreview" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="review_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#review");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

    $('#sort_en_date_review').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989365") {

                nas[a] = text_ex_date[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(`Сортированные даты = ${title_s}`);
        // let title_id = [];

        for (let b = odin; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskreview").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskreview" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="review_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#review");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

    $('#sort_done').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989366") {

                nas[a] = text_title[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(title_s);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskdone").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskdone" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="done_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#done");

                $(`#sel_r${title_id[c]}`).click(function () {
                        
                    let main = document.querySelector("body");
                    main.classList.add("readable");
        
                    let pre_red_window = $(`
                    
                        <div class="pre_red_window">
                        </div>
                    
                    `).appendTo('html')
        
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
        
                    a_s = text_stage[title_id[c]];
        
                    $('.ready_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989363";
                        cl_ch = "taskready";
                        div_stage_ch = "div#ready";
                        style_ch = "ready_color";
        
                    })
        
                    $('.progress_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989364";
                        cl_ch = "taskprogress";
                        div_stage_ch = "div#progress";
                        style_ch = "progress_color";
        
                    })
        
                    $('.review_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989365";
                        cl_ch = "taskreview";
                        div_stage_ch = "div#review";
                        style_ch = "review_color";
        
                    })
        
                    $('.done_input').click(function() {
        
                        a_s = "63132585fdc7b119e4989366";
                        cl_ch = "taskdone";
                        div_stage_ch = "div#done";
                        style_ch = "done_color";
        
                    })
        
                    $('.no_input').click(function() {
        
                        $('.red_window').remove();
                        $('.pre_red_window').remove();
                        main.classList.remove("readable");
        
                    })
        
                    $('.yes_input').click(function() {
        
                        main.classList.remove("readable");
                        title = document.querySelector('.title_input').value;
                        title_cl = document.querySelector('.title_input');
                        value = document.querySelector('.value_input').value;
                        value_cl = document.querySelector('.value_input');
                        progress = document.querySelector('.progressbar_input').value;
                        en = document.querySelector('.en_date_input').value;
                        en_cl = document.querySelector('.en_date_input');
                        en_cor = Date.parse(en);
                        a_s_cl = document.querySelector('.window_stage');
        
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
        
                        if (title != "" && value != "" && en != "" && a_s != "") {
        
                            console.log(text_id[title_id[c]]);
                            $(`#id${[title_id[c]]}`).remove();

                            let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);
        
                            axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {
        
                                completeProgress: progress,
                                title: title,
                                value: value,
                                expiredDate: en_cor,
                                stage: a_s
        
                            }).then(function() {
        
                                console.log("Query is successful");
                                $('.red_window').remove();
                                $('.pre_red_window').remove();
                    
                            }).catch(function() {
                    
                                console.log("Query is not successful");
                    
                            });
        
                        }
        
                        title = "";
                        value = "";
                        en = "";
                        a_s = "";
        
                    })
        
                })
        
                $(`#sel_u${title_id[c]}`).click(function() {
        
                    axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                        
                        ).then(function() {
        
                            console.log('Query is successful');
                            $(`#id${[title_id[c]]}`).remove();
        
                        }).catch(function() {
        
                            console.log('Query is not successful');
        
                        })
        
                })

            conc = "";
            sonc = "";

        }

        console.log(`text_title = ${text_title}`);

    });

    $('#sort_cr_date_done').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989366") {

                nas[a] = text_cr_date[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(`Сортированные даты = ${title_s}`);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskdone").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskdone" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="done_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#done");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

    $('#sort_en_date_done').click(function() {

        let nas = [];
        title_s = [];
        title_id = [];
        odin = 0;
        bon = 0;

        console.log(`text_title в начале = ${text_title}`);

        for (let a = 0; a < number; a++) {

            if (text_stage[a] == "63132585fdc7b119e4989364") {

                nas[a] = text_ex_date[a].toLowerCase() + a;
                bon++;

            }

            else {

                nas[a] = 0;

            }
        }

        for (a = 1; a < number; a++) {

            if (nas[a] == 0) {

                odin++;

            }

        }

        title_s = nas.sort();
        console.log(`Сортированные даты = ${title_s}`);
        // let title_id = [];

        for (let b = odin + 1; b < number; b++) {

            title_id.push(title_s[b][title_s[b].length - 1]);

        }

        console.log(`title_id[0] = ${title_id[0]}`);
        console.log(`title_id = ${title_id}`);
        console.log(`text_title = ${text_title}`);
        console.log(`title_s = ${title_s}`);
        console.log(`odin = ${odin}`);
        odin = odin + 1;
        let conc_mas_dop = [];
        let sonc_mas_dop = [];

        $(".taskdone").remove();


        for (let c = 0; c < bon; c++) {

            for (let f1 = 0; f1 < 10; f1++) {
                        
                conc = conc + text_cr_date[title_id[c]][f1];

            }

            conc_mas_dop.push(conc);

            for (let f2 = 0; f2 < 10; f2++) {
                    
                sonc = sonc + text_ex_date[title_id[c]][f2];

            }

            sonc_mas_dop.push(sonc);

            let sort_div = $(`
            
                    <div class="taskdone" id="id${[title_id[c]]}">
                        <div class="header">
                            <div class="header_title">
                                <center><p class="done_color">${text_title[title_id[c]]}</p></center>
                            </div>
                            <div class="menu">
                                <input class="drop_button" value="..." type="button">
                                <div class="drop_content">
                                    <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                    <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
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
                            <p>Дата начала - ${conc}</p>
                        </div>
                        <div class="final_date">
                            <p>Дата завершения - ${sonc}</p>
                        </div>
                    </div>
                
                `).appendTo("div#done");

                console.log(`text_title = ${text_title}`);

            $(`#sel_r${title_id[c]}`).click(function () {
                        
                let main = document.querySelector("body");
                main.classList.add("readable");

                let pre_red_window = $(`
                
                    <div class="pre_red_window">
                    </div>
                
                `).appendTo('html')

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

                a_s = text_stage[title_id[c]];

                $('.ready_input').click(function() {

                    a_s = "63132585fdc7b119e4989363";
                    cl_ch = "taskready";
                    div_stage_ch = "div#ready";
                    style_ch = "ready_color";

                })

                $('.progress_input').click(function() {

                    a_s = "63132585fdc7b119e4989364";
                    cl_ch = "taskprogress";
                    div_stage_ch = "div#progress";
                    style_ch = "progress_color";

                })

                $('.review_input').click(function() {

                    a_s = "63132585fdc7b119e4989365";
                    cl_ch = "taskreview";
                    div_stage_ch = "div#review";
                    style_ch = "review_color";

                })

                $('.done_input').click(function() {

                    a_s = "63132585fdc7b119e4989366";
                    cl_ch = "taskdone";
                    div_stage_ch = "div#done";
                    style_ch = "done_color";

                })

                $('.no_input').click(function() {

                    $('.red_window').remove();
                    $('.pre_red_window').remove();
                    main.classList.remove("readable");

                })

                $('.yes_input').click(function() {

                    main.classList.remove("readable");
                    title = document.querySelector('.title_input').value;
                    title_cl = document.querySelector('.title_input');
                    value = document.querySelector('.value_input').value;
                    value_cl = document.querySelector('.value_input');
                    progress = document.querySelector('.progressbar_input').value;
                    en = document.querySelector('.en_date_input').value;
                    en_cl = document.querySelector('.en_date_input');
                    en_cor = Date.parse(en);
                    a_s_cl = document.querySelector('.window_stage');

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

                    if (title != "" && value != "" && en != "" && a_s != "") {

                        console.log(text_id[title_id[c]]);
                        $(`#id${[title_id[c]]}`).remove();

                        let change_div = $(`
            
                            <div class="${cl_ch}" id="id${[title_id[c]]}">
                                <div class="header">
                                    <div class="header_title">
                                        <center><p class="${style_ch}">${title}</p></center>
                                    </div>
                                    <div class="menu">
                                        <input class="drop_button" value="..." type="button">
                                        <div class="drop_content">
                                            <button value="red" id="sel_r${[title_id[c]]}" class="redak">Редактировать</button>
                                            <button value="udal" id="sel_u${[title_id[c]]}" class="udalen">Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="middle">
                                    <p>${value}</p>
                                </div>
                                <div class="progressbar">
                                    <progress max="100" value="${progress}"></progress>
                                </div>
                                <div class="start_date">
                                    <p>Дата начала - ${conc_mas_dop[c]}</p>
                                </div>
                                <div class="final_date">
                                    <p>Дата завершения - ${sonc_mas_dop[c]}</p>
                                </div>
                            </div>
                        
                        `).appendTo(div_stage_ch);

                        axios.patch(`/api/v1/tasks/${text_id[title_id[c]]}`, {

                            completeProgress: progress,
                            title: title,
                            value: value,
                            expiredDate: en_cor,
                            stage: a_s

                        }).then(function() {

                            console.log("Query is successful");
                            $('.red_window').remove();
                            $('.pre_red_window').remove();
                
                        }).catch(function() {
                
                            console.log("Query is not successful");
                
                        });

                    }

                    title = "";
                    value = "";
                    en = "";
                    a_s = "";

                })

            })

            $(`#sel_u${title_id[c]}`).click(function() {

                axios.delete(`/api/v1/tasks/${text_id[title_id[c]]}`
                    
                    ).then(function() {

                        console.log('Query is successful');
                        $(`#id${[title_id[c]]}`).remove();

                    }).catch(function() {

                        console.log('Query is not successful');

                    })

            })

            conc = "";
            sonc = "";

        }

        

        
    });

});