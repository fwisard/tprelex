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
'panke1'             : ':french_bread:',
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
'akesi1'         : ':lizard:',
'ala'            : ':ala:',
'ala1'           : ':x:',
'ala2'           : ':heavy_multiplication_x:',
'alasa'          : '**Đ→**',
'alasa1'         : ':bow_and_arrow:',
'ale'            : ':ale:',
'ali'            : ':ale:', // (= ale)
'anpa'           : '**└─̣┘**',
'ante'           : ':ante:',
'anu'            : '**Ｙ**', // halfwidt&fullformY  // 'Y',
'awen'           : ':awen:',
'e'              : ':e_:',
'en'             : '**＋**',
'en1'            : ':heavy_plus_sign:',
'en2'            : '**+**',
'esun'           : '**￡**',
'esun1'          : '**ℒ**',
// 'ijo'         : I had to put 'ijo' at the very end of the nimi pu, because:
//                 its sp is ":o:" and it get rechanged again by the relex
//                 machine to the sp for the name "o". this is a bit buggy!
'ike'            : ':ike:',
'ilo'            : ':ilo:',
'ilo1'           : '**中**',
'ilo2'           : ':mahjong:',
'ilo3'           : ':u7533:',
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
'ken'            : ':ken:',
'ken1'           : '**K**',
'kepeken'        : ':kepeken:', // 'ᕄ̍͆ ',   // :mahjong:
'kepeken1'       : '** ̬n̍͆**', // 'ᕄ̍͆ ',   // :mahjong:
'kili'           : ':apple:',
'kiwen'          : ':gem:',
'kiwen1'         : ':diamonds:',
'ko'             : '**ꕤ**',
'ko1'            : ':sponge:',
'kon'            : '**∬**',
'kule'           : '**🜁**', // '△̶'
'kulupu'         : ':kulupu:',
'kute'           : ':kute:',
'kute1'          : ':ear:',
'la'             : ':la:',
'la1'            : '**）**', //halfwidth&fullform ) ')',
'lape'           : ':lape:',
'lape1'          : '**⊸**',
'laso'           : ':blue_square:', // :blue_square: :green_square:
'lawa'           : ':lawa:',
'lawa1'          : '**Ꝋ**',   // '𑁌', //Ꝋ
'len'            : ':len:',
'len1'           : '**╒╤╕**',   // mieux mais pas courant: '𐘮', // '╒╤╕'
'lete'           : ':snowflake:',   //  '⚹', '⚹' <- no ,   // :snowflake:
'li'             : ':li:',  //＞
'lili'           : ':lili:',
'lili1'          : '**v**', // '⌄',
'linja'          : ':linja:',
'linja1'         : '**～**',
'lipu'           : ':lipu:',
'lipu1'          : ':page_facing_up:',
'loje'           : ':red_square:', // :red_square:
'lon'            : ':lon:',
'luka'           : ':back_of_hand:', //'ᕄ',
'lukin'          : ':eye:', // 'ᯣ', // :eye:
'lupa'           : '**ᑌ**',
'ma'             : ':ma:',
'ma1'            : '**⨁**', // '᪠',
'mama'           : '**O̥**',
'mani'           : '**𑀫**', //'ᴕ', //
'mani1'          : ':taurus:',
'meli'           : ':female_sign:',
'mi'             : ':mi:',
'mi1'            : '**ᑭ**',
'mije'           : ':male_sign:',
'moku'           : '** ̬n̆**', //'ᕄ̆',
'moli'           : '**(ᕯ)**', //:skull:
'moli1'          : ':skull:',
'moli2'          : ':dizzy_face:',
'monsi'          : '**·[**',
'mu'             : ':mu:',
'mun'            : ':first_quarter_moon_with_face:',
'musi'           : ':musi:',
'mute'           : '**ꔖ**', // '|||', // | would interfere with Discord
'nanpa'          : '**ⵌ**', // better than ascii # which may trigger stuff on Discord, :hash:
'nasa'           : ':nasa:',
'nasa1'          : ':cyclone:',
'nasin'          : ':nasin:',
'nena'           : '**ᑎ**',
'ni'             : ':ni:',
'ni1'            : ':ni_:',
'nimi'           : '**▭**',
'noka'           : '**Lᕊ**',
'noka1'          : ':foot:',
'o'              : ':o_:',
'o1'             : ':exclamation:', // 'I̥',
'olin'           : ':olin:',
'olin1'          : ':two_hearts:',
'ona'            : ':ona:',
'ona1'           : '**ᓄ**',
'open'           : '**╘╛**',
'pakala'         : ':pakala:',
'pali'           : ':pali:',
'palisa'         : '**꧰**',
'pan'            : '**𐠃**',
'pana'           : '**ˈ̬n̍´**', // '\' ̬n̍´', // 'ᕄ⃛',
'pi'             : '**ᒪ**',
'pi1'            : ':triangular_ruler:',
'pi2'            : ':leftwards_pushing_hand:',
'pilin'          : ':pilin:',
'pilin1'         : ':hearts:',
'pilin2'         : ':heart:',
'pimeja'         : '**⨻**',
'pimeja1'        : ':black_large_square:', // bad on dark discord background
'pini'           : '**𝙸**', // <--- mathfont monspace, 'エ',
'pipi'           : '**⽺**',
'pipi1'          : ':ant:',
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
'sike1'          : ':radio_button:',
'sin'            : ':sin:',
'sina'           : ':sina:',
'sina1'          : '**ᑲ**',
'sinpin'         : '**]·**',
'sitelen'        : ':sitelen:',
'sona'           : ':sona:',
'soweli'         : '**ııïᕈ**',
'soweli1'        : ':dog_face:',
'suli'           : ':suli:',
'suli1'          : '**Ｖ**', //<--halfwidth&fullform   '╲╱', // '⋁', '╲╱'
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
'walo'           : '**ꕖ**' ,
'walo1'          : ':white_large_square:', // bad on light discord background?
'wan'            : '**↿**',
'waso'           : '**"ᔨ**',
'waso1'          : ':bird:',
'wawa'           : ':wawa:',
'weka'           : ':anger:',
'wile'           : ':wile:',
'ijo'            : ':ijo:',
'ijo1'           : ':o:',
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
'leko'           : ':white_square_button:',
'leko1'          : '**⧈**',
'monsuta'        : ':part_alternation_mark:',
'tonsi'          : ':transgender_symbol:',
'jasima'         : '**ꬸ**', // '⍭'
'kijetesantakalu': ':raccoon:',
'soko'           : ':mushroom:',
'meso'           : '**|·|**',
'epiku'          : ':arrow_up:', // ':superhero:', ///???
'kokosila'       : '**`Ø̍´**',
'kokosila1'      : ':star:',
'kokosila2'      : ':crocodile:',
'lanpan'         : '**ሮ**', // 'ᝰ.', // bof bof!
'lanpan1'        : ':leo:',
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
'Pingo'          : '**Ｐ**',
'Pingo1'         : ':parking:',
'kapesi'         : ':brown_square:',
'kapesi1'        : '**⨹**',
'unu'            : ':purple_square:',
'nalanja'        : ':orange_square:',
'mulapisu'       : ':pizza:',
'isipin'         : ':thinking_face:',
'linluwi'        : ':spider_web:',
'kiki'           : ':eight_pointed_black_star:',
'oke'            : ':ok:',
};
