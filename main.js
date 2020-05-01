var items = [
    "空",
    "怪物糖果",
    "Croquet Roll",
    "树枝",
    "绷带",
    "石头糖果",
    "南瓜圈",
    "蜘蛛甜甜圈",
    "洋葱(?)",
    "幽灵果实",
    "蜘蛛汽水",
    "奶油肉桂派",
    "褪色的缎带",
    "玩具刀",
    "坚韧手套",
    "兄贵头巾",
    "雪人块",
    "好棒冰",
    "Puppydough 冰淇淋",
    "情侣棒冰",
    "单身狗棒冰",
    "兔肉桂包",
    "提米薄片",
    "遗弃的蛋派",
    "老旧的芭蕾舞裙",
    "芭蕾舞鞋",
    "击分卡",
    "神烦狗",
    "狗狗沙拉",
    "狗剩 (1)",
    "狗剩 (2)",
    "狗剩 (3)",
    "狗剩 (4)",
    "狗剩 (5)",
    "狗剩 (6)",
    "太空人食物",
    "方便面",
    "热狗...?",
    "热猫",
    "魅力汉堡",
    "海茶",
    "新星菲特",
    "传说英雄",
    "破损的眼镜",
    "破损的笔记",
    "染色围裙",
    "烧焦的平底锅",
    "牛仔帽",
    "空枪",
    "心形锁坠",
    "磨损的刀",
    "真刀",
    "锁坠",
    "糟糕的回忆",
    "最终梦想",
    "Undyne 的信",
    "Undyne 的信 EX",
    "薯片",
    "垃圾食品",
    "神秘钥匙",
    "脸型牛排",
    "Hush Puppy",
    "蜗牛派",
    "提米盔甲",
    "<错误>"
];

var cellOpts = {
    "0": "空",
    "201": "打招呼",
    "202": "帮助解密",
    "203": "关于你自己",
    "204": "叫她\"妈妈\"",
    "205": "调情",
    "206": "托丽尔的手机",
    "210": "帕派瑞斯的手机",
    "220": "空间箱子 A",
    "221": "空间箱子 B"
};

var weaponAts = {
    "3": 0, // stick
    "13": 3,
    "16": 5,
    "52": 99,
    "47": 10,
    "25": 7,
    "45": 2,
    "49": 12,
    "51": 15
};

var ArmorDfs = {
    "4": 0, // bandage
    "12": 3, // faded ribbon
    "15": 7, // manly bandana
    "44": 5, // clouded glasses
    "46": 11, // stained apron
    "50": 15, // heart locket
    "53": 99, // The Locket
    "64": 20 // temy armor
};

var rooms = {
    "4": "遗迹 - 起始点",
    "5": "遗迹 - 小花的地方",
    "6": "遗迹 - 入口 [SAVE]",
    "7": "遗迹 - 托丽尔踩砖谜题",
    "8": "遗迹 - 开关谜题",
    "9": "遗迹 - 人偶房间",
    "10": "遗迹 - 尖刺谜题",
    "11": "遗迹 - 长走廊",
    "12": "遗迹 - 落叶堆 [SAVE]",
    "13": "遗迹 - 糖果柱",
    "14": "遗迹 - 强制掉落陷阱",
    "15": "遗迹 - 第一个推石头谜题",
    "16": "遗迹 - 陷阱门走廊谜题",
    "17": "遗迹 - 会说话的岩石",
    "18": "遗迹 - 老鼠洞 [SAVE]",
    "19": "遗迹 - 小幽灵 Napstablook",
    "20": "遗迹 - 蜘蛛烘焙义卖",
    "21": "遗迹 - 两只青蛙",
    "22": "遗迹 - 藏在陷阱们谜题下的开关",
    "23": "遗迹 - 三个柱子房间 1",
    "24": "遗迹 - 三个柱子房间 2",
    "25": "遗迹 - 三个柱子房间 3",
    "26": "遗迹 - 三个柱子房间 4",
    "27": "遗迹 - 柱子房间的坑",
    "28": "遗迹 - 三条路的分叉",
    "29": "遗迹 - 说托丽尔闲话的青蛙",
    "30": "遗迹 - 有玩具刀的房间",
    "31": "遗迹 - 家 [SAVE]",
    "32": "托丽尔的家: 入口",
    "33": "托丽尔的家: 阅读室",
    "34": "托丽尔的家: 走廊",
    "35": "托丽尔的家: 托丽尔的房间",
    "36": "托丽尔的家: 你的房间",
    "37": "托丽尔的家: 厨房",
    "38": "托丽尔的地下室 1",
    "39": "托丽尔的地下室 2",
    "40": "托丽尔的地下室 3",
    "41": "托丽尔的地下室: 托丽尔的 Boss 战",
    "42": "托丽尔的地下室: 即将遇到小花的走廊",
    "43": "托丽尔的地下室: 嘲讽你的小花",
    "44": "雪镇 - 遗迹出口",
    "45": "雪镇 - 黑暗的森林小径",
    "46": "雪镇 - 盒子路 [SAVE]",
    "47": "雪镇 - 钓鱼竿",
    "48": "雪镇 - 帕派瑞斯的哨站",
    "49": "雪镇 - 遁狗",
    "50": "雪镇 - 指路标",
    "51": "雪镇 - 雪人",
    "52": "雪镇 - 电击迷宫",
    "53": "雪镇 - 推雪球游戏",
    "54": "雪镇 - 两只狗守卫的房子",
    "55": "雪镇 - 怪物小孩的纵横谜题",
    "56": "雪镇 - 意大利面 [SAVE]",
    "57": "雪镇 - 狗夫妇",
    "58": "雪镇 - XO 谜题 1",
    "59": "雪镇 - XO 谜题 2",
    "60": "雪镇 - 踩砖谜题",
    "61": "雪镇 - 狗屋 [SAVE]",
    "62": "雪镇 - 帕派瑞斯和衫斯的雪雕",
    "63": "雪镇 - 冰面滑行的 XO 谜题",
    "64": "雪镇 - 会瞬移的衫斯",
    "65": "雪镇 - 冰洞的入口",
    "66": "雪镇 - 大犬汪",
    "67": "雪镇 - 帕派瑞斯直截了当的攻击谜题",
    "68": "雪镇 - 镇子 [SAVE]",
    "69": "雪镇 - 冰狼",
    "70": "雪镇 - 船夫(妇)",
    "71": "雪镇 - 旅店",
    "73": "雪镇 - Grillby's 酒吧",
    "74": "雪镇 - 图书馆",
    "81": "雪镇 - 帕派瑞斯的战斗",
    "82": "瀑布 - 入口",
    "83": "瀑布 - 检查点 [SAVE]",
    "84": "瀑布 - 坠落的石头",
    "86": "瀑布 - 门厅(?) [SAVE]",
    "87": "瀑布 - 桥花",
    "88": "瀑布 - 垂直的桥花(?)",
    "90": "瀑布 - 望远镜",
    "91": "瀑布 - 船板",
    "92": "瀑布 - 安黛因躲避 1",
    "93": "瀑布 - 躲避安黛因之后的草丛",
    "94": "瀑布 - 水晶奶酪 [SAVE]",
    "95": "瀑布 - 衫斯的望远镜",
    "96": "瀑布 - 好棒冰",
    "97": "瀑布 - 分岔路(?)",
    "98": "瀑布 - 芭蕾舞鞋",
    "99": "瀑布 - 带你过河的鸟",
    "100": "瀑布 - 洋葱桑",
    "101": "瀑布 - 神器",
    "102": "瀑布 - 钢琴",
    "103": "瀑布 - 传说神器",
    "104": "瀑布 - 淋雨的雕像",
    "105": "瀑布 - 雨伞",
    "106": "瀑布 - 下雨的小路 1",
    "107": "瀑布 - 小雨的小路 2",
    "108": "瀑布 - 宫殿远景",
    "109": "瀑布 - 雨伞归还处",
    "110": "瀑布 - 桥 [SAVE]",
    "111": "瀑布 - 桥上躲避安黛因",
    "112": "瀑布 - 桥 坠落",
    "113": "瀑布 - 垃圾场 花床",
    "114": "瀑布 - 垃圾场 [SAVE]",
    "115": "瀑布 - 大表哥(发怒人偶)的复仇",
    "116": "瀑布 - 宁静地带 [SAVE]",
    "117": "瀑布 - 安黛因房子入口",
    "119": "瀑布 - 两个幽灵的房子",
    "124": "瀑布 - 乌龟 Gerson 的商店",
    "125": "瀑布 - 渔夫(妇)",
    "126": "瀑布 - 两个瀑布",
    "127": "瀑布 - 发光蘑菇迷宫",
    "128": "瀑布 - 提米村 [SAVE]",
    "129": "瀑布 - 黑暗迷宫",
    "130": "瀑布 - \"在你后面\"",
    "131": "瀑布 - 更多的回音花",
    "132": "瀑布 - 洞穴 桥",
    "133": "瀑布 - 洞穴 出口",
    "134": "瀑布 - 安黛因竞技场",
    "135": "瀑布 - 安黛因竞技场 + 1",
    "136": "瀑布 - 热域欢迎词",
    "137": "热域 - 入口",
    "138": "热域 - 饮水机",
    "139": "热域 - 实验室入口 [SAVE]",
    "140": "热域 - 船夫(妇)",
    "141": "热域 - 实验室",
    "142": "热域 - 实验室二楼",
    "143": "热域 - 实验室出口",
    "144": "热域 - 传送带 1",
    "145": "热域 - 岩浆房 [SAVE]",
    "146": "热域 - 烧焦的平底锅",
    "147": "热域 - 激光 1",
    "148": "热域 - 谜题 门 1",
    "149": "热域 - 左边谜题的入口",
    "150": "热域 - 左边的谜题",
    "151": "热域 - 右边谜题的入口",
    "152": "热域 - 右边的谜题",
    "153": "热域 - 通往击毁敌船谜题的桥",
    "154": "热域 - 厨房",
    "155": "热域 - 核心景象 [SAVE]",
    "156": "热域 - 电梯 R1",
    "157": "热域 - 电梯 R2",
    "158": "热域 - 热狗站",
    "159": "热域 - 美术俱乐部入口",
    "160": "热域 - 美术俱乐部（So Sorry）",
    "161": "热域 - 染色围裙",
    "162": "热域 - 传送带开关谜题",
    "163": "热域 - 击毁敌船谜题",
    "164": "热域 - 蠢念头区域 [SAVE]",
    "165": "热域 - 守卫好基友",
    "166": "热域 - 镁塔顿的新闻报道",
    "167": "热域 - 上层核心景象",
    "168": "热域 - 电梯 L2",
    "169": "热域 - 电梯 L3",
    "170": "热域 - 蜘蛛烘焙义卖",
    "171": "热域 - F3 谜题 门",
    "172": "热域 - F3 南边谜题入口",
    "173": "热域 - F3 南边谜题",
    "174": "热域 - F3 北边谜题入口",
    "175": "热域 - F3 北边谜题",
    "176": "热域 - 蜘蛛 入口 [SAVE]",
    "177": "热域 - 蜘蛛 房间",
    "178": "热域 - 镁塔顿海报",
    "179": "热域 - 剧院舞台",
    "180": "热域 - 踩砖谜题 2",
    "181": "热域 - 好棒冰站 2",
    "182": "热域 - 酒店入口",
    "183": "热域 - 酒店大厅 [SAVE]",
    "184": "热域 - 酒店餐馆",
    "185": "热域 - 酒店走廊",
    "186": "热域 - 酒店旁的小巷",
    "187": "热域 - 电梯 R3",
    "188": "热域 - 核心入口",
    "189": "热域 - 核心电梯",
    "190": "热域 - 核心 洞",
    "191": "热域 - 核心 北边的电梯",
    "192": "热域 - 核心 顺序错误的激光",
    "193": "热域 - 核心 十字路口",
    "194": "热域 - 核心 死路",
    "195": "热域 - 核心 能量激光谜题",
    "196": "热域 - 核心 分支 [SAVE]",
    "197": "热域 - 核心 冰块储存(?)",
    "198": "热域 - 核心 西边谜题入口",
    "199": "热域 - 核心 西边谜题入口 + 1",
    "200": "热域 - 核心 西边谜题入口 + 2",
    "202": "热域 - 核心 尽头 - 3",
    "201": "热域 - 核心 南边有 100G 的垃圾桶",
    "203": "热域 - 核心 尽头 - 4",
    "204": "热域 - 核心 迷路",
    "205": "热域 - 核心 西边的谜题",
    "206": "热域 - 核心 有魅力汉堡的垃圾桶",
    "207": "热域 - 核心 有 100G 的垃圾桶",
    "208": "热域 - 核心 终极怪物桥",
    "209": "热域 - 核心 尽头 - 1",
    "210": "热域 - 核心 尽头 [SAVE]",
    "211": "热域 - 核心 镁塔顿的房间",
    "212": "热域 - 核心 最终电梯的入口",
    "214": "热域 - 电梯 L1",
    "215": "热域 - 核心 电梯入口",
    "216": "城堡 - 电梯 [SAVE]",
    "217": "城堡 - 另一个电梯",
    "218": "城堡 - 黑暗的小径",
    "219": "新家 [SAVE]",
    "220": "新家 - 入口",
    "221": "新家 - 阅读室",
    "222": "新家 - 走廊",
    "223": "新家 - 艾斯戈尔的房间",
    "224": "新家 - 你的房间",
    "225": "新家 - 厨房",
    "226": "新家 - 地下室 1",
    "227": "新家 - 地下室 2",
    "228": "新家 - 地下室 3",
    "229": "新家 - 地下室 4",
    "230": "新家 - 电梯",
    "231": "最后的长廊 [SAVE]",
    "232": "王座 入口 [SAVE]",
    "233": "王座 入口 - 下楼",
    "234": "王座 入口 - 棺材",
    "235": "王座 房间 [SAVE]",
    "236": "终点 [SAVE]",
    "237": "结界",
    "241": "外面",
    "242": "实验室电梯",
    "243": "真实验室 - 电梯",
    "244": "真实验室 - 电梯入口",
    "245": "真实验室 - 南边的走廊",
    "246": "真实验室 [SAVE]",
    "247": "真实验室 - 西边的走廊 1",
    "248": "真实验室 - 西边的坠落(?)",
    "249": "真实验室 - 西边的红色钥匙孔",
    "250": "真实验室 - 北边的走廊 1",
    "251": "真实验室 - 卧室 [SAVE]",
    "252": "真实验室 - 南北边的走廊",
    "253": "真实验室 - 南北边的蓝色钥匙孔",
    "254": "真实验室 - 北边的走廊 2",
    "255": "真实验室 - 绿色钥匙",
    "256": "真实验室 - 西北边的决心提取器",
    "257": "真实验室 - 黄色钥匙孔 + 电视",
    "258": "真实验室 - 西北边的冰箱",
    "259": "真实验室 - 绿色钥匙孔",
    "260": "真实验室 - 风扇",
    "261": "真实验室 - 电梯 2",
    "262": "真实验室 - 动力室走廊",
    "263": "真实验室 - 动力室",
    "265": "雪镇 - 冰洞 1",
    "331": "艾斯瑞尔/小羊的房间"
};

var floweyStates = {
    "0": "无 (初始状态)",
    "1": "水蓝色 (已发起战斗)",
    "2": "橙色",
    "3": "蓝色",
    "4": "紫色",
    "5": "绿色",
    "6": "黄色",
    "7": "无 (已完成战斗)",
};

var torielStates = {
    "0": "初始状态",
    "3": "未知",
    "4": "被击杀",
    "5": "被宽恕"
};

var comedianStates = {
    "0": "初始状态",
    "1": "未知",
    "2": "被击杀"
};

var doggoStates = {
    "0": "初始状态",
    "1": "被击杀",
    "2": "被宽恕"
};

var dogamyDogaressaStates = {
    "0": "初始状态",
    "1": "被击杀",
    "2": "被宽恕"
};

var greaterDogStates = {
    "0": "初始状态",
    "1": "被击杀",
    "2": "被宽恕",
    "3": "被无视"
};

var papyrusStates = {
    "0": "初始状态",
    "1": "被击杀"
};

var plotValues = {
    "2": "没有和帕派瑞斯战斗",
    "101": "和帕派瑞斯战斗过",
    "119": "未知",
    "164": "热域屠杀",
    "199": "未知",
    "999": "和平结尾"
};

var trainingDummyStates = {
    "0": "初始状态",
    "1": "被击杀",
    "2": "谈话过",
    "3": "被你无聊到"
};

var shyrenStates = {
    "0": "初始状态",
    "1": "被击杀",
    "2": "未知"
};

var madDummyStates = {
    "0": "初始状态",
    "1": "被击杀"
};

var undyneStates1 = {
    "0": "初始状态",
    "1": "被击杀"
};

var undyneStates2 = {
    "0": "初始状态",
    "1": "被击杀"
};

var broGuardsStates = {
    "0": "初始状态",
    "1": "被击杀"
};

var mettatonStates = {
    "0": "初始状态",
    "1": "被击杀"
};

var muffetStates = {
    "0": "初始状态",
    "1": "被击杀"
};

function parseIniFromText(text) {
    "use strict";
    var lines = text.match(/[^\r\n]+/g);
    var section = null;
    var ini = {};
    lines.forEach(function(line) {
        // Ignore empty lines
        if (line === "") {
            return;
        }
        // If line starts with [, it is a section header
        var lbracket = line.indexOf("[");
        if (lbracket !== -1) {
            var rbracket = line.slice(lbracket).indexOf("]") + lbracket;
            if (rbracket !== -1) {
                section = line.slice(lbracket + 1, rbracket);
                ini[section] = {};
            }
        } else { // Otherwise, it is assumed to be an assignment
            if (section === null) {
                throw "Assignment outside of a section";
            }
            var eq = line.indexOf("=");
            if (eq === -1) {
                throw "Expected '='";
            }
            var lquot = line.indexOf('"');
            if (lquot === -1) {
                throw "Expected '\"'";
            }
            var rquot = line.slice(lquot + 1).indexOf('"') + lquot + 1;
            if (rquot === -1) {
                throw "Unterminated value string";
            }
            var value = line.slice(lquot + 1, rquot);
            var key = line.slice(0, eq);
            ini[section][key] = value;
        }
    });
    return ini;
}

function flowey_laugh_once() {
    "use strict";
    if (localStorage.getItem("laughed") !== "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
        if(!document.getElementById("mute").checked) {
            var audio = new Audio("res/flowey_laugh.mp3");
            audio.play();
        }
        localStorage.setItem("laughed", "true");
    }
}

function insert_inv_lists() {
    "use strict";
    function insert(node, i) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", i);
        var newContent = document.createTextNode(items[i]);
        newOption.appendChild(newContent);
        var select = document.getElementById(node);
        select.appendChild(newOption);
    }
    for (var i = 0; i < items.length; i++) {
        for (var j = 1; j <= 8; j++) {
            insert("sav-invslot" + j, i);
        }
        insert("sav-weapon", i);
        insert("sav-armor", i);
    }
}

function insert_cell_lists() {
    "use strict";
    for (var i = 1; i <= 8; i++) {
        loadSelectFromObj("sav-cellslot" + i, cellOpts);
    }
}

function loadSelectFromObj(selectId, obj) {
    "use strict";
    var select = document.getElementById(selectId);

    for (var key in obj) {
        var newOption = document.createElement("option");
        newOption.setAttribute("value", key);
        var newContent = document.createTextNode(obj[key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
}

// Load undertale.ini data into an ini object and execute a closure on it.
function loadIniFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        try {
            closure(parseIniFromText(text));
        } catch (err) {
            window.alert("无法正常解析 undertale.ini: " + err);
        }
    };
    reader.readAsText(file);
}

// Load save data from a file into an array of values, and execute a closure on it.
function loadSaveFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        closure(text.match(/[^\r\n]+/g));
    };
    reader.readAsText(file);
}

// Update the persistent data form from an ini object.
function updatePersistentDataForm(iniobj) {
    "use strict";
    document.getElementById("ini-name").value = iniobj.General.Name;
    document.getElementById("ini-location").value = parseInt(iniobj.General.Room.trim());
    document.getElementById("ini-kills").value = parseInt(iniobj.General.Kills.trim());
    document.getElementById("ini-love").value = parseInt(iniobj.General.Love.trim());
    if (iniobj.FFFFF) {
        if (iniobj.FFFFF.F) {
            if (parseInt(iniobj.FFFFF.F.trim()) === 1) {
                document.getElementById("ini-omega-flowey-trapped").checked = true;
            } else {
                document.getElementById("ini-omega-flowey-trapped").checked = false;
            }
        }
        if (iniobj.FFFFF.P) {
            document.getElementById("ini-omega-flowey-soul").value = parseInt(iniobj.FFFFF.P.trim());
        }
        if (iniobj.FFFFF.D) {
            document.getElementById("ini-omega-flowey-deaths").value = parseInt(iniobj.FFFFF.D.trim());
        }
    } else {
        document.getElementById("ini-omega-flowey-trapped").checked = false;
    }
    if (iniobj.reset) {
        if (iniobj.reset.s_key) {
            if (parseInt(iniobj.reset.s_key.trim()) === 1) {
                document.getElementById("ini-dodged-all-special-thanks").checked = true;
            } else {
                document.getElementById("ini-dodged-all-special-thanks").checked = false;
            }
        }
    } else {
        document.getElementById("ini-dodged-all-special-thanks").checked = false;
    }
    if (iniobj.fun) {
        document.getElementById("ini-fun").value = parseInt(iniobj.fun.trim());
    }
}

// Update an ini object from the persistent data form.
function updateIniFromForm(ini) {
    "use strict";
    ini.General.Name = document.getElementById("ini-name").value;
    ini.General.Room = document.getElementById("ini-location").value;
    ini.General.Kills = document.getElementById("ini-kills").value;
    ini.General.Love = document.getElementById("ini-love").value;
    if (document.getElementById("ini-omega-flowey-trapped").checked) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.F = "1";
    } else {
        if (ini.FFFFF) {
            ini.FFFFF.F = "0";
        }
    }
    var upcomingSoul = parseInt(document.getElementById("ini-omega-flowey-soul").value);
    if (upcomingSoul) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.P = upcomingSoul;
    }
    var timesDied = parseInt(document.getElementById("ini-omega-flowey-deaths").value);
    if (timesDied) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        if (ini.FFFFF) {
            ini.FFFFF.D = timesDied;
        }
    }
    if (document.getElementById("ini-dodged-all-special-thanks").checked) {
        if (!ini.reset) {
            ini.reset = {};
        }
        ini.reset.s_key = "1";
    } else {
        if (ini.reset) {
            ini.reset.s_key = "0";
        }
    }
    var fun = parseInt(document.getElementById("ini-fun").value);
    if (fun) {
        ini.General.fun = fun;
    }
}

function updateSelection(id, values, index, list) {
    "use strict";
    var value = parseInt(values[index].trim());
    if (!list[value]) {
        list[value] = "Unrecognized (" + value + ")";
        loadSelectFromObj(id, list);
    }
    document.getElementById(id).value = value;
}

// Update the save data form from an array of values.
function updateSaveDataForm(values) {
    "use strict";
    document.getElementById("sav-name").value = values[0];
    document.getElementById("sav-kills").value = values[11];
    document.getElementById("sav-love").value = values[1];
    document.getElementById("sav-hp").value = values[2];
    document.getElementById("sav-exp").value = values[9];
    document.getElementById("sav-gold").value = values[10];
    document.getElementById("sav-at").value = values[4];
    document.getElementById("sav-weaponat").value = values[5];
    document.getElementById("sav-df").value = values[6];
    document.getElementById("sav-armordf").value = values[7];
    for (var i = 0; i < 8; i++) {
        updateSelection("sav-invslot" + (i + 1), values, 12 + (i * 2), items);
        updateSelection("sav-cellslot" + (i + 1), values, 13 + (i * 2), cellOpts);
    }
    updateSelection("sav-weapon", values, 28, items);
    updateSelection("sav-armor", values, 29, items);
    updateSelection("sav-trainingdummystate", values, 44, trainingDummyStates);
    updateSelection("sav-torielstate", values, 75, torielStates);
    updateSelection("sav-doggostate", values, 82, doggoStates);
    updateSelection("sav-dogamydogaressastate", values, 83, dogamyDogaressaStates);
    updateSelection("sav-greaterdogstate", values, 84, greaterDogStates);
    updateSelection("sav-comedianstate", values, 87, comedianStates);
    updateSelection("sav-papyrusstate", values, 97, papyrusStates);
    updateSelection("sav-shyrenstate", values, 111, shyrenStates);
    document.getElementById("sav-unkkills").value = values[231];
    document.getElementById("sav-ruinskills").value = values[232];
    document.getElementById("sav-snowdinkills").value = values[233];
    document.getElementById("sav-waterfallkills").value = values[234];
    document.getElementById("sav-hotlandkills").value = values[235];
    updateSelection("sav-undynestate1", values, 281, undyneStates1);
    updateSelection("sav-maddummystate", values, 282, madDummyStates);
    updateSelection("sav-undynestate2", values, 380, undyneStates2);
    updateSelection("sav-muffetstate", values, 427, muffetStates);
    updateSelection("sav-broguardsstate", values, 432, broGuardsStates);
    updateSelection("sav-mettatonstate", values, 455, mettatonStates);
    if (parseInt(values[523].trim()) === 12) {
        document.getElementById("sav-exitedtruelab").checked = true;
    } else {
        document.getElementById("sav-exitedtruelab").checked = false;
    }
    if (parseInt(values[37].trim()) === 1) {
        document.getElementById("sav-defeatedasriel").checked = true;
    } else {
        document.getElementById("sav-defeatedasriel").checked = false;
    }
    updateSelection("sav-plotvalue", values, 542, plotValues);
    if (parseInt(values[545].trim()) === 1) {
        document.getElementById("sav-havecell").checked = true;
    } else {
        document.getElementById("sav-havecell").checked = false;
    }
    document.getElementById("sav-location").value = parseInt(values[547].trim());
    document.getElementById("sav-fun").value = parseInt(values[35].trim());
}

// Update an array of values from the save data form.
function updateSaveValuesFromForm(values) {
    "use strict";
    values[0] = document.getElementById("sav-name").value;
    values[1] = document.getElementById("sav-love").value;
    values[2] = document.getElementById("sav-hp").value;
    values[4] = document.getElementById("sav-at").value;
    values[5] = document.getElementById("sav-weaponat").value;
    values[6] = document.getElementById("sav-df").value;
    values[7] = document.getElementById("sav-armordf").value;
    values[9] = document.getElementById("sav-exp").value;
    values[10] = document.getElementById("sav-gold").value;
    values[11] = document.getElementById("sav-kills").value;
    values[12] = document.getElementById("sav-invslot1").value;
    values[13] = document.getElementById("sav-cellslot1").value;
    values[14] = document.getElementById("sav-invslot2").value;
    values[15] = document.getElementById("sav-cellslot2").value;
    values[16] = document.getElementById("sav-invslot3").value;
    values[17] = document.getElementById("sav-cellslot3").value;
    values[18] = document.getElementById("sav-invslot4").value;
    values[19] = document.getElementById("sav-cellslot4").value;
    values[20] = document.getElementById("sav-invslot5").value;
    values[21] = document.getElementById("sav-cellslot5").value;
    values[22] = document.getElementById("sav-invslot6").value;
    values[23] = document.getElementById("sav-cellslot6").value;
    values[24] = document.getElementById("sav-invslot7").value;
    values[25] = document.getElementById("sav-cellslot7").value;
    values[26] = document.getElementById("sav-invslot8").value;
    values[27] = document.getElementById("sav-cellslot8").value;
    values[28] = document.getElementById("sav-weapon").value;
    values[29] = document.getElementById("sav-armor").value;
    values[44] = document.getElementById("sav-trainingdummystate").value;
    values[75] = document.getElementById("sav-torielstate").value;
    values[82] = document.getElementById("sav-doggostate").value;
    values[83] = document.getElementById("sav-dogamydogaressastate").value;
    values[84] = document.getElementById("sav-greaterdogstate").value;
    values[87] = document.getElementById("sav-comedianstate").value;
    values[97] = document.getElementById("sav-papyrusstate").value;
    values[111] = document.getElementById("sav-shyrenstate").value;
    values[231] = document.getElementById("sav-unkkills").value;
    values[232] = document.getElementById("sav-ruinskills").value;
    values[233] = document.getElementById("sav-snowdinkills").value;
    values[234] = document.getElementById("sav-waterfallkills").value;
    values[235] = document.getElementById("sav-hotlandkills").value;
    values[281] = document.getElementById("sav-undynestate1").value;
    values[282] = document.getElementById("sav-maddummystate").value;
    values[380] = document.getElementById("sav-undynestate2").value;
    values[427] = document.getElementById("sav-muffetstate").value;
    values[432] = document.getElementById("sav-broguardsstate").value;
    values[455] = document.getElementById("sav-mettatonstate").value;
    if (document.getElementById("sav-exitedtruelab").checked) {
        values[523] = "12";
    } else {
        values[523] = "0";
    }
    if (document.getElementById("sav-defeatedasriel").checked) {
        values[37] = "1";
    } else {
        values[37] = "0";
    }
    values[542] = document.getElementById("sav-plotvalue").value;
    if (document.getElementById("sav-havecell").checked) {
        values[545] = "1";
    } else {
        values[545] = "0";
    }
    values[547] = document.getElementById("sav-location").value;
    values[35] = document.getElementById("sav-fun").value;
}

function saveIniToFile(ini) {
    "use strict";
    var string = "";
    for (var section in ini) {
        string += "[" + section + "]\r\n";
        for (var key in ini[section]) {
            string += key + "=\"" + ini[section][key] + "\"\r\n";
        }
    }
    var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "undertale.ini", true);
    flowey_laugh_once();
}

function saveSaveValuesToFile(values) {
    "use strict";
    var string = "";
    for (var i = 0; i < values.length; i++) {
        string += values[i] + "\r\n";
    }
    var blob = new Blob([string], {type: "application/octet-stream"});
    saveAs(blob, "file0", true);
    flowey_laugh_once();
}

function loadPresetSelect() {
    "use strict";
    var selectNode = document.getElementById("builtinpresetselect");
    for (var k in presets) {
        var newOption = document.createElement("option");
        var newContent = document.createTextNode(k);
        newOption.appendChild(newContent);
        selectNode.appendChild(newOption);
    }
}

function start() {
    "use strict";
    var userPresets = localStorage.getItem("userPresets");
    if (userPresets === null) {
        localStorage.setItem("userPresets", JSON.stringify({}));
    } else {
        for (var key in JSON.parse(userPresets)) {
            var presetSelect2 = document.getElementById("userpresetselect");
            var option2 = document.createElement("option");
            var text2 = document.createTextNode(key);
            option2.appendChild(text2);
            presetSelect2.appendChild(option2);
        }
    }
    if (localStorage.getItem("laughed") === "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
    }
    var ini, saveLines;
    function loadPreset(name) {
        ini = presets[name].ini;
        saveLines = presets[name].lines;
        updateSaveDataForm(saveLines);
        updatePersistentDataForm(ini);
    }
    loadSelectFromObj("sav-location", rooms);
    loadSelectFromObj("ini-location", rooms);
    loadSelectFromObj("ini-omega-flowey-soul", floweyStates);
    loadSelectFromObj("sav-torielstate", torielStates);
    loadSelectFromObj("sav-comedianstate", comedianStates);
    loadSelectFromObj("sav-doggostate", doggoStates);
    loadSelectFromObj("sav-dogamydogaressastate", dogamyDogaressaStates);
    loadSelectFromObj("sav-greaterdogstate", greaterDogStates);
    loadSelectFromObj("sav-papyrusstate", papyrusStates);
    loadSelectFromObj("sav-plotvalue", plotValues);
    loadSelectFromObj("sav-trainingdummystate", trainingDummyStates);
    loadSelectFromObj("sav-shyrenstate", shyrenStates);
    loadSelectFromObj("sav-maddummystate", madDummyStates);
    loadSelectFromObj("sav-undynestate1", undyneStates1);
    loadSelectFromObj("sav-undynestate2", undyneStates2);
    loadSelectFromObj("sav-broguardsstate", broGuardsStates);
    loadSelectFromObj("sav-muffetstate", muffetStates);
    loadSelectFromObj("sav-mettatonstate", mettatonStates);
    insert_inv_lists();
    insert_cell_lists();
    loadPresetSelect();
    loadPreset("遗迹开始");
    var iniFile, saveFile;
    var iniInput = document.getElementById("ini-file");
    iniInput.addEventListener("change", function(evt) {
        iniFile = evt.target.files[0];
        if (iniFile) {
            document.getElementById("ini-loadbutton").disabled = false;
        } else {
            document.getElementById("ini-loadbutton").disabled = true;
        }
    }, false);
    var saveInput = document.getElementById("sav-file");
    saveInput.addEventListener("change", function (evt) {
        saveFile = evt.target.files[0];
        if (saveFile) {
            document.getElementById("sav-loadbutton").disabled = false;
        } else {
            document.getElementById("sav-loadbutton").disabled = true;
        }
    }, false);
    var iniLoadButton = document.getElementById("ini-loadbutton");
    iniLoadButton.addEventListener("click", function() {
        if (!iniFile) {
            window.alert("你需要先选一个文件!");
            return;
        }
        loadIniFromFile(iniFile, function(iniobj) {
            updatePersistentDataForm(iniobj);
            ini = iniobj;
        });
    }, false);
    var file0LoadButton = document.getElementById("sav-loadbutton");
    file0LoadButton.addEventListener("click", function() {
        if (!saveFile) {
            window.alert("你需要先选一个文件!");
            return;
        }
        loadSaveFromFile(saveFile, function(lines) {
            updateSaveDataForm(lines);
            saveLines = lines;
        });
    }, false);
    var saveIniButton = document.getElementById("ini-savebutton");
    saveIniButton.addEventListener("click", function() {
        updateIniFromForm(ini);
        saveIniToFile(ini);
    }, false);
    var saveXButton = document.getElementById("sav-savebutton");
    saveXButton.addEventListener("click", function() {
        updateSaveValuesFromForm(saveLines);
        saveSaveValuesToFile(saveLines);
    }, false);
    document.getElementById("savesi2").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_962", true);
        flowey_laugh_once();
    }, false);
    document.getElementById("savesi3").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_963", true);
        flowey_laugh_once();
    }, false);
    var weaponSelect = document.getElementById("sav-weapon");
    weaponSelect.onchange = function() {
        var at = weaponAts[weaponSelect.value];
        if (typeof at !== "undefined") {
            document.getElementById("sav-weaponat").value = at;
        }
    };
    var armorSelect = document.getElementById("sav-armor");
    armorSelect.onchange = function() {
        var df = ArmorDfs[armorSelect.value];
        if (typeof df !== "undefined") {
            document.getElementById("sav-armordf").value = df;
        }
    };
    document.getElementById("builtinpresetload").addEventListener("click", function() {
        var name = document.getElementById("builtinpresetselect").value;
        loadPreset(name);
    }, false);
    function saveUserPreset(name) {
        updateIniFromForm(ini);
        updateSaveValuesFromForm(saveLines);
        var obj = {
            "ini": ini,
            "lines": saveLines,
        };
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        presets[name] = obj;
        localStorage.setItem("userPresets",JSON.stringify(presets));
    }
    document.getElementById("userpresetnew").addEventListener("click", function() {
        var name = window.prompt("为你的预设取个名字！");
        if (name === null || name === "") {
            window.alert("你并没有输入一个正确的名字，预设没有被创建。");
        } else {
            saveUserPreset(name);
            var presetSelect = document.getElementById("userpresetselect");
            var option = document.createElement("option");
            var text = document.createTextNode(name);
            option.appendChild(text);
            presetSelect.appendChild(option);
            presetSelect.value = name;
            document.getElementById("userpresetload").disabled = false;
            document.getElementById("userpresetsave").disabled = false;
            document.getElementById("userpresetdelete").disabled = false;
            document.getElementById("userpresetexport").disabled = false;
        }
    }, false);
    document.getElementById("userpresetsave").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            saveUserPreset(name);
        } else {
            window.alert("你首先需要选择一个正确的预设！");
        }
    }, false);
    document.getElementById("userpresetload").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            var item = localStorage.getItem("userPresets");
            var presets = JSON.parse(item);
            var obj = presets[name];
            ini = obj.ini;
            saveLines = obj.lines;
            updateSaveDataForm(saveLines);
            updatePersistentDataForm(ini);
        } else {
            window.alert("你首先需要选择一个正确的预设！");
        }
    }, false);
    document.getElementById("userpresetdelete").addEventListener("click", function() {
        var selection = document.getElementById("userpresetselect");
        var name = selection.value;
        var children = selection.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].value === name) {
                selection.removeChild(children[i]);
            }
        }
        var item = localStorage.getItem("userPresets");
        var presets = JSON.parse(item);
        delete presets[name];
        localStorage.setItem("userPresets", JSON.stringify(presets));
        if (document.getElementById("userpresetselect").value === "") {
            document.getElementById("userpresetload").disabled = true;
            document.getElementById("userpresetsave").disabled = true;
            document.getElementById("userpresetdelete").disabled = true;
            document.getElementById("userpresetexport").disabled = true;
        }
    }, false);
    if (document.getElementById("userpresetselect").value !== "") {
        document.getElementById("userpresetload").disabled = false;
        document.getElementById("userpresetsave").disabled = false;
        document.getElementById("userpresetdelete").disabled = false;
        document.getElementById("userpresetexport").disabled = false;
    }
    document.getElementById("userpresetexport").addEventListener("click", function() {
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        var name = document.getElementById("userpresetselect").value;
        saveUserPreset(name);
        var preset = presets[name];
        var string = "presets[\"" + name + "\"] = " + JSON.stringify(preset) + ";";
        var blob = new Blob([string], {type: "application/octet-stream"});
        saveAs(blob, name + ".js", true);
    }, false);
    document.getElementById("floweyimg").addEventListener("click", function() {
        document.getElementById("floweyimg").src = "res/flowey_wink.png";
        localStorage.setItem("laughed", false);
    }, false);
}

document.addEventListener("DOMContentLoaded", start);
