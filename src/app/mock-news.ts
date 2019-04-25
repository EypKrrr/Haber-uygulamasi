import {News} from './news';

export const AllNews: News[] = [
    {
        id: 1,
        title: 'Azerbaycan\'ı karıştırdı! Michael Essien...',
        content: 'Kariyerinde Chelsea, Real Madrid ve Milan gibi dev kulüplerin formasını giyen Ganalı futbolcu Michael Essien,' +
         'yaklaşık 1 yıl boyunca kulüpsüz kaldıktan sonra geçtiğimiz haftalarda' +
         ' Azerbaycan 1. Ligi ekiplerinden Sabail\'e transfer olmuştu.' +
         ' Azeri ekibiyle 15 aylık bir kontrat imzalayan ve 300 bin euro kazanacak ' +
         'olan 36 yaşındaki futbolcunun maaşı, yeni takımında büyük bir krize sebebiyet verdi.' +
         ' Azerbaycan\'da yayım yapan "futbolinfo" adlı internet sitesinin haberine göre takımdaki ' +
         'diğer oyuncular, yıldız ismin kendilerinden en az 2-3 kat daha fazla kazanmasına isyan etti.' +
         ' Haberde sözleşmesi sezon sonunda bitecek olan futbolcuların Essien\'i örnek göstererek yeni ' +
         'kontrat için çok yüksek ücretler talep ettikleri ve bu durumun da yönetimi çok zor durumda bıraktığı yazıldı.' +
         ' Öte yandan Sabail kulübü yöneticilerinin ligdeki diğer kulüplere oranla çok daha düşük maaşlar' +
         ' ödemekle suçlandığı da ifade edildi.',
        type: 'Spor',
        publish_date: '05.04.2019',
        picture: 'http://10.3.4.65:2741/images/haber1.jpg',
        liked: 12,
        disliked: 21,
        views: 65,
        userliked: false,
        userdisliked: false,
        userviewed: false
    },
    {
        id: 2,
        title: 'Mersin’de yol çöktü, kamyon devrildi',
        content: 'Mersin’de toprak yüklü kamyonun geçişi sırasında yol çöktü.' +
        ' Devrilen kamyon gölete düşerken kamyon sürücüsü vatandaşlarca kurtarıldı.' +
        'Olay, Erdemli ilçesine bağlı Kösbucağı Mahallesi’nde meydana geldi.' +
        ' Edinilen bilgiye göre özel bir firmaya ait plakası bilinmeyen kamyon, kasasına toprak yükleyerek yola çıktı.' +
        'Kösbucağı Göleti kenarındaki stabilize yolda ilerleyen kamyon yolun çökmesi sonucu devrildi.' +
        ' Durumu fark eden vatandaşlar kamyon şoförünü kurtarmak için seferber oldu.' +
        ' Vatandaşların uğraşları sonucunda kamyon şoförü kurtarıldı.',
        type: 'Gündem',
        publish_date: '06.04.2019',
        picture: 'http://10.3.4.65:2741/images/haber2.jpg',
        liked: 3,
        disliked: 4,
        views: 2323,
        userliked: false,
        userdisliked: false,
        userviewed: false
    }
];
