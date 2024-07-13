const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const PORT = 3000;

// Endpoint to fetch TYT Turkish topics
app.get("/fetch-tyt-turkish", async (req, res) => {
  try {
    const header = "TYT Türkçe";
    const topics = [
      "Sözcükte Anlam",
      "Söz Yorumu",
      "Deyim ve Atasözü",
      "Cümlede Anlam",
      "Paragraf",
      "Paragrafta Anlatım Teknikleri",
      "Paragrafta Düşünceyi Geliştirme Yolları",
      "Paragrafta Yapı",
      "Paragrafta Konu-Ana Düşünce",
      "Paragrafta Yardımcı Düşünce",
      "Ses Bilgisi",
      "Yazım Kuralları",
      "Noktalama İşaretleri",
      "Sözcükte Yapı/Ekler",
      "Sözcük Türleri",
      "İsimler",
      "Zamirler",
      "Sıfatlar",
      "Zarflar",
      "Edat – Bağlaç – Ünlem",
      "Fiiller",
      "Fiilde Anlam (Kip-Kişi-Yapı)",
      "Ek Fiil",
      "Fiilimsi",
      "Fiilde Çatı",
      "Sözcük Grupları",
      "Cümlenin Ögeleri",
      "Cümle Türleri",
      "Anlatım Bozukluğu",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-tyt-mathematics", async (req, res) => {
  try {
    const header = "TYT Matematik";
    const topics = [
      "Temel Kavramlar",
      "Sayı Basamakları",
      "Bölme ve Bölünebilme",
      "EBOB – EKOK",
      "Rasyonel Sayılar",
      "Basit Eşitsizlikler",
      "Mutlak Değer",
      "Üslü Sayılar",
      "Köklü Sayılar",
      "Çarpanlara Ayırma",
      "Oran Orantı",
      "Denklem Çözme",
      "Problemler",
      "Sayı Problemleri",
      "Kesir Problemleri",
      "Yaş Problemleri",
      "Hareket Hız Problemleri",
      "İşçi Emek Problemleri",
      "Yüzde Problemleri",
      "Kar Zarar Problemleri",
      "Karışım Problemleri",
      "Grafik Problemleri",
      "Rutin Olmayan Problemleri",
      "Kümeler – Kartezyen Çarpım",
      "Mantık",
      "Fonskiyonlar",
      "Polinomlar",
      "2.Dereceden Denklemler",
      "Permütasyon ve Kombinasyon",
      "Olasılık",
      "Veri – İstatistik",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch TYT Geometry topics
app.get("/fetch-tyt-geometry", async (req, res) => {
  try {
    const header = "TYT Geometri";
    const topics = [
      "Temel Kavramlar",
      "Doğruda Açılar",
      "Üçgende Açılar",
      "Özel Üçgenler",
      "Dik Üçgen",
      "İkizkenar Üçgen",
      "Eşkenar Üçgen",
      "Açıortay",
      "Kenarortay",
      "Eşlik ve Benzerlik",
      "Üçgende Alan",
      "Üçgende Benzerlik",
      "Açı Kenar Bağıntıları",
      "Çokgenler",
      "Özel Dörtgenler",
      "Dörtgenler",
      "Deltoid",
      "Paralelkenar",
      "Eşkenar Dörtgen",
      "Dikdörtgen",
      "Kare",
      "Yamuk",
      "Çember ve Daire",
      "Çemberde Açı",
      "Çemberde Uzunluk",
      "Dairede Çevre ve Alan",
      "Analitik Geometri - Noktanın Analitiği",
      "Analitik Geometri - Doğrunun Analitiği",
      "Dönüşüm Geometrisi",
      "Katı Cisimler - Prizmalar",
      "Katı Cisimler - Küp",
      "Katı Cisimler - Silindir",
      "Katı Cisimler - Piramit",
      "Katı Cisimler - Koni",
      "Katı Cisimler - Küre",
      "Çemberin Analitiği",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch TYT Physics topics
app.get("/fetch-tyt-physics", async (req, res) => {
  try {
    const header = "TYT Fizik";
    const topics = [
      "Fizik Bilimine Giriş",
      "Madde ve Özellikleri",
      "Sıvıların Kaldırma Kuvveti",
      "Basınç",
      "Isı, Sıcaklık ve Genleşme",
      "Hareket ve Kuvvet",
      "Dinamik",
      "İş, Güç ve Enerji",
      "Elektrik",
      "Manyetizma",
      "Dalgalar",
      "Optik",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch Chemistry topics for different grades
app.get("/fetch-tyt-chemistry", async (req, res) => {
  try {
    const header = "TYT Kimya";
    const topics = [
      "KİMYASAL TÜRLER ARASI ETKİLEŞİMLER",
      "ATOM VE PERİYODİK SİSTEM",
      "KİMYA BİLİMİ",
      "MADDENİN HÂLLERİ",
      "DOĞA VE KİMYA",
      "KİMYANIN TEMEL KANUNLARI VE KİMYASAL HESAPLAMALAR",
      "KARIŞIMLAR",
      "ASİTLER, BAZLAR VE TUZLAR",
      "KİMYA HER YERDE",
      "KİMYASAL TEPKİMELERDE ENERJİ",
      "KİMYASAL TEPKİMELERDE HIZ",
      "KİMYASAL TEPKİMELERDE DENGE",
      "MODERN ATOM TEORİSİ",
      "GAZLAR",
      "SIVI ÇÖZELTİLER VE ÇÖZÜNÜRLÜK",
      "KARBON KİMYASINA GİRİŞ",
      "ORGANİK BİLEŞİKLER",
      "KİMYA VE ELEKTRİK",
      "ENERJİ KAYNAKLARI VE BİLİMSEL GELİŞMELER",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch TYT Biology topics
app.get("/fetch-tyt-biology", async (req, res) => {
  try {
    const header = "TYT Biyoloji";
    const topics = [
      "Canlıların Ortak Özellikleri",
      "Canlıların Temel Bileşenleri",
      "Hücre ve Organeller – Madde Geçişleri",
      "Canlıların Sınıflandırılması",
      "Hücrede Bölünme – Üreme",
      "Kalıtım",
      "Bitki Biyolojisi",
      "Ekosistem",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch TYT History topics
app.get("/fetch-tyt-history", async (req, res) => {
  try {
    const header = "TYT Tarih";
    const topics = [
      "Tarih ve Zaman",
      "İnsanlığın İlk Dönemleri",
      "Ortaçağ’da Dünya",
      "İlk ve Orta Çağlarda Türk Dünyası",
      "İslam Medeniyetinin Doğuşu",
      "İlk Türk İslam Devletleri",
      "Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiyesi",
      "Beylikten Devlete Osmanlı Siyaseti(1300-1453)",
      "Dünya Gücü Osmanlı Devleti (1453-1600)",
      "Yeni Çağ Avrupa Tarihi",
      "Yakın Çağ Avrupa Tarihi",
      "Osmanlı Devletinde Arayış Yılları",
      "18. Yüzyılda Değişim ve Diplomasi",
      "En Uzun Yüzyıl",
      "Osmanlı Kültür ve Medeniyeti",
      "20. Yüzyılda Osmanlı Devleti",
      "I. Dünya Savaşı",
      "Mondros Ateşkesi, İşgaller ve Cemiyetler",
      "Kurtuluş Savaşına Hazırlık Dönemi",
      "I. TBMM Dönemi",
      "Kurtuluş Savaşı ve Antlaşmalar",
      "II. TBMM Dönemi ve Çok Partili Hayata Geçiş",
      "Türk İnkılabı",
      "Atatürk İlkeleri",
      "Atatürk Dönemi Türk Dış Politikası",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch TYT Geography topics
app.get("/fetch-tyt-geography", async (req, res) => {
  try {
    const header = "TYT Coğrafya";
    const topics = [
      "Doğa ve İnsan",
      "Dünya’nın Şekli ve Hareketleri",
      "Coğrafi Konum",
      "Harita Bilgisi",
      "Atmosfer ve Sıcaklık",
      "İklimler",
      "Basınç ve Rüzgarlar",
      "Nem, Yağış ve Buharlaşma",
      "İç Kuvvetler / Dış Kuvvetler",
      "Su – Toprak ve Bitkiler",
      "Nüfus",
      "Göç",
      "Yerleşme",
      "Türkiye’nin Yer Şekilleri",
      "Ekonomik Faaliyetler",
      "Bölgeler",
      "Uluslararası Ulaşım Hatları",
      "Çevre ve Toplum",
      "Doğal Afetler",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch TYT Philosophy topics
app.get("/fetch-tyt-philosophy", async (req, res) => {
  try {
    const header = "TYT Felsefe";
    const topics = [
      "Felsefenin Konusu",
      "Bilgi Felsefesi",
      "Varlık Felsefesi",
      "Din, Kültür ve Medniyet",
      "Ahlak Felsefesi",
      "Sanat Felsefesi",
      "Din Felsefesi",
      "Siyaset Felsefesi",
      "Bilim Felsefesi",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch TYT Religious Culture and Ethics topics
app.get("/fetch-tyt-religious-culture-ethics-topics", async (req, res) => {
  try {
    const header = "TYT Din Kültürü ve Ahlak Bilgisi";
    const topics = [
      "İnanç",
      "İbadet",
      "Ahlak ve Değerler",
      "Din, Kültür ve Medniyet",
      "Hz. Muhammed (S.A.V.)",
      "Vahiy ve Akıl",
      "Dünya ve Ahiret",
      "Kur’an’a göre Hz. Muhammed (S.A.V.)",
      "İnançla İlgili Meseleler",
      "Yahudilik ve Hristiyanlık",
      "İslam ve Bilim",
      "Anadolu’da İslam",
      "İslam Düşüncesinde Tasavvufi Yorumlar",
      "Güncel Dini Meseler",
      "Hint ve Çin Dinleri",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-literature", async (req, res) => {
  try {
    const header = "AYT Edebiyat";
    const topics = [
      "Anlam Bilgisi",
      "Dil Bilgisi",
      "Güzel Sanatlar ve Edebiyat",
      "Metinlerin Sınıflandırılması",
      "Şiir Bilgisi",
      "Edebi Sanatlar",
      "Türk Edebiyatı Dönemleri",
      "İslamiyet Öncesi Türk Edebiyatı ve Geçiş Dönemi",
      "Halk Edebiyatı",
      "Divan Edebiyatı",
      "Tanzimat Edebiyatı",
      "Servet-i Fünun Edebiyatı",
      "Fecr-i Ati Edebiyatı",
      "Milli Edebiyat",
      "Cumhuriyet Dönemi Edebiyatı",
      "Edebiyat Akımları",
      "Dünya Edebiyatı",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-mathematics", async (req, res) => {
  try {
    const header = "AYT Matematik";
    const topics = [
      "Temel Kavramlar",
      "Sayı Basamakları",
      "Bölme ve Bölünebilme",
      "EBOB - EKOK",
      "Rasyonel Sayılar",
      "Basit Eşitsizlikler",
      "Mutlak Değer",
      "Üslü Sayılar",
      "Köklü Sayılar",
      "Çarpanlara Ayırma",
      "Oran Orantı",
      "Denklem Çözme",
      "Problemler",
      "Kümeler",
      "Kartezyen Çarpım",
      "Mantık",
      "Fonksiyonlar",
      "Polinomlar",
      "2.Dereceden Denklemler",
      "Permütasyon ve Kombinasyon",
      "Binom ve Olasılık",
      "İstatistik",
      "Karmaşık Sayılar",
      "2.Dereceden Eşitsizlikler",
      "Parabol",
      "Trigonometri",
      "Logaritma",
      "Diziler",
      "Limit",
      "Türev",
      "İntegral",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-geometry", async (req, res) => {
  try {
    const header = "AYT Geometri";
    const topics = [
      "Temel Kavramlar",
      "Doğruda Açılar",
      "Üçgende Açılar",
      "Özel Üçgenler",
      "Dik Üçgen",
      "İkizkenar Üçgen",
      "Eşkenar Üçgen",
      "Açıortay",
      "Kenarortay",
      "Üçgende Alan",
      "Üçgende Benzerlik",
      "Açı Kenar Bağıntıları",
      "Çokgenler",
      "Özel Dörtgenler",
      "Dörtgenler",
      "Deltoid",
      "Paralelkenar",
      "Eşkenar Dörtgen",
      "Dikdörtgen",
      "Kare",
      "İkizkenar",
      "Yamuk",
      "Çember ve Daire",
      "Analitik Geometri",
      "Noktanın Analitiği",
      "Doğrunun Analitiği",
      "Dönüşüm Geometrisi",
      "Katı Cisimler (Uzay Geometri)",
      "Dikdörtgenler Prizması",
      "Küp",
      "Silindir",
      "Piramit",
      "Koni",
      "Küre",
      "Çemberin Analitiği",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-physics", async (req, res) => {
  try {
    const header = "AYT Fizik";
    const topics = [
      "Vektörler",
      "Kuvvet, Tork ve Denge",
      "Kütle Merkezi",
      "Basit Makineler",
      "Hareket",
      "Newton’un Hareket Yasaları",
      "İş, Güç ve Enerji II",
      "Atışlar",
      "İtme ve Momentum",
      "Elektrik Alan ve Potansiyel",
      "Paralel Levhalar ve Sığa",
      "Manyetik Alan ve Manyetik Kuvvet",
      "İndüksiyon, Alternatif Akım ve Transformatörler",
      "Çembersel Hareket",
      "Dönme, Yuvarlanma ve Açısal Momentum",
      "Kütle Çekim ve Kepler Yasaları",
      "Basit Harmonik Hareket",
      "Dalga Mekaniği ve Elektromanyetik Dalgalar",
      "Atom Modelleri",
      "Büyük Patlama ve Parçacık Fiziği",
      "Radyoaktivite",
      "Özel Görelilik",
      "Kara Cisim Işıması",
      "Fotoelektrik Olay ve Compton Olayı",
      "Modern Fiziğin Teknolojideki Uygulamalar",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-chemistry", async (req, res) => {
  try {
    const header = "AYT Kimya";
    const topics = [
      "Kimya Bilimi",
      "Atom ve Periyodik Sistem",
      "Kimyasal Türler Arası Etkileşimler",
      "Kimyasal Hesaplamalar",
      "Kimyanın Temel Kanunları",
      "Asit, Baz ve Tuz",
      "Maddenin Halleri",
      "Karışımlar",
      "Doğa ve Kimya",
      "Kimya Her Yerde",
      "Modern Atom Teorisi",
      "Gazlar",
      "Sıvı Çözeltiler",
      "Kimyasal Tepkimelerde Enerji",
      "Kimyasal Tepkimelerde Hız",
      "Kimyasal Tepkimelerde Denge",
      "Asit-Baz Dengesi",
      "Çözünürlük Dengesi",
      "Kimya ve Elektrik",
      "Organik Kimyaya Giriş",
      "Organik Kimya",
      "Enerji Kaynakları ve Bilimsel Gelişmeler",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-biology", async (req, res) => {
  try {
    const header = "AYT Biyoloji";
    const topics = [
      "Sinir Sistemi",
      "Endokrin Sistem ve Hormonlar",
      "Duyu Organları",
      "Destek ve Hareket Sistemi",
      "Sindirim Sistemi",
      "Dolaşım ve Bağışıklık Sistemi",
      "Solunum Sistemi",
      "Üriner Sistem (Boşaltım Sistemi)",
      "Üreme Sistemi ve Embriyonik Gelişim",
      "Komünite Ekolojisi",
      "Popülasyon Ekolojisi",
      "Genden Proteine",
      "Nükleik Asitler",
      "Genetik Şifre ve Protein Sentezi",
      "Canlılarda Enerji Dönüşümleri",
      "Canlılık ve Enerji",
      "Fotosentez",
      "Kemosentez",
      "Hücresel Solunum",
      "Bitki Biyolojisi",
      "Canlılar ve Çevre",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-history", async (req, res) => {
  try {
    const header = "AYT Tarih";
    const topics = [
      "Tarih ve Zaman",
      "İnsanlığın İlk Dönemleri",
      "Orta Çağ’da Dünya",
      "İlk ve Orta Çağlarda Türk Dünyası",
      "İslam Medeniyetinin Doğuşu",
      "Türklerin İslamiyet’i Kabulü ve İlk Türk İslam Devletleri",
      "Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiyesi",
      "Beylikten Devlete Osmanlı Siyaseti",
      "Devletleşme Sürecinde Savaşçılar ve Askerler",
      "Beylikten Devlete Osmanlı Medeniyeti",
      "Dünya Gücü Osmanlı",
      "Sultan ve Osmanlı Merkez Teşkilatı",
      "Klasik Çağda Osmanlı Toplum Düzeni",
      "Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti",
      "Değişim Çağında Avrupa ve Osmanlı",
      "Uluslararası İlişkilerde Denge Stratejisi (1774-1914)",
      "Devrimler Çağında Değişen Devlet-Toplum İlişkileri",
      "Sermaye ve Emek",
      "XIX. ve XX. Yüzyılda Değişen Gündelik Hayat",
      "XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya",
      "Milli Mücadele",
      "Atatürkçülük ve Türk İnkılabı",
      "İki Savaş Arasındaki Dönemde Türkiye ve Dünya",
      "II. Dünya Savaşı Sürecinde Türkiye ve Dünya",
      "II. Dünya Savaşı Sonrasında Türkiye ve Dünya",
      "Toplumsal Devrim Çağında Dünya ve Türkiye",
      "XXI. Yüzyılın Eşiğinde Türkiye ve Dünya",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-geography", async (req, res) => {
  try {
    const header = "AYT Coğrafya";
    const topics = [
      "Ekosistem",
      "Biyoçeşitlilik",
      "Biyomlar",
      "Ekosistemin Unsurları",
      "Enerji Akışı ve Madde Döngüsü",
      "Ekstrem Doğa Olayları",
      "Küresel İklim Değişimi",
      "Nüfus Politikaları",
      "Türkiye’de Nüfus ve Yerleşme",
      "Ekonomik Faaliyetler ve Doğal Kaynaklar",
      "Göç ve Şehirleşme",
      "Türkiye Ekonomisi",
      "Türkiye’nin Ekonomi Politikaları",
      "Türkiye Ekonomisinin Sektörel Dağılımı",
      "Türkiye’de Tarım",
      "Türkiye’de Hayvancılık",
      "Türkiye’de Madenler ve Enerji Kaynakları",
      "Türkiye’de Sanayi",
      "Türkiye’de Ulaşım",
      "Türkiye’de Ticaret ve Turizm",
      "Geçmişten Geleceğe Şehir ve Ekonomi",
      "Türkiye’nin İşlevsel Bölgeleri ve Kalkınma Projeleri",
      "Hizmet Sektörünün Ekonomideki Yeri",
      "Küresel Ticaret",
      "Bölgeler ve Ülkeler",
      "İlk Uygarlıklar",
      "Kültür Bölgeleri ve Türk Kültürü",
      "Sanayileşme Süreci: Almanya",
      "Tarım ve Ekonomi İlişkisi Fransa – Somali",
      "Ülkeler Arası Etkileşim",
      "Jeopolitik Konum",
      "Çatışma Bölgeleri",
      "Küresel ve Bölgesel Örgütler",
      "Çevre ve Toplum",
      "Çevre Sorunları ve Türleri",
      "Madenler ve Enerji Kaynaklarının Çevreye Etkisi",
      "Doğal Kaynakların Sürdürülebilir Kullanımı",
      "Ekolojik Ayak İzi",
      "Doğal Çevrenin Sınırlılığı",
      "Çevre Politikaları",
      "Çevresel Örgütler",
      "Çevre Anlaşmaları",
      "Doğal Afetler",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/fetch-ayt-philosophy", async (req, res) => {
  try {
    const header = "AYT Felsefe";
    const topics = [
      "Felsefe’nin Konusu",
      "Bilgi Felsefesi",
      "Varlık Felsefesi",
      "Ahlak Felsefesi",
      "Sanat Felsefesi",
      "Din Felsefesi",
      "Siyaset Felsefesi",
      "Bilim Felsefesi",
      "İlk Çağ Felsefesi",
      "MÖ 6. Yüzyıl – MS 2. Yüzyıl Felsefesi",
      "MS 2. Yüzyıl – MS 15. Yüzyıl Felsefesi",
      "15. Yüzyıl – 17. Yüzyıl Felsefesi",
      "18. Yüzyıl – 19. Yüzyıl Felsefesi",
      "20. Yüzyıl Felsefesi",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// AYT Din Kültürü ve Ahlak Bilgisi Dersi Konuları
app.get("/fetch-ayt-religious", async (req, res) => {
  try {
    const header = "AYT Din Kültürü ve Ahlak Bilgisi";
    const topics = [
      "Sinir Sistemi",
      "Endokrin Sistem ve Hormonlar",
      "Duyu Organları",
      "Destek ve Hareket Sistemi",
      "Sindirim Sistemi",
      "Dolaşım ve Bağışıklık Sistemi",
      "Solunum Sistemi",
      "Üriner Sistem (Boşaltım Sistemi)",
      "Üreme Sistemi ve Embriyonik Gelişim",
      "Komünite Ekolojisi",
      "Popülasyon Ekolojisi",
      "Genden Proteine",
      "Nükleik Asitler",
      "Genetik Şifre ve Protein Sentezi",
      "Canlılarda Enerji Dönüşümleri",
      "Canlılık ve Enerji",
      "Fotosentez",
      "Kemosentez",
      "Hücresel Solunum",
      "Bitki Biyolojisi",
      "Canlılar ve Çevre",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LGS Türkçe Konuları
app.get("/fetch-lgs-turkish", async (req, res) => {
  try {
    const header = "LGS Türkçe";
    const topics = [
      "DİL BİLGİSİ",
      "Fiilimsiler (İsim-Fiil, Sıfat-Fiil, Zarf-Fiil)",
      "Cümlenin Ögeleri",
      "Cümle Türleri",
      "İsim ve Fiil Cümlesi",
      "Kurallı ve Devrik Cümle",
      "Basit Cümle",
      "Birleşik Cümle",
      "Sıralı Cümle",
      "Bağlı Cümle",
      "SÖZCÜKTE ANLAM",
      "CÜMLEDE ANLAM",
      "Cümlede Anlam İlişkileri",
      "Cümle Yorumlama",
      "METİN TÜRLERİ – SÖZ SANATLARI",
      "Metin Türleri",
      "Fıkra",
      "Makale",
      "Deneme",
      "Roman",
      "Destan",
      "Haber",
      "Günlük",
      "Anı",
      "Hikâye",
      "Masal",
      "Fabl",
      "Röportaj",
      "Biyografi",
      "Otobiyografi",
      "Dilekçe",
      "Reklam",
      "Söz Sanatları",
      "Abartma",
      "Benzetme",
      "Kişileştirme",
      "Konuşturma",
      "Karşıtlık",
      "YAZIM BİLGİSİ",
      "Yazım (İmla) Kuralları",
      "Noktalama İşaretleri",
      "PARÇADA ANLAM",
      "Paragrafın Anlam Yönü",
      "Paragrafın Yapı Yönü",
      "Tablo ve Grafik İnceleme",
      "Görsel Yorumlama",
      "Sözel Mantık (Akıl Yürütme)",
      "CÜMLEDE ANLAM",
      "DİL BİLGİSİ",
      "Fiillerde Çatı",
      "Noktalama İşaretleri",
      "Yazım Kuralları",
      "ANLATIM BOZUKLUKLARI",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LGS Matematik Konuları
app.get("/fetch-lgs-mathematics", async (req, res) => {
  try {
    const header = "LGS Matematik";
    const topics = [
      "SAYILAR VE İŞLEMLER",
      "Çarpanlar ve Katlar",
      "Üslü İfadeler",
      "Kareköklü İfadeler",
      "VERİ İŞLEME",
      "Veri Analizi",
      "OLASILIK",
      "Basit Olayların Olma Olasılığı",
      "CEBİR",
      "Cebirsel İfadeler ve Özdeşlikler",
      "Cebir",
      "Doğrusal Denklemler",
      "Eşitsizlikler",
      "GEOMETRİ VE ÖLÇME",
      "Üçgenler",
      "Eşlik ve Benzerlik",
      "Geometrik Cisimler",
      "Dönüşüm Geometrisi",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LGS Fen Konuları
app.get("/fetch-lgs-science", async (req, res) => {
  try {
    const header = "LGS Fen";
    const topics = [
      "Mevsimler ve İklimler",
      "DNA ve Genetik Kod",
      "Basınç",
      "Madde ve Endüstri",
      "Periyodik Sistem",
      "Fiziksel ve Kimyasal Değişimler",
      "Asitler ve Bazlar",
      "Madde ve Endüstri – Devam",
      "Basit Makineler",
      "Canlılar ve Enerji İlişkileri",
      "Enerji Dönüşümleri ve Çevre Bilimi",
      "Elektrik Yükleri ve Elektrik Enerjisi",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LGS Din Kültürü Konuları
app.get("/fetch-lgs-religious-culture", async (req, res) => {
  try {
    const header = "LGS Din Kültürü";
    const topics = [
      "Kader İnancı",
      "Kader ve Kaza İnancı",
      "Kader ve Evrendeki Yasalar",
      "Allah Her Şeyi Bir Ölçüye Göre Yaratmıştır.",
      "İnsanın İradesi ve Kader",
      "Kaderle İlgili Kavramlar",
      "Bir Peygamber Tanıyorum: Hz. Musa (a.s.)",
      "Bir Ayet Tanıyorum: Ayet el-Kürsi ve Anlamı",
      "Zekât ve Sadaka",
      "İslam’ın Paylaşma ve Yardımlaşmaya Verdiği Önem",
      "Zekât ve Sadaka İbadeti",
      "Zekât ve Sadakanın Bireysel ve Toplumsal Faydaları",
      "Bir Peygamber Tanıyorum: Hz. Şuayb (a.s.)",
      "Bir Sure Tanıyorum: Maûn Suresi ve Anlamı",
      "Din ve Hayat",
      "Din, Birey ve Toplum",
      "Dinin Temel Gayesi",
      "Bir Peygamber Tanıyorum: Hz. Yusuf (a.s.)",
      "Bir Sure Tanıyorum: Asr Suresi ve Anlamı",
      "Hz. Muhammed ve Örnekliliği",
      "Hz. Muhammed’in Doğruluğu ve Güvenilir Kişiliği",
      "Hz. Muhammed’in Merhametli ve Affedici Oluşu",
      "Hz. Muhammed’in İstişareye Önem Vermesi",
      "Hz. Muhammed’in Davasındaki Cesaret ve Kararlılığı",
      "Hz. Muhammed’in Hakkı Gözetmedeki Hassasiyeti",
      "Hz. Muhammed’in İnsanlara Değer Vermesi",
      "Bir Sure Tanıyorum: Kureyş Suresi ve Anlamı",
      "Kur’an-ı Kerim ve Özellikleri",
      "İslam Dininin Temel Kaynakları",
      "Kur’an-ı Kerim’in Ana Konuları",
      "Kur’an-ı Kerim’in Temel Özellikleri",
      "Bir Peygamber Tanıyorum: Hz. Nuh (a.s.)",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LGS İnkılap Tarihi Konuları
app.get("/fetch-lgs-history", async (req, res) => {
  try {
    const header = "LGS İnkılap Tarihi";
    const topics = [
      "Bir Kahraman Doğuyor",
      "Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar",
      "Milli Bir Destan; Ya İstiklal Ya Ölüm",
      "Çağdaş Türkiye Yolunda Adımlar",
      "Demokratikleşme Çabaları",
      "Atatürkçülük",
      "Atatürk Dönemi Türk Dış Politikası ve Atatürk’ün Ölümü",
      "İkinci Dünya Savaşı Ve Sonrası",
    ];

    const formattedTopics = topics.map((topic) => `${header} - ${topic}`);

    res.json({ topics: formattedTopics });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// LGS İngilizce Konu Dağılımı
app.get("/fetch-lgs-english", async (req, res) => {
  try {
    const header = "LGS İngilizce";
    const topics = [
      "Friendship",
      "Teen Life",
      "In the Kitchen",
      "On the Phone",
      "The Internet",
      "Adventures",
      "Tourism",
      "Chores",
      "Science",
      "Natural Forces",
    ];

    const responseData = {
      header: header,
      topics: topics,
    };

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
