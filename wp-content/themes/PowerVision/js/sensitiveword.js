/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//定义敏感字符
var forbiddenArray = ['臻迪', 'powervision', 'poweregg', 'powereye', 'powerray', '官方', '郑卫峰', '王珈瑶', 'fuck', '大法', '自焚', '台独', '文化大革命', '文革', '学运', '学联', '学潮', '天葬', '一中一台', '镇压', '两个中国', '法轮功', '法轮大法好', '暴奸', '无修正', '国产AV', '淫水横流', '插入内射', '东热空姐', '大波粉B', '互舔淫穴', '丝袜淫妇', '乳此动人', '大波骚妇', '无码做爱', '口爆吞精', '放荡熟女', '巨炮兵团', '叔嫂肉欲', '肉感炮友', '爱妻淫穴', '无码精选', '超毛大鲍', '熟妇骚器', '内射美妇', '毒龙舔脚', '性爱擂台', '圣泉学淫', '性奴会', '密室淫行', '亮屄', '操肿', '无码淫女', '玩逼', '我就去色', '淫痴', '风骚欲女', '亮穴', '操穴喷水', '幼男', '肉箫', '巨骚', '骚妻', '漏逼', '骚屄', '大奶美逼', '高潮白浆', '性战擂台', '淫女炮图', '淫水横溢', '性交吞精', '姦染', '淫告白', '乳射', '操黑', '朝天穴', '公媳乱', '女屄', '慰春情', '集体淫', '淫B', '屄屄', '肛屄', '小嫩鸡', '舔B', '嫩奶', 'a4y', '品穴', '淫水翻騰', '一本道', '乳尻', '羞耻母', '艳照', '三P', '露毛', '紧穴', '露点', '18禁', 'g片', '無碼電影', '插b', '荡女', '露穴', '迷药', '无码', '吸精', '现代情色小说', '性交图', '性息', '艳情小说', '阴部特写', '阴道图片', '淫书', '幼女', '玉蒲团', '玉女心经', '援助交易', '中国成人论坛', '中国性爱城', '自拍写真', '做爱图片', '掰穴', '万淫堂', '穴图', '穴淫', '艳舞淫业', '咬着龟头', '要射了', '一夜性网', '阴茎插小穴', '陰穴新玩法', '婬乱军团', '淫逼', '淫姐', '淫流', '淫蜜', '淫魔', '淫妞', '淫奴', '钻插', 'H动漫', '交换夫妻', '舔脚', '丝袜', '亚洲情色网', '强奸处女', '鸡巴暴胀', '大众色情成人网', '火辣图片', '淫声浪语', '疯狂抽送', '淫河', '多人性愛', '操屄', '色情论坛', '性虎色网', '淫欲日本', '色迷城', 'petgirl', '骚女叫春', '成人百强', '猖妓', '天天干贴图', '密穴贴图', '品色堂', '嫖妓指南', '色窝窝', '被操', '巨奶', '骚洞', '阴屄', '群魔色舞', '扒穴', '六月联盟', '55sss偷拍区', '张筱雨', 'xiao77', '极品黑丝', '丝袜写真', '天天情色', '成人小说', '成人文学', '情色艺术天空', '222se图片', '淫色贴图', '厕奴', '成人', '酥胸诱惑', '人体摄影', '东北xx网', '玛雅网', '成人bt', '周六性吧', '爆乳', '诱惑视频', '裙下风光', '操母狗', '御の二代目', '丝袜足交', '肮脏美学', '亚洲有码', '欲仙欲死', '丝袜高跟', '偷拍美穴', '原味丝袜', '裸露自拍', '针孔偷拍', '放荡少妇宾馆', '性感肉丝', '拳交', '迫奸', '品香堂', '北京xx网', '虐奴', '情色导航', '欧美大乳', '欧美无套', '骚妇露逼', '炮友', '淫水丝袜', '母女双飞', '老少乱伦', '幼妓', '素人娘', '前凸后翘', '制服誘惑', '舔屄', '色色成人', '迷奸系列', '性交无码', '惹火自拍', '胯下呻吟', '淫驴屯', '少妇偷情', '护士诱惑', '群奸乱交', '极品白虎', '曲线消魂', '无码淫漫', '假阳具插穴', '蝴蝶逼', '自插小穴', 'SM援交', '西洋美女', '爱液横流', '无码无套', '淫战群P', '酒店援交', '乳霸', '湿身诱惑', '火辣写真', '动漫色图', '熟女护士', '粉红穴', '经典炮图', '童颜巨乳', '性感诱惑', '援交薄码', '美乳美穴', '奇淫宝鉴', '美骚妇', '跨下呻吟', '无毛美少女', '流蜜汁', '日本素人', '爆乳人妻', '妖媚熟母', '日本有码', '激情打炮', '制服美妇', '无码彩图', '放尿', '入穴一游', '丰唇艳姬', '群奸轮射', '高级逼', 'MM屄', '美臀嫰穴', '淫东方', '国产偷拍', '清晰内射', '嫩穴肉缝', '雪腿玉胯', '骚妇掰B', '白嫩骚妇', '梅花屄', '猛操狂射', '潮喷', '无码体验', '吞精骚妹', '紧缚凌辱', '奸淫电车', '堕淫', '颜骑', '互淫', '胸濤乳浪', '夫妻乱交', '黑屄', '奶大屄肥', '拔屄', '穴海', '换妻杂交', '黑逼', '粉屄', '口射', '多人轮', '奶挺臀翘', '扒屄', '痴乳', '鬼輪姦', '乳爆', '浴尿', '淫样', '発妻', '姫辱', '插后庭', '操爽', '嫩缝', '操射', '骚妈', '激插', '暴干', '母子交欢', '嫐屄', '足脚交', '露屄', '柔阴术', '相奸', '淫师荡母', '桃园蜜洞', '二穴中出', '奴畜抄', '连続失禁', '大鸡巴', '玩穴', '性交自拍', '叫鸡', '骚浪人妻', '吐血', '流血', '韩国', '少儿不宜', '咪咪', '酷刑', '强迫', 'A片', 'A级', '被虐', '被迫', '口技', '緊縛', '幼幼', '女優', '强歼', '色友', '蒲团', '女女', '喷尿', '插插', '坐交', '慰安妇', '妹疼', '妹痛', '弟疼', '弟痛', '姐疼', '姐痛', '哥疼', '哥痛', '同房', '捅你', '捅我', '插他', '波霸', '偷情', '制服', '亚热', '走光', '自摸', '捆绑', '潮吹', '群射', '卡通', '臭作', '薄格', '調教', '近親', '連發', '更衣', '無修正', '尿尿', '喷水', '小泽玛莉亚', '武腾兰', '武藤兰', '饭岛爱', '小泽圆', '長瀨愛', '川島和津實', '粉嫩的小沟', '小澤園', '飯島愛', '星崎未來', '及川奈央', '朝河蘭', '夕樹舞子', '大澤惠', '金澤文子', '三浦愛佳', '伊東', '武藤蘭', '麻衣', '櫻井', '風花', '星野桃', '宝来', '桜田', '藤井彩', '小森美王', '平井', '桃井望', '榊彩弥', '桜井', '中条美華', '大久保玲', '松下', '青木友梨', '深田涼子', '愛内萌', '姫島瑠璃香', '長瀬愛', '中野千夏', '岡崎美女', '宮下杏奈', '加藤', '日野美沙', '北島優', '1Pondo', '夜勤病栋', '三个代表', '一党', '专政', '洪志', '红志', '洪智', '红智', '法论', '法沦', '发轮', '发论', '发沦', '轮功', '轮公', '轮攻', '沦功', '沦公', '沦攻', '论攻', '论功', '论公', '伦攻', '伦功', '伦公', '卖春', '朱容基', '妈个', '坐台', '李远哲', '高干', '人大', '文字狱', '宋祖英', '骗局', '猫肉', '吸储', '张五常', '张丕林', '空难', '专制', '三個代表', '一黨', '多黨', '專政', '大紀元', '紅志', '紅智', '法論', '法淪', '法倫', '發輪', '發論', '發淪', '發倫', '輪功', '輪公', '輪攻', '淪功', '淪公', '淪攻', '論攻', '論功', '論公', '倫攻', '倫功', '倫公', '民運', '台獨', '李鵬', '天安門', '朱鎔基', '李長春', '李瑞環', '胡錦濤', '臺灣獨立', '藏獨', '西藏獨立', '疆獨', '新疆獨立', '傻逼', '煞笔', '招兼职', '草泥马', '操你妈', '麻痹', '妈逼', '习近平'];
        function forbiddenStr(str) {
        var re = '';
                for (var i = 0; i < forbiddenArray.length; i++) {
        if (i == forbiddenArray.length - 1)
                re += forbiddenArray[i].replace(/\s+/g, "");
                else
                re += forbiddenArray[i].replace(/\s+/g, "") + "|";
        }
        var pattern = new RegExp(re, "g");
                if (pattern.test(str)) {
        return false;
        } else {
        return true;
        }
        }

