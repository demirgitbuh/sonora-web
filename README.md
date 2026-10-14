# Sonora Web

Sonora Sound Recorder için altı dilli tanıtım ve indirme sitesi. React + TypeScript + Vite; Vercel üzerinde yayımlanmaya hazır.

**Uygulama:** https://github.com/demirgitbuh/SonoraSoundRecorder

**Site kaynakları:** https://github.com/demirgitbuh/sonora-web

## Sayfalar

- `/`: ortalanmış tanıtım, kullanıcı logosu, dekoratif ses dalgası, ürün hedefleri, formatlar, yerel kullanım, SSS.
- `/download`: işletim sistemi önerisi, GitHub Releases kullanılabilirlik kontrolü ve platform kartları.
- `/help`: Windows/macOS/Linux kurulumu, ses izinleri, ilk kullanım, kısayollar ve yerel modeller.
- `/privacy`: site veri kullanımı ve Statcounter tercihleri.

English, Türkçe, Deutsch, Français, 中文 ve Русский desteklenir. Dil ilk ziyarette tarayıcıdan belirlenir; desteklenmeyen dillerde İngilizce kullanılır. Dil ve tema tercihleri yerel depolamada saklanır. İlk tema sistemden alınır. Fontlar internet font servisinden değil siteyle birlikte sunulur. Çince için işletim sisteminin yerel Çince fontuna düşülür.

## Mevcut ürün durumu

Site hazırlanırken uygulama deposu GitHub üzerinden 404 yanıtı verdi. Kullanıcı depoyu daha sonra yayımlayacağını belirtti. Bu nedenle:

- Özellikler doğrulanmış çalışan bir sürüm gibi sunulmaz; ürün hedefi olarak açıkça etiketlenir.
- Kurulum rehberi yayın öncesi rehberdir.
- `src/config.ts` içindeki `FEATURES_VERIFIED` yalnızca sürüm gerçekten incelendikten sonra değiştirilmeli; rehber, SSS ve durum metinleri de birlikte güncellenmelidir.
- İndirme sayfası yalnızca GitHub'ın herkese açık **kararlı** en son sürümünü sorgular. Gerçek, sıfırdan büyük platform varlıkları yoksa indirme varmış gibi davranmaz.
- EXE, DMG, AppImage ve DEB varlıkları platform bazında kontrol edilir. Paket seçimi için doğrulanmış GitHub sürüm sayfasına gidilir; sitede sürüm numarası gösterilmez.
- Ağ hatası ve istek sınırı, henüz sürüm yayımlanmaması durumundan ayrılır; tekrar deneme düğmesi vardır.
- Windows taşınabilir dağıtımı EXE beklenir. İleride ZIP yayımlanırsa isimlendirmeye dayalı güvenilir bir paket tanımı eklenmelidir; her ZIP dosyası taşınabilir uygulama sayılamaz.

## GitHub üzerinden doğrulama

Yerel bilgisayarda üretim derlemesi, TypeScript kontrolü veya otomatik test çalıştırılması gerekmez. `.github/workflows/ci.yml`, `main` dalına gönderimde veya Actions → **Website checks** → **Run workflow** ile:

1. Node.js 24 kurar ve `npm ci` ile lockfile'a bağlı bağımlılıkları yükler.
2. TypeScript denetimini ve birim testlerini çalıştırır.
3. Üretim derlemesini alır.
4. Chromium, Firefox, WebKit ve mobil Chromium üzerinde Playwright kontrollerini yürütür.
5. Dil/tema kalıcılığı, 6 dilde taşma, gezinme, sürüm durumları, engellenmiş depolama ve axe erişilebilirlik kontrollerini yapar.
6. Ekran görüntülerini/raporları `browser-review`, statik çıktıları `sonora-website` artifact'ında saklar.

Tarayıcı testlerinde GitHub yanıtları kontrollü olarak taklit edilir; bu testlerin geçmesi masaüstü uygulamasının veya gerçek paketlerin doğrulandığı anlamına gelmez.

## Vercel'de yayınlama

Kullanıcı Vercel bağlantısını hesabından yapmayı seçti.

1. https://vercel.com/new adresini aç.
2. GitHub hesabını bağla ve **demirgitbuh/sonora-web** deposunu içe aktar.
3. Framework: **Vite**, Root Directory: depo kökü, Node.js: **24.x**.
4. `vercel.json` derleme komutunu ve çıktı dizinini tanımlar: `npm run typecheck && npm run build`, `dist`.
5. **Deploy** seç. Vercel'in verdiği `.vercel.app` adresi kullanılabilir; özel alan adı gerekmiyor.
6. Sonraki `main` gönderimleri bağlı Vercel projesinde otomatik yayın oluşturur.

`/download`, `/help` ve `/privacy` doğrudan açılış/yenilemeleri SPA yönlendirmeleriyle desteklenir. Güvenlik başlıkları, mikrofon/kamera kapatma ve içerik politikası yapılandırılmıştır.

## Statcounter

Statcounter kimlikleri kullanıcı tarafından henüz paylaşılmadı. Kimlikler boşken hiçbir Statcounter betiği yüklenmez.

Vercel → Project → Settings → Environment Variables alanına, Statcounter'ın **siteye eklenen kodundan** şunları gir:

| Değişken | Statcounter kodundaki alan |
| --- | --- |
| `VITE_STATCOUNTER_PROJECT` | `sc_project` |
| `VITE_STATCOUNTER_SECURITY` | `sc_security` |

Bunlar istemci tarafında görünmesi gereken site kimlikleridir; hesap parolası veya erişim token'ı eklenmez. Ardından **Redeploy** gerekir; Vite değişkenleri derleme sırasında işler.

Geçerli kimlikler varsa ziyaretçi tercih kartı gösterilir. Betik ancak izin verildikten sonra yüklenir. Reddetme ve tarayıcının Do Not Track tercihi dikkate alınır. Gizlilik sayfasından tercih değiştirilebilir; izin geri alınırken çalışan betiği durdurmak için sayfa yenilenir. Mevcut entegrasyon ilk tam sayfa ziyaretini sayar; SPA içi bağlantıları ayrı sayfa görüntülemesi olarak sayan bir API henüz eklenmedi.

## Yapı

```text
src/
  components/   Ortak bileşenler, gezinme, tema ve analiz
  i18n/         Tipli altı dil sözlüğü ve dil algılama
  lib/          Sürüm doğrulama, platform algılama, güvenli depolama
  pages/        Ana sayfa, indirme, yardım ve gizlilik
  config.ts     Depo bağlantıları ve ürün doğrulama durumu
  styles.css    Responsive açık/koyu tasarım
public/         Kullanıcının SVG logosu ve robots.txt
tests/          Birim, tarayıcı ve erişilebilirlik testleri
```

## Tasarım ve lisans

- Renkler: `#36454F` ve `#F8F8FF`.
- Logo: kullanıcı tarafından sağlanan `icon.svg`, aynı çizim korunmuştur.
- Inter: SIL Open Font License 1.1, `@fontsource/inter` paketiyle yerel sunulur.
- Lucide: ISC lisanslı ikonlar.
- Site kaynak kodu: **GPL-3.0-only**, tam metin `LICENSE` dosyasında.
- Ekran görüntüsü veya sahte kayıt arayüzü yerine dekoratif ses çizimleri kullanılır.
- Hareketi azaltma tercihi, klavye odağı ve mobil gezinme desteklenir.

Copyright © 2026 demirgitbuh. Bu yazılım garanti verilmeksizin sunulur; ayrıntılar için GPL-3.0 lisansına bakın.
