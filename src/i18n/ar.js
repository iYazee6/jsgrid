(function(jsGrid) {

    jsGrid.locales.ar = {
        grid: {
            noDataContent: "لا توجد بيانات",
            deleteConfirm: "هل انت متأكد من الحذف؟",
            pagerFormat: "الصفحات: {first} {prev} {pages} {next} {last} &nbsp;&nbsp; [ {pageIndex} من {pageCount} ]",
            pagePrevText: "السابقة",
            pageNextText: "التالية",
            pageFirstText: "الأولى",
            pageLastText: "الأخيرة",
            loadMessage: "جاري التحميل...",
            invalidMessage: "عملية غير ناجحة!"
        },

        loadIndicator: {
            message: "جاري التحميل..."
        },

        fields: {
            control: {
                searchModeButtonTooltip: "بحث",
                insertModeButtonTooltip: "اضافة",
                editButtonTooltip: "تعديل",
                deleteButtonTooltip: "حذف",
                searchButtonTooltip: "يحث",
                clearFilterButtonTooltip: "تصفية",
                insertButtonTooltip: "اضافة جديد",
                updateButtonTooltip: "تحديث الصف",
                cancelEditButtonTooltip: "الغاء العملية"
            }
        },

        validators: {
            required: { message: "حقل مطلوب" },
            rangeLength: { message: "طول الحقل خارج النطاق المسموح" },
            minLength: { message: "حجم الحقل أقل من المسموح" },
            maxLength: { message: "حجم الحقل تجاوز المسموح" },
            pattern: { message: "الحقل لا يتوافق مع النمط المحدد" },
            range: { message: "الحقل خارج النطاق المحدد" },
            min: { message: "القيمة منخفضة للغاية" },
            max: { message: "القيمة مرتفعة للغاية" }
        }
    };

}(jsGrid, jQuery));
