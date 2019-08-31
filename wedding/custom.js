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
        "menu-get-there-text" : "Di Chuyển",
        "menu-language-text" : "English",
        "btn-pickup-registration" : "Chọn Điểm Đón",
        "btn-change-language" : "Change to English",
        "the-wedding-text" : "Hôn Lễ",
        "days-text" : "Ngày",
        "hours-text" : "Giờ",
        "minutes-text" : "Phút",
        "seconds-text" : "Giây",
        "ceremony-text" : "Thánh Lễ Hôn Phối",
        "ceremony-text-1" : "Thứ 7 - 04/01/2020",
        "ceremony-text-2" : "5 Giờ Sáng - 6 Giờ Sáng",
        "ceremony-text-3" : "Nhà Thờ Cái Mơn",
        "ceremony-description-text" : "Thánh lễ hôn phối sẽ được cử hành tại nhà thờ Cái Mơn vào lúc <strong>5 Giờ Sáng</strong>, <strong>04/01/2020</strong> (dương lịch). Sự hiện diện của quý khách cùng tham dự thánh lễ hôn phối là niềm vinh hạnh lớn cho đôi trẻ và gia đình chúng tôi.",
        "bride-wedding-text" : "Lễ Hỏi",
        "bride-wedding-text-1" : "Thứ 7 - 04/01/2020",
        "bride-wedding-text-2" : "8 Giờ | 11 Giờ | 15 Giờ",
        "bride-wedding-text-3" : "Nhà Đàng Gái",
        "bride-wedding-description-text" : "Sau thánh lễ, tộc đàng trai sẽ đến nhà đàng gái trình sính lễ và cử hành nghi thức dạm hỏi truyền thống vào lúc <strong>8 Giờ Sáng</strong> trước trưởng bối hai họ, theo sau bởi 2 tiệc mừng vào lúc <strong>11 Giờ Sáng</strong> và <strong>3 Giờ Chiều</strong> cùng ngày",
        "groom-wedding-text" : "Lễ Cưới",
        "groom-wedding-text-1" : "Chúa Nhật - 05/01/2020",
        "groom-wedding-text-2" : "10 Giờ Sáng",
        "groom-wedding-text-3" : "Nhà Đàng Trai",
        "wedding-description-text" : "Vào sáng Chúa Nhật, đoàn rước dâu sẽ đến nhà cô dâu vào lúc <strong>9 Giờ Sáng</strong> và làm lễ xin phép rước dâu. Sau khi về đến nhà đàng trai và làm <strong>lễ ra mắt tổ tiên</strong> vào lúc <strong>10 Giờ Sáng</strong>, tiệc mừng cưới được cử hành ngay sau đó.",
        "our-story-text" : "Chuyện Hai Đứa",
        "story-1-title" : "Đôi bạn chí cốt",
        "story-1-1" : "Tin buồn là không có love story kiểu tình yêu sét đánh cái đùng đâu nha ^^",
        "story-1-2" : "Tụi mình là bạn nối khố từ hồi cấp 3, cái thuở còn tuổi 15 trăng tròn ấy. Hai đứa cùng học, cùng chơi, cùng có nhiều kỉ niệm đẹp tuổi học trò hồn nhiên như chuối chiên cũng như bao đứa mới lớn khác.",
        "story-1-3" : "Rồi mình phát hiện mình cảm nắng “bả” từ năm lớp 11 (T.T). Cái cảm giác ấy cứ lớn dần lên trong mình, cho đến lúc mình nhận ra thì hai đứa đã sắp tốt nghiệp rồi. Cũng thấy phục mình vì lúc đó cái tôi cũng lớn lắm nha, ôi mấy cái chuyện tình cảm vu vơ của con nít tuổi mới lớn ấy mà, haha. Thế rồi “gồng” hết nổi, đành viết thư củ chuối cho “bả” , nhưng cũng chỉ dám hứa hẹn cùng nhau cố gắng cho kì thi đại học sắp tới <img style=\"width: 30px\" src=\"./images/nerd.png\"/></p>",
        "story-1-4" : "Không biết xui hay hên, tụi mình đỗ chung trường đại học, nhưng những năm tháng trên giảng đường cũng lặng lẽ trôi qua với những lo toan riêng của mỗi đứa về cuộc sống, về tương lai. Tụi mình có buổi hẹn đầu tiên khi mình có tháng lương đầu tiên <img style=\"width: 30px\" src=\"./images/love-heart.png\"/>",
        "gallery-text" : "Thư Viện Ảnh",
        "gallery-taken-text" : "Bộ ảnh &quot;cây nhà lá vườn&quot; dưới sự giúp đỡ của <a href=\"https://www.facebook.com/kenhuynhphoto\" target=\"_blank\">Ken Huỳnh Photographer</a> ờ quê và trường cũ của 2 đứa (^_^)",
        "save-the-date-text" : "Hoà Cùng Niềm Vui",
        "thank-you-text" : "Tổ chức một lễ cưới đúng là một trải nghiệm khó quên, rất nhiều thứ phải chuẩn bị và cũng có rất nhiều thứ được ấp ủ, dĩ nhiên bọn mình chỉ có thể làm một lần duy nhất nên chỉ muốn làm sao cho chu đáo nhất với sự có mặt của tất cả mọi người. Nhưng vì hai đứa làm đám cuới quê, chịu giới hạn khá lớn về mặt di chuyển và cơ sở vật chất quê cũng như thời gian gấp rút gói gọn tất cả trong 2 ngày nên hai đứa không thể chuẩn bị đủ chu đáo cho các bạn ở quá xa. Hai đứa sẽ tìm cơ hội để báo hỷ cùng các bạn/anh chị ở một dịp khác thuận tiện hơn và có nhiều thời gian hơn. Dù thế nào đi nữa, món quà lớn nhất vẫn là được mọi người chia sẻ niềm vui này cùng với 2 đứa ^_^",
        "thank-you-text-2" : "Thật hạnh phúc khi được cưới người mình yêu, và càng hạnh phúc hơn khi được cưới nhau trong sự yêu thương và chúc phúc của mọi người.",
        "send-message-text" : "Gởi Tin Nhắn",
        "send-private-mesage-text" : "Gởi Tin Nhắn Riêng",
        "tell-though-text" : "Xin bạn cho ý kiến ^_^",
        "send-private-mesage-name" : "Tên tui hay gọi bạn",
        "send-private-mesage-email" : "Email hoặc số điện thoại",
        "send-private-mesage-mesage" : "Nội dung",
        "send-private-mesage-submit" : "Gởi",
        "pickup-header-text" : "Chọn Điểm Đón",
        "pickup-desc-text" : "Nếu bạn đi từ Sài Gòn vào sáng ngày 4/1, xin hãy chọn điểm xe rước theo các options bên dưới để được chuẩn bị tốt hơn. Nếu bạn muốn lên xe tại 1 điểm dọc trên lộ trình, xin hãy ghi địa chỉ vào ô \"Điểm Đón Khác\"",
        "pickup-name" : "Tên tui hay gọi bạn",
        "pickup-email" : "Email hoặc số điện thoại",
        "pickup-bus" : "Bạn muốn đi xe nào ?",
        "pickup-seat" : "Bạn cần bao nhiêu ghế ?",
        "pickup-other-location" : "Điểm đón khác trên đường",
        "pickup-message" : "Lời nhắn thêm",
        "pickup-submit" : "Gởi",
        "pickup-early" : "Nếu bạn dự lễ cưới ở nhà thờ vào sáng 4/1, xin hãy gởi tin nhắn riêng. Xe xuất hành vào chiều thứ 6."
    };

    var en = {
        "menu-wedding-text" : "The Wedding",
        "menu-location-text" : "Location",
        "menu-story-text" : "Our Story",
        "menu-gallery-text" : "Gallery",
        "menu-get-there-text" : "How to get there",
        "btn-pickup-registration" : "Pickup Registration",
        "menu-language-text" : "Tiếng Việt",
        "btn-change-language" : "Chuyển Sang Tiếng Việt",
        "the-wedding-text" : "The Wedding",
        "days-text" : "Days",
        "hours-text" : "Hrs",
        "minutes-text" : "Mins",
        "seconds-text" : "Secs",
        "ceremony-text" : "Ceremony",
        "ceremony-text-1" : "Saturday - 04/01/2020",
        "ceremony-text-2" : "5:00am - 6:00am",
        "ceremony-text-3" : "Cái Mơn Church",
        "ceremony-description-text" : "We are getting married at Cái Mơn Church. Please come to share the joy with us at <strong>5am, Saturday, 4th January 2020</strong>. Your presence is a great honor to us, Thái Sơn & Đông Tri, and our family in this very special moment.",
        "bride-wedding-text" : "Betrothal Rituals",
        "bride-wedding-text-1" : "Saturday - 04/01/2020",
        "bride-wedding-text-2" : "8:00am | 11:00am | 3:00pm",
        "bride-wedding-text-3" : "Bride's House",
        "bride-wedding-description-text" : "Deputation of groom's parents and the senior relatives will come to bride's family and we'll have Vietnamese's traditional pre-wedding rituals at <strong>8am</strong>, followed by 2 celebration parties at <strong>11am</strong> and <strong>3pm</strong>.",
        "groom-wedding-text" : "Wedding",
        "groom-wedding-text-1" : "Sunday - 05/01/2020",
        "groom-wedding-text-2" : "10:00am",
        "groom-wedding-text-3" : "Groom's House",
        "wedding-description-text" : "In Sunday morning, the groom's procession will come to bride's house at <strong>9am</strong> to do bride pick up ritual. After arriving to groom's house, ancestral ceremony will be conducted at <strong>10am</strong> and followed by the celebration party.",
        "our-story-text" : "Our Story",
        "story-1-title" : "We're best friends",
        "story-1-1" : "It isn't a love from the first sight.",
        "story-1-2" : "We started as friends in a same class in high school in 2005, when we were 15. We studied, played and laugh together as friends, sometimes we shared the earphone of the ipod borrowed from another friend and enjoyed the music together in the time break, but actually, I was there... not for the music :))",
        "story-1-3" : "In the second year of high shool, I found myself had a crush on her. I didn't notice that \"weird\" feeling kept growing up inside me until I realized I might cannot be by her side anymore. There're many \"teenagers\" things happened that we couldn't handle and I thought it's just a feeling of youth and wouldn't last for long. I wrote her a letter, saying that I will focus on the university exam in next year instead and take it as a test for ourselves. She's the main reason made me study so hard for the university <img style='width: 30px' src='./images/nerd.png'/>",
        "story-1-4" : "After the exam in 2008, we managed to get into the same university in Ho Chi Minh city. But because I am a pessimistic person, during those 4 years of university, I still kept worrying too much about the future and my family's financial problems. Until I found my first job and could earn the money on my own in 2012, we had our first date <img style=\"width: 30px\" src=\"./images/love-heart.png\"/>",
        "gallery-text" : "Gallery",
        "gallery-taken-text" : "Photos taken by <a href=\"https://www.facebook.com/kenhuynhphoto\" target=\"_blank\">Ken Huỳnh</a> in our hometown and in our high school (^_^)",
        "save-the-date-text" : "Share Our Happiness",
        "thank-you-text" : "Organizing a wedding is really an unforgetable memory, there're too many things to prepare and many things we want to do. We're trying our best to fullfill our day with everyone because this can only happen once in a lifetime. But since our hometown is in the country side, far away from the city and has limitations on the facilities as well as transportations and we have to compress everything within 2 weekend days, we will find the opportunity to celebrate with you later if this is not convenient for you, when we have more time. However it is, the most important gift to us is to have you share our day ^_^",
        "thank-you-text-2" : "It's so great to marry my true love, and it's even more wonderful when we can get married with your congrats with us.",
        "send-message-text" : "Send Us A Message",
        "send-private-mesage-text" : "Send Private Message",
        "tell-though-text" : "Please tell us your thought ^_^",
        "send-private-mesage-name" : "Your preferred name",
        "send-private-mesage-email" : "Email or Phone",
        "send-private-mesage-mesage" : "Your message",
        "send-private-mesage-submit" : "Submit",
        "pickup-header-text" : "Pickup Selection",
        "pickup-desc-text" : "If you're joining the trip from HCM City on Jan 4th, please help to confirm your preferred pickup location in the options below for better preparation. If you want to pickup you on the way, please specify the addess in the &quot;Other Location&quot;.",
        "pickup-name" : "Your preferred name",
        "pickup-email" : "Email or Phone",
        "pickup-bus" : "Which bus do you prefer?",
        "pickup-seat" : "How many seats do you need?",
        "pickup-other-location" : "Other preferred location on the way",
        "pickup-message" : "Additional message",
        "pickup-submit" : "Submit",
        "pickup-early" : "If you want to join us on the wedding ceremony in early morning Jan 4th, please drop us a message. The car will depart in Fiday's afternoon."
    }

    $(document).ready(function (){

        function getRandom() {
            return Math.round(Math.random() * 99) + 1;
        }
        var rd = getRandom();
        if (rd >= 0 && rd < 10) {
            $("#hero").addClass("bg-2");
        }

        if (localStorage != undefined && typeof(localStorage.getItem) == "function") {
            var sq = localStorage.getItem("sq");
            if (sq && typeof(sq) == "string") {
                sq = parseInt(sq);
                if (sq % 10 < 5) {
                    $("body").addClass("green-theme");
                } else {
                    $("body").removeClass("green-theme");
                }
                localStorage.setItem("sq", sq + 1);
            } else {
                localStorage.setItem("sq", 1);
            }
            
        }
        
        $(".nav-link.scrollto").one("click", function (){
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

        function validateEmailOrPhone(str) {
            if (str) {
                if (isNaN(str)) {
                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(str);
                } else if (str.length == 10) {
                    return true;
                }
                return false;
            }  
            return false;
        }

        $(".btn-submit.btn-primary.btn-send-pickup").on("click", function (event){
            var name = $("#dname").val().trim();
            var emailOrPhone = $("#dphone").val().trim();
            var location = $("#dlocation").val();
            var guests = $("#dguests").val();
            var otherlocation = $("#dotherlocation").val() ? $("#dotherlocation").val() : "-";
            var message = $("#dmessage").val().trim() ? $("#dmessage").val().trim() : "-";
            var isError = false;
            if (!name) {
                $("#dname").addClass("error");
                isError = true;
            } else {
                $("#dname").removeClass("error");
            }

            if (!emailOrPhone || !validateEmailOrPhone(emailOrPhone)) {
                isError = true;
                $("#dphone").addClass("error");
            } else {
                $("#dphone").removeClass("error");
            }

            if (!location) {
                isError = true;
                $("#dlocation").addClass("error");
            } else {
                $("#dlocation").removeClass("error");
            }

            if (!guests) {
                isError = true;
                $("#dguests").addClass("error");
            } else {
                $("#dguests").removeClass("error");
            }

            if (isError) {
                event.preventDefault();
            } else {
                $("#dname").val(encodeURIComponent(name));
                $("#dphone").val(encodeURIComponent(emailOrPhone));
                $("#dotherlocation").val(encodeURIComponent(otherlocation));
                $("#dmessage").val(encodeURIComponent(message));
                var $form = $("#rsvp-form2");
                $form.submit(function(){
                    $.ajax({
                        url: $(this).attr('action'),
                        data: $(this).serialize(),
                        type: 'POST',
                        success: function(result) {
                            // Do something with the result
                        }
                    });
                    return false;
                });
                $("#rsvp-modal2").modal("hide");
                setTimeout(function() {
                    $("#thankyou-modal").modal("show")
                }, 500)
            }
        });

        $(".btn-submit.btn-primary.btn-send-wish").on("click", function (event){
            var name = $("#cname").val().trim();
            var emailOrPhone = $("#cemail").val().trim() ? $("#cemail").val().trim() : "-";
            var message = $("#cmessage").val().trim() ? $("#cmessage").val().trim() : "-";
            var isError = false;
            if (!name) {
                $("#cname").addClass("error");
                isError = true;
            } else {
                $("#cname").removeClass("error");
            }

            if (!emailOrPhone || !validateEmailOrPhone(emailOrPhone)) {
                isError = true;
                $("#cemail").addClass("error");
            } else {
                $("#cemail").removeClass("error");
            }

            if (!message) {
                isError = true;
                $("#cmessage").addClass("error");
            } else {
                $("#cmessage").removeClass("error");
            }
            
            if (isError) {
                event.preventDefault();
            } else {
                $("#cname").val(encodeURIComponent(name));
                $("#dcemail").val(encodeURIComponent(emailOrPhone));
                $("#cmessage").val(encodeURIComponent(message));
                var $form = $("#rsvp-form");
                $form.submit(function(){
                    $.post($(this).attr('action'), $(this).serialize(), function(response){
                        
                    },'json');
                    return false;
                });
                $("#rsvp-modal").modal("hide");
                setTimeout(function() {
                    $("#thankyou-modal").modal("show")
                }, 500)
            }
        });

        $('#direction-modal').on('shown.bs.modal', (function() {
            var mapIsAdded = false;
          
            return function() {
                if (!mapIsAdded) {
                    $('#church-path-location').html('<iframe src="https://www.google.com/maps/d/embed?mid=1SDTvfAduAQ_lI9mBO2F11jxQkWRIvI2u&hl=en"></iframe>');
                    mapIsAdded = true;
                }    
            };
        })());

        $('#direction-modal').on('shown.bs.modal', (function() {
            var mapIsAdded = false;
          
            return function() {
                if (!mapIsAdded) {
                    $('#church-path-location2').html('<iframe src="https://www.google.com/maps/d/embed?mid=1HA3f9X483eJaU8tWqKKUi1PpSO-NrAtg&hl=en"></iframe>');
                    mapIsAdded = true;
                }    
            };
        })());

        $('#thankyou-modal').on('hidden.bs.modal', function() {
            window.location.reload();
        });
    });

    jQuery(function ($) {
        startTimer("2020-01-04T05:00:00", $("#church-countdown-box"));
    });
});