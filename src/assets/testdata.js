const testData = {
    unusedQuestions: [
        ["London", "United Kingdom", 51.5285582, -0.2416802],
        ["Madrid", "Spain", 40.4378698, -3.8196196],
        ["Lisbon", "Portugal", 38.7436214, -9.1952226],
        ["Washington DC", "USA", 38.8935755, -77.0846157],
        ["Ankara", "Turkey", 39.9032923, 32.6226817],
        ["Paris", "France", 48.8588377, 2.2770205],
        ["Bangkok", "Thailand", 13.7245601, 100.4930257],
        ["Stockholm", "Sweden", 59.3260668, 17.8419721],
        ["Moscow", "Russia", 55.7494733, 37.3523231],
        ["Beijing", "China", 39.9385466, 116.1172783],
        ["Cairo", "Egypt", 30.0594838, 31.2234449],
        ["Manilla", "Phillipines", 14.5964957, 120.9445403],
        ["Edinburgh", "Scotland", 55.9411885, -3.2753779],
        ["Seoul", "South Korea", 37.5650172, 126.8494667],
        ["Pyongyang", "North Korea", 39.0291173, 125.6720721],
        ["Cardiff", "Wales", 51.5022199, -3.2694489],
        ["Mexico City", "Mexico", 19.39068, -99.2836975],
        ["Buenos Aires", "Argentina", -34.6158037, -58.5033383],
        ["Rome", "Italy", 41.909986, 12.3959151],
        ["Tallinn", "Estonia", 59.4716181, 24.5981611],
        ["Helsinki", "Finland", 60.1098678, 24.7385112],
        ["Oslo", "Norway", 59.8937806, 10.6450362],
        ["Amman", "Jordan", 31.8354533, 35.6674466],
        ["Riyadh", "Saudi Arabia", 24.7249316, 46.5423419],
        ["Dublin", "Ireland", 0, 0],
        ["Kabul", "Afghanistan", 0, 0],
        ["Tirana", "Albania", 0, 0],
        ["Algiers", "Algeria", 0, 0],
        ["Phnom Penh", "Cambodia", 0, 0],
        ["Ottowa", "Canada", 0, 0],
        ["Santiago", "Chile", 0, 0],
        ["Bogata", "Colombia", 0, 0],
        ["San Jose", "Costa Rica", 0, 0],
        ["Havana", "Cuba", 0, 0],
        ["Quito", "Ecuador", 0, 0],
        ["San Salvador", "El Salvador", 0, 0],
        ["Tbilisi", "Georgia", 0, 0],
        ["Athens", "Greece", 0, 0],
        ["New Delhi", "India", 0, 0],
        ["Tehran", "Iran", 0, 0]
    ],
    currentRoundQuestions: [],
    currentRoundAnswer: -1,
    currentRound: 0,
    userScore: 0,
    questionsAndAnswersReversed: false
};

// const testData = {
//     unusedQuestions: [
//     ["Afghanistan", "Kabul"],
//     ["Albania", "Tirana"],
//     ["Algeria", "Alger"],
//     ["American Samoa", "Fagatogo"],
//     ["Andorra", "Andorra la Vella"],
//     ["Angola", "Luanda"],
//     ["Anguilla", "The Valley"],
//     ["Antigua and Barbuda", "Saint John's"],
//     ["Argentina", "Buenos Aires"],
//     ["Armenia", "Yerevan"],
//     ["Aruba", "Oranjestad"],
//     ["Australia", "Canberra"],
//     ["Austria", "Wien"],
//     ["Azerbaijan", "Baku"],
//     ["Bahamas", "Nassau"],
//     ["Bahrain", "al-Manama"],
//     ["Bangladesh", "Dhaka"],
//     ["Barbados", "Bridgetown"],
//     ["Belarus", "Minsk"],
//     ["Belgium", "Bruxelles [Brussel]"],
//     ["Belize", "Belmopan"],
//     ["Benin", "Porto-Novo"],
//     ["Bermuda", "Hamilton"],
//     ["Bhutan", "Thimphu"],
//     ["Bolivia", "La Paz"],
//     ["Bosnia and Herzegovina", "Sarajevo"],
//     ["Botswana", "Gaborone"],
//     ["Brazil", "Brasília"],
//     ["Brunei", "Bandar Seri Begawan"],
//     ["Bulgaria", "Sofia"],
//     ["Burkina Faso", "Ouagadougou"],
//     ["Burundi", "Bujumbura"],
//     ["Cambodia", "Phnom Penh"],
//     ["Cameroon", "Yaound"],
//     ["Canada", "Ottawa"],
//     ["Cape Verde", "Praia"],
//     ["Cayman Islands", "George Town"],
//     ["Central African Republic", "Bangui"],
//     ["Chad", "N'Djam"],
//     ["Chile", "Santiago de Chile"],
//     ["China", "Peking"],
//     ["Christmas Island", "Flying Fish Cove"],
//     ["Cocos (Keeling) Islands", "West Island"],
//     ["Colombia", "Santaf"],
//     ["Comoros", "Moroni"],
//     ["Congo", "Brazzaville"],
//     ["Congo, The Democratic Republic of the", "Kinshasa"],
//     ["Cook Islands", "Avarua"],
//     ["Costa Rica", "San Jos"],
//     ["Ivory Coast", "Yamoussoukro"],
//     ["Croatia", "Zagreb"],
//     ["Cuba", "La Habana"],
//     ["Cyprus", "Nicosia"],
//     ["Czech Republic", "Praha"],
//     ["Denmark", "Copenhagen"],
//     ["Djibouti", "Djibouti"],
//     ["Dominica", "Roseau"],
//     ["Dominican Republic", "Santo Domingo de Guzm"],
//     ["East Timor", "Dili"],
//     ["Ecuador", "Quito"],
//     ["Egypt", "Cairo"],
//     ["England", "London"],
//     ["El Salvador", "San Salvador"],
//     ["Equatorial Guinea", "Malabo"],
//     ["Eritrea", "Asmara"],
//     ["Estonia", "Tallinn"],
//     ["Ethiopia", "Addis Abeba"],
//     ["Falkland Islands", "Stanley"],
//     ["Faroe Islands", "Tórshavn"],
//     ["Fiji Islands", "Suva"],
//     ["Finland", "Helsinki [Helsingfors]"],
//     ["France", "Paris"],
//     ["French Guiana", "Cayenne"],
//     ["French Polynesia", "Papeete"],
//     ["Gabon", "Libreville"],
//     ["Gambia", "Banjul"],
//     ["Georgia", "Tbilisi"],
//     ["Germany", "Berlin"],
//     ["Ghana", "Accra"],
//     ["Gibraltar", "Gibraltar"],
//     ["Greece", "Athenai"],
//     ["Greenland", "Nuuk"],
//     ["Grenada", "Saint George's"],
//     ["Guadeloupe", "Basse-Terre"],
//     ["Guam", "Aga"],
//     ["Guatemala", "Ciudad de Guatemala"],
//     ["Guinea", "Conakry"],
//     ["Guinea-Bissau", "Bissau"],
//     ["Guyana", "Georgetown"],
//     ["Haiti", "Port-au-Prince"],
//     ["Holy See (Vatican City State)", "Citt"],
//     ["Honduras", "Tegucigalpa"],
//     ["Hong Kong", "Victoria"],
//     ["Hungary", "Budapest"],
//     ["Iceland", "Reykjav"],
//     ["India", "New Delhi"],
//     ["Indonesia", "Jakarta"],
//     ["Iran", "Tehran"],
//     ["Iraq", "Baghdad"],
//     ["Ireland", "Dublin"],
//     ["Israel", "Jerusalem"],
//     ["Italy", "Roma"],
//     ["Jamaica", "Kingston"],
//     ["Japan", "Tokyo"],
//     ["Jordan", "Amman"],
//     ["Kazakstan", "Astana"],
//     ["Kenya", "Nairobi"],
//     ["Kiribati", "Bairiki"],
//     ["Kuwait", "Kuwait"],
//     ["Kyrgyzstan", "Bishkek"],
//     ["Laos", "Vientiane"],
//     ["Latvia", "Riga"],
//     ["Lebanon", "Beirut"],
//     ["Lesotho", "Maseru"],
//     ["Liberia", "Monrovia"],
//     ["Libyan Arab Jamahiriya", "Tripoli"],
//     ["Liechtenstein", "Vaduz"],
//     ["Lithuania", "Vilnius"],
//     ["Luxembourg", "Luxembourg [Luxemburg/L"],
//     ["Macao", "Macao"],
//     ["Macedonia", "Skopje"],
//     ["Madagascar", "Antananarivo"],
//     ["Malawi", "Lilongwe"],
//     ["Malaysia", "Kuala Lumpur"],
//     ["Maldives", "Male"],
//     ["Mali", "Bamako"],
//     ["Malta", "Valletta"],
//     ["Marshall Islands", "Dalap-Uliga-Darrit"],
//     ["Martinique", "Fort-de-France"],
//     ["Mauritania", "Nouakchott"],
//     ["Mauritius", "Port-Louis"],
//     ["Mayotte", "Mamoutzou"],
//     ["Mexico", "Ciudad de M"],
//     ["Micronesia, Federated States of", "Palikir"],
//     ["Moldova", "Chisinau"],
//     ["Monaco", "Monaco-Ville"],
//     ["Mongolia", "Ulan Bator"],
//     ["Montserrat", "Plymouth"],
//     ["Morocco", "Rabat"],
//     ["Mozambique", "Maputo"],
//     ["Myanmar", "Rangoon (Yangon)"],
//     ["Namibia", "Windhoek"],
//     ["Nauru", "Yaren"],
//     ["Nepal", "Kathmandu"],
//     ["Netherlands", "Amsterdam"],
//     ["Netherlands Antilles", "Willemstad"],
//     ["New Caledonia", "Noum"],
//     ["New Zealand", "Wellington"],
//     ["Nicaragua", "Managua"],
//     ["Niger", "Niamey"],
//     ["Nigeria", "Abuja"],
//     ["Niue", "Alofi"],
//     ["Norfolk Island", "Kingston"],
//     ["North Korea", "Pyongyang"],
//     ["Northern Ireland", "Belfast"],
//     ["Northern Mariana Islands", "Garapan"],
//     ["Norway", "Oslo"],
//     ["Oman", "Masqat"],
//     ["Pakistan", "Islamabad"],
//     ["Palau", "Koror"],
//     ["Palestine", "Gaza"],
//     ["Panama", "Ciudad de Panam"],
//     ["Papua New Guinea", "Port Moresby"],
//     ["Paraguay", "Asunci"],
//     ["Peru", "Lima"],
//     ["Philippines", "Manila"],
//     ["Pitcairn", "Adamstown"],
//     ["Poland", "Warszawa"],
//     ["Portugal", "Lisboa"],
//     ["Puerto Rico", "San Juan"],
//     ["Qatar", "Doha"],
//     ["Reunion", "Saint-Denis"],
//     ["Romania", "Bucuresti"],
//     ["Russian Federation", "Moscow"],
//     ["Rwanda", "Kigali"],
//     ["Saint Helena", "Jamestown"],
//     ["Saint Kitts and Nevis", "Basseterre"],
//     ["Saint Lucia", "Castries"],
//     ["Saint Pierre and Miquelon", "Saint-Pierre"],
//     ["Saint Vincent and the Grenadines", "Kingstown"],
//     ["Samoa", "Apia"],
//     ["San Marino", "San Marino"],
//     ["Sao Tome and Principe", "S"],
//     ["Saudi Arabia", "Riyadh"],
//     ["Scotland", "Edinburgh"],
//     ["Senegal", "Dakar"],
//     ["Seychelles", "Victoria"],
//     ["Sierra Leone", "Freetown"],
//     ["Singapore", "Singapore"],
//     ["Slovakia", "Bratislava"],
//     ["Slovenia", "Ljubljana"],
//     ["Solomon Islands", "Honiara"],
//     ["Somalia", "Mogadishu"],
//     ["South Africa", "Pretoria"],
//     ["South Korea", "Seoul"],
//     ["South Sudan", "Juba"],
//     ["Spain", "Madrid"],
//     ["Sri Lanka", "Colombo"],
//     ["Sudan", "Khartum"],
//     ["Suriname", "Paramaribo"],
//     ["Svalbard and Jan Mayen", "Longyearbyen"],
//     ["Swaziland", "Mbabane"],
//     ["Sweden", "Stockholm"],
//     ["Switzerland", "Bern"],
//     ["Syria", "Damascus"],
//     ["Taiwan", "Taipei"],
//     ["Tajikistan", "Dushanbe"],
//     ["Tanzania", "Dodoma"],
//     ["Thailand", "Bangkok"],
//     ["Togo", "Lom"],
//     ["Tokelau", "Fakaofo"],
//     ["Tonga", "Nuku'alofa"],
//     ["Trinidad and Tobago", "Port-of-Spain"],
//     ["Tunisia", "Tunis"],
//     ["Turkey", "Ankara"],
//     ["Turkmenistan", "Ashgabat"],
//     ["Turks and Caicos Islands", "Cockburn Town"],
//     ["Tuvalu", "Funafuti"],
//     ["Uganda", "Kampala"],
//     ["Ukraine", "Kyiv"],
//     ["United Arab Emirates", "Abu Dhabi"],
//     ["United Kingdom", "London"],
//     ["United States", "Washington"],
//     ["Uruguay", "Montevideo"],
//     ["Uzbekistan", "Toskent"],
//     ["Vanuatu", "Port-Vila"],
//     ["Venezuela", "Caracas"],
//     ["Vietnam", "Hanoi"],
//     ["Virgin Islands, British", "Road Town"],
//     ["Virgin Islands, U.S.", "Charlotte Amalie"],
//     ["Wales", "Cardiff"],
//     ["Wallis and Futuna", "Mata-Utu"],
//     ["Western Sahara", "El-Aai"],
//     ["Yemen", "Sanaa"],
//     ["Yugoslavia", "Beograd"],
//     ["Zambia", "Lusaka"],
//     ["Zimbabwe", "Harare"]
// ],
//     currentRoundQuestions: [],
//     currentRoundAnswer: -1,
//     currentRound: 0,
//     userScore: 0,
//     questionsAndAnswersReversed: false
// };

export default testData;
