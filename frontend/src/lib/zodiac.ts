export interface ZodiacSign {
  name: string;
  symbol: string;
  element: string;
  modality: string;
  rulingPlanet: string;
  dateRange: string;
  traits: string[];
  negativeTraits: string[];
  description: string;
  risingDescription: string;
  moonDescription: string;
}

export const zodiacSigns: Record<string, ZodiacSign> = {
  aries: {
    name: "Koç",
    symbol: "♈",
    element: "Ateş",
    modality: "Öncü",
    rulingPlanet: "Mars",
    dateRange: "21 Mart - 19 Nisan",
    traits: ["Cesur", "Enerjik", "Lider ruhlu", "Tutkulu", "Girişimci"],
    negativeTraits: ["Sabırsız", "Düşüncesiz", "Saldırgan", "Bencil", "Kızgın"],
    description: "Koç burcu, zodyağın ilk burcu olarak yeni başlangıçları ve öncü ruhu temsil eder. Mars'ın yönetimindeki bu burç, cesaret ve kararlılıkla bilinir.",
    risingDescription: "Koç yükseleni, çevresine enerjik ve dinamik bir ilk izlenim bırakır. Fiziksel görünümleri atletik ve aktif olma eğilimindedir. Yeni ortamlara hızla adapte olur ve doğal liderlik özellikleri sergilerler.",
    moonDescription: "Ay Koç'ta olanlar, duygusal tepkilerde hızlı ve anlıktırlar. Duygularını açıkça ifade ederler ve içsel dünyaları enerjik, rekabetçi bir yapıya sahiptir. Bağımsızlık ihtiyaçları yüksektir."
  },
  taurus: {
    name: "Boğa",
    symbol: "♉",
    element: "Toprak",
    modality: "Sabit",
    rulingPlanet: "Venüs",
    dateRange: "20 Nisan - 20 Mayıs",
    traits: ["Güvenilir", "Sabırlı", "Pratik", "Sadık", "Kararlı"],
    negativeTraits: ["İnatçı", "Possesif", "Tembel", "Materyalist", "Kıskanç"],
    description: "Boğa burcu, toprak elementinin sabit yapısını yansıtır. Venüs'ün yönetiminde güzellik, konfor ve maddi güvenliğe değer verir.",
    risingDescription: "Boğa yükseleni, sakin ve güvenilir bir dış görünüm sunar. Fiziksel olarak sağlam yapılı ve çekici olma eğilimindedirler. Yavaş ama kararlı adımlarla ilerlerler.",
    moonDescription: "Ay Boğa'da olanlar, duygusal güvenlik ve istikrar ararlar. Değişime dirençlidirler ve duygusal tepkileri yavaş ama derin olur. Konfor ve huzur onlar için önemlidir."
  },
  gemini: {
    name: "İkizler",
    symbol: "♊",
    element: "Hava",
    modality: "Değişken",
    rulingPlanet: "Merkür",
    dateRange: "21 Mayıs - 20 Haziran",
    traits: ["Zeki", "Meraklı", "İletişimci", "Uyumlu", "Çok yönlü"],
    negativeTraits: ["Kararsız", "Yüzeysel", "Tutarsız", "Dedikodulu", "Huzursuz"],
    description: "İkizler burcu, zihinsel çeviklik ve iletişim becerisiyle öne çıkar. Merkür'ün yönetiminde bilgi toplamayı ve paylaşmayı severler.",
    risingDescription: "İkizler yükseleni, meraklı ve konuşkan bir ilk izlenim bırakır. Genellikle genç görünümlü ve hareketlidirler. Sosyal ortamlarda kolayca uyum sağlarlar.",
    moonDescription: "Ay İkizler'de olanlar, duygularını zihinsel olarak işlerler. Duygusal durumları hızla değişebilir ve iletişim yoluyla duygusal bağ kurarlar."
  },
  cancer: {
    name: "Yengeç",
    symbol: "♋",
    element: "Su",
    modality: "Öncü",
    rulingPlanet: "Ay",
    dateRange: "21 Haziran - 22 Temmuz",
    traits: ["Koruyucu", "Sezgisel", "Duygusal", "Sadık", "Şefkatli"],
    negativeTraits: ["Alıngan", "Karamsar", "Kıskançsız", "Manipülatif", "Kapanık"],
    description: "Yengeç burcu, duygusal derinlik ve koruyucu içgüdülerle karakterizedir. Ay'ın yönetiminde ev ve aile onlar için kutsal değerlerdir.",
    risingDescription: "Yengeç yükseleni, sıcak ve koruyucu bir dış görünüm sunar. Yüz ifadeleri duygularını açıkça yansıtır. Başkalarını rahat hissettirme yetenekleri vardır.",
    moonDescription: "Ay Yengeç'te (kendi evinde) çok güçlüdür. Bu kişiler son derece sezgisel ve duygusaldır. Geçmişe bağlılıkları güçlüdür ve duygusal hafızaları keskindir."
  },
  leo: {
    name: "Aslan",
    symbol: "♌",
    element: "Ateş",
    modality: "Sabit",
    rulingPlanet: "Güneş",
    dateRange: "23 Temmuz - 22 Ağustos",
    traits: ["Karizmatik", "Cömert", "Yaratıcı", "Sadık", "Özgüvenli"],
    negativeTraits: ["Kibirli", "Bencil", "Diktatör", "Drama", "Gösterişçi"],
    description: "Aslan burcu, Güneş'in parlak enerjisini taşır. Sahne onların doğal habitatıdır ve dikkat çekmeyi, liderlik etmeyi severler.",
    risingDescription: "Aslan yükseleni, gösterişli ve etkileyici bir ilk izlenim bırakır. Fiziksel görünümleri dikkat çekici ve karizmatiktir. Doğal bir asalet taşırlar.",
    moonDescription: "Ay Aslan'da olanlar, duygusal olarak takdir ve hayranlık ararlar. Kalbinden gelen cömertlik ve sıcaklıklarıyla bilinirler. Duygusal ifadeleri dramatik olabilir."
  },
  virgo: {
    name: "Başak",
    symbol: "♍",
    element: "Toprak",
    modality: "Değişken",
    rulingPlanet: "Merkür",
    dateRange: "23 Ağustos - 22 Eylül",
    traits: ["Analitik", "Düzenli", "Yardımsever", "Pratik", "Detaycı"],
    negativeTraits: ["Eleştirel", "Takıntılı", "Endişeli", "Mükemmeliyetçi", "Soğuk"],
    description: "Başak burcu, detaylara ve mükemmelliğe odaklanan pratik bir yapıya sahiptir. Merkür'ün analitik yönünü temsil ederler.",
    risingDescription: "Başak yükseleni, düzenli ve temiz bir ilk izlenim bırakır. Fiziksel görünümleri genellikle bakımlı ve sade şıklıktadır. Dikkatli ve gözlemcidirler.",
    moonDescription: "Ay Başak'ta olanlar, duygularını analiz etme eğilimindedir. Duygusal güvenlik için düzen ve rutin ararlar. Başkalarına yardım etmek onları duygusal olarak tatmin eder."
  },
  libra: {
    name: "Terazi",
    symbol: "♎",
    element: "Hava",
    modality: "Öncü",
    rulingPlanet: "Venüs",
    dateRange: "23 Eylül - 22 Ekim",
    traits: ["Diplomatik", "Adil", "Estetik", "İşbirlikçi", "Zarif"],
    negativeTraits: ["Kararsız", "Çatışmadan kaçan", "Yüzeysel", "Bağımlı", "Pasif-agresif"],
    description: "Terazi burcu, denge ve uyum arayışındadır. Venüs'ün yönetiminde ilişkiler ve estetik onlar için çok önemlidir.",
    risingDescription: "Terazi yükseleni, zarif ve çekici bir ilk izlenim bırakır. Fiziksel görünümleri uyumlu ve dengelidir. Sosyal ortamlarda doğal bir zarafet sergilerler.",
    moonDescription: "Ay Terazi'de olanlar, duygusal denge ve uyum ararlar. İlişkilerde barışı korumak için çaba gösterirler. Duygusal kararlar vermekte zorlanabilirler."
  },
  scorpio: {
    name: "Akrep",
    symbol: "♏",
    element: "Su",
    modality: "Sabit",
    rulingPlanet: "Plüton/Mars",
    dateRange: "23 Ekim - 21 Kasım",
    traits: ["Tutkulu", "Sadık", "Kararlı", "Sezgisel", "Güçlü"],
    negativeTraits: ["Kıskanç", "Manipülatif", "İntikamcı", "Obsesif", "Şüpheci"],
    description: "Akrep burcu, duygusal derinlik ve dönüşüm gücüyle bilinir. Plüton'un yönetiminde yaşamın gizemlerini araştırırlar.",
    risingDescription: "Akrep yükseleni, yoğun ve manyetik bir ilk izlenim bırakır. Bakışları delici ve etkileyicidir. Gizemleri çözmek isterler ve başkalarını kolayca okurlar.",
    moonDescription: "Ay Akrep'te olanlar, son derece derin ve yoğun duygulara sahiptir. Duygusal bağları güçlü ve transformatif olabilir. Güven onlar için çok önemlidir."
  },
  sagittarius: {
    name: "Yay",
    symbol: "♐",
    element: "Ateş",
    modality: "Değişken",
    rulingPlanet: "Jüpiter",
    dateRange: "22 Kasım - 21 Aralık",
    traits: ["Maceracı", "Optimist", "Felsefi", "Dürüst", "Özgür"],
    negativeTraits: ["Patavatsız", "Sorumsuz", "Sabırsız", "Taahhütten kaçan", "Abartılı"],
    description: "Yay burcu, özgürlük ve bilgi arayışındadır. Jüpiter'in yönetiminde genişleme ve büyüme onların doğasında vardır.",
    risingDescription: "Yay yükseleni, neşeli ve maceraperest bir ilk izlenim bırakır. Fiziksel görünümleri atletik ve enerjiktir. Geniş gülümsemeleri ve iyimser tavırlarıyla tanınırlar.",
    moonDescription: "Ay Yay'da olanlar, duygusal özgürlük ararlar. Yeni deneyimler ve keşifler onları duygusal olarak besler. Duygularını abartılı ifade edebilirler."
  },
  capricorn: {
    name: "Oğlak",
    symbol: "♑",
    element: "Toprak",
    modality: "Öncü",
    rulingPlanet: "Satürn",
    dateRange: "22 Aralık - 19 Ocak",
    traits: ["Hırslı", "Disiplinli", "Sorumlu", "Pratik", "Sabırlı"],
    negativeTraits: ["İşkolik", "Karamsar", "Katı", "Soğuk", "Statü düşkünü"],
    description: "Oğlak burcu, hedef odaklı ve disiplinli bir yapıya sahiptir. Satürn'ün yönetiminde sorumluluk ve başarı onlar için önemlidir.",
    risingDescription: "Oğlak yükseleni, ciddi ve profesyonel bir ilk izlenim bırakır. Fiziksel görünümleri olgun ve güvenilirdir. Zamanla gençleşiyor gibi görünürler.",
    moonDescription: "Ay Oğlak'ta olanlar, duygusal konularda kontrollü ve temkinlidirler. Duygusal güvenlik için başarı ve statü ararlar. Duygularını açmakta zorluk çekebilirler."
  },
  aquarius: {
    name: "Kova",
    symbol: "♒",
    element: "Hava",
    modality: "Sabit",
    rulingPlanet: "Uranüs/Satürn",
    dateRange: "20 Ocak - 18 Şubat",
    traits: ["Yenilikçi", "Bağımsız", "Hümanist", "Orijinal", "Entelektüel"],
    negativeTraits: ["Mesafeli", "İnatçı", "Öngörülemez", "Soğuk", "İsyankar"],
    description: "Kova burcu, insanlık için yenilik ve ilerleme arayışındadır. Uranüs'ün yönetiminde gelenekleri sorgular ve değişimi benimser.",
    risingDescription: "Kova yükseleni, farklı ve ilgi çekici bir ilk izlenim bırakır. Fiziksel görünümleri alışılmadık ve dikkat çekicidir. Kendi tarzlarını yaratırlar.",
    moonDescription: "Ay Kova'da olanlar, duygusal olarak bağımsız ve mesafelidirler. Duygularını entelektüel bir perspektiften değerlendirirler. İnsanlığa hizmet onları duygusal olarak tatmin eder."
  },
  pisces: {
    name: "Balık",
    symbol: "♓",
    element: "Su",
    modality: "Değişken",
    rulingPlanet: "Neptün/Jüpiter",
    dateRange: "19 Şubat - 20 Mart",
    traits: ["Empatik", "Yaratıcı", "Sezgisel", "Şefkatli", "Ruhani"],
    negativeTraits: ["Kaçış eğilimli", "Kurban rolü", "Sınır koyamayan", "Hayalci", "Kararsız"],
    description: "Balık burcu, duygusal ve ruhani derinliğe sahiptir. Neptün'ün yönetiminde hayal gücü ve empati onların en güçlü yönleridir.",
    risingDescription: "Balık yükseleni, nazik ve mistik bir ilk izlenim bırakır. Gözleri hayalci ve derin ifadeler taşır. Çevrelerindeki enerjiyi kolayca hissederler.",
    moonDescription: "Ay Balık'ta olanlar, son derece empatik ve sezgiseldirler. Duygusal sınırları belirsiz olabilir ve başkalarının duygularını kendi duygularıymış gibi hissedebilirler."
  }
};


