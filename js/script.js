$('.change-dark-mode').click(() => {

    // Select all elements with class 'bg-white'
    let mode = localStorage.getItem('dark-mode');

    if (mode === "light"){
        localStorage.setItem('dark-mode','light');
        $('.bg-white').each(function () {
            $(this).removeClass('bg-white').addClass('bg-dark');
        });

        $('.light').each(function () {
            $(this).addClass('dark')
            $(this).removeClass('light')
        });
        localStorage.setItem('dark-mode','dark');
        $('.vertical-menu li .dark-mode span').text("حالت روشن");
    }else {
        $('.bg-dark').each(function () {
            $(this).removeClass('bg-dark').addClass('bg-white');
        });

        $('.dark').each(function () {
            $(this).addClass('light')
            $(this).removeClass('dark')
        });
        $('.vertical-menu li .dark-mode span').text("حالت تاریک");
        localStorage.setItem('dark-mode','light');
    }
});

