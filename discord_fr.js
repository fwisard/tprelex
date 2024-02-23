/* by: jan Polijan
 *
 * dictionnary that transforms toki pona names from latin
 * into sitelen pona look-alike to use on the "toki pona
 * francophone" Discord group.
 *
 * tranformation is such that:
 * - it is use discord :emojis: from the group if possible,
 * - or use look-alike unicode characters
 * - or use some emojis:
 *   (for colors, genders, "funny" names, or when it's a good match)
 *
 *
 * look alike characters:
 * i found many and some from firaro: https://firaro.neocities.org/Sitelen%20Pona
 */

dictionaries.sp_discord_fr = {
//
'n'              : ':n_:', // moved up here so that it doesn interfere with pana,moku,kepeken
//
///////////////////////////////////////
// nimi pi wan ala + nimi panke nasa //
///////////////////////////////////////
'kissolo'        : ':kissolo:', // kikolo + kiss
'kulupu-nasa'    : ':kulupu_nasa:',
'toki-pona'      : ':tokipona:',
'toki_pona'      : ':tokipona:',
'tokipona'       : ':tokipona:',
'mi_kama'        : ':mi_kama:',
'mi_tawa'        : ':mi_tawa:',
'o_lape_pona'    : ':o_lape_pona:',
'ni_li_pona'     : ':ni_li_pona:',
'ni_li_ike'      : ':ni_li_ike:',
'pona_tawa_mi'   : ':pona_tawa_mi:',
'sina_wawa'      : ':wawa_sina:',
'wawa_sina'      : ':wawa_sina:',
//
////////////////
// nimi panke //
////////////////
'wiwi'               : ':wiwi:',
'olala'              : ':olala:',
'panke'              : ':panke:',
'masalo'             : ':masalo:',
'sapelipope'         : ':sapelipope:',
'kalapisituwi'       : '**῀õ῀**',
'kalapisituji'       : '**῀õ῀**', // (=kalapisituwi)
'kikolo'             : ':kikolo:',
'pipolo'             : ':face_with_cowboy_hat:',﻿
'kikulo'             : '**(ᶫ.ᶫ)**',
'sikako'             : ':snail:',
'kokoliko'           : ':rooster:',
'apelo'              : ':apelo:',
'kosikosa'           : '**≃**',
'antikontitutonelema': ':classical_building:', //:house_abandoned:
'antekontetutonelema': ':classical_building:', //:house_abandoned:
//
/////////////
// nimi pu //
/////////////
'a'              : ':a_:',
'akesi'          : '**≡Ö≡**',
'ala'            : ':ala:',
'ala1'           : ':x:',
'ala2'           : ':heavy_multiplication_x:',
'alasa'          : '**Đ→**', // ':bow_and_arrow:',
'alasa1'         : ':bow_and_arrow:',
'ale'            : ':ale:',
'ali'            : ':ake:', // (= ale)
'anpa'           : '**└─̣┘**',
'ante'           : ':ante:',
'anu'            : '**Ｙ**', // halfwidt&fullformY  // 'Y',
'awen'           : ':awen:',
'e'              : ':e_:',
'en'             : '**+**',  // :heavy_plus_sign:
'en1'            : ':heavy_plus_sign:',
'esun'           : '**ℒ**',
// 'ijo'         : I had to put 'ijo' at the very end of the nimi pu, because:
//                 its sp is ":o:" and it get rechanged again by the relex
//                 machine to the sp for the name "o". this is a bit buggy!
'ike'            : ':ike:',
'ilo'            : '**中**',
'insa'           : '**└̇┘**',
'jaki'           : ':jaki:',
'jaki1'          : ':poop:',
'jan'            : ':jan:',
'jan1'           : ':bust_in_silhouette:',
'jelo'           : ':yellow_square:',
'jo'             : '**Gͦ**', // 'G̊',
'jo1'            : ':hook:',
'kala'           : ':fish:',
'kalama'         : ':kalama:',
'kama'           : ':kama:',
'kasi'           : ':seedling:', // ܤ
'ken'            : '**K**',
'kepeken'        : '** ̬n̍͆**', // 'ᕄ̍͆ ',   // :mahjong:
'kili'           : ':apple:',
'kiwen'          : ':gem:',
'ko'             : '**ꕤ**',
'kon'            : '**∬**',
'kule'           : '**🜁**', // '△̶'
'kulupu'         : ':kulupu:',
'kute'           : ':ear:',
'la'             : '**）**', //halfwidth&fullform ) ')',
'lape'           : '**⊸**',
'laso'           : ':blue_square:', // :blue_square: :green_square:
'lawa'           : '**Ꝋ**',   // '𑁌', //Ꝋ
'len'            : '**╒╤╕**',   // mieux mais pas courant: '𐘮', // '╒╤╕'
'lete'           : ':snowflake:',   //  '⚹', '⚹' <- no ,   // :snowflake:
'li'             : ':li:',  //＞
'lili'           : '**v**', // '⌄',
'linja'          : '**～**',
'lipu'           : ':lipu:',
'loje'           : ':red_square:', // :red_square:
'lon'            : ':lon:',
'luka'           : ':back_of_hand:', //'ᕄ',
'lukin'          : ':eye:', // 'ᯣ', // :eye:
'lupa'           : '**ᑌ**',
'ma'             : '**⨁**', // '᪠',
'mama'           : '**O̥**',
'mani'           : '**𑀫**', //'ᴕ', // :taurus:
'meli'           : ':female_sign:',
'mi'             : '**ᑭ**',
'mije'           : ':male_sign:',
'moku'           : '** ̬n̆**', //'ᕄ̆',
'moli'           : '**(ᕯ)**', //:skull:
'moli1'          : ':skull:',
'monsi'          : '**·[**',
'mu'             : ':mu:',
'mun'            : ':first_quarter_moon_with_face:',
'musi'           : ':musi:',
'mute'           : '**ꔖ**', // '|||', // | would interfere with Discord
'nanpa'          : '**ⵌ**', // better than ascii # which may trigger stuff on Discord, :hash:
'nasa'           : ':nasa:',
'nasin'          : ':nasin:',
'nena'           : '**ᑎ**',
'ni'             : ':ni:',
'ni1'            : ':ni_:',
'nimi'           : '**▭**',
'noka'           : '**Lᕊ**',  //:foot:
'o'              : ':exclamation:', // 'I̥',
'olin'           : ':olin:',
'olin1'          : ':two_hearts:',
'ona'            : '**ᓄ**',
'open'           : '**╘╛**',
'pakala'         : ':pakala:',
'pali'           : ':pali:',
'palisa'         : '**꧰**',
'pan'            : '**𐠃**',
'pana'           : '**ˈ̬n̍´**', // '\' ̬n̍´', // 'ᕄ⃛',
'pi'             : '**ᒪ**',
'pilin'          : ':pilin:',
'pilin1'         : ':heart:',
'pimeja'         : '**⨻**', // ':black_large_square:', // bad on dark discord background
'pini'           : '**𝙸**', // <--- mathfont monspace, 'エ',
'pipi'           : '**⽺**',
'poka'           : '**⊔·**',
'poki'           : '**⊔**',
'pona'           : ':pona:',
'pu'             : ':pu:',
'sama'           : ':sama:',
'sama1'          : ':heavy_equals_sign:',
'seli'           : '**\\\\!/**', //'\\Ɩ̣/',
'selo'           : '**╓╖**', // ℿ
'seme'           : ':seme:',
'seme1'          : ':question_mark:',
'seme2'          : ':grey_question:',
'sewi'           : '**ﺳ‎ı**',  // signal strength, (TODO?: add a "logical sewi")
'sewi1'          : ':signal_strength:',
'sijelo'         : '**𐊿**', // '┌┬┐',
'sike'           : '**◎**',
'sin'            : ':sin:',
'sina'           : '**ᑲ**',
'sinpin'         : '**]·**',
'sitelen'        : ':sitelen:',
'sona'           : ':sona:',
'soweli'         : '**ııïᕈ**',
'suli'           : '**Ｖ**', //<--halfwidth&fullform   '╲╱', // '⋁', '╲╱'
'suno'           : ':high_brightness:', // '𐄢',  // :high_brightness: , :sunny:
'supa'           : '**┬┬**',
'suwi'           : ':suwi:',
'suwi1'          : '**^.^**',
'tan'            : ':tan:',
'taso'           : ':taso:',
'tawa'           : ':tawa:',
'telo'           : '*≈**',
'tenpo'          : ':clock3:',
'toki'           : ':toki:',
'tomo'           : '**⌂**',
'tu'             : '**꠱**', // '||' would interfere with discord
'unpa'           : '**Ꮱ**', // '𓂸', // ᶜᵤᵓ
'uta'            : ':kiss:',   // '𓂑', // '𐃬',
'utala'          : ':utala:',
'walo'           : '**ꕖ**' , // ':white_large_square:', // bad on light discord background
'wan'            : '**↿**',
'waso'           : '**"ᔨ**',
'wawa'           : ':wawa:',
'weka'           : ':anger:',
'wile'           : ':wile:',
'ijo'            : ':o:',
//
//////////////////
// nimi ku suli //
//////////////////
'namako'         : '**╶╎╴**',   //'**⊹**', // '╶╎╴'
'namako1'        : ':hot_pepper:',
'kin'            : ':kin:',
'oko'            : ':nazar_amulet:', // ':eye:', // ⏿   ⩹
'kipisi'         : '**％**', //faltwidth&fullform %
'kipisi1'        : ':heavy_division_sign:',
'leko'           : '**⧈**', // :white_square_button:
'monsuta'        : ':part_alternation_mark:',
'tonsi'          : ':transgender_symbol:',
'jasima'         : '**ꬸ**', // '⍭'
'kijetesantakalu': ':raccoon:',
'soko'           : ':mushroom:',
'meso'           : '**|·|**',
'epiku'          : ':arrow_up:', // ':superhero:', ///???
'kokosila'       : '**`Ø̍´**',
'lanpan'         : '**ሮ**', // 'ᝰ.', // bof bof!
'misikeke'       : ':pill:',
'ku'             : ':ku:',
/////////////////////////////////////
// nimi su suli ("su" et "majuna") //
/////////////////////////////////////
'su'             : ':su:',
'majuna'         : '**╶╷╴**', // :lotus: --
'majuna1'        : '**-⺌-**',

///////////////
// nimi ante //
///////////////
'apeja'          : '**˙⟑˙**',
'pake'           : '**ㄒ**',
'powe'           : '**⨱**',
'wawajete'       : '**¤**',
'yupekosi'       : '**y**',
'kapesi'         : ':brown_square:', // '⨹',
'unu'            : ':purple_square:',
'nalanja'        : ':orange_square:',
'mulapisu'       : ':pizza:',
'isipin'         : ':thinking_face:',
'linluwi'        : ':spider_web:',
'kiki'           : ':eight_pointed_black_star:',
};
