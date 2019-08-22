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
        "ceremony-text-1" : "Thứ 7 - Ngày 4 tháng 1, 2020",
        "ceremony-text-2" : "5 Giờ Sáng - 6 Giờ Sáng",
        "ceremony-text-3" : "Nhà Thờ Cái Mơn",
        "ceremony-description-text" : "Thánh lễ hôn phối sẽ được cử hành tại nhà thờ Cái Mơn vào lúc <strong>5 Giờ Sáng</strong>, <strong>04/01/2020</strong> (dương lịch). Sự hiện diện của quý khách cùng tham dự thánh lễ hôn phối là niềm vinh hạnh lớn cho đôi trẻ và gia đình chúng tôi.",
        "bride-wedding-text" : "Lễ Hỏi",
        "bride-wedding-text-1" : "Thứ 7 - Ngày 4 tháng 1, 2020",
        "bride-wedding-text-2" : "8 Giờ | 11 Giờ | 15 Giờ",
        "bride-wedding-text-3" : "Nhà Đàng Gái",
        "bride-wedding-description-text" : "Sau thánh lễ, tộc đàng trai sẽ đến nhà đàng gái trình sính lễ và cử hành nghi thức dạm hỏi truyền thống vào lúc <strong>8 Giờ Sáng</strong> trước trưởng bối hai họ, theo sau bởi 2 tiệc mừng vào lúc <strong>11 Giờ Sáng</strong> và <strong>3 Giờ Chiều</strong> cùng ngày",
        "groom-wedding-text" : "Lễ Cưới",
        "groom-wedding-text-1" : "Chúa Nhật - 5 tháng 1, 2020",
        "groom-wedding-text-2" : "10 Giờ Sáng",
        "groom-wedding-text-3" : "Nhà Đàng Trai",
        "wedding-description-text" : "Vào sáng Chúa Nhật, đoàn rước dâu sẽ đến nhà cô dâu vào lúc <strong>9 Giò Sáng</strong> và làm lễ xin phép rước dâu. Sau khi về đến nhà đàng trai và làm lễ ra mắt tổ tiên vào lúc <strong>10 Giờ Sáng</strong>, tiệc mừng cưới sẽ được cử hành sau đó.",
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
        "ceremony-text-1" : "Saturday - January 4th 2020",
        "ceremony-text-2" : "5:00am - 6:00am",
        "ceremony-text-3" : "Cái Mơn Church",
        "ceremony-description-text" : "We are getting married at Cái Mơn Church. Please come to share the joy with us at <strong>5am, Saturday, 4th January 2020</strong>. Your presence is a great honor to us, Thái Sơn & Đông Tri, and our family in this very special moment.",
        "bride-wedding-text" : "Betrothal Rituals",
        "bride-wedding-text-1" : "Saturday - January 4th, 2020",
        "bride-wedding-text-2" : "8:00am | 11:00am | 3:00pm",
        "bride-wedding-text-3" : "Bride's House",
        "bride-wedding-description-text" : "Deputation of groom's parents and the senior relatives will come to bride's family and we'll have Vietnamese's traditional pre-wedding rituals at <strong>8am</strong>, followed by 2 celebration parties at <strong>11am</strong> and <strong>3pm</strong>.",
        "groom-wedding-text" : "Wedding",
        "groom-wedding-text-1" : "Sunday - January 5th, 2020",
        "groom-wedding-text-2" : "10:00am",
        "groom-wedding-text-3" : "Groom's House",
        "wedding-description-text" : "In Sunday morning, the groom's procession will come to bride's house at <strong>9am</strong> to do bride pick up ritual. After arriving to groom's house, ancestral ceremony will be conducted at <strong>10am</strong> and followed by the celebration party.",
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