const kanjiData = [
    ["一","二","三","四","五","六","七","八","九","十","百","千","万"],
    ["天","日","夕","月","水","雨","川","州","火","光","土","丘","阜","厂","石","岩","金","山","木","片","氏","竹","艹","茶","田","米","禾","豆"],
    ["犬","羊","牛","件","兎","兔","豕","豚","象","像","隊","虎","劇","鹿","馬","角","解","牙","芽","巴","巳","鳥","隹","羽","魚","漁","貝","虫"],
    ["目","鼻","耳","口","彡","毛","頁","面","首","亠","手","足","捉","又","彐","爪","寸","廾","心","血","骨","肉","皮","革","歹","自","厶","身","己","尸"],
    ["見","示","曰","唱","言","云","彳","夂","廴","癶","入","出","立","止","服"],
    ["斤","弓","矢","失","刀","力","乂","攵","前","干","弋","戈","龴","矛","車","舟","方","向","工","亅","丁","尺","几","冂","冊","用","幺","糸","衣","罒","巾","酉","井","皿","匕","戶","門","冖","宀","广"],
    ["老","人","男","女","父","母","夫","妻","実","了","子","兄","弟","第","王","臣","士","民","疒"],
    ["大","中","央","小","少","多","卜","上","下","円","丸","可","不","否","乚","匸","凵","囗","勹"],
    ["明","盟","温","旧","児","旦","担","昼","得","早","草","亘","宣","昜","易","陽","湯","場","腸","傷","朝","潮","幹","莫","幕","墓","暮","模","名","外","夜","液","夢","日","夕"],
    ["昔","借","黄","横","共","供","巷","港","寒","選","異","暴","爆","垂","郵","乗","屯","純","屰","逆","菫","難","勤","漢","艹"],
    ["休","保","困","栄","桜","札","栃","林","禁","暦","歴","森","相","想","箱","束","速","東","練","朿","策","刺","朱","株","末","未","味","本","体","术","朮","述","術","紙","派","脈","氐","低","底","木","氏"],
    ["和","秋","私","移","利","梨","季","委","香","迷","来","番","斗","料","科","禾","米"],
    ["細","畑","思","胃","介","界","果","課","巣","単","戦","曽","増","憎","層","里","理","量","童","裏","黒","重","動","働","種","畐","福","副","富","田"],
    ["圧","赤","去","法","圭","街","坴","陸","熱","勢","周","週","調","銀","同","銅","岡","鋼","鉄","針","炎","談","災","灰","炭","灯","然","燃","焼","無","土","金","気","火"],
    ["气","気","汽","飛","氷","永","泳","录","緑","録","染","求","救","球","雪","電","雲","沿","谷","浴","欲","容","白","泉","線","楽","薬","厚","原","源","願","水","雨"],
    ["先","洗","告","造","制","製","生","性","星","産","洋","善","業","美","我","義","議","養","差","着","様","牛","羊"],
    ["免","勉","晩","肥","色","絶","也","他","地","池","兎","巴"],
    ["推","進","雑","集","準","観","権","確","蒦","護","奮","翌","習","曜","鳴","島","風","独","蚕","隹","羽","鳥","虫"],
    ["具","負","費","買","質","賛","貴","遺","貫","慣","員","損","貝"],
    ["亦","変","恋","亡","忘","望","頂","順","顔","頭","類","憂","優","道","導","亠","頁","首"],
    ["看","算","県","現","規","視","覚","直","植","値","置","真","目"],
    ["吾","悟","語","訓","計","信","号","呉","誤","極","与","写","舌","活","話","辞","乱","古","故","固","個","湖","苦","回","品","操","器","由","油","笛","演","画","曲","典","辰","農","豊","言","曰"],
    ["挙","拝","尹","君","郡","群","聿","筆","書","律","建","健","帚","婦","帰","当","康","唐","糖","争","急","事","手","彐"],
    ["友","収","取","最","圣","軽","径","経","支","枝","技","岐","反","板","版","坂","阪","返","仮","波","破","又","皮"],
    ["采","採","菜","受","授","愛","乳","爰","暖","媛","巻","券","勝","包","句","苟","敬","警","勺","約","的","均","勿","物","爪","爫","勹"],
    ["村","討","付","府","守","団","射","謝","寺","詩","時","持","待","特","等","才","材","財","寸"],
    ["届","居","展","属","刷","咼","過","死","列","例","応","亜","悪","徳","息","必","秘","密","尸","骨","歹","心"],
    ["加","賀","筋","労","協","切","初","辺","久","刃","忍","認","召","招","昭","照","分","粉","貧","亥","刻","半","判","別","則","側","測","欠","次","姿","資","茨","力","刀"],
    ["引","強","弱","知","短","侯","候","医","疑","午","許","年","乍","作","昨","复","複","復","腹","弓","矢"],
    ["代","貸","式","試","武","戒","械","或","域","戠","職","識","織","裁","銭","浅","残","戊","成","城","誠","盛","咸","減","感","蔵","臓","弋"],
    ["図","区","凶","胸","脳","文","紋","対","斉","済","交","校","効","散","敗","枚","牧","修","数","乂"],
    ["刊","岸","南","平","評","乎","呼","務","予","預","野","勇","序","近","折","断","兵","貿","留","殳","投","段","役","設","殺","穀","干","矛","斤"],
    ["家","乇","宅","呂","宮","営","官","館","管","追","至","室","屋","宿","縮","元","完","院","穴","空","窓","究","罙","深","探","宇","宙","字","学","安","案","宀"],
    ["問","聞","開","閉","間","簡","関","所","扁","編","倉","創","将","状","壮","装","門","戶","片"],
    ["机","凡","築","西","酒","酸","酋","尊","覀","価","要","票","標","益","塩","旨","指","化","花","貨","臼","潟","興","几","酉","皿","匕"],
    ["幼","後","幾","機","玄","兹","磁","滋","率","絹","綿","縄","系","係","孫","袁","遠","園","表","俵","布","希","師","市","肺","幺","衣"],
    ["庁","打","町","貯","余","除","歌","河","何","荷","奇","寄","崎","埼","功","紅","敢","厳","駅","訳","局","丁","工","尺"],
    ["耕","囲","开","形","刑","型","研","内","納","病","両","満","甬","通","痛","備","甫","補","専","博","再","冓","構","講","井","用"],
    ["庫","連","軍","運","揮","船","航","俞","輸","訪","防","放","激","族","旅","遊","占","店","点","以","似","車","方"],
    ["今","含","念","合","拾","給","答","舎","捨","令","冷","命","領","会","絵","芸","伝","転","仁","侖","輪","論","検","険","験","及","吸","級","卒","座","衆","人"],
    ["考","孝","教","者","著","暑","署","諸","都","好","姉","妹","奴","努","怒","妾","接","毋","毎","梅","海","祝","競","兑","税","説","承","蒸","耂","女","兄","了"],
    ["仏","弁","参","台","始","治","広","鉱","拡","能","熊","態","公","松","総","育","流","充","統","記","紀","改","配","厶","己"],
    ["皇","全","聖","程","班","后","玉","宝","国","主","注","柱","住","往","素","毒","麦","青","清","晴","情","精","静","責","積","績","害","割","憲","契","潔","王"],
    ["仕","声","志","誌","吉","結","喜","樹","売","読","続","壬","任","賃","廷","庭","臨","監","覧","司","詞","飼","史","吏","使","更","便","士","臣"],
    ["礼","社","申","神","奈","宗","祭","際","察","且","組","祖","助","査","比","批","混","皆","階","陛","北","背","並","兆","非","悲","俳","罪","示"],
    ["有","右","若","左","佐","存","在","廿","席","度","世","葉","丗","帯","甘","其","基","期","旗","十"],
    ["太","因","恩","春","奏","奉","棒","夭","笑","送","仲","沖","忠","映","英","夬","快","決","肖","消","省","秒","砂","大","中","小"],
    ["高","橋","京","景","就","享","熟","亭","停","尚","常","賞","堂","党","長","張","帳"],
    ["歯","歩","延","誕","正","政","整","証","定","是","提","題","艮","限","眼","根","退","郷","良","朗","食","飯","飲","止"],
    ["犯","厄","危","即","節","印","卵","位","泣","音","暗","意","億","章","障","竟","境","鏡","咅","部","倍","啇","敵","適","商","辛","幸","報","達","新","親"],
    ["処","条","冬","終","降","夏","各","格","路","略","落","閣","客","額","登","発","従","縦","行","韋","衛","走","起","徒"]
];


// script.js
function init() {
    createCheckboxes();
    addEvents();
}

function createCheckboxes() {
    const wrap = document.querySelector('.checkbox_wrap');
    
    for(let i = 1; i <= 51; i++) {
        const span = document.createElement('span');

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `page${i}`;
        input.value = i-1;
        
        const label = document.createElement('label');
        label.htmlFor = `page${i}`;
        label.textContent = i;
        
        span.appendChild(input);
        span.appendChild(label);
        wrap.appendChild(span);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showKanji() {
    const selectedPages = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => parseInt(checkbox.value));
    
    if(selectedPages.length === 0) {
        alert('페이지를 선택해주세요');
        return;
    }

    const combinedKanji = Array.from(new Set(
        selectedPages.flatMap(pageIndex => kanjiData[pageIndex])
    ));
    
    const shuffledKanji = shuffleArray([...combinedKanji]);
    
    // 한 줄에 한 글자씩 표시
    document.querySelector('.result').innerHTML = shuffledKanji.map((kanji, index) => 
        `<div>${index + 1}. ${kanji}</div>`
    ).join('');
}

function addEvents() {
    document.querySelector('.btn_task').addEventListener('click', showKanji);
}

document.addEventListener('DOMContentLoaded', init);