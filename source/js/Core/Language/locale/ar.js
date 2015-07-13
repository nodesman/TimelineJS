/* Arabic LANGUAGE================================================== */
if (typeof VMM != 'undefined') {
    VMM.Language = {
        lang: "ar",
        right_to_left: true,
        api: {
            wikipedia: "ar"
        },
        date: {
            month: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            month_abbr: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            day: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            day_abbr: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
        },
        dateformats: {
            year: "yyyy",
            month_short: "mmm",
            month: "mmmm yyyy",
            full_short: "mmm d",
            full: "mmmm d',' yyyy",
            time_short: "h:MM:SS TT",
            time_no_seconds_short: "h:MM TT",
            time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
            full_long: "mmm d',' yyyy 'at' hh:MM TT",
            full_long_small_date: "hh:MM TT'<br/><small>mmm d',' yyyy'</small>'"
        },
        messages: {
            loading_timeline: "جاري التحميل... ",
            return_to_title: "العودة",
            expand_timeline: "تكبير العرض",
            contract_timeline: "الاتفاقية",
            wikipedia: "من ويكيبيديا, الموسوعة الحرة",
            loading_content: "تحميل المحتوى",
            loading: "تحميل",
            swipe_nav: "Swipe to Navigate"
        }
    }
}