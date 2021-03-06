var iana = {
  Africa: ['Abidjan', 'Accra', 'Addis_Ababa', 'Algiers', 'Asmara', 'Asmera', 'Bamako', 'Bangui', 'Banjul', 'Bissau', 'Blantyre', 'Brazzaville', 'Bujumbura', 'Cairo', 'Casablanca', 'Ceuta', 'Conakry', 'Dakar', 'Dar_Es_Salaam', 'Djibouti', 'Douala', 'El_Aaiun', 'Freetown', 'Gaborone', 'Harare', 'Johannesburg', 'Juba', 'Kampala', 'Khartoum', 'Kigali', 'Kinshasa', 'Lagos', 'Libreville', 'Lome', 'Luanda', 'Lubumbashi', 'Lusaka', 'Malabo', 'Maputo', 'Maseru', 'Mbabane', 'Mogadishu', 'Monrovia', 'Nairobi', 'Ndjamena', 'Niamey', 'Nouakchott', 'Ouagadougou', 'Porto-novo', 'Sao_Tome', 'Timbuktu', 'Tripoli', 'Tunis', 'Windhoek'],
  America: ['Adak', 'Anchorage', 'Anguilla', 'Antigua', 'Araguaina', 'Argentina', 'Aruba', 'Asuncion', 'Atikokan', 'Atka', 'Bahia', 'Bahia_Banderas', 'Barbados', 'Belem', 'Belize', 'Blanc-sablon', 'Boa_Vista', 'Bogota', 'Boise', 'Buenos_Aires', 'Cambridge_Bay', 'Campo_Grande', 'Cancun', 'Caracas', 'Catamarca', 'Cayenne', 'Cayman', 'Chicago', 'Chihuahua', 'Coral_Harbour', 'Cordoba', 'Costa_Rica', 'Creston', 'Cuiaba', 'Curacao', 'Danmarkshavn', 'Dawson', 'Dawson_Creek', 'Denver', 'Detroit', 'Dominica', 'Edmonton', 'Eirunepe', 'El_Salvador', 'Ensenada', 'Fort_Wayne', 'Fortaleza', 'Glace_Bay', 'Godthab', 'Goose_Bay', 'Grand_Turk', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guayaquil', 'Guyana', 'Halifax', 'Havana', 'Hermosillo', 'Indiana', 'Indianapolis', 'Inuvik', 'Iqaluit', 'Jamaica', 'Jujuy', 'Juneau', 'Kentucky', 'Knox_In', 'Kralendijk', 'La_Paz', 'Lima', 'Los_Angeles', 'Louisville', 'Lower_Princes', 'Maceio', 'Managua', 'Manaus', 'Marigot', 'Martinique', 'Matamoros', 'Mazatlan', 'Mendoza', 'Menominee', 'Merida', 'Metlakatla', 'Mexico_City', 'Miquelon', 'Moncton', 'Monterrey', 'Montevideo', 'Montreal', 'Montserrat', 'Nassau', 'New_York', 'Nipigon', 'Nome', 'Noronha', 'North_Dakota', 'Ojinaga', 'Panama', 'Pangnirtung', 'Paramaribo', 'Phoenix', 'Port-au-prince', 'Port_Of_Spain', 'Porto_Acre', 'Porto_Velho', 'Puerto_Rico', 'Punta_Arenas', 'Rainy_River', 'Rankin_Inlet', 'Recife', 'Regina', 'Resolute', 'Rio_Branco', 'Rosario', 'Santa_Isabel', 'Santarem', 'Santiago', 'Santo_Domingo', 'Sao_Paulo', 'Scoresbysund', 'Shiprock', 'Sitka', 'St_Barthelemy', 'St_Johns', 'St_Kitts', 'St_Lucia', 'St_Thomas', 'St_Vincent', 'Swift_Current', 'Tegucigalpa', 'Thule', 'Thunder_Bay', 'Tijuana', 'Toronto', 'Tortola', 'Vancouver', 'Virgin', 'Whitehorse', 'Winnipeg', 'Yakutat', 'Yellowknife'],
  Antarctica: ['Casey', 'Davis', 'Dumontdurville', 'Macquarie', 'Mawson', 'Mcmurdo', 'Palmer', 'Rothera', 'South_Pole', 'Syowa', 'Troll', 'Vostok'],
  Arctic: ['Longyearbyen'],
  Asia: ['Aden', 'Almaty', 'Amman', 'Anadyr', 'Aqtau', 'Aqtobe', 'Ashgabat', 'Ashkhabad', 'Atyrau', 'Baghdad', 'Bahrain', 'Baku', 'Bangkok', 'Barnaul', 'Beirut', 'Bishkek', 'Brunei', 'Calcutta', 'Chita', 'Choibalsan', 'Chongqing', 'Chungking', 'Colombo', 'Dacca', 'Damascus', 'Dhaka', 'Dili', 'Dubai', 'Dushanbe', 'Gaza', 'Harbin', 'Hebron', 'Ho_Chi_Minh', 'Hong_Kong', 'Hovd', 'Irkutsk', 'Istanbul', 'Jakarta', 'Jayapura', 'Jerusalem', 'Kabul', 'Kamchatka', 'Karachi', 'Kashgar', 'Kathmandu', 'Katmandu', 'Khandyga', 'Kolkata', 'Krasnoyarsk', 'Kuala_Lumpur', 'Kuching', 'Kuwait', 'Macao', 'Macau', 'Magadan', 'Makassar', 'Manila', 'Muscat', 'Nicosia', 'Novokuznetsk', 'Novosibirsk', 'Omsk', 'Oral', 'Phnom_Penh', 'Pontianak', 'Pyongyang', 'Qatar', 'Qyzylorda', 'Rangoon', 'Riyadh', 'Saigon', 'Sakhalin', 'Samarkand', 'Seoul', 'Shanghai', 'Singapore', 'Srednekolymsk', 'Taipei', 'Tashkent', 'Tbilisi', 'Tehran', 'Tel_Aviv', 'Thimbu', 'Thimphu', 'Tokyo', 'Tomsk', 'Ujung_Pandang', 'Ulaanbaatar', 'Ulan_Bator', 'Urumqi', 'Ust-nera', 'Vientiane', 'Vladivostok', 'Yakutsk', 'Yekaterinburg', 'Yerevan', 'Volgograd'],
  Atlantic: ['Azores', 'Bermuda', 'Canary', 'Cape_Verde', 'Faeroe', 'Faroe', 'Jan_Mayen', 'Madeira', 'Reykjavik', 'South_Georgia', 'St_Helena', 'Stanley'],
  Australia: ['Act', 'Adelaide', 'Brisbane', 'Broken_Hill', 'Canberra', 'Currie', 'Darwin', 'Eucla', 'Hobart', 'Lhi', 'Lindeman', 'Lord_Howe', 'Melbourne', 'Nsw', 'North', 'Perth', 'Queensland', 'South', 'Sydney', 'Tasmania', 'Victoria', 'West', 'Yancowinna'],
  Brazil: ['Acre', 'Denoronha', 'East', 'West'],
  Canada: ['Atlantic', 'Central', 'East-saskatchewan', 'Eastern', 'Mountain', 'Newfoundland', 'Pacific', 'Saskatchewan', 'Yukon'],
  Chile: ['Continental', 'Easterisland'],
  Europe: ['Amsterdam', 'Andorra', 'Astrakhan', 'Athens', 'Belfast', 'Belgrade', 'Berlin', 'Bratislava', 'Brussels', 'Bucharest', 'Budapest', 'Busingen', 'Chisinau', 'Copenhagen', 'Dublin', 'Gibraltar', 'Guernsey', 'Helsinki', 'Isle_Of_Man', 'Istanbul', 'Jersey', 'Kaliningrad', 'Kirov', 'Kiev', 'Lisbon', 'Ljubljana', 'London', 'Luxembourg', 'Madrid', 'Malta', 'Mariehamn', 'Minsk', 'Monaco', 'Moscow', 'Nicosia', 'Oslo', 'Paris', 'Podgorica', 'Prague', 'Riga', 'Rome', 'Samara', 'Saratov', 'San_Marino', 'Sarajevo', 'Simferopol', 'Skopje', 'Sofia', 'Stockholm', 'Tallinn', 'Tirane', 'Tiraspol', 'Ulyanovsk', 'Uzhgorod', 'Vaduz', 'Vatican', 'Vienna', 'Vilnius', 'Volgograd', 'Warsaw', 'Zagreb', 'Zaporozhye', 'Zurich'],
  Indian: ['Antananarivo', 'Chagos', 'Christmas', 'Cocos', 'Comoro', 'Kerguelen', 'Mahe', 'Maldives', 'Mauritius', 'Mayotte', 'Reunion'],
  Mexico: ['Bajanorte', 'Bajasur', 'General'],
  Pacific: ['Apia', 'Auckland', 'Bougainville', 'Chatham', 'Chuuk', 'Easter', 'Efate', 'Enderbury', 'Fakaofo', 'Fiji', 'Funafuti', 'Galapagos', 'Gambier', 'Guadalcanal', 'Guam', 'Honolulu', 'Johnston', 'Kiritimati', 'Kosrae', 'Kwajalein', 'Majuro', 'Marquesas', 'Midway', 'Nauru', 'Niue', 'Norfolk', 'Noumea', 'Pago_Pago', 'Palau', 'Pitcairn', 'Pohnpei', 'Ponape', 'Port_Moresby', 'Rarotonga', 'Saipan', 'Samoa', 'Tahiti', 'Tarawa', 'Tongatapu', 'Truk', 'Wake', 'Wallis', 'Yap'],
  ETC: ['GMT', 'GMT+0', 'GMT-0', 'GMT0', 'Greenwich', 'UTC', 'Universal', 'Zulu']
};
var ignore = {
  east: true,
  west: true
};
var zones = {};
Object.keys(iana).forEach(function (k) {
  iana[k].forEach(function (str) {
    var id = k + '/' + str;
    zones[id.toLowerCase()] = id;

    if (!ignore[str]) {
      str = str.toLowerCase();
      str = str.replace(/[_-]/g, ' ');
      zones[str] = id;
    }
  });
});
var _01Iana = zones;

// some notable cities without their own timezone
var _02ByCity = {
  //America
  'san fransisco': 'America/Los_Angeles',
  //Canada
  ottawa: 'America/Toronto',
  montreal: 'America/Toronto',
  // china
  chongqing: 'Asia/Shanghai',
  beijing: 'Asia/Shanghai',
  chengdu: 'Asia/Shanghai',
  guangzhou: 'Asia/Shanghai',
  tianjin: 'Asia/Shanghai',
  baoding: 'Asia/Shanghai',
  wenzhou: 'Asia/Shanghai',
  xian: 'Asia/Shanghai',
  shenzhen: 'Asia/Shanghai',
  suzhou: 'Asia/Shanghai',
  nanjing: 'Asia/Shanghai',
  dongguan: 'Asia/Shanghai',
  quanzhou: 'Asia/Shanghai',
  'hong kong': 'Asia/Shanghai',
  // india
  mumbai: 'Asia/Kolkata',
  bombay: 'Asia/Kolkata',
  madras: 'Asia/Kolkata',
  calcutta: 'Asia/Kolkata',
  'port blair': 'v/Kolkata',
  //Old timezone
  delhi: 'Asia/Kolkata',
  chennai: 'Asia/Kolkata',
  bangalore: 'Asia/Kolkata',
  hyderabad: 'Asia/Kolkata',
  // pakistan
  lahore: 'Asia/Karachi',
  islamabad: 'Asia/Karachi',
  peshawar: 'Asia/Karachi',
  multan: 'Asia/Karachi'
};

//  a list of judgement-calls for country → timezone mappings
//  with 'new zealand' we usually want 'Pacific/Auckland'.
//  based on population, country-capital, and geographical center
//  often some guesswork!
var _03ByCountry = {
  //First, these countries only have one timezone.
  andorra: {
    code: 'ad',
    choice: 'Europe/Andorra'
  },
  oman: {
    code: 'om',
    choice: 'Asia/Dubai'
  },
  afghanistan: {
    code: 'af',
    choice: 'Asia/Kabul'
  },
  'virgin islands': {
    code: 'vi',
    choice: 'America/Port_Of_Spain'
  },
  albania: {
    code: 'al',
    choice: 'Europe/Tirane'
  },
  armenia: {
    code: 'am',
    choice: 'Asia/Yerevan'
  },
  nigeria: {
    code: 'ng',
    choice: 'Africa/Lagos'
  },
  austria: {
    code: 'at',
    choice: 'Europe/Vienna'
  },
  'st maarten': {
    code: 'sx',
    choice: 'America/Curacao'
  },
  finland: {
    code: 'fi',
    choice: 'Europe/Helsinki'
  },
  azerbaijan: {
    code: 'az',
    choice: 'Asia/Baku'
  },
  slovenia: {
    code: 'si',
    choice: 'Europe/Belgrade'
  },
  barbados: {
    code: 'bb',
    choice: 'America/Barbados'
  },
  bangladesh: {
    code: 'bd',
    choice: 'Asia/Dhaka'
  },
  belgium: {
    code: 'be',
    choice: 'Europe/Brussels'
  },
  togo: {
    code: 'tg',
    choice: 'Africa/Abidjan'
  },
  bulgaria: {
    code: 'bg',
    choice: 'Europe/Sofia'
  },
  qatar: {
    code: 'qa',
    choice: 'Asia/Qatar'
  },
  zimbabwe: {
    code: 'zw',
    choice: 'Africa/Maputo'
  },
  bermuda: {
    code: 'bm',
    choice: 'atlantic/Bermuda'
  },
  brunei: {
    code: 'bn',
    choice: 'Asia/Brunei'
  },
  bolivia: {
    code: 'bo',
    choice: 'America/La_Paz'
  },
  bahamas: {
    code: 'bs',
    choice: 'America/Nassau'
  },
  bhutan: {
    code: 'bt',
    choice: 'Asia/Thimphu'
  },
  belarus: {
    code: 'by',
    choice: 'Europe/Minsk'
  },
  belize: {
    code: 'bz',
    choice: 'America/Belize'
  },
  'cocos islands': {
    code: 'cc',
    choice: 'Indian/Cocos'
  },
  liechtenstein: {
    code: 'li',
    choice: 'Europe/Zurich'
  },
  'cook islands': {
    code: 'ck',
    choice: 'Pacific/Rarotonga'
  },
  colombia: {
    code: 'co',
    choice: 'America/Bogota'
  },
  'costa rica': {
    code: 'cr',
    choice: 'America/Costa_Rica'
  },
  cuba: {
    code: 'cu',
    choice: 'America/Havana'
  },
  'cape verde': {
    code: 'cv',
    choice: 'atlantic/Cape_Verde'
  },
  'christmas island': {
    code: 'cx',
    choice: 'Indian/Christmas'
  },
  slovakia: {
    code: 'sk',
    choice: 'Europe/Prague'
  },
  mayotte: {
    code: 'yt',
    choice: 'Africa/Nairobi'
  },
  denmark: {
    code: 'dk',
    choice: 'Europe/Copenhagen'
  },
  'dominican republic': {
    code: 'do',
    choice: 'America/Santo_Domingo'
  },
  algeria: {
    code: 'dz',
    choice: 'Africa/Algiers'
  },
  estonia: {
    code: 'ee',
    choice: 'Europe/Tallinn'
  },
  egypt: {
    code: 'eg',
    choice: 'Africa/Cairo'
  },
  'western sahara': {
    code: 'eh',
    choice: 'Africa/El_Aaiun'
  },
  fiji: {
    code: 'fj',
    choice: 'Pacific/Fiji'
  },
  'falkland islands': {
    code: 'fk',
    choice: 'atlantic/Stanley'
  },
  'faroe islands': {
    code: 'fo',
    choice: 'atlantic/Faroe'
  },
  france: {
    code: 'fr',
    choice: 'Europe/Paris'
  },
  jersey: {
    code: 'je',
    choice: 'Europe/London'
  },
  georgia: {
    code: 'ge',
    choice: 'Asia/Tbilisi'
  },
  'french guiana': {
    code: 'gf',
    choice: 'America/Cayenne'
  },
  ghana: {
    code: 'gh',
    choice: 'Africa/Accra'
  },
  gibraltar: {
    code: 'gi',
    choice: 'Europe/Gibraltar'
  },
  greece: {
    code: 'gr',
    choice: 'Europe/Athens'
  },
  'south georgia': {
    code: 'gs',
    choice: 'atlantic/South_Georgia'
  },
  guatemala: {
    code: 'gt',
    choice: 'America/Guatemala'
  },
  'northern mariana islands': {
    code: 'mp',
    choice: 'Pacific/Guam'
  },
  'guinea bissau': {
    code: 'gw',
    choice: 'Africa/Bissau'
  },
  guyana: {
    code: 'gy',
    choice: 'America/Guyana'
  },
  'hong kong': {
    code: 'hk',
    choice: 'Asia/Hong_Kong'
  },
  honduras: {
    code: 'hn',
    choice: 'America/Tegucigalpa'
  },
  haiti: {
    code: 'ht',
    choice: 'America/Port-au-prince'
  },
  hungary: {
    code: 'hu',
    choice: 'Europe/Budapest'
  },
  ireland: {
    code: 'ie',
    choice: 'Europe/Dublin'
  },
  israel: {
    code: 'il',
    choice: 'Asia/Jerusalem'
  },
  india: {
    code: 'in',
    choice: 'Asia/Kolkata'
  },
  'british indian ocean territory': {
    code: 'io',
    choice: 'Indian/Chagos'
  },
  iraq: {
    code: 'iq',
    choice: 'Asia/Baghdad'
  },
  iran: {
    code: 'ir',
    choice: 'Asia/Tehran'
  },
  iceland: {
    code: 'is',
    choice: 'atlantic/Reykjavik'
  },
  'vatican city': {
    code: 'va',
    choice: 'Europe/Rome'
  },
  jamaica: {
    code: 'jm',
    choice: 'America/Jamaica'
  },
  jordan: {
    code: 'jo',
    choice: 'Asia/Amman'
  },
  japan: {
    code: 'jp',
    choice: 'Asia/Tokyo'
  },
  kyrgyzstan: {
    code: 'kg',
    choice: 'Asia/Bishkek'
  },
  'north korea': {
    code: 'kp',
    choice: 'Asia/Pyongyang'
  },
  'south korea': {
    code: 'kr',
    choice: 'Asia/Seoul'
  },
  yemen: {
    code: 'ye',
    choice: 'Asia/Riyadh'
  },
  panama: {
    code: 'pa',
    choice: 'America/Panama'
  },
  lebanon: {
    code: 'lb',
    choice: 'Asia/Beirut'
  },
  'sri lanka': {
    code: 'lk',
    choice: 'Asia/Colombo'
  },
  liberia: {
    code: 'lr',
    choice: 'Africa/Monrovia'
  },
  'south africa': {
    code: 'za',
    choice: 'Africa/Johannesburg'
  },
  lithuania: {
    code: 'lt',
    choice: 'Europe/Vilnius'
  },
  luxembourg: {
    code: 'lu',
    choice: 'Europe/Luxembourg'
  },
  latvia: {
    code: 'lv',
    choice: 'Europe/Riga'
  },
  libya: {
    code: 'ly',
    choice: 'Africa/Tripoli'
  },
  morocco: {
    code: 'ma',
    choice: 'Africa/Casablanca'
  },
  monaco: {
    code: 'mc',
    choice: 'Europe/Monaco'
  },
  moldova: {
    code: 'md',
    choice: 'Europe/Chisinau'
  },
  myanmar: {
    code: 'mm',
    choice: 'Asia/Yangon'
  },
  //(alias for myanmar)
  burma: {
    code: 'mm',
    choice: 'Asia/Yangon'
  },
  macau: {
    code: 'mo',
    choice: 'Asia/Macau'
  },
  martinique: {
    code: 'mq',
    choice: 'America/Martinique'
  },
  malta: {
    code: 'mt',
    choice: 'Europe/Malta'
  },
  mauritius: {
    code: 'mu',
    choice: 'Indian/Mauritius'
  },
  maldives: {
    code: 'mv',
    choice: 'Indian/Maldives'
  },
  namibia: {
    code: 'na',
    choice: 'Africa/Windhoek'
  },
  'new caledonia': {
    code: 'nc',
    choice: 'Pacific/Noumea'
  },
  'norfolk island': {
    code: 'nf',
    choice: 'Pacific/Norfolk'
  },
  nicaragua: {
    code: 'ni',
    choice: 'America/Managua'
  },
  netherlands: {
    code: 'nl',
    choice: 'Europe/Amsterdam'
  },
  'svalbard and jan mayen': {
    code: 'sj',
    choice: 'Europe/Oslo'
  },
  nepal: {
    code: 'np',
    choice: 'Asia/Kathmandu'
  },
  nauru: {
    code: 'nr',
    choice: 'Pacific/Nauru'
  },
  niue: {
    code: 'nu',
    choice: 'Pacific/Niue'
  },
  peru: {
    code: 'pe',
    choice: 'America/Lima'
  },
  philippines: {
    code: 'ph',
    choice: 'Asia/Manila'
  },
  pakistan: {
    code: 'pk',
    choice: 'Asia/Karachi'
  },
  poland: {
    code: 'pl',
    choice: 'Europe/Warsaw'
  },
  'st pierre and miquelon': {
    code: 'pm',
    choice: 'America/Miquelon'
  },
  pitcairn: {
    code: 'pn',
    choice: 'Pacific/Pitcairn'
  },
  'puerto rico': {
    code: 'pr',
    choice: 'America/Puerto_Rico'
  },
  palau: {
    code: 'pw',
    choice: 'Pacific/Palau'
  },
  paraguay: {
    code: 'py',
    choice: 'America/Asuncion'
  },
  romania: {
    code: 'ro',
    choice: 'Europe/Bucharest'
  },
  'solomon islands': {
    code: 'sb',
    choice: 'Pacific/Guadalcanal'
  },
  seychelles: {
    code: 'sc',
    choice: 'Indian/Mahe'
  },
  sudan: {
    code: 'sd',
    choice: 'Africa/Khartoum'
  },
  sweden: {
    code: 'se',
    choice: 'Europe/Stockholm'
  },
  singapore: {
    code: 'sg',
    choice: 'Asia/Singapore'
  },
  suriname: {
    code: 'sr',
    choice: 'America/Paramaribo'
  },
  'south sudan': {
    code: 'ss',
    choice: 'Africa/Juba'
  },
  'sao tome': {
    code: 'st',
    choice: 'Africa/Sao_Tome'
  },
  'el salvador': {
    code: 'sv',
    choice: 'America/El_Salvador'
  },
  syria: {
    code: 'sy',
    choice: 'Asia/Damascus'
  },
  'turks and caicos': {
    code: 'tc',
    choice: 'America/Grand_Turk'
  },
  chad: {
    code: 'td',
    choice: 'Africa/Ndjamena'
  },
  tajikistan: {
    code: 'tj',
    choice: 'Asia/Dushanbe'
  },
  tokelau: {
    code: 'tk',
    choice: 'Pacific/Fakaofo'
  },
  'east timor': {
    code: 'tl',
    choice: 'Asia/Dili'
  },
  turkmenistan: {
    code: 'tm',
    choice: 'Asia/Ashgabat'
  },
  tunisia: {
    code: 'tn',
    choice: 'Africa/Tunis'
  },
  tonga: {
    code: 'to',
    choice: 'Pacific/Tongatapu'
  },
  turkey: {
    code: 'tr',
    choice: 'Europe/Istanbul'
  },
  tuvalu: {
    code: 'tv',
    choice: 'Pacific/Funafuti'
  },
  taiwan: {
    code: 'tw',
    choice: 'Asia/Taipei'
  },
  uruguay: {
    code: 'uy',
    choice: 'America/Montevideo'
  },
  venezuela: {
    code: 've',
    choice: 'America/Caracas'
  },
  vanuatu: {
    code: 'vu',
    choice: 'Pacific/Efate'
  },
  'wallis and futuna': {
    code: 'wf',
    choice: 'Pacific/Wallis'
  },
  'western samoa': {
    code: 'ws',
    choice: 'Pacific/Apia'
  },
  samoa: {
    code: 'ws',
    choice: 'Pacific/Apia'
  },
  ////////////
  /// these countries have more than one timezone
  /// and i picked one.
  // (i tried to do my best.)
  antarctica: {
    code: 'aq',
    choice: 'Antarctica/Davis'
  },
  argentina: {
    code: 'ar',
    choice: 'America/Argentina/Cordoba'
  },
  australia: {
    code: 'au',
    choice: 'Australia/Sydney'
  },
  brazil: {
    code: 'br',
    choice: 'America/Sao_Paulo'
  },
  canada: {
    code: 'ca',
    choice: 'America/Toronto'
  },
  congo: {
    code: 'cd',
    choice: 'Africa/Kinshasa' //'Africa/Lagos'?

  },
  chile: {
    code: 'cl',
    choice: 'America/Santiago'
  },
  china: {
    code: 'cn',
    choice: 'Asia/Shanghai'
  },
  cyprus: {
    code: 'cy',
    choice: 'Asia/Nicosia'
  },
  germany: {
    code: 'de',
    choice: 'Europe/Berlin'
  },
  ecuador: {
    code: 'ec',
    choice: 'America/Guayaquil'
  },
  spain: {
    code: 'es',
    choice: 'Europe/Madrid'
  },
  micronesia: {
    code: 'fm',
    choice: 'Pacific/Pohnpei'
  },
  greenland: {
    code: 'gl',
    choice: 'America/Godthab'
  },
  indonesia: {
    code: 'id',
    choice: 'Asia/Jakarta'
  },
  kiribati: {
    code: 'ki',
    choice: 'Pacific/Kiritimati'
  },
  kazakhstan: {
    code: 'kz',
    choice: 'Asia/Almaty'
  },
  'marshall islands': {
    code: 'mh',
    choice: 'Pacific/Majuro'
  },
  mongolia: {
    code: 'mn',
    choice: 'Asia/Ulaanbaatar'
  },
  mexico: {
    code: 'mx',
    choice: 'America/Mexico_City' // 'America/Monterrey'?

  },
  malaysia: {
    code: 'my',
    choice: 'Asia/Kuala_Lumpur'
  },
  'new zealand': {
    code: 'nz',
    choice: 'Pacific/Auckland'
  },
  'french polynesia': {
    code: 'pf',
    choice: 'Pacific/Pohnpei'
  },
  'papua new guinea': {
    code: 'pg',
    choice: 'Pacific/Port_Moresby'
  },
  palestine: {
    code: 'ps',
    choice: 'Asia/Gaza'
  },
  portugal: {
    code: 'pt',
    choice: 'Europe/Lisbon'
  },
  russia: {
    code: 'ru',
    choice: 'Europe/Moscow' // 'Europe/Kaliningrad'?

  },
  'french southern and antarctic lands': {
    code: 'tf',
    choice: 'Indian/Kerguelen'
  },
  ukraine: {
    code: 'ua',
    choice: 'Europe/Kiev'
  },
  'us minor outlying islands': {
    code: 'um',
    choice: 'Pacific/Wake'
  },
  'united states': {
    code: 'us',
    choice: 'America/New_York'
  },
  uzbekistan: {
    code: 'uz',
    choice: 'Asia/Tashkent' //'Asia/Samarkand'

  },
  vietnam: {
    code: 'vn',
    choice: 'Asia/Ho_Chi_Minh'
  }
};

// this file provides links between current names for timezones
// and their old names.  many names changed in late 1993.
// from https://Github.com/Eggert/Tz/Blob/Master/Backward
// and from https://Github.com/Mj1856/Timezonenames
var _04OldZones = {
  'Africa/Asmera': 'Africa/Nairobi',
  'Africa/Timbuktu': 'Africa/Abidjan',
  'America/Argentina/Comodrivadavia': 'America/Argentina/Catamarca',
  'America/Atka': 'America/Adak',
  'America/Buenos_Aires': 'America/Argentina/Buenos_Aires',
  'America/Catamarca': 'America/Argentina/Catamarca',
  'America/Coral_Harbour': 'America/Atikokan',
  'America/Cordoba': 'America/Argentina/Cordoba',
  'America/Ensenada': 'America/Tijuana',
  'America/Fort_Wayne': 'America/Indiana/Indianapolis',
  'America/Indianapolis': 'America/Indiana/Indianapolis',
  'America/Jujuy': 'America/Argentina/Jujuy',
  'America/Knox_In': 'America/Indiana/Knox',
  'America/Louisville': 'America/Kentucky/Louisville',
  'America/Mendoza': 'America/Argentina/Mendoza',
  'America/Montreal': 'America/Toronto',
  'America/Porto_Acre': 'America/Rio_Branco',
  'America/Rosario': 'America/Argentina/Cordoba',
  'America/Santa_Isabel': 'America/Tijuana',
  'America/Shiprock': 'America/Denver',
  'America/Virgin': 'America/Port_Of_Spain',
  'Antarctica/South_Pole': 'Pacific/Auckland',
  'Asia/Ashkhabad': 'Asia/Ashgabat',
  'Asia/Calcutta': 'Asia/Kolkata',
  'Asia/Chongqing': 'Asia/Shanghai',
  'Asia/Chungking': 'Asia/Shanghai',
  'Asia/Dacca': 'Asia/Dhaka',
  'Asia/Harbin': 'Asia/Shanghai',
  'Asia/Kashgar': 'Asia/Urumqi',
  'Asia/Katmandu': 'Asia/Kathmandu',
  'Asia/Macao': 'Asia/Macau',
  'Asia/Rangoon': 'Asia/Yangon',
  'Asia/Saigon': 'Asia/Ho_Chi_Minh',
  'Asia/Tel_Aviv': 'Asia/Jerusalem',
  'Asia/Thimbu': 'Asia/Thimphu',
  'Asia/Ujung_Pandang': 'Asia/Makassar',
  'Asia/Ulan_Bator': 'Asia/Ulaanbaatar',
  'atlantic/Faeroe': 'atlantic/Faroe',
  'atlantic/Jan_Mayen': 'Europe/Oslo',
  'Australia/Act': 'Australia/Sydney',
  'Australia/Canberra': 'Australia/Sydney',
  'Australia/Lhi': 'Australia/Lord_Howe',
  'Australia/Nsw': 'Australia/Sydney',
  'Australia/North': 'Australia/Darwin',
  'Australia/Queensland': 'Australia/Brisbane',
  'Australia/South': 'Australia/Adelaide',
  'Australia/Tasmania': 'Australia/Hobart',
  'Australia/Victoria': 'Australia/Melbourne',
  'Australia/West': 'Australia/Perth',
  'Australia/Yancowinna': 'Australia/Broken_Hill',
  'brazil/Acre': 'America/Rio_Branco',
  'brazil/Denoronha': 'America/Noronha',
  'brazil/East': 'America/Sao_Paulo',
  'brazil/West': 'America/Manaus',
  'canada/Atlantic': 'America/Halifax',
  'canada/Central': 'America/Winnipeg',
  'canada/East-saskatchewan': 'America/Regina',
  'canada/Eastern': 'America/Toronto',
  'canada/Mountain': 'America/Edmonton',
  'canada/Newfoundland': 'America/St_Johns',
  'canada/Pacific': 'America/Vancouver',
  'canada/Saskatchewan': 'America/Regina',
  'canada/Yukon': 'America/Whitehorse',
  'chile/Continental': 'America/Santiago',
  'chile/Easterisland': 'Pacific/Easter',
  cuba: 'America/Havana',
  egypt: 'Africa/Cairo',
  eire: 'Europe/Dublin',
  'Europe/Belfast': 'Europe/London',
  'Europe/Tiraspol': 'Europe/Chisinau',
  gb: 'Europe/London',
  'gb-eire': 'Europe/London',
  'gmt+0': 'etc/Gmt',
  'gmt-0': 'etc/Gmt',
  gmt0: 'etc/Gmt',
  greenwich: 'etc/Gmt',
  hongkong: 'Asia/Hong_Kong',
  iceland: 'atlantic/Reykjavik',
  iran: 'Asia/Tehran',
  israel: 'Asia/Jerusalem',
  jamaica: 'America/Jamaica',
  japan: 'Asia/Tokyo',
  kwajalein: 'Pacific/Kwajalein',
  libya: 'Africa/Tripoli',
  'mexico/Bajanorte': 'America/Tijuana',
  'mexico/Bajasur': 'America/Mazatlan',
  'mexico/General': 'America/Mexico_City',
  nz: 'Pacific/Auckland',
  'nz-chat': 'Pacific/Chatham',
  navajo: 'America/Denver',
  prc: 'Asia/Shanghai',
  'Pacific/Johnston': 'Pacific/Honolulu',
  'Pacific/Ponape': 'Pacific/Pohnpei',
  'Pacific/Samoa': 'Pacific/Pago_Pago',
  'Pacific/Truk': 'Pacific/Chuuk',
  'Pacific/Yap': 'Pacific/Chuuk',
  poland: 'Europe/Warsaw',
  portugal: 'Europe/Lisbon',
  roc: 'Asia/Taipei',
  rok: 'Asia/Seoul',
  'us/Alaska': 'America/Anchorage',
  'us/Aleutian': 'America/Adak',
  'us/Arizona': 'America/Phoenix',
  'us/Central': 'America/Chicago',
  'us/East-indiana': 'America/Indiana/Indianapolis',
  'us/Eastern': 'America/New_York',
  'us/Hawaii': 'Pacific/Honolulu',
  'us/Indiana-starke': 'America/Indiana/Knox',
  'us/Michigan': 'America/Detroit',
  'us/Mountain': 'America/Denver',
  'us/Pacific': 'America/Los_Angeles',
  'us/Samoa': 'Pacific/Pago_Pago',
  universal: 'etc/Utc',
  'w-su': 'Europe/Moscow',
  zulu: 'Etc/Utc',
  z: 'Etc/Utc',
  'America/Argentina/Buenos_Aires': 'America/Buenos_Aires',
  'America/Argentina/Cordoba': 'America/Cordoba',
  'America/Argentina/Catamarca': 'America/Catamarca',
  'America/Argentina/Jujuy': 'America/Jujuy',
  'America/Argentina/Mendoza': 'America/Mendoza',
  'America/Atikokan': 'America/Coral_Harbour',
  'Europe/Nicosia': 'Asia/Nicosia',
  'Africa/Asmara': 'Africa/Asmera',
  'Pacific/Pohnpei': 'Pacific/Ponape',
  'Pacific/Chuuk': 'Pacific/Truk',
  'atlantic/Faroe': 'atlantic/Faeroe',
  'Asia/Kolkata': 'Asia/Calcutta',
  'Asia/Yangon': 'Asia/Rangoon',
  'Asia/Kathmandu': 'Asia/Katmandu',
  'Asia/Ho_Chi_Minh': 'Asia/Saigon',
  'Asia/Istanbul': 'Europe/Istanbul',
  'etc/gmt+0': 'Etc/Gmt',
  'etc/gmt-0': 'Etc/Gmt',
  'etc/gmt0': 'Etc/Gmt',
  'etc/greenwich': 'etc/Gmt',
  'etc/Uct': 'Etc/Utc',
  'etc/Universal': 'Etc/Utc',
  'etc/Zulu': 'Etc/Utc',
  gmt: 'etc/Gmt',
  singapore: 'Asia/Singapore',
  'easter island': 'Chile/Easterisland',
  'America/Indiana/Indianapolis': 'America/Indianapolis',
  'us/Pacific-new': 'America/Los_Angeles',
  'America/Kentucky/Louisville': 'America/Louisville',
  uct: 'Etc/Utc',
  utc: 'Etc/Utc',
  est: 'Etc/Gmt+5',
  mst: 'Etc/Gmt+7',
  hst: 'Etc/Gmt+10'
};

//From https://Github.com/Mj1856/Timezonenames
// and from  https://Github.com/Nodatime/Nodatime/Blob/Master/Data/Cldr/Windowszones-35.xml
var _05Metazones = [//gmt-0, with daylight savings
{
  standard: {
    name: 'Greenwich Standard Time',
    abbrev: 'GMT'
  },
  daylight: {
    name: 'British Summer Time',
    abbrev: 'BST'
  },
  alias: ['british', 'britain'],
  pick: 'Europe/London',
  zones: ['Europe/Guernsey', 'Europe/Isle_Of_Man', 'Europe/Jersey', 'Europe/London']
}, {
  standard: {
    name: 'Greenwich Standard Time',
    abbrev: 'GMT'
  },
  daylight: {
    name: 'Irish Summer Time',
    abbrev: 'IST'
  },
  alias: ['ireland'],
  zones: ['Europe/Dublin']
}, //gmt-0, no daylight savings
{
  standard: {
    name: 'Greenwich Standard Time',
    abbrev: 'GMT'
  },
  pick: 'Africa/Freetown',
  alias: ['etc', 'utc'],
  zones: ['Africa/Abidjan', 'Africa/Accra', 'Africa/Bamako', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Freetown', 'Africa/Lome', 'Africa/Monrovia', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Sao_Tome', 'America/Danmarkshavn', 'Antarctica/Troll', 'Atlantic/Reykjavik', 'Atlantic/St_Helena', 'ETC/GMT']
}, //North america
{
  standard: {
    name: 'Central Standard Time',
    abbrev: 'CST'
  },
  daylight: {
    name: 'Central Daylight Time',
    abbrev: 'CDT'
  },
  pick: 'America/Chicago',
  zones: ['America/Bahia_Banderas', 'America/Belize', 'America/Chicago', 'America/Costa_Rica', 'America/El_Salvador', 'America/Guatemala', 'America/Indiana/Knox', 'America/Indiana/Tell_City', 'America/Managua', 'America/Matamoros', 'America/Menominee', 'America/Merida', 'America/Mexico_City', 'America/Monterrey', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Regina', 'America/Resolute', 'America/Swift_Current', 'America/Tegucigalpa', 'America/Winnipeg']
}, {
  standard: {
    name: 'Mountain Standard Time',
    abbrev: 'MST'
  },
  daylight: {
    name: 'Mountain Daylight Time',
    abbrev: 'MDT'
  },
  pick: 'America/Denver',
  zones: ['America/Boise', 'America/Cambridge_Bay', 'America/Creston', 'America/Dawson_Creek', 'America/Denver', 'America/Edmonton', 'America/Fort_Nelson', 'America/Inuvik', 'America/Ojinaga', 'America/Phoenix', 'America/Yellowknife', 'mst7mdt', // add mexico
  'America/Chihuahua', 'America/Hermosillo', 'America/Mazatlan']
}, {
  standard: {
    name: 'Atlantic Standard Time',
    abbrev: 'AST'
  },
  daylight: {
    name: 'Atlantic Daylight Time',
    abbrev: 'ADT'
  },
  pick: 'America/Halifax',
  zones: ['America/Anguilla', 'America/Antigua', 'America/Aruba', 'America/Barbados', 'America/Blanc-sablon', 'America/Curacao', 'America/Dominica', 'America/Glace_Bay', 'America/Goose_Bay', 'America/Grenada', 'America/Guadeloupe', 'America/Halifax', 'America/Kralendijk', 'America/Lower_Princes', 'America/Marigot', 'America/Martinique', 'America/Moncton', 'America/Montserrat', 'America/Port_Of_Spain', 'America/Puerto_Rico', 'America/Santo_Domingo', 'America/St_Barthelemy', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Thule', 'America/Tortola', 'atlantic/Bermuda']
}, {
  standard: {
    name: 'Eastern Standard Time',
    abbrev: 'EST'
  },
  daylight: {
    name: 'Eastern Daylight Time',
    abbrev: 'EDT'
  },
  pick: 'America/New_York',
  zones: ['America/Cancun', 'America/Cayman', 'America/Coral_Harbour', 'America/Detroit', 'America/Grand_Turk', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indianapolis', 'America/Iqaluit', 'America/Jamaica', 'America/Kentucky/Monticello', 'America/Louisville', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Panama', 'America/Pangnirtung', 'America/Port-au-prince', 'America/Thunder_Bay', 'America/Toronto', 'est5edt', 'America/Montreal']
}, {
  standard: {
    name: 'Pacific Standard Time',
    abbrev: 'PST'
  },
  daylight: {
    name: 'Pacific Daylight Time',
    abbrev: 'PDT'
  },
  pick: 'America/Los_Angeles',
  zones: ['America/Dawson', 'America/Los_Angeles', 'America/Tijuana', 'America/Vancouver', 'America/Whitehorse', 'pst8pdt']
}, {
  standard: {
    name: 'Alaskan Standard Time',
    abbrev: 'AHST'
  },
  daylight: {
    name: 'Alaskan Daylight Time',
    abbrev: 'AHDT'
  },
  pick: 'America/Anchorage',
  zones: ['America/Anchorage', 'America/Juneau', 'America/Metlakatla', 'America/Nome', 'America/Sitka', 'America/Yakutat']
}, {
  standard: {
    name: 'Hawaiian Standard Time',
    abbrev: 'HST'
  },
  alias: ['aleutian', 'hawaii'],
  pick: 'Pacific/Honolulu',
  zones: ['America/Adak', 'Pacific/Honolulu', 'Pacific/Johnston']
}, {
  standard: {
    name: 'Newfoundland Standard Time',
    abbrev: 'NST'
  },
  daylight: {
    name: 'Newfoundland Daylight Time',
    abbrev: 'NDT'
  },
  pick: 'America/St_Johns',
  zones: ['America/St_Johns']
}, ///Europe
{
  standard: {
    name: 'Central European Time',
    abbrev: 'CET'
  },
  daylight: {
    name: 'Central European Summer Time',
    abbrev: 'CEST'
  },
  alias: ['romance', 'central europe'],
  pick: 'Europe/Berlin',
  zones: ['Africa/Algiers', 'Africa/Ceuta', 'Africa/Tunis', 'arctic/Longyearbyen', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Copenhagen', 'Europe/Gibraltar', 'Europe/Ljubljana', 'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Monaco', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Rome', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Skopje', 'Europe/Stockholm', 'Europe/Tirane', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zurich']
}, {
  standard: {
    name: 'Eastern European Time',
    abbrev: 'EET'
  },
  daylight: {
    name: 'Eastern European Summer Time',
    abbrev: 'EEST'
  },
  alias: ['eastern europe'],
  pick: 'Europe/Riga',
  zones: ['Africa/Cairo', 'Africa/Tripoli', 'Asia/Amman', 'Asia/Beirut', 'Asia/Damascus', 'Asia/Famagusta', 'Asia/Gaza', 'Asia/Hebron', 'Asia/Nicosia', 'Europe/Athens', 'Europe/Bucharest', 'Europe/Chisinau', 'Europe/Helsinki', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Mariehamn', 'Europe/Riga', 'Europe/Sofia', 'Europe/Tallinn', 'Europe/Uzhgorod', 'Europe/Vilnius', 'Europe/Zaporozhye']
}, {
  standard: {
    name: 'Western European Time',
    abbrev: 'WET'
  },
  daylight: {
    name: 'Western European Summer Time',
    abbrev: 'WEST'
  },
  alias: ['western europe'],
  pick: 'Europe/Lisbon',
  zones: ['Africa/Casablanca', 'Africa/El_Aaiun', 'atlantic/Canary', 'atlantic/Faeroe', 'atlantic/Madeira', 'Europe/Lisbon']
}, {
  standard: {
    name: 'Turkey Standard Time',
    abbrev: 'TRT'
  },
  alias: ['turkish'],
  pick: 'Europe/Istanbul',
  zones: ['Europe/Istanbul']
}, // samara: ['Europe/Samara', 'Europe/Saratov'],
//Africa
{
  standard: {
    name: 'East Africa Time',
    abbrev: 'EAT'
  },
  alias: ['east african', 'eastern africa'],
  pick: 'Africa/Nairobi',
  zones: ['Africa/Addis_Ababa', 'Africa/Asmera', 'Africa/Dar_Es_Salaam', 'Africa/Djibouti', 'Africa/Juba', 'Africa/Kampala', 'Africa/Mogadishu', 'Africa/Nairobi', 'Indian/Antananarivo', 'Indian/Comoro', 'Indian/Mayotte']
}, {
  standard: {
    name: 'Central Africa Time',
    abbrev: 'CAT'
  },
  pick: 'Africa/Khartoum',
  alias: ['central africa'],
  zones: ['Africa/Blantyre', 'Africa/Bujumbura', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Maputo', 'Africa/Windhoek']
}, {
  standard: {
    name: 'South Africa Standard Time',
    abbrev: 'SAST'
  },
  alias: ['southern africa', 'south african'],
  pick: 'Africa/Johannesburg',
  zones: ['Africa/Johannesburg', 'Africa/Maseru', 'Africa/Mbabane']
}, {
  standard: {
    name: 'West Africa Standard Time',
    abbrev: 'WAT'
  },
  alias: ['western africa', 'west african'],
  pick: 'Africa/Lagos',
  zones: ['Africa/Bangui', 'Africa/Brazzaville', 'Africa/Douala', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville', 'Africa/Luanda', 'Africa/Malabo', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Porto-novo']
}, //Australia
{
  standard: {
    name: 'Australian Central Standard Time',
    abbrev: 'ACST'
  },
  daylight: {
    name: 'Australian Central Daylight Time',
    abbrev: 'ACDT'
  },
  alias: ['australia central'],
  pick: 'Australia/Adelaide',
  zones: ['Australia/Adelaide', 'Australia/Broken_Hill', 'Australia/Darwin']
}, {
  standard: {
    name: 'Australian Eastern Standard Time',
    abbrev: 'AEST'
  },
  daylight: {
    name: 'Australian Eastern Daylight Time',
    abbrev: 'AEDT'
  },
  alias: ['australia east'],
  pick: 'Australia/Brisbane',
  zones: ['Australia/Brisbane', 'Australia/Currie', 'Australia/Hobart', 'Australia/Lindeman', 'Australia/Melbourne', 'Australia/Sydney']
}, {
  standard: {
    name: 'Australian Western Standard Time',
    abbrev: 'AWST'
  },
  daylight: {
    name: 'Australian Western Daylight Time',
    abbrev: 'AWDT'
  },
  alias: ['australia west'],
  pick: 'Australia/Perth',
  zones: ['Antarctica/Casey', 'Australia/Perth']
}, {
  standard: {
    name: 'Australian Central Western Standard Time',
    abbrev: 'ACWST'
  },
  alias: ['australia central west'],
  pick: 'Australia/Eucla',
  zones: ['Australia/Eucla']
}, {
  standard: {
    name: 'Lord Howe Standard Time',
    abbrev: 'LHST'
  },
  daylight: {
    name: 'Lord Howe Daylight Time',
    abbrev: 'LHDT'
  },
  pick: 'Australia/Lord_Howe',
  zones: ['Australia/Lord_Howe']
}, {
  standard: {
    name: 'New Zealand Standard Time',
    abbrev: 'NZST'
  },
  daylight: {
    name: 'New Zealand Daylight Time',
    abbrev: 'NZDT'
  },
  pick: 'Pacific/Auckland',
  zones: ['Antarctica/Mcmurdo', 'Pacific/Auckland']
}, {
  standard: {
    name: 'Chatham Island Standard Time',
    abbrev: 'CHAST'
  },
  daylight: {
    name: 'Chatham Island Daylight Time',
    abbrev: 'CHADT'
  },
  pick: 'Pacific/Chatham',
  zones: ['Pacific/Chatham']
}, //Russia
{
  standard: {
    name: 'Russian Standard Time',
    abbrev: 'MSK'
  },
  alias: ['russian'],
  pick: 'Europe/Moscow',
  zones: ['Europe/Astrakhan', 'Europe/Minsk', 'Europe/Moscow', 'Europe/Simferopol', 'Europe/Ulyanovsk', 'Europe/Kirov']
}, {
  standard: {
    name: 'Volgograd Time',
    abbrev: 'VOLT'
  },
  zones: ['Europe/Volgograd']
}, //South america
{
  standard: {
    name: 'Brazil Time',
    abbrev: 'BRT'
  },
  alias: ['brasília', 'brasilia', 'brazilian'],
  pick: 'America/Sao_Paulo',
  zones: ['America/Araguaina', 'America/Bahia', 'America/Belem', 'America/Fortaleza', 'America/Maceio', 'America/Recife', 'America/Santarem', 'America/Sao_Paulo']
}, {
  standard: {
    name: 'Argentina Time',
    abbrev: 'ART'
  },
  alias: ['argentinian'],
  pick: 'America/Buenos_Aires',
  zones: ['America/Argentina/La_Rioja', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Buenos_Aires', 'America/Catamarca', 'America/Cordoba', 'America/Jujuy', 'America/Mendoza']
}, {
  standard: {
    name: 'Amazon Time',
    abbrev: 'AMT'
  },
  alias: ['amazonian'],
  pick: 'America/Manaus',
  zones: ['America/Boa_Vista', 'America/Campo_Grande', 'America/Cuiaba', //Has dst?
  'America/Manaus', 'America/Porto_Velho']
}, {
  standard: {
    name: 'Easter Island Standard Time',
    abbrev: 'EAST'
  },
  daylight: {
    name: 'Easter Island Summer Time',
    abbrev: 'EASST'
  },
  zones: ['Chile/Easterisland']
}, {
  standard: {
    name: 'Venezuelan Standard Time',
    abbrev: 'VET'
  },
  alias: ['venezuela'],
  zones: ['America/Caracas']
}, {
  standard: {
    name: 'Paraguay Time',
    abbrev: 'PYT'
  },
  daylight: {
    name: 'Paraguay Summer Time',
    abbrev: 'PYST'
  },
  zones: ['America/Asuncion']
}, {
  standard: {
    name: 'Cuba Standard Time',
    abbrev: 'CST'
  },
  daylight: {
    name: 'Cuba Daylight Time',
    abbrev: 'CDT'
  },
  alias: ['cuban'],
  zones: ['America/Havana']
}, {
  standard: {
    name: 'Bolivia Time',
    abbrev: 'BOT'
  },
  alias: ['bolivian'],
  zones: ['America/La_Paz']
}, {
  standard: {
    name: 'Colombia Time',
    abbrev: 'COT'
  },
  alias: ['colombian'],
  zones: ['America/Bogota']
}, {
  standard: {
    name: 'Acre Time',
    abbrev: 'ACT'
  },
  pick: null,
  zones: ['America/Eirunepe', 'America/Rio_Branco']
}, {
  standard: {
    name: 'Peru Time',
    abbrev: 'PET'
  },
  zones: ['America/Lima']
}, {
  standard: {
    name: 'Chile Standard Time',
    abbrev: 'CLST'
  },
  daylight: {
    name: 'Chile Summer Time',
    abbrev: 'CLDT'
  },
  pick: null,
  zones: ['America/Punta_Arenas', 'America/Santiago', 'Antarctica/Palmer']
}, {
  standard: {
    name: 'Uruguay Time',
    abbrev: 'UYT'
  },
  zones: ['America/Montevideo']
}, // argentina_Western: ['America/Argentina/San_Luis'],
// french_Guiana: ['America/Cayenne'],
// greenland_Western: ['America/Godthab'],
// ecuador: ['America/Guayaquil'],
// guyana: ['America/Guyana'],
// pierre_Miquelon: ['America/Miquelon'],
// noronha: ['America/Noronha'],
// suriname: ['America/Paramaribo'],
// mexico_Northwest: ['America/Santa_Isabel'],
//Middle-east
{
  standard: {
    name: 'Arabic Standard Time',
    abbrev: 'AST'
  },
  pick: 'Asia/Baghdad',
  alias: ['arabic', 'arab'],
  zones: ['Asia/Aden', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Kuwait', 'Asia/Qatar', 'Asia/Riyadh']
}, {
  standard: {
    name: 'Iran Standard Time',
    abbrev: 'IRST'
  },
  daylight: {
    name: 'Iran Daylight Time',
    abbrev: 'IRDT'
  },
  alias: ['iranian'],
  pick: 'Asia/Tehran',
  zones: ['Asia/Tehran']
}, {
  standard: {
    name: 'Pakistan Standard Time',
    abbrev: 'PKT'
  },
  pick: 'Asia/Karachi',
  zones: ['Asia/Karachi']
}, {
  standard: {
    name: 'India Standard Time',
    abbrev: 'IST'
  },
  alias: ['indian'],
  pick: 'Asia/Kolkata',
  zones: ['Asia/Kolkata', 'Asia/Colombo']
}, {
  standard: {
    name: 'Indochina Time',
    abbrev: 'ICT'
  },
  alias: ['South East Asia'],
  pick: 'Asia/Bangkok',
  zones: ['Asia/Bangkok', 'Asia/Phnom_Penh', 'Asia/Saigon', 'Asia/Vientiane']
}, {
  standard: {
    name: 'China Standard Time',
    abbrev: 'CT'
  },
  //cst?
  alias: ['chinese'],
  pick: 'Asia/Shanghai',
  zones: ['Asia/Macau', 'Asia/Shanghai', 'Asia/Taipei']
}, {
  standard: {
    name: 'Alma-Ata Time',
    abbrev: 'ALMT'
  },
  pick: 'Asia/Almaty',
  zones: ['Asia/Almaty', 'Asia/Qostanay']
}, {
  standard: {
    name: 'Oral Time',
    abbrev: 'ORAT'
  },
  pick: 'Asia/Oral',
  zones: ['Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Atyrau', 'Asia/Oral', 'Asia/Qyzylorda']
}, {
  standard: {
    name: 'Yakutsk Time',
    abbrev: 'YAKT'
  },
  pick: 'Asia/Yakutsk',
  zones: ['Asia/Chita', 'Asia/Khandyga', 'Asia/Yakutsk']
}, {
  standard: {
    name: 'Gulf Standard Time',
    abbrev: 'GST'
  },
  pick: 'Asia/Dubai',
  alias: ['uae'],
  zones: ['Asia/Dubai', 'Asia/Muscat']
}, {
  standard: {
    name: 'Hong Kong Time',
    abbrev: 'HKT'
  },
  zones: ['Asia/Hong_Kong']
}, {
  standard: {
    name: 'Western Indonesian Time',
    abbrev: 'WIB'
  },
  alias: ['indonesia'],
  //most of it
  zones: ['Asia/Jakarta', 'Asia/Pontianak', 'Asia/Jayapura']
}, {
  standard: {
    name: 'Central Indonesian Time',
    abbrev: 'WITA'
  },
  zones: ['Asia/Makassar']
}, {
  standard: {
    name: 'Israel Daylight Time',
    abbrev: 'IDT'
  },
  daylight: {
    name: 'Israel Standard Time',
    abbrev: 'IST'
  },
  alias: ['israeli'],
  zones: ['Asia/Jerusalem']
}, {
  standard: {
    name: 'Krasnoyarsk Time',
    abbrev: 'KRAT'
  },
  zones: ['Asia/Krasnoyarsk', 'Asia/Novokuznetsk', 'Asia/Barnaul']
}, {
  standard: {
    name: 'Malaysia Time',
    abbrev: 'MYT'
  },
  zones: ['Asia/Kuala_Lumpur', 'Asia/Kuching']
}, {
  standard: {
    name: 'Singapore Time',
    abbrev: 'SGT'
  },
  zones: ['Asia/Singapore']
}, {
  standard: {
    name: 'Korea Standard Time',
    abbrev: 'KST'
  },
  pick: 'Asia/Seoul',
  alias: ['korean'],
  zones: ['Asia/Pyongyang', 'Asia/Seoul']
}, {
  standard: {
    name: 'Uzbekistan Time',
    abbrev: 'UZT'
  },
  zones: ['Asia/Samarkand', 'Asia/Tashkent']
}, {
  standard: {
    name: 'Vladivostok Time',
    abbrev: 'VLAT'
  },
  pick: 'Asia/Vladivostok',
  zones: ['Asia/Ust-nera', 'Asia/Vladivostok']
}, {
  standard: {
    name: 'Anadyr Time',
    abbrev: 'ANAT'
  },
  zones: ['Asia/Anadyr']
}, {
  standard: {
    name: 'Turkmenistan Time',
    abbrev: 'TMT'
  },
  zones: ['Asia/Ashgabat']
}, {
  standard: {
    name: 'Azerbaijan Time',
    abbrev: 'AZT'
  },
  zones: ['Asia/Baku']
}, {
  standard: {
    name: 'Kyrgyzstan Time',
    abbrev: 'KGT'
  },
  zones: ['Asia/Bishkek']
}, {
  standard: {
    name: 'Brunei Darussalam Time',
    abbrev: 'BNT'
  },
  zones: ['Asia/Brunei']
}, // choibalsan: ['Asia/Choibalsan'],
// { standard: { name: 'Bangladesh Standard Time', abbrev: 'BST' }, zones: ['Asia/Dhaka'] },
// east_Timor: ['Asia/Dili'],
// tajikistan: ['Asia/Dushanbe'],
// hovd: ['Asia/Hovd'],
// irkutsk: ['Asia/Irkutsk'],
{
  standard: {
    name: 'Afghanistan Time',
    abbrev: 'AFT'
  },
  zones: ['Asia/Kabul']
}, {
  standard: {
    name: 'Kamchatka Time',
    abbrev: 'PETT'
  },
  zones: ['Asia/Kamchatka']
}, {
  standard: {
    name: 'Nepal Time',
    abbrev: 'NPT'
  },
  zones: ['Asia/Katmandu']
}, // magadan: ['Asia/Magadan'],
{
  standard: {
    name: 'Philippine Time',
    abbrev: 'PHT'
  },
  zones: ['Asia/Manila']
}, // novosibirsk: ['Asia/Novosibirsk'],
// omsk: ['Asia/Omsk'],
{
  standard: {
    name: 'Myanmar Time',
    abbrev: 'MMT'
  },
  zones: ['Asia/Rangoon']
}, // sakhalin: ['Asia/Sakhalin'],
// srednekolymsk: ['Asia/Srednekolymsk'],
{
  standard: {
    name: 'Georgia Standard Time',
    abbrev: 'GET'
  },
  zones: ['Asia/Tbilisi']
}, // bhutan: ['Asia/Thimphu'],
{
  standard: {
    name: 'Japan Standard Time',
    abbrev: 'JST'
  },
  zones: ['Asia/Tokyo']
}, {
  standard: {
    name: 'Ulaanbaatar Time',
    abbrev: 'ULAT'
  },
  zones: ['Asia/Ulaanbaatar']
}, // urumqi: ['Asia/Urumqi'],
// yekaterinburg: ['Asia/Yekaterinburg'],
// armenia: ['Asia/Yerevan'],
// azores: ['atlantic/Azores'],
// cape_Verde: ['atlantic/Cape_Verde'],
// south_Georgia: ['atlantic/South_Georgia'],
// falkland: ['atlantic/Stanley'],
//India
{
  standard: {
    name: 'Maldives Time',
    abbrev: 'MVT'
  },
  zones: ['Indian/Maldives']
}, {
  standard: {
    name: 'Mauritius Time',
    abbrev: 'MUT'
  },
  zones: ['Indian/Mauritius']
}, {
  standard: {
    name: 'Marshall Islands Time',
    abbrev: 'MHT'
  },
  zones: ['Pacific/Kwajalein', 'Pacific/Majuro']
}, {
  standard: {
    name: 'Samoa Standard Time',
    abbrev: 'SST'
  },
  alias: ['somoan'],
  zones: ['Pacific/Midway', 'Pacific/Pago_Pago']
}, {
  standard: {
    name: 'Chamorro Standard Time',
    abbrev: 'CHST'
  },
  zones: ['Pacific/Guam', 'Pacific/Saipan']
}, {
  standard: {
    name: 'Papua New Guinea Time',
    abbrev: 'PGT'
  },
  zones: ['Pacific/Bougainville', 'Pacific/Port_Moresby']
} // indian_Ocean: ['Indian/Chagos'],
// christmas: ['Indian/Christmas'],
// cocos: ['Indian/Cocos'],
// french_Southern: ['Indian/Kerguelen'],
// seychelles: ['Indian/Mahe'],
// reunion: ['Indian/Reunion'],
//Pacific
// apia: ['Pacific/Apia'],
// easter: ['Pacific/Easter'],
// vanuatu: ['Pacific/Efate'],
// phoenix_Islands: ['Pacific/Enderbury'],
// tokelau: ['Pacific/Fakaofo'],
// fiji: ['Pacific/Fiji'],
// tuvalu: ['Pacific/Funafuti'],
// galapagos: ['Pacific/Galapagos'],
// gambier: ['Pacific/Gambier'],
// solomon: ['Pacific/Guadalcanal'],
// line_Islands: ['Pacific/Kiritimati'],
// kosrae: ['Pacific/Kosrae'],
// marquesas: ['Pacific/Marquesas'],
// nauru: ['Pacific/Nauru'],
// niue: ['Pacific/Niue'],
// norfolk: ['Pacific/Norfolk'],
// new_Caledonia: ['Pacific/Noumea'],
// palau: ['Pacific/Palau'],
// pitcairn: ['Pacific/Pitcairn'],
// ponape: ['Pacific/Ponape'],
// cook: ['Pacific/Rarotonga'],
// tahiti: ['Pacific/Tahiti'],
// gilbert_Islands: ['Pacific/Tarawa'],
// tonga: ['Pacific/Tongatapu'],
// truk: ['Pacific/Truk'],
// wake: ['Pacific/Wake'],
// wallis: ['Pacific/Wallis'],
// tomsk: ['Asia/Tomsk']
// antarctic
// greenland_Eastern: ['America/Scoresbysund'],
// davis: ['Antarctica/Davis'],
// dumontdurville: ['Antarctica/Dumontdurville'],
// macquarie: ['Antarctica/Macquarie'],
// mawson: ['Antarctica/Mawson'],
// rothera: ['Antarctica/Rothera'],
// syowa: ['Antarctica/Syowa'],
// vostok: ['Antarctica/Vostok'],
];

// this is a very rough list of informal and abbreviated timezones
// i am not an expert, or even half-knowledgeable in this subject.
// please help.
// partially from: https://En.wikipedia.org/Wiki/List_Of_Time_Zone_Abbreviations
//Format:  'best/Iana': [standard, daylight, alias...]
var informal = {
  //North america
  'America/Halifax': ['ast', 'adt', 'atlantic'],
  //Or 'arabia standard time'
  'America/New_York': ['est', 'edt', 'eastern'],
  //Or 'Ecuador Time'
  'America/Chicago': ['cst', 'cdt', 'central'],
  'America/Denver': ['mst', 'mdt', 'mountain'],
  'America/Los_Angeles': ['pst', 'pdt', 'pacific'],
  'America/Anchorage': ['ahst', 'ahdt', 'akst', 'akdt', 'alaska'],
  //Alaska Standard Time
  'America/St_Johns': ['nst', 'ndt', 'nt', 'newfoundland', 'nddt'],
  // awt: 'America/Blanc-sablon',
  // addt: 'America/Pangnirtung',
  // apt: 'America/Blanc-sablon',
  // cddt: 'America/Rankin_Inlet',
  // cwt: 'America/Mexico_City',
  // cpt: 'America/Atikokan',
  // eddt: 'America/Iqaluit',
  // ept: 'America/Detroit',
  // ewt: 'America/Detroit',
  // ect: 'America/Anguilla', //Eastern caribbean time (does not recognise dst)
  // 'eastern caribbean': 'America/Anguilla',
  // ffmt: 'America/Martinique',
  // kmt: 'America/Grand_Turk',
  // mddt: 'America/Cambridge_Bay',
  // mpt: 'America/Boise',
  // mwt: 'America/Phoenix',
  // nwt: 'America/Adak',
  // // npt: 'America/Goose_Bay',
  // pddt: 'America/Inuvik',
  // ppmt: 'America/Port-au-prince',
  // ppt: 'America/Dawson_Creek',
  // pwt: 'America/Dawson_Creek',
  // qmt: 'America/Guayaquil',
  // sdmt: 'America/Santo_Domingo',
  // sjmt: 'America/Costa_Rica',
  // ydt: 'America/Dawson', //Yukon
  // ypt: 'America/Dawson',
  // yddt: 'America/Dawson',
  // ywt: 'America/Dawson',
  // yst: 'America/Whitehorse',
  //South america
  'America/Caracas': ['vet', null, 'venezuela'],
  'America/Bogota': ['cot', null, 'colombia'],
  'America/Cayenne': ['gft', null, 'french guiana'],
  'America/Paramaribo': ['srt', null, 'suriname'],
  'America/Guyana': ['gyt'],
  'America/Buenos_Aires': ['art', null, 'argentina'],
  'America/La_Paz': ['bot', null, 'bolivia'],
  'America/Asuncion': ['pyt', 'pyst', 'paraguay'],
  'America/Santiago': ['clt', 'clst', 'chile'],
  'America/Lima': ['pet', null, 'peru'],
  'America/Montevideo': ['uyt', null, 'uruguay'],
  'Atlantic/Stanley': ['fkst', null, 'falkland island'],
  //Brazil
  'America/Manaus': ['amt'],
  'America/Sao_Paulo': ['brt', 'brst'],
  'Brazil/Acre': ['act'],
  // amst: -3, //Amazon summer time (brazil)
  // fnt: -2, //Fernando de noronha time
  // pmdt: -2, //Saint pierre and miquelon daylight time
  // pmst: -3, //Saint pierre and miquelon standard time
  // rott: -3, //Rothera research station time
  //Europe
  'Europe/London': ['gmt', 'bst', 'british'],
  //Britain is different
  'ETC/GMT': ['gmt', null, 'greenwich'],
  'Europe/Lisbon': ['wet', 'west', 'west europe'],
  //Western europe
  'Europe/Berlin': ['cet', 'cest', 'central europe', 'middle european', 'met', 'mest'],
  //Central europe
  'Europe/Riga': ['eet', 'eest', 'east europe', 'kalt'],
  //Eastern europe
  // -- these are old european ones, before the EU, i think:
  // 'Europe/Minsk': ['feet', 'feest', 'eastern europe'], //Further eastern europe (discontinued)
  // ace: 'Europe/Dublin',
  // amt: 'Europe/Amsterdam',
  // bdst: 'Europe/Gibraltar',
  // bmt: 'Europe/Brussels',
  // bst: 'Europe/Gibraltar', //British summer time
  // 'british summer': 1,
  // dmt: 'Europe/Dublin',
  // dft: 1, //Aix-specific equivalent of central european time
  // cmt: 'Europe/Copenhagen',
  // // ist: 'Europe/Dublin',
  // imt: 'Europe/Sofia',
  // lst: 'Europe/Riga',
  // pmt: 'Europe/Prague',
  // rmt: 'Europe/Rome',
  // set: 'Europe/Stockholm',
  // wemt: 'Europe/Madrid',
  // tse: 'Europe/Dublin',
  // utc: 'etc/Utc', //Coordinated universal time
  // 'coordinated universal': 'etc/Utc',
  //Russia
  'Europe/Moscow': ['msk', null, 'fet', 'mdst', 'msd'],
  //'further eastern europe'
  'Europe/Samara': ['samt'],
  'Asia/Yekaterinburg': ['yekt'],
  'Asia/Omsk': ['omst'],
  'Asia/Krasnoyarsk': ['krat'],
  'Asia/Novosibirsk': ['novt'],
  'Asia/Irkutsk': ['irkt'],
  'Asia/Yakutsk': ['yakt'],
  'Asia/Cladivostok': ['vlat'],
  'Asia/Magadan': ['magt'],
  'Asia/Sakhalin': ['sakt'],
  'Asia/Srednekolymsk': ['sret'],
  'Asia/Anadyr': ['anat'],
  'Asia/Kamchatka': ['pett'],
  //Near-russia
  'Asia/Tashkent': ['uzt', 'uzbekistan'],
  //Uzbekistan time
  'Asia/Bishkek': ['kgt', 'kyrgyzstan'],
  //Kyrgyzstan time
  'Antarctica/Vostok': ['vost'],
  'Asia/Hovd': ['hovt'],
  'Asia/Ashgabat': ['tmt', null, 'turkmenistan'],
  // wmt: 'Europe/Warsaw',
  // 'Europe/Volgograd':['volt']
  //Africa
  'Africa/Lagos': ['wat', 'wast', 'west africa'],
  //West african
  'Africa/Khartoum': ['cat', null, 'central africa'],
  'Africa/Nairobi': ['eat', null, 'east africa'],
  'Atlantic/Cape_Verde': ['cvt'],
  'Indian/Mauritius': ['mut'],
  'Indian/Reunion': ['ret'],
  'Africa/Johannesburg': ['sast', null, 'south africa'],
  //Atlantic
  'Atlantic/Azores': ['azot', 'azost', 'hmt'],
  'America/Godthab': ['wgt', 'wgst', 'west greenland'],
  'America/Scoresbysund': ['egt', 'egst', 'east greenland'],
  //Middle-east
  'Europe/Istanbul': ['trt', null, 'turkey'],
  'Asia/Tbilisi': ['get', null, 'georgia'],
  // 'Asia/Yerevan': ['amt', null, 'armenia'], //(sorry!)
  'Asia/Baku': ['azt', null, 'azerbaijan'],
  'Asia/Jerusalem': [null, 'idt', 'israel', 'jmt', 'iddt'],
  //Using ist for india
  'Asia/Tehran': ['irst', 'irdt', 'iran'],
  'Asia/Karachi': ['pkt', null, 'pakistan'],
  'Asia/Kabul': ['aft', null, 'afghanistan'],
  'Asia/Dushanbe': ['tjt', null, 'tajikistan'],
  'Asia/Almaty': ['almt', null, 'alma ata'],
  'Asia/Dubai': ['gst', null, 'gulf'],
  //India
  'Asia/Kolkata': ['ist', null, 'india', 'slst'],
  // 'Asia/Dhaka': ['bst', null, 'bangladesh'], //(sorry)
  'Asia/Thimbu': ['btt', null, 'bhutan'],
  'Indian/Maldives': ['mvt'],
  'Asia/Kathmandu': ['npt', null, 'nepal'],
  'Indian/Cocos': ['cct', null, 'cocos island'],
  'Indian/Chagos': ['iot', null, 'indian chagos'],
  'Indian/Kerguelen': ['tft', null, 'french southern and antarctic'],
  // biot: 6, //British indian ocean time
  // iot: 3, //Indian ocean time
  //Asia
  'Asia/Shanghai': ['ct', null, 'china', 'hkt'],
  'Asia/Ulaanbaatar': ['ulat'],
  'Asia/Seoul': ['kst', null, 'korea'],
  'Asia/Tokyo': ['jst', null, 'japan'],
  'Asia/Phnom_Penh': ['ict', null],
  'Asia/Manila': ['pht', null, 'philippines'],
  'Asia/Singapore': ['sgt'],
  // mmt: 'Asia/Colombo',
  //Australia
  'Australia/Brisbane': ['aest', 'aedt', 'australian east'],
  //Australian eastern standard time
  'Australia/Adelaide': ['acst', 'acdt', 'australian central'],
  //Australian central daylight savings time
  'Australia/Eucla': ['acwst', null, 'cwst', 'australian central western'],
  //Australian central western standard time (unofficial)
  'Australia/Perth': ['awst', 'awdt', 'australian west'],
  //Australian western standard time
  'Pacific/Auckland': ['nzst', 'nzdt', 'nzmt'],
  'Australia/Lord_Howe': ['lhst', 'lhdt'],
  //Pacific
  'Pacific/Guam': ['chst'],
  'Pacific/Chatham': ['chast', 'chadt'],
  'Pacific/Honolulu': ['hst'],
  'Asia/Brunei': ['bnt', null, 'bdt'],
  'Pacific/Midway': ['sst', null, 'samoa', 'sdt'],
  'Pacific/Niue': ['nut'],
  'Pacific/Fakaofo': ['tkt'],
  'Pacific/Rarotonga': ['ckt', null, 'cook islands'],
  'Chile/Easterisland': ['east', 'easst', 'easter island', 'emt'],
  'Asia/Jayapura': ['wit', null, 'east indonesia'],
  'Asia/Jakarta': ['wib', null, 'west indonesia'],
  'Asia/Makassar': ['wita', null, 'central indonesia'],
  'Pacific/Galapagos': ['galt'],
  'Pacific/Fiji': ['fjt', 'fjst'],
  'Asia/Dili': ['tlt', null, 'east timor'],
  'Indian/Christmas': ['cxt'] // sbt: 11, //Solomon islands time
  // mht: 12, //Marshall islands time
  // bit: -12, //Baker island time
  // cist: -8, //Clipperton island standard time
  // chut: 10, //Chuuk time
  // ddut: 10, //Dumont durville time
  // gst: 'Pacific/Guam',
  // gamt: -9, //Gambier islands time
  // git: -9, //Gambier island time
  // gilt: 12, //Gilbert island time
  // idlw: -12, //International day line west time zone
  // 'international day line west': -12,
  // kost: 11, //Kosrae time
  // lint: 14, //Line islands time
  // magt: 12, //Magadan time
  // mist: 11, //Macquarie island station time
  // nct: 11, //New caledonia time
  // nft: 11, //Norfolk island time
  // phot: 13, //Phoenix island time
  // pont: 11, //Pohnpei standard time
  // pett: 12, //Kamchatka time
  // mart: -9.5, //Marquesas islands time
  // mit: -9.5, //Marquesas islands time
  // myt: 8, //Malaysia time
  // nut: -11, //Niue time
  // pht: 8, //Philippine time
  // pgt: 10, //Papua new guinea time
  // pmmt: 'Pacific/Bougainville',
  // // smt: 'Asia/Singapore',
  // sakt: 11, //Sakhalin island time
  // sret: 11, //Srednekolymsk time
  // sst: 'Pacific/Pago_Pago',
  // taht: -10, //Tahiti time
  // tvt: 12, //Tuvalu time
  // tkt: 13, //Tokelau time
  // tot: 13, //Tonga time
  // vut: 11, //Vanuatu time
  // wakt: 12, //Wake island time
  //I forget (sorry!)
  // haec: 2, //Heure avancée deurope centrale french-language name for cest
  // syot: 3, //Showa station time
  // yekt: 5, //Yekaterinburg time
  // sct: 4, //Seychelles time
  // orat: 5, //Oral time
  // mawt: 5, //Mawson station time
  // hovt: 7, //Khovd standard time
  // hovst: 8, //Khovd summer time
  // davt: 7, //Davis time
  // chost: 9, //Choibalsan summer time
  // chot: 8, //Choibalsan standard time
  // wst: 8, //Western standard time

}; //Use each abbreviation as a key
// const lookup = Object.keys(informal).reduce((h, k) => {
//   let arr = informal[k]
//   for (let i = 0; i < 5; i += 1) {
//     if (arr[i]) {
//       h[arr[i]] = k
//     }
//   }
//   return h
// }, {})

var _06Abbreviations = informal;

var all = Object.assign({}, _01Iana, _02ByCity, _04OldZones); //Add country info

Object.keys(_03ByCountry).forEach(function (key) {
  //Add country name
  all[key] = _03ByCountry[key].choice; //Add 2-letter country code

  all[_03ByCountry[key].code] = _03ByCountry[key].choice;
}); //Add metazone info

_05Metazones.forEach(function (obj) {
  var zone = obj.pick || obj.zones[0];
  all[obj.standard.name.toLowerCase()] = zone;

  if (obj.standard.abbrev) {
    all[obj.standard.abbrev.toLowerCase()] = zone;
  }

  if (obj.daylight) {
    if (obj.daylight.name) {
      all[obj.daylight.name.toLowerCase()] = zone;
    }

    if (obj.daylight.abbrev) {
      all[obj.daylight.abbrev.toLowerCase()] = zone;
    }
  }

  if (obj.alias) {
    obj.alias.forEach(function (str) {
      return all[str.toLowerCase()] = zone;
    });
  }
}); // add even-more abbreviations

Object.keys(_06Abbreviations).forEach(function (k) {
  var arr = (_06Abbreviations[k] || []).filter(function (a) {
    return a;
  });
  arr.forEach(function (abbr) {
    if (all.hasOwnProperty(abbr) === false) {
      all[abbr] = k;
    }
  });
}); // console.log(all['canada/vancouver'])
// console.log(Object.keys(all).length)

var data = all;

var isOffset = /(\-?[0-9]+)h(rs)?/i;
var isNumber = /(\-?[0-9]+)/;
var utcOffset = /utc([\-+]?[0-9]+)/i;
var gmtOffset = /gmt([\-+]?[0-9]+)/i;

var toIana = function toIana(num) {
  num = Number(num);

  if (num > -13 && num < 13) {
    num = num * -1; //it's opposite!

    num = (num > 0 ? '+' : '') + num; //add plus sign

    return 'Etc/GMT' + num;
  }

  return null;
};

var parseOffset = function parseOffset(tz) {
  // '+5hrs'
  var m = tz.match(isOffset);

  if (m !== null) {
    return toIana(m[1]);
  } // 'utc+5'


  m = tz.match(utcOffset);

  if (m !== null) {
    return toIana(m[1]);
  } // 'GMT-5' (not opposite)


  m = tz.match(gmtOffset);

  if (m !== null) {
    var num = Number(m[1]) * -1;
    return toIana(num);
  } // '+5'


  m = tz.match(isNumber);

  if (m !== null) {
    return toIana(m[1]);
  }

  return null;
};

var parseOffset_1 = parseOffset;

var normalizeOne = function normalizeOne(tz) {
  tz = tz.replace(/ time/g, '');
  tz = tz.replace(/ (standard|daylight|summer)/g, '');
  tz = tz.replace(/ - .*/g, ''); //`Eastern Time - US & Canada`

  tz = tz.replace(/, .*/g, ''); //`mumbai, india`

  return tz.trim();
}; //some more aggressive transformations


var normalizeTwo = function normalizeTwo(tz) {
  tz = tz.replace(/\b(east|west|north|south)ern/g, '$1');
  tz = tz.replace(/\b(africa|america|australia)n/g, '$1');
  tz = tz.replace(/\beuropean/g, 'europe');
  tz = tz.replace(/\islands/g, 'island');
  tz = tz.replace(/.*\//g, '');
  return tz.trim();
}; //


var find = function find(str) {
  if (!str) {
    return null;
  }

  str = str.toLowerCase().trim(); // lookup known abbreviations

  if (data.hasOwnProperty(str)) {
    return data[str];
  } // -8hrs


  if (/[0-9]/.test(str)) {
    var etc = parseOffset_1(str);

    if (etc) {
      return etc;
    }
  } // start fuzzy-match against iana timezones


  str = normalizeOne(str);

  if (data.hasOwnProperty(str)) {
    return data[str];
  } // 'eastern daylight'


  var tmp = str + ' time';

  if (data.hasOwnProperty(tmp)) {
    return data[tmp];
  } // 'pacific'


  tmp = str + ' standard time';

  if (data.hasOwnProperty(tmp)) {
    return data[tmp];
  } // -- harder normalizations --
  //


  str = normalizeTwo(str);

  if (data.hasOwnProperty(str)) {
    return data[str];
  } // 'eastern daylight'


  tmp = str + ' time';

  if (data.hasOwnProperty(tmp)) {
    return data[tmp];
  } // 'pacific'


  tmp = str + ' standard time';

  if (data.hasOwnProperty(tmp)) {
    return data[tmp];
  }

  return null;
};

var find_1 = find;

var display = function display(str) {
  var id = find_1(str);

  if (!id) {
    return null;
  }

  var meta = _05Metazones.find(function (obj) {
    return obj.zones.find(function (tz) {
      return tz === id;
    });
  });
  meta = meta || {};
  return {
    iana: id,
    standard: meta.standard,
    daylight: meta.daylight
  };
};

var display_1 = display;

var _version = '0.3.0';

var src = {
  find: find_1,
  display: display_1,
  version: _version
};
var src_1 = src.find;
var src_2 = src.display;
var src_3 = src.version;

export default src;
export { src_2 as display, src_1 as find, src_3 as version };
