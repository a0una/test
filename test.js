console.log('テスト');

123 //数字
"" //or 
'' //どちらかで文字列


/*
コメントアウト複数行の場合
*/

const member ={
    'name':'honda',
    'height':'170',
    'hobby':'succer'
};

console.log(member.hobby);

const member_2 = {
    'honda':{
        'height':170,
        'hobby':'succer'
        
    },
    'kagawa':{
        'height':180,
        'hobby':'succer'
    }
};

console.log(member_2.kagawa.height);

const member_3={
    '1kumi':{
        'honda':{
            'height':170,
            'hobby':'succer'
        },
        'kagawa':{
            'height':180,
            'hobby':'succer'
        }
    },
    '2kumi':{
        'yashiro':{
            'height':189,
            'hobby':'baseball'
        },
        'takahashi':{
            'height':179,
            'hobby':'baseball'
        }
    }

    };

    console.log(member_3);

