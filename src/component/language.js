class Language {

    e = () => {
        const lang = localStorage.getItem("language");
        if (lang === "zh_CN") {
            return this.zh_CN;
        } else if (lang === "en_US") {
            return this.en_US;
        } else if (lang === "be_BY") {
            return this.be_BY;
        } else if (lang === "ja_JP") {
            return this.ja_JP;
        } else if (lang === "ko_KR") {
            return this.ko_KR;
        } else {
            let localUtc = new Date().getTimezoneOffset() / 60;
            if (localUtc === -8) {
                return this.zh_CN;
            } else {
                return this.en_US;
            }
        }
    }

    en_US = {
        text: "Language",
        warn: "Venture capital, cautious participation.",
        copySucc: "Copy success",
        copy: "Copy",
        Button: {
            Ok: "Ok",
            Cancel: "Cancel"
        },
        fund: {
            title: "Guarantee funds [Start]",
            poolAmount: "Pool of funds",
            fundAmount: "Guarantee fund",
            total: "Total",
            close: "Lucky codes"
        },
        account: {
            title: "Account",
            change: "Change",
            balance: "Balance",
            invest: "Invest",
            withdraw: "Withdraw",
            reinvest: "Reinvest",
            amount: "Amount",
            trigger: "Trigger Income",
            staticReward: "Daily Fixed Income",
            dynamicReward: "Daily Referral Income",
            canWithdraw: "Collect Amount",
            value: "Fixed Income Limit",
            returnValue: " Total Fixed Income ",
            totalAynamicReward: " Total Referral Income",
            rule: "Contract Rule",

            modal: {
                title: "Invest",
                code: "Invitation code",
                value: "Value",
                cancel: "Cancel",
                submit: "Submit"
            },
            records: {
                id: "ID",
                title: "Records",
                time: "Remaining days",
                amount: "Amount",
                profit: "Profit",
                total: "Total",
                state: "Can Withdraw",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Recommend info",
                invitationCode: "Invitation code",
                inviteNumber: "Number of invitations",
                achievement: "Achievement",

                level: "Level",
                count: "Count",
                profit: "Share profit",
                achieveDetail: "Achievement",
                state: "Can Gain",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"Yield",
                    harvest:"Harvest"
                }
            }
        },
        rule: `
BLT Bank Contract Rules

1. Use the recommendation code as the link relationship

2. Scope of participation: ≥10 SERO

3. Personal financial management income (static income)
    1) After participating, all SEROs flow into the same BLT bank contract pool, and the account immediately shows a static income quota of three times the investment amount, which can be added indefinitely
    2) The static income is released every day according to 2% of the bank contract pool, weighted according to the weight of the static income quota of each account, until the static income is three times the investment amount, and the contract stops
3) The static income is settled daily (UTC 00:00), and then flows into the “collection collection” after the “trigger income”, which can be withdrawn and reinvested

4. Performance reward income (sharing income)
    1) Permanently enjoy 100% of the static income of the shared person
    2) Directly share performance up to 20,000 SERO, can enjoy 10% of the static income of the second-tier shareee
    3) For each additional 10,000 SERO of direct share performance, you can enjoy an additional layer of 10% of the static income of the shared person, up to 20 layers
    4) The share income is burned, that is, when calculating the share income, it is calculated based on the smaller of the principal of the sharer and the shareee. If the actual investment amount reaches 100,000 and above SERO, the bonus will not be burned.
    5) Daily settlement of shared income, automatic execution of "collection collection", cash withdrawal and reinvestment

5. Automatic reinvestment of income
        One-third of the income is automatically reinvested into the BLT bank contract pool, and the account immediately shows a static income quota of three times the reinvestment amount.

6. Distribution plan
        Of each investment currency, 95% is allocated to the BLT bank contract pool address, 5% is allocated to the development team address as a technical service fee, and the smart contract automatically executes the allocation.

7. The system is open source, data on the chain, code written, decentralized accounting, no backdoor, non-tamperable, automatic operation, automatic distribution.

8. The system discloses the contract rules and the default recommendation code, and players can take the initiative to participate without a recommender.
    
Developer philosophy:
        Through the joint efforts of family members in the community!

        Let SERO currency value consensus
        Let SERO value symbiosis
        Let SERO's market value win-win`,
        rule1: 'Default recommendation code:5H44HYAD'
    };


    zh_CN = {
        text: "语言",
        warn: "风险投资 谨慎参与",
        copySucc: "复制成功",
        copy: "复制",
        Button: {
            Ok: "确定",
            Cancel: "取消"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "我的账户",
            change: "切换",
            balance: "账户余额",
            invest: "投资",
            withdraw: "提现",
            reinvest: "复投",
            trigger: "触发收益",
            staticReward: "当天静态收益",
            dynamicReward: "当天分享收益",
            canWithdraw: "收款归集",
            value: "静态收益额度",
            returnValue: "累计静态收益",
            totalAynamicReward: "累计分享收益",
            rule: "合约规则",
            modal: {
                title: "投资",
                code: "分享码",
                value: "金额",
                cancel: "取消",
                submit: "提交"
            },
            recommend: {
                title: "我的业绩",
                invitationCode: "分享码",
                inviteNumber: "直推人数",
                achievement: "直推有效业绩",

                level: "层级",
                count: "人数",
                profit: "分享收益",
                achieveDetail: "有效业绩",
                state: "状态",
                stateValues: ["可拿", "不可拿"],
                yields:{
                    title:"收成",
                    harvest:"收取"
                }
            }
        },
        rule: `
BLT银行合约规则

一、以推荐码作为链接关系

二、参与范围：≥10 SERO 

三、个人理财收益（静态收益）
    1) 参与后，所有SERO流入进同一个BLT银行合约池，且该账户立即显示出投资额三倍的静态收益额度，此额度可无限追加
    2) 静态收益每天按照银行合约池的2%释放，按每个账户静态收益额度权重加权释放，直到静态收益三倍于投资额，合约停止
    3) 静态收益每日结算（UTC 00:00），通过“触发收益”后流入进“收款归集”，可提现可复投

四、业绩奖励收益（分享收益）
    1）永久享受一层被分享人静态收益的100% 
    2）直接分享业绩达20,000 SERO，可享受二层被分享人静态收益的10% 
    3）直接分享业绩每增加10,000 SERO，可增加享受多一层被分享人静态收益的10%，最高可享受20层 
    4）分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算。实际投资币量达到100,000及以上SERO则奖金无烧伤 
    5）分享收益每日结算，自动执行进“收款归集”，可提现可复投

五、收益自动复投
    收益的三分之一自动复投进入BLT银行合约池，且该账户立即显示出复投额三倍的静态收益额度。

六、分配方案
    每笔投资币量，其中95%分配至BLT银行合约池地址，5%作为技术服务费分配至开发团队地址，智能合约自动执行分配。

七、系统开源，数据上链，代码写定，去中心化记账，没有后门，不可篡改，自动运行，自动分发。

八、系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。 
    
开发者理念：
        通过社区家人的共同努力！
        让SERO币值共识
        让SERO价值共生
        让SERO市值共赢`,
        rule1: '默认推荐码：5H44HYAD'
    };


    ja_JP = {
        text: "言語",
        warn: "ベンチャーキャピタル",
        copySucc: "コピー成功",
        copy: "コピー",
        Button: {
            Ok: "確認する",
            Cancel: "キャンセルする"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "マイアカウント",
            change: "スイッチ",
            balance: "口座残高",
            invest: "投資する",
            withdraw: "撤退",
            reinvest: "再投資",
            amount: "私の収入",
            trigger: "トリガー収入",
            staticReward: "毎日の固定収入",
            dynamicReward: "毎日の紹介収入",
            canWithdraw: "金額を集める",
            value: "固定収入限界",
            returnValue: "累積固定収入",
            totalAynamicReward: " 累積紹介収入",
            rule: "契約ルール",

            modal: {
                title: "投資",
                code: "招待コード",
                value: "量",
                cancel: "キャンセル",
                submit: "提出すること"
            },
            records: {
                id: "ID",
                title: "私の投資",
                time: "有効期限",
                amount: "元本金額",
                profit: "利益",
                state: "状態",
                total: "Total",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "私のパフォーマンス",
                invitationCode: "招待コード",
                inviteNumber: "招待数",
                achievement: "直販",

                level: "レベル",
                count: "ピープル",
                achieveDetail: "私の業績",
                state: "状態",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"利回り",
                    harvest:"収穫"
                }
            }
        },
        rule: `
BLT銀行契約ルール

1.リンク関係として推奨コードを使用します

2.参加範囲：≥10SERO

3.個人の財務管理収入（静的収入）
    1）参加後、すべてのSEROが同じBLT銀行契約プールに流れ込み、アカウントには投資額の3倍の静的収入割り当てがすぐに表示されます。これは無期限に追加できます。
    2）静的収入は、銀行契約プールの2％に従って、各アカウントの静的収入割り当ての重みに従って加重され、静的収入が投資額の3倍になり、契約が停止するまで、毎日解放されます。
3）静的収入は毎日決済され（UTC 00:00）、「トリガー収入」の後に「コレクションコレクション」に流れ込み、引き出して再投資することができます。

4.パフォーマンス報酬収入（共有収入）
    1）共有者の静的収入の100％を永続的に享受する
    2）最大20,000 SEROのパフォーマンスを直接共有し、2番目の共有者の静的収入の10％を享受できます
    3）直接共有パフォーマンスの追加10,000 SEROごとに、共有者の静的収入の10％の追加レイヤーを最大20レイヤーで楽しむことができます。
    4）株式収入は燃やされます。つまり、株式収入を計算するときは、共有者と被共有者の元本の小さい方に基づいて計算されます。実際の投資額が10万以上のSEROに達した場合、ボーナスは燃やされません。
    5）共有収入の毎日の決済、「コレクション収集」の自動実行、現金の引き出しと再投資

5.収入の自動再投資
        収入の3分の1は自動的にBLT銀行契約プールに再投資され、アカウントには再投資額の3倍の静的収入割り当てがすぐに表示されます。

6.流通計画
        各投資通貨のうち、95％がBLT銀行契約プールアドレスに割り当てられ、5％が技術サービス料金として開発チームアドレスに割り当てられ、スマートコントラクトが自動的に割り当てを実行します。

7.システムはオープンソースであり、チェーン上のデータ、コードの記述、分散型アカウンティング、バックドアなし、改ざん不可、自動操作、自動配布です。

8.システムは契約ルールとデフォルトのレコメンデーションコードを開示し、プレイヤーはレコメンダーなしで率先して参加することができます。
    
開発者の哲学：
        地域の家族の共同の努力を通して！

        SEROの通貨価値をコンセンサスにしましょう
        SEROに共生を大切にさせましょう
        SEROの市場価値をWin-Winにしましょう`,
        rule1: 'デフォルトの推奨コード：5H44HYAD'
    };


    be_BY = {
        text: "язык",
        warn: "Венчурный капитал",
        copySucc: "Копирование успешно",
        copy: "копия",
        Button: {
            Ok: "Подтверждение",
            Cancel: "отменен"
        },
        fund: {
            title: "Защитный фонд [Инициирование]",
            poolAmount: "Фонд пула",
            fundAmount: "Фонд защиты",
            total: "Общая сумма",
            close: "Список победителей"
        },

        account: {
            title: "Мой аккаунт",
            change: "менять",
            balance: "Остаток средств",
            invest: "Вкладывать деньги",
            withdraw: "Снять со счета",
            reinvest: "Реинвестировать",
            amount: "Мой доход",
            trigger: " Доход триггера ",
            staticReward: " Ежедневный фиксированный доход ",
            dynamicReward: " Реферальный ежедневный доход ",
            canWithdraw: " Собрать сумму ",
            value: " Фиксированный лимит дохода ",
            returnValue: " Общий фиксированный доход ",
            totalAynamicReward: " Общий доход рефералов ",
            rule: "Правило договора",
            game: {
                title: "Фонд защиты [Старт]",
                poolAmount: "Пул Фонд",
                fundAmount: "Фонд защиты",
                all: "Общая сумма"
            },
            modal: {
                title: "инвестиции",
                code: "Код приглашения",
                value: "Сумма",
                cancel: "Отмена",
                submit: "покоряться"
            },
            records: {
                id: "ID",
                title: "мои инвестиции",
                time: "Дата окончания срока",
                amount: "Основная сумма",
                profit: "прибыль",
                state: "Положение дел",
                total: "общий",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Мое выступление",
                invitationCode: "Код приглашения",
                inviteNumber: "Количество приглашений",
                achievement: "Прямые продажи",

                level: "уровень",
                count: "Количество людей",
                achieveDetail: "Мое достижение",
                state: "Положение дел",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"Даходнасць",
                    harvest:"Ураджай"
                }
            }
        },

        rule: `
Правила банковского договора BLT

1. Используйте код рекомендации в качестве связи ссылки.

2. Объем участия: ≥10 SERO

3. Личный доход от управления финансами (статический доход)
    1) После участия все SERO попадают в один и тот же пул контрактов банка BLT, и на счете сразу же отображается квота статического дохода, в три раза превышающая сумму инвестиций, которую можно добавлять на неопределенный срок.
    2) Статический доход высвобождается каждый день в соответствии с 2% пула банковских контрактов, взвешенных в соответствии с весом квоты статического дохода для каждой учетной записи, до тех пор, пока статический доход не превысит сумму инвестиций в три раза, и контракт не прекратится.
3) Статический доход рассчитывается ежедневно (UTC 00:00), а затем переходит в «сбор коллекции» после «триггерного дохода», который может быть снят и реинвестирован.

4. Доход от вознаграждения за результат (совместный доход)
    1) Постоянно получать 100% статического дохода совместно используемого человека
    2) Прямая доля результатов до 20000 SERO, может получать 10% статического дохода участника второго уровня
    3) За каждые дополнительные 10000 SERO прямой доли дохода вы можете получать дополнительный уровень в размере 10% статического дохода разделяемого лица, до 20 уровней.
    4) Доход от акций сжигается, то есть при расчете дохода от акций он рассчитывается на основе меньшего из принципала акционера и участника долевого участия. Если фактическая сумма инвестиций достигает 100000 и выше SERO, бонус не будет сожжен.
    5) Ежедневный расчет долевого дохода, автоматическое выполнение «инкассо», снятие наличных и реинвестирование

5. Автоматическое реинвестирование дохода
        Одна треть дохода автоматически реинвестируется в пул контрактов банка BLT, и на счете сразу же отображается статическая квота дохода, в три раза превышающая сумму реинвестирования.

6. План распределения
        95% каждой инвестиционной валюты распределяется на адрес пула контрактов банка BLT, 5% выделяется на адрес группы разработчиков в качестве платы за техническое обслуживание, и смарт-контракт автоматически выполняет распределение.

7. Система с открытым исходным кодом, данные о цепочке, написанный код, децентрализованный учет, без бэкдора, невмешательство, автоматическая работа, автоматическое распространение.

8. Система раскрывает правила контракта и код рекомендации по умолчанию, и игроки могут проявить инициативу и принять участие без рекомендаций.
    
Философия разработчика:
        Совместными усилиями членов семьи в сообществе!

        Пусть консенсус в отношении стоимости валюты SERO
        Пусть SERO ценит симбиоз
        Пусть рыночная стоимость SERO будет беспроигрышной`,
        rule1: 'Код рекомендации по умолчанию: 5H44HYAD'
    };

    ko_KR = {
        text: "언어",

        warn: "벤처 캐피탈",
        copySucc: "복사 성공",
        copy: "복사",
        Button: {
            Ok: "확인",
            Cancel: "취소"
        },
        fund: {
            title: "보호 기금 [시작]",
            poolAmount: "기금 풀",
            fundAmount: "보호 기금",
            total: "총액",
            close: "수상자 목록"
        },
        account: {
            title: "내 계정",
            change: "스위치",
            balance: "계좌 잔액",
            invest: "사다",
            withdraw: "철수",
            reinvest: "재투자",
            amount: "나의 소득",
            trigger: "소득 트리거",
            staticReward: "일일 고정 수입",
            dynamicReward: "추천 일일 소득",
            canWithdraw: "금액 수집",
            value: "고정 수입 한도",
            returnValue: "누적 고정 수입",
            totalAynamicReward: " 누적 추천 소득",
            rule: "계약 규칙",
            game: {
                title: "보호 기금 [시작]",
                poolAmount: "자금 수영장",
                fundAmount: "보호 기금",
                all: "총액"
            },
            modal: {
                title: "투자",
                code: "초대 코드",
                value: "금액",
                cancel: "취소",
                submit: "제출"
            },
            records: {
                id: "ID",
                title: "내 투자",
                time: "만료일",
                amount: "교장",
                profit: "이익",
                state: "지위",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "내 공연",
                invitationCode: "초대 코드",
                inviteNumber: "초대장 수",
                achievement: "직접 판매",

                level: "수평",
                count: "사람",
                achieveDetail: "나의 업적",
                state: "지위",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"수율",
                    harvest:"수확"
                }
            }
        },
        rule: `
BLT 은행 계약 규칙

1. 추천 코드를 링크 관계로 사용

2. 참여 범위: ≥10 SERO

3. 개인재무관리소득(고정소득)
    1) 참여 후 모든 SERO는 동일한 BLT 은행 계약 풀로 유입되며 계정은 즉시 투자 금액의 3배에 해당하는 고정 소득 할당량을 표시하며 무기한 추가할 수 있습니다.
    2) 고정 수입은 고정 수입이 투자 금액의 3배가 될 때까지 은행 계약 풀의 2%에 따라 각 계정의 고정 수입 할당량의 가중치에 따라 가중치가 부여되어 계약이 종료될 때까지 매일 해제됩니다.
3) 고정 수입은 매일(UTC 00:00) 정산되며, 출금 및 재투자가 가능한 "트리거 수입" 이후에 "수금"으로 유입됩니다.

4. 성과보상소득(공유소득)
    1) 공유자의 고정 수입을 100% 영구적으로 향유
    2) 실적을 최대 20,000 SERO까지 직접 공유, 2차 주주의 고정 수입의 10%를 누릴 수 있습니다.
    3) 직접공유실적 10,000 SERO 추가 시 공유자 고정소득의 10% 추가층, 최대 20층까지 누릴 수 있습니다.
    4) 공유소득 소각 즉, 공유소득을 계산할 때 공유자와 공유자의 원금 중 작은 금액을 기준으로 계산한다. 실제 투자 금액이 100,000 이상 SERO 이상인 경우 보너스는 소각되지 않습니다.
    5) 공유 소득의 일일 정산, "징수"자동 실행, 현금 인출 및 재투자

5. 소득의 자동 재투자
        수입의 3분의 1이 자동으로 BLT 은행 계약 풀에 재투자되며, 계정은 즉시 재투자 금액의 3배인 고정 수입 할당량을 표시합니다.

6. 유통 계획
        각 투자 통화 중 95%는 BLT 은행 계약 풀 주소에 할당되고 5%는 기술 서비스 수수료로 개발 팀 주소에 할당되며 스마트 계약은 자동으로 할당을 실행합니다.

7. 시스템은 오픈 소스, 데이터 체인, 코드 작성, 분산 회계, 백도어 없음, 변조 불가능, 자동 운영, 자동 배포입니다.

8. 시스템은 계약 규칙과 기본 추천 코드를 공개하며 플레이어는 추천인 없이 주도적으로 참여할 수 있습니다.
    
개발자 철학:
        지역사회에서 가족 구성원들의 공동 노력을 통해!

        SERO 통화 가치 합의
        SERO가 공생을 소중히 여기게 하십시오.
        SERO의 시장 가치를 상생시키십시오`,
        rule1: '기본 권장 코드: 5H44HYAD'
    };

};

const lang = new Language();
export default lang