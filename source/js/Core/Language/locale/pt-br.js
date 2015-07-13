/* Brazilian Portuguese LANGUAGE
================================================== */
if (typeof VMM != 'undefined') {
    VMM.Language = {
        lang: "pt-br",
        api: {
            wikipedia: "pt"
        },
        date: {
            month: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            month_abbr: ["Jan.", "Fev.", "Mar.", "Abr.", "Mai.", "Jun.", "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dez."],
            day: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
            day_abbr: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."]
        },
        dateformats: {
            year: "yyyy",
            month_short: "mmm",
            month: "mmmm 'de' yyyy",
            full_short: "d 'de' mmm",
            full: "d 'de' mmmm',' yyyy",
            time_short: "h:MM:ss TT",
            time_no_seconds_short: "hh:MM TT",
            time_no_seconds_small_date: "hh:MM TT'<br/><small>'d 'de' mmmm',' yyyy'</small>'",
            full_long: "dddd',' d 'de' mmm',' yyyy 'às' hh:MM TT",
            full_long_small_date: "hh:MM TT'<br/><small>'dddd',' d 'de' mmm',' yyyy'</small>'"
        },
        messages: {
            loading_timeline: "Carregando Timeline... ",
            return_to_title: "Voltar para o título",
            expand_timeline: "Expandir Timeline",
            contract_timeline: "Contrair Timeline",
            wikipedia: "Wikipédia, A enciclopédia livre",
            loading_content: "Carregando Conteúdo",
            loading: "Carregando",
            swipe_nav: "Swipe to Navigate"
        }
    }
}