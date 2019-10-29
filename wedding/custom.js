$(document).ready(function (){
    function startTimer(time, element) {
        setInterval(function () {

            var diff = new Date(time).getTime() - new Date().getTime();
            if (diff < 0) {
                diff = -diff;
            }
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
        "ceremony-text-2" : "5 Giờ Sáng",
        "ceremony-text-3" : "Nhà Thờ Cái Mơn",
        "ceremony-description-text" : "Thánh lễ hôn phối sẽ được cử hành tại nhà thờ Cái Mơn vào lúc <strong>5 Giờ Sáng</strong>, <strong>04/01/2020</strong> (dương lịch). Sự hiện diện của quý khách cùng tham dự thánh lễ hôn phối là niềm vinh hạnh lớn cho đôi trẻ và gia đình chúng tôi.",
        "bride-wedding-text" : "Lễ Hỏi",
        "bride-wedding-text-1" : "Thứ 7 - 04/01/2020",
        "bride-wedding-text-2" : "8 Giờ | 11 Giờ",
        "bride-wedding-text-3" : "Nhà Đàng Gái",
        "bride-wedding-description-text" : "Sau thánh lễ, tộc đàng trai sẽ đến nhà đàng gái trình sính lễ và cử hành nghi thức dạm hỏi truyền thống vào lúc <strong>8 Giờ Sáng</strong> trước trưởng bối hai họ, theo sau bởi tiệc mừng vào lúc <strong>11 Giờ Sáng</strong> cùng ngày",
        "groom-wedding-text" : "Lễ Cưới",
        "groom-wedding-text-1" : "Chúa Nhật - 05/01/2020",
        "groom-wedding-text-2" : "8 Giờ | 11 giờ",
        "groom-wedding-text-3" : "Nhà Đàng Trai",
        "wedding-description-text" : "Vào sáng Chúa Nhật, đoàn rước dâu sẽ đến nhà cô dâu vào lúc <strong>7 Giờ Sáng</strong> và làm lễ xin phép rước dâu. Sau khi về đến nhà đàng trai và làm <strong>lễ ra mắt tổ tiên</strong> vào lúc <strong>8 Giờ Sáng</strong>, tiệc mừng cưới được cử hành ngay sau đó và <strong>11h sáng</strong>.",
        "our-story-text" : "Chuyện Hai Đứa",
        "story-1-title" : "Hai đứa là đôi bạn chí cốt",
        "story-1-1" : "Tin buồn là không có love story kiểu tình yêu sét đánh cái đùng đâu nha ^^",
        "story-1-2" : "Tụi mình là bạn nối khố từ hồi cấp 3, cái thuở còn tuổi 15 trăng tròn ấy. Hai đứa cùng học, cùng chơi, cùng có nhiều kỉ niệm đẹp tuổi học trò hồn nhiên như chuối chiên cũng như bao đứa mới lớn khác.",
        "story-1-3" : "Rồi mình phát hiện mình cảm nắng “bả” từ năm lớp 11 (T.T). Cái cảm giác ấy cứ lớn dần lên trong mình, cho đến lúc mình nhận ra thì hai đứa đã sắp tốt nghiệp rồi. Cũng thấy phục mình vì lúc đó cái tôi cũng lớn lắm nha, ôi mấy cái chuyện tình cảm vu vơ của con nít tuổi mới lớn ấy mà, haha. Thế rồi “gồng” hết nổi, đành viết thư củ chuối cho “bả” , nhưng cũng chỉ dám hứa hẹn cùng nhau cố gắng cho kì thi đại học sắp tới <img style=\"width: 30px\" src=\"./images/nerd.png\"/></p>",
        "story-1-4" : "Không biết xui hay hên, tụi mình đỗ chung trường đại học, nhưng những năm tháng trên giảng đường cũng lặng lẽ trôi qua với những lo toan riêng của mỗi đứa về cuộc sống, về tương lai. Tụi mình có buổi hẹn đầu khi mình có tháng lương đầu tiên <img style=\"width: 30px\" src=\"./images/love-heart.png\"/>",
        "story-2-title" : "Hai đứa 'iu' nhau",
        "story-2-1" : "&quot;Đừng ngừng trao đi yêu thương. Hãy cứ mỉm cười bình thản.&quot;",
        "story-2-2" : "Từ buổi ban đầu, tính cách hai đứa cũng rất khác nhau. Nàng thì sống năng động còn chàng thì hơi tự kỷ, nàng thích hoạt động hội nhóm còn chàng thích ở một mình, nàng sống có nhiều quy tắc còn chàng thì hay bất chấp :))..... Và hai đứa cũng mất khá nhiều năm để chơi trò chơi sắp xếp lại những mảnh tính cách riêng biệt đó, một trò chơi cần rất nhiều yêu thương và kiên nhẫn.",
        "story-2-3" : "Đối với hai đứa, cuộc sống quả không suôn sẻ như một giấc mơ mà như một chuyến du hành. Cũng giống như khi bạn vẽ nên 1 trái tim, luôn sẽ xuất phát từ 1 điểm nhưng rồi nét vẽ sẽ đi về 2 hướng và tìm thấy nhau ở 1 điểm hẹn để tạo thành hình của tình yêu. Tụi mình đi qua tuổi trẻ đầy kêu hãnh và cùng với khát khao được khám phá thế giới và thử thách bản thân và cũng là thử thách tình cảm của 2 đứa. Nàng thì đi du học, chàng thì tìm 1 công việc ở nước ngoài, mỗi người 1 hướng đi riêng, một con đường để khẳng định bản thân. Ờ thì cũng chỉ là chu du đây đó thôi mà cũng mất hơn 10 năm để 2 đứa học được bài học về sự trân trọng 1 nửa yêu thương trong cuộc đời mình.",
        "story-2-4" : "&quot;Thương 'bả' đâu có dễ, thiệt sự là hỏng có dễ&quot; <img style=\"width: 30px\" src=\"./images/shy.png\"/>",
        "story-3-title" : "Hai đứa cưới nhau",
        "story-3-1" : "Đủ nắng hoa sẽ nở, đủ gió chong chóng sẽ quay, đủ yêu thương hạnh phúc sẽ đong đầy.",
        "story-3-2" : "Hai đứa đã đi bên nhau đủ lâu để học cách thấu hiểu, cũng đã nói lời chia ly đủ nhiều để học được cách trân trọng nhau hơn, và cũng đã trải qua đủ nhiều biến cố để học được cách yêu nhau. Đời dạy cho hai đứa rằng yêu nhau không phải cứ mãi nhìn vào nhau mà phải học được cách cùng nhìn về một hướng.",
        "story-3-3" : "Và sau tất cả mọi thứ, hai đứa mình rất vui và muốn nói cho cả thế giới biết rằng hai đứa mình sẽ chính thức kết thành vợ chồng vào <strong>ngày 4 tháng 1 năm 2020</strong> tới. <img style=\"width: 30px\" src=\"./images/happy-2.png\"/> ",
        "story-3-4" : "Xin mọi người hãy đến dự buổi lễ kết hôn của hai đứa mình vào lúc <strong>5 giờ sáng</strong> để chứng giám cho giây phút hai đứa mình trao nhau lời tuyên thệ gắn kết với nhau trước thiên Chúa và bắt đầu vào 1 chuyến hành trình mới, hành trình xây dựng gia đình của hai đứa sau này. <img style=\"width: 30px\" src=\"./images/happy-4.png\"/> ",
        "gallery-text" : "Thư Viện Ảnh",
        "gallery-taken-text" : "Bộ ảnh &quot;cây nhà lá vườn&quot; dưới sự giúp đỡ của bạn nhậu <a href=\"https://www.facebook.com/kenhuynhphoto\" target=\"_blank\">Ken Huỳnh Photographer</a> ở quê và trường cũ của 2 đứa (^_^)",
        "save-the-date-text" : "Hoà Cùng Niềm Vui",
        "thank-you-text" : "Tổ chức một lễ cưới đúng là một trải nghiệm khó quên, rất nhiều thứ phải chuẩn bị và cũng có rất nhiều thứ được ấp ủ, dĩ nhiên bọn mình chỉ có thể làm một lần duy nhất nên chỉ muốn làm sao cho chu đáo nhất với sự có mặt của tất cả mọi người. Nhưng vì hai đứa làm đám cuới quê, chịu giới hạn khá lớn về mặt di chuyển và cơ sở vật chất quê cũng như thời gian gấp rút gói gọn tất cả trong 2 ngày nên hai đứa không thể chuẩn bị đủ chu đáo cho các bạn ở quá xa. Hai đứa sẽ tìm cơ hội để báo hỷ cùng mọi người ở một dịp khác thuận tiện hơn và có nhiều thời gian hơn. Dù thế nào đi nữa, món quà ý nghĩa nhất vẫn là được mọi người chia sẻ niềm vui này cùng với 2 đứa ^_^",
        "thank-you-text-2" : "Thật hạnh phúc khi được cưới người mình yêu, và càng hạnh phúc hơn khi được đến với nhau trong sự yêu thương và chúc phúc của mọi người.",
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
        "pickup-early" : "Nếu bạn dự lễ cưới ở nhà thờ vào sáng 4/1, xin hãy gởi tin nhắn riêng. Xe xuất hành vào chiều thứ 6.",
        "directionModalLabel" : "Chi Tiết Di Chuyển",
        "direction-church" : "Địa Điểm Hôn Lễ",
        "direction-church-name" : "Nhà Thờ Cái Mơn",
        "direction-prepare" : "Xe được chuẩn bị",
        "direction-desc-1" : "Vào sáng thứ 7 ngày 4 tháng 1, Tụi em sẽ chuẩn bị 2 xe rước từ Sài Gòn về Cái Mơn ở 2 địa điểm sau:",
        "direction-intel" : "Từ Cty Intel Product",
        "direction-uni" : "Từ Đại Học Khoa Học Tự Nhiên Q5",
        "direction-self" : "Xe Tự Đi",
        "direction-self-desc" : "Nếu bạn muốn tự di chuyển, có 2 nhà xe có chuyến về Cái Mơn mỗi giờ như sau:",
        "say-cool" : "Nói gì cho ngầu nào",
        "for-my-love" : "Viết tặng vợ iu ^_^"
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
        "bride-wedding-text" : "Betrothal",
        "bride-wedding-text-1" : "Saturday - 04/01/2020",
        "bride-wedding-text-2" : "8:00am | 11:00am",
        "bride-wedding-text-3" : "Bride's House",
        "bride-wedding-description-text" : "Deputation of groom's parents and the senior relatives will come to bride's family and we'll have Vietnamese's traditional pre-wedding rituals at <strong>8am</strong>, followed by one more celebration party at <strong>11am</strong>.",
        "groom-wedding-text" : "Wedding",
        "groom-wedding-text-1" : "Sunday - 05/01/2020",
        "groom-wedding-text-2" : "8:00am | 11:00am",
        "groom-wedding-text-3" : "Groom's House",
        "wedding-description-text" : "In Sunday morning, the groom's procession will come to bride's house at <strong>7am</strong> to do bride pick up ritual. After arriving to groom's house, ancestral ceremony will be conducted at <strong>8am</strong> and followed by one more celebration party at <strong>11am</strong>.",
        "our-story-text" : "Our Story",
        "story-1-title" : "We're best friends",
        "story-1-1" : "It isn't a love from the first sight.",
        "story-1-2" : "We started as friends in a same class in high school in 2005, when we were 15. We studied, played and laughed together as friends, sometimes we shared the earphone of the ipod borrowed from another friend and enjoyed the music and peaceful moment together in the time break.",
        "story-1-3" : "In the second year of high shool, I found myself had a crush on her. I didn't notice that \"weird\" feeling kept growing up inside me until I realized I might cannot be by her side anymore. There're many \"teenagers\" things happened that we couldn't handle and I thought it's just a feeling of youth and wouldn't last for long. I wrote her a letter, saying that I will focus on the university exam in next year instead and take it as a test for ourselves. She's the main reason made me study so hard for the university <img style='width: 30px' src='./images/nerd.png'/>",
        "story-1-4" : "After the exam in 2008, we managed to get into the same university in Ho Chi Minh city. But because I am a pessimistic person, during those 4 years of university, I still kept worrying too much about the future and my family's financial problems. Until I found my first job and could earn the money on my own in 2012, we had our first date <img style=\"width: 30px\" src=\"./images/love-heart.png\"/>",
        "story-2-title" : "We're in love",
        "story-2-1" : "&quot;Don’t stop giving love even when you don’t receive it. Keep a smile and have patience.&quot;",
        "story-2-2" : "We’re too different in the beginning. She's very active but I'm kind of introverted, she enjoys community life but I like to be alone, she has many rules but I always like to against the rules :))..... And it took us years to play the puzzle game of matching to each other, the game which required tons of love and patience.",
        "story-2-3" : "To us, life is not a dream, it’s a journey with many challenges. Our love is just like drawing a heart shape by 2 brushstrokes, it could start from same point but follow its own direction and meet at a destination point to form the shape of love. We were young and we wanted to discover the world. To her, it was a chance to study abroad, and to me, it’s seeking career and opportunity oversea. It was just a little journey but took us over a decade to learn about love and respection.s",
        "story-2-4" : "&quot;It’s not easy to love her, not easy at all&quot; <img style=\"width: 30px\" src=\"./images/shy.png\"/>",
        "story-3-title" : "We're getting married",
        "story-3-1" : "Our love is sharpened by the stone of our challenges and strengthened by the struggles of our growth.",
        "story-3-2" : "We have been together long enough to learn understanding, we had said Goodbye enough times to learn the appreciation, and we have had enough lessons to learn how to love. Life has taught us that love does not consist of gazing at each other but looking outward in the same direction.",
        "story-3-3" : "And here we are, after all, we're very exciting to announce to the whole world that we will become husband and wife in <strong>4th January 2020</strong>.<img style=\"width: 30px\" src=\"./images/happy-2.png\"/>",
        "story-3-4" : "Please come to join us at Cái Mơn Church at <strong>5:00am</strong> to witness our very special moment when we give the vow of love under God's blessing and start our new journey to the family ahead. <img style=\"width: 30px\" src=\"./images/happy-4.png\"/>",
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
        "pickup-early" : "If you want to join us on the wedding ceremony in early morning Jan 4th, please drop us a message. The car will depart in Fiday's afternoon.",
        "directionModalLabel" : "CHow to get to our village",
        "direction-church" : "Church Ceremony",
        "direction-church-name" : "Cái Mơn Church",
        "direction-prepare" : "Our prepared trip",
        "direction-desc-1" : "For the trip on January 4th from Ho Chi Minh city to Cái Mơn (Bến Tre), we will prepare 2 buses to pick you up at 2 locations below:",
        "direction-intel" : "From Intel Product Q9",
        "direction-uni" : "From University of Natural Sciences Q5",
        "direction-self" : "Travel by yourself",
        "direction-self-desc" : "If you want to go by your own, there're 2 more bus services which have trips every hour, please refer to the info below:",
        "say-cool" : "Let's say something cool",
        "for-my-love" : "Made this for my only love ^_^"
    }

    $(document).ready(function (){
        if (localStorage != undefined && typeof(localStorage.getItem) == "function") {
            var sq = localStorage.getItem("sq");
            if (sq && typeof(sq) == "string") {
                sq = parseInt(sq);
                if (sq % 2 == 0) {
                    $("body").addClass("green-theme");
                    $("#hero").addClass("bg-2");
                } else {
                    $("body").removeClass("green-theme");
                    $("#hero").removeClass("bg-2");
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
                console.log(key + " - " + value)
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

        $('#direction-modal').on('shown.bs.modal', (function() {
            var mapIsAdded = false;
          
            return function() {
                if (!mapIsAdded) {
                    $('#bien-viet-xanh').html('<iframe src="https://www.google.com/maps/d/embed?mid=1uxAw8elmL8yDwOHkJSRiWzpAL8sGZ9Pr"></iframe>');
                    mapIsAdded = true;
                }    
            };
        })());

        $('#direction-modal').on('shown.bs.modal', (function() {
            var mapIsAdded = false;
          
            return function() {
                if (!mapIsAdded) {
                    $('#dai-ngan').html('<iframe src="https://www.google.com/maps/d/embed?mid=1qsv9QAqL1Z0nCyq9Pjko3B825xaYNbMo"></iframe>');
                    mapIsAdded = true;
                }    
            };
        })());

        $('#thankyou-modal').on('hidden.bs.modal', function() {
            window.location.reload();
        });
    });

    jQuery(function ($) {
        startTimer("2020-01-03T22:00:00.000Z", $("#church-countdown-box"));
    });

    var $container = $('#photos-wrapper');
    
    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    });
});