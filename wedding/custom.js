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
        "ceremony-text-2" : "8 Giờ Sáng",
        "ceremony-text-3" : "Nhà Thờ Cái Mơn",
        "ceremony-description-text" : "Thánh lễ hôn phối sẽ được cử hành tại nhà thờ Cái Mơn vào lúc <strong>8 Giờ Sáng</strong>, <strong>04/01/2020</strong> (dương lịch). Sự hiện diện của quý khách cùng tham dự thánh lễ hôn phối là niềm vinh hạnh lớn cho đôi trẻ và gia đình chúng tôi.",
        "bride-wedding-text" : "Lễ Hỏi",
        "bride-wedding-text-1" : "Thứ 7 - 04/01/2020",
        "bride-wedding-text-2" : "10:30 Sáng | 3 Giờ Chiều",
        "bride-wedding-text-3" : "Nhà Đàng Gái",
        "bride-wedding-description-text" : "Sau thánh lễ, tộc đàng trai sẽ đến nhà đàng gái trình sính lễ và cử hành nghi thức dạm hỏi truyền thống vào lúc <strong>10:30 Sáng</strong> trước trưởng bối hai họ, theo sau bởi tiệc mừng vào lúc <strong>11 Giờ Sáng</strong> và <strong>3 Giờ Chiều</strong> cùng ngày",
        "groom-wedding-text" : "Lễ Cưới",
        "groom-wedding-text-1" : "Chúa Nhật - 05/01/2020",
        "groom-wedding-text-2" : "8 Giờ | 11 Giờ",
        "groom-wedding-text-3" : "Nhà Đàng Trai",
        "wedding-description-text" : "Vào sáng Chúa Nhật, đoàn rước dâu sẽ đến nhà cô dâu vào lúc <strong>7 Giờ Sáng</strong> và làm lễ xin phép rước dâu. Sau khi về đến nhà đàng trai và làm <strong>lễ ra mắt tổ tiên</strong> vào lúc <strong>8 Giờ Sáng</strong>, tiệc mừng cưới được cử hành ngay sau đó vào lúc <strong>8:30 sáng</strong> và <strong>11h sáng</strong>.",
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
        "story-3-4" : "Xin mọi người hãy đến dự buổi lễ kết hôn của hai đứa mình vào lúc <strong>8 giờ sáng</strong> để chứng giám cho giây phút hai đứa mình trao nhau lời tuyên thệ gắn kết với nhau trước thiên Chúa và bắt đầu vào 1 chuyến hành trình mới, hành trình xây dựng gia đình của hai đứa sau này. <img style=\"width: 30px\" src=\"./images/happy-4.png\"/> ",
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
        "pickup-early" : "Nếu bạn dự lễ cưới ở nhà thờ vào lúc 8 Giờ Sáng 4/1, xin hãy gởi tin nhắn SMS hoặc dùng nút &quot;Gởi Tin Nhắn&quot; ở cuối trang. Xe xuất hành vào 5 Giờ Sáng, 4/1.",
        "directionModalLabel" : "Chi Tiết Di Chuyển",
        "direction-church" : "Địa Điểm Hôn Lễ",
        "direction-church-name" : "Nhà Thờ Cái Mơn",
        "direction-prepare" : "Xe được chuẩn bị",
        "direction-desc-1" : "Vào sáng thứ 7 ngày 4 tháng 1, Tụi em sẽ chuẩn bị 2 xe rước từ Sài Gòn về Cái Mơn ở 2 địa điểm sau:",
        "direction-intel" : "Từ Cty Intel Product Q9 - <span style=\"color: red\">7:00am</span> - (Tuyến đường trên bản đồ có thể sẽ được cập nhật lại sau)",
        "direction-uni" : "Từ Đại Học Khoa Học Tự Nhiên Q5 - <span style=\"color: red\">7:30am</span> - (Tuyến đường trên bản đồ có thể sẽ được cập nhật lại sau)",
        "direction-self" : "Xe Tự Đi",
        "direction-self-desc" : "Nếu bạn muốn tự di chuyển, có 2 nhà xe có chuyến về Cái Mơn mỗi giờ như sau:",
        "say-cool" : "Xin cho biết ý kiến của bạn",
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
        "ceremony-text-2" : "8:00am - 9:00am",
        "ceremony-text-3" : "Cái Mơn Church",
        "ceremony-description-text" : "Our Holy Matrimony will be celebrated at Cái Mơn's church. Please come and share the joy with us at <strong>8am, Saturday, 4th January 2020</strong>. Your presence is a great honor to us, Thái Sơn & Đông Tri, and our family in this very special moment.",
        "bride-wedding-text" : "Betrothal",
        "bride-wedding-text-1" : "Saturday - 04/01/2020",
        "bride-wedding-text-2" : "10:30am | 3:00pm",
        "bride-wedding-text-3" : "Bride's House",
        "bride-wedding-description-text" : "After the Holy Matrimony, deputation of the groom's parents and senior relatives will come to visit bride's family. There will be Vietnamese traditional pre-wedding rituals at <strong>10:30am</strong>, followed by the banquets at <strong>11am</strong> and <strong>3pm</strong>.",
        "groom-wedding-text" : "Wedding",
        "groom-wedding-text-1" : "Sunday - 05/01/2020",
        "groom-wedding-text-2" : "8:00am | 11:00am",
        "groom-wedding-text-3" : "Groom's House",
        "wedding-description-text" : "Sunday morning, the groom will once again join his family in their procession to bride's house at <strong>7am</strong> for the &quot;Rước Dâu&quot; (aka. picking up the bride) ritual. Both families will be gathering at the groom's house by <strong>8am</strong> to conduct the ancestral ceremony. Our wedding banquets will start at <strong>8:30am</strong> and <strong>11am</strong>.",
        "our-story-text" : "Our Story",
        "story-1-title" : "We're best friends",
        "story-1-1" : "It isn't a love from the first sight.",
        "story-1-2" : "We started as high-school classmates in 2005, when we were both 15. We studied, we played and we laughed together as good friends. Sometimes, we even shared one set of earphones borrowed from another friend to enjoy music on iPod, as well as peaceful moments during class breaks.",
        "story-1-3" : "In sophomore year, I found myself having a crush on her. However, I had never questioned that \"weird\" feeling growing up in me until that one day. I still remember that one day when it dawned to me that she might not be by my side forever. There were just so many \"teenage\" issues that we could not handle and I thought my feeling was just a part of growing up and would not last for long. I sent her a letter, saying that I would focus on the university exam in the following year instead and take it as a test for our relationship. Still, she was indeed the main reason that motivated me to study hard for the exam. <img style='width: 30px' src='./images/nerd.png'/>",
        "story-1-4" : "After the exam in 2008, we were glad to be admitted to the same university in Ho Chi Minh city. But I must say I was a pessimistic person. During these 4 years of undergraduate study, all that I kept worrying too much about were my future and my family financial problem. Not until I found my first job and could earn my first-month salary in 2012 did we have our first official date. <img style=\"width: 30px\" src=\"./images/love-heart.png\"/>",
        "story-2-title" : "We're in love",
        "story-2-1" : "&quot;Don’t stop giving love even when you don’t receive it. Keep smiling and have some patience.&quot;",
        "story-2-2" : "We were almost too different to begin with. She is very socially active and I am kind of an introvert. She enjoys community life and I like to be alone. She has many rules which I always go against :))... But love is not about finding the perfect partner. It is about learning, changing and becoming perfect partners. It took us years to play the puzzle game of matching, the game which required tons of love and patience.",
        "story-2-3" : "To us, life is not a dream but a journey with many challenges. We both were young and excited to discover the world. She had her chance to study abroad, and to me, it was about seeking career opportunities overseas. Our journey took us over a decade to learn to love and respect each other. In fact, we were 2 brush strokes that drew a heart shape. We started at the same point, then parted to follow our own paths. Ultimately, here we are again, holding each other at the end.",
        "story-2-4" : "&quot;It is not easy to love her, not easy at all&quot; <img style=\"width: 30px\" src=\"./images/shy.png\"/>",
        "story-3-title" : "We're getting married",
        "story-3-1" : "Our love is sharpened by the stone of our challenges and strengthened by the struggles of our growth.",
        "story-3-2" : "We have been together long enough to fully understand each other. We have had enough times saying Goodbye to appreciate each other. And we have been through thick and thin to learn how to love more each day. Our lives have taught us that love does not consist of gazing at each other but looking outward together in the same direction.",
        "story-3-3" : "And here we are, after all, very excited to announce to the whole world that, in the grace of His Goodness, we will be becoming husband and wife on <strong>4th January 2020</strong>. <img style=\"width: 30px\" src=\"./images/happy-2.png\"/>",
        "story-3-4" : "Please come and join us at Cái Mơn's Church at <strong>8:00am</strong> to witness our very special moment when we present the vow of love in the Lord's blessing and witness to begin our new journey as one family. <img style=\"width: 30px\" src=\"./images/happy-4.png\"/>",
        "gallery-text" : "Gallery",
        "gallery-taken-text" : "Photos taken by <a href=\"https://www.facebook.com/kenhuynhphoto\" target=\"_blank\">Ken Huỳnh</a> in our hometown and in our high school (^_^)",
        "save-the-date-text" : "Share Our Happiness",
        "thank-you-text" : "Organizing a wedding is really an unforgetable memory, there're too many things to prepare and many things we want to do. We're trying our best to fullfill our day with everyone because this is once-in-a-lifetime experience. But since our hometown is in the country side, far away from the city and has limitations on the facilities as well as transportations and we have to compress everything within 2 weekend days, we will find the opportunity to celebrate with you later if this is not convenient for you, when we have more time. However it is, the most precious gift to us is to have you share our day ^_^",
        "thank-you-text-2" : "It's so great to marry my true love, and it's even more wonderful when we can do so with your share and congratulations with us.",
        "send-message-text" : "Send Us A Message",
        "send-private-mesage-text" : "Send Private Message",
        "tell-though-text" : "Please tell us your thought ^_^",
        "send-private-mesage-name" : "Your preferred name",
        "send-private-mesage-email" : "Email or Phone",
        "send-private-mesage-mesage" : "Your message",
        "send-private-mesage-submit" : "Submit",
        "pickup-header-text" : "Pickup Selection",
        "pickup-desc-text" : "Transportation will be provided if you travel from Ho Chi Minh city. Please indicate your preferred pickup location below for better preparation. If you want to be picked-up along the way, please specify your address in the &quot;Other Location&quot;.",
        "pickup-name" : "Your preferred name",
        "pickup-email" : "Email or Phone",
        "pickup-bus" : "Which bus do you prefer?",
        "pickup-seat" : "How many seats do you need?",
        "pickup-other-location" : "Other preferred location on the way",
        "pickup-message" : "Additional message",
        "pickup-submit" : "Submit",
        "pickup-early" : "If you want to attend our Church Wedding Ceremony at 8ams 4th Jan, please drop us a SMS message or use &quot;Send Us A Message&quot; button in the page bottom. The bus will be departing at 5am, 4th January.",
        "directionModalLabel" : "How to get to our village",
        "direction-church" : "Church Ceremony",
        "direction-church-name" : "Cái Mơn Church",
        "direction-prepare" : "Our prepared trip",
        "direction-desc-1" : "For the trip on January 4th from Ho Chi Minh city to Cái Mơn (Bến Tre), we will prepare 2 buses to pick you up at 2 locations below:",
        "direction-intel" : "From Intel Product District 9 - <span style=\"color: red\">7:00am</span> - (Bus route may be updated later)",
        "direction-uni" : "From University of Natural Sciences District 5 - <span style=\"color: red\">7:30am</span> - (Bus route may be updated later)",
        "direction-self" : "Travel by yourself",
        "direction-self-desc" : "If you want to go by your own, there're 2 more bus services which have trips every hour, please refer to the info below:",
        "say-cool" : "Tell us what you think",
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
                    setTimeout(function() {
                        $('#bien-viet-xanh').html('<iframe src="https://www.google.com/maps/d/embed?mid=1uxAw8elmL8yDwOHkJSRiWzpAL8sGZ9Pr"></iframe>');
                    }, 500);
                    mapIsAdded = true;
                }    
            };
        })());

        $('#direction-modal').on('shown.bs.modal', (function() {
            var mapIsAdded = false;
          
            return function() {
                if (!mapIsAdded) {
                    setTimeout(function() {
                        $('#dai-ngan').html('<iframe src="https://www.google.com/maps/d/embed?mid=1qsv9QAqL1Z0nCyq9Pjko3B825xaYNbMo"></iframe>');
                    }, 700);
                    mapIsAdded = true;
                }    
            };
        })());s

        $('#thankyou-modal').on('hidden.bs.modal', function() {
            window.location.reload();
        });
    });

    jQuery(function ($) {
        startTimer("2020-01-04T01:00:00.000Z", $("#church-countdown-box"));
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