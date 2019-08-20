$(document).ready(function (){
    function startTimer(time, element) {
        setInterval(function () {

            var diff = new Date(time).getTime() - new Date().getTime();
            if (diff > 0) {
                var seconds = parseInt(diff / 1000);
                var days = parseInt(seconds / 60 / 60 / 24);
                var hours = parseInt(seconds / 60 / 60) - (days * 24);
                var minutes = parseInt(seconds / 60) % 60;
                seconds = seconds % 60;

                $(element).find(".days .number").html(days);
                $(element).find(".hours .number").html(hours);
                $(element).find(".minutes .number").html(minutes);
                $(element).find(".secs .number").html(seconds);
                $(element).fadeIn();
            }
            
        }, 1000);
    }
    var currentLanguage = "en";

    var vi = {
        "menu-wedding-text" : "Hôn Lễ",
        "menu-location-text" : "Địa Điểm",
        "menu-story-text" : "Chuyện Hai Đứa",
        "menu-gallery-text" : "Thư Viện Ảnh",
        "menu-language-text" : "English",
        "btn-change-language" : "English",
        "the-wedding-text" : "Hôn Lễ",
        "days-text" : "Ngày",
        "hours-text" : "Giờ",
        "minutes-text" : "Phút",
        "seconds-text" : "Giây",
        "ceremony-text" : "Thánh Lễ Hôn Phối",
        "story-1-title" : "Đôi bạn chí cốt",
        "story-1-1" : "Tin buồn là không có love story kiểu tình yêu sét đánh cái đùng đâu nha ^^",
        "story-1-2" : "Tụi mình là bạn nối khố từ hồi cấp 3, cái thuở còn tuổi 15 trăng tròn ấy. Hai đứa cùng học, cùng chơi, cùng có nhiều kỉ niệm đẹp tuổi học trò hồn nhiên như chuối chiên cũng như bao đứa mới lớn khác.",
        "story-1-3" : "Rồi mình phát hiện mình cảm nắng “bả” từ năm lớp 11 (T.T). Cái cảm giác ấy cứ lớn dần lên trong mình, cho đến lúc mình nhận ra thì hai đứa đã sắp tốt nghiệp rồi. Cũng thấy phục mình vì lúc đó cái tôi cũng lớn lắm nha, ôi mấy cái chuyện tình cảm vu vơ của con nít tuổi mới lớn ấy mà, haha. Thế rồi “gồng” hết nổi, đành viết thư củ chuối cho “bả” , nhưng cũng chỉ dám hứa hẹn cùng nhau cố gắng cho kì thi đại học sắp tới.",
        "story-1-4" : "Không biết xui hay hên, tụi mình đỗ chung trường đại học, nhưng những năm tháng trên giảng đường cũng lặng lẽ trôi qua với những lo toan riêng của mỗi đứa về cuộc sống, về tương lai. Tụi mình có buổi hẹn đầu tiên khi mình có tháng lương đầu tiên ^^",
    };

    var en = {
        "menu-wedding-text" : "The Wedding",
        "menu-location-text" : "Location",
        "menu-story-text" : "Our Story",
        "menu-gallery-text" : "Gallery",
        "menu-language-text" : "Tiếng Việt",
        "btn-change-language" : "Tiếng Việt",
        "the-wedding-text" : "The Wedding",
        "days-text" : "Days",
        "hours-text" : "Hrs",
        "minutes-text" : "Mins",
        "seconds-text" : "Secs",
        "ceremony-text" : "Ceremony",
        "story-1-title" : "We're best friends",
        "story-1-1" : "It isn't a love from the first sight.",
        "story-1-2" : "We started as friends in a same class in high school in 2005, when we were 15. We studied, played and laugh together as friends, sometimes we shared the earphone of the ipod borrowed from another friend and enjoyed the music together in the time break, but actually, I was there... not for the music :))",
        "story-1-3" : "In the second year of high shool, I found myself had a crush on her. I didn't notice that \"weird\" feeling kept growing up inside me until I realized I might cannot be by her side anymore. There're many \"teenagers\" things happened that we couldn't handle and I thought it's just a feeling of youth and wouldn't last for long. I wrote her a letter, saying that I will focus on the university exam in next year instead and take it as a test for ourselves. She's the main reason made me study so hard for the university <img style='width: 30px' src='./images/nerd.png'/>",
        "story-1-4" : "After the exam in 2008, we managed to get into the same national university in Ho Chi Minh city. But because I am a pessimistic person, during those 4 years of university, I still kept worrying too much about the future and my family's financial condition. Until I found my first job and could earn the money on my own in 2012, we had our first date <img style=\"width: 30px\" src=\"./images/love-heart.png\"/>",
    }

    $(document).ready(function (){
        $(".nav-link.scrollto").click(function (){
            var hash = $(this).attr("scroll-position");
            var position = $("#" + hash).offset().top;

            if (hash == "location" || hash == "story") {
                position -= 50;
            }
            $('html, body').animate({
                scrollTop: position
            }, 1000);
        });

        $("#btn-change-language, #menu-language-text").click(function (){
            
            if (currentLanguage == "en") {
                var language = vi;
                currentLanguage = "vi";
            } else {
                var language = en;
                currentLanguage = "en";
            }

            $.each(language, function(key, value) {
                $("#" + key).html(value);
            });
        });
    });

    jQuery(function ($) {
        startTimer("2020-01-04T05:00:00", $("#church-countdown-box"));
    });
});