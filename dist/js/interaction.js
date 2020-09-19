$(".step-controller li").click(function (e) { 
    
    currentStep = $(this).attr("step")
    
    if (currentStep == "a") {
        
        $(this).siblings().removeClass("active");
        $(this).addClass("active")
        $(this).closest(".three-column").children(".step").hide();
        $(this).closest(".three-column").children(".a").show();
        $(this).closest("section").children(".overflowed").children("img:nth-child(1)").show();
        $(this).closest("section").children(".overflowed").children("img:nth-child(2), img:nth-child(3)").hide();

    } else if (currentStep == "b") {

        $(this).siblings().removeClass("active");
        $(this).addClass("active")
        $(this).closest(".three-column").children(".step").hide();
        $(this).closest(".three-column").children(".b").show();
        $(this).closest("section").children(".overflowed").children("img:nth-child(2)").show();
        $(this).closest("section").children(".overflowed").children("img:nth-child(1), img:nth-child(3)").hide();

    } else {
        $(this).siblings().removeClass("active");
        $(this).addClass("active")
        $(this).closest(".three-column").children(".step").hide();
        $(this).closest(".three-column").children(".c").show();
        $(this).closest("section").children(".overflowed").children("img:nth-child(3)").show();
        $(this).closest("section").children(".overflowed").children("img:nth-child(1), img:nth-child(2)").hide();
    }

});