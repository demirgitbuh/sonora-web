# Sonora Web

Sonora Sound Recorder için altı dilli tanıtım ve indirme sitesi. React + TypeScript + Vite; Vercel üzerinde yayımlanmaya hazır.

**Uygulama:** https://github.com/demirgitbuh/SonoraSoundRecorder

**Site kaynakları:** https://github.com/demirgitbuh/sonora-web

**Site adresi:** https://sonoravc.vercel.app

## Sayfalar

- `/`: ortalanmış tanıtım, kullanıcı logosu, dekoratif ses dalgası, yayımlanan özellikler, formatlar, yerel kullanım, SSS.
- `/download`: işletim sistemi önerisi, GitHub Releases kullanılabilirlik kontrolü ve platform kartları.
- `/help`: Windows/macOS/Linux kurulumu, ses izinleri, ilk kullanım, kısayollar ve yerel modeller.
- `/privacy`: site veri kullanımı ve Vercel Web Analytics açıklaması.

English, Türkçe, Deutsch, Français, 中文 ve Русский desteklenir. Dil ilk ziyarette tarayıcıdan belirlenir; desteklenmeyen dillerde İngilizce kullanılır. Dil ve tema tercihleri yerel depolamada saklanır. İlk tema sistemden alınır. Fontlar internet font servisinden değil siteyle birlikte sunulur. Çince için işletim sisteminin yerel Çince fontuna düşülür.

## Mevcut ürün durumu

14 Ekim 2026 tarihinde [Sonora Sound Recorder 0.1](https://github.com/demirgitbuh/SonoraSoundRecorder/releases/tag/0.1) yayını, varlık listesi ve `0.1` etiketindeki izin/model/güncelleme belgeleri incelendi. Altı dilde site içeriği bu yayına göre güncellendi.

- Windows 10/11 x64: Setup EXE ve Portable EXE.
- macOS 12+: Apple silicon arm64 ve Intel x64 DMG. Sistem sesi için macOS 13+ ve Ekran Kaydı izni gerekir.
- Linux x64: AppImage ve Debian/Ubuntu DEB.
- Yazıya çevirme: whisper.cpp GGML (`ggml-*.bin`), x64 işlemcilerde AVX2; otomatik model indirme yok.
- Sitedeki özellik anlatımları yayımlanan uygulamanın belgelerine dayanır. Bu çalışma, gerçek mikrofon ve işletim sistemi davranışlarını bağımsız olarak test ettiği iddiasında bulunmaz; uygulamanın `docs/TESTING.md` belgesi otomatik ve manuel doğrulama kapsamını ayırır.
- İndirme sayfası yalnızca GitHub'ın herkese açık **kararlı** en son sürümünü sorgular. Gerçek, sıfırdan büyük platform varlıkları yoksa indirme varmış gibi davranmaz.
- EXE, DMG, AppImage ve DEB varlıkları platform bazında kontrol edilir. Yalnızca dönen paketlerin biçim ve mimarileri kartlarda gösterilir. Paket seçimi için GitHub sürüm sayfasına gidilir; sitede sürüm numarası gösterilmez.
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

Depo Vercel projesine bağlıdır. `main` gönderimleri üretim yayını oluşturur. İlk kurulum veya yeni bir projeye taşıma için:

1. https://vercel.com/new adresini aç.
2. GitHub hesabını bağla ve **demirgitbuh/sonora-web** deposunu içe aktar.
3. Framework: **Vite**, Root Directory: depo kökü, Node.js: **24.x**.
4. `vercel.json` derleme komutunu ve çıktı dizinini tanımlar: `npm run typecheck && npm run build`, `dist`.
5. Proje adı olarak **sonoravc** kullan; alan adı kullanılabilirliğini Vercel'de kontrol et. **Deploy** seç. Sitedeki canonical ve sitemap adresleri `https://sonoravc.vercel.app` olarak ayarlanmıştır. Başka bir adres verilirse `src/config.ts`, `index.html`, `public/robots.txt` ve `public/sitemap.xml` içindeki adresleri güncelle.
6. Sonraki `main` gönderimleri bağlı Vercel projesinde otomatik yayın oluşturur.

`/download`, `/help` ve `/privacy` doğrudan açılış/yenilemeleri SPA yönlendirmeleriyle desteklenir. Güvenlik başlıkları, mikrofon/kamera kapatma ve içerik politikası yapılandırılmıştır.

## Vercel Web Analytics

`@vercel/analytics` paketinin resmî React bileşeni ortak yerleşimde bir kez yüklenir. React Router'ın `pathname` değeri `route` ve `path` olarak verildiğinden hem ilk sayfa hem site içi sayfa geçişleri sayılır. Dil/tema değişimi veya aynı sayfadaki bölüm bağlantıları yeni sayfa görüntülemesi üretmez.

Vercel panelinde **sonoravc → Analytics → Enable** seçeneğini etkinleştir, ardından gerekiyorsa yeniden deploy et. Hesap token'ı veya site kimliği kaynak koda eklenmez. Veri Vercel Analytics panelinde görüntülenir.

Analiz uç noktaları aynı origin altında çalışır; içerik güvenlik politikası bunlara izin verir. Gizlilik sayfası altı dilde Vercel'in toplu, çerezsiz ölçümünü açıklar. CI testleri analiz ağ isteklerini taklit eder; test ziyaretleri gerçek istatistikleri etkilemez. Dashboard'da gerçek verinin görünmesi, hesap sahibinin Analytics'i etkinleştirmesine ve gerçek ziyaretlere bağlıdır.

## Yapı

```text
src/
  components/   Ortak bileşenler, gezinme, tema ve analiz
  i18n/         Tipli altı dil sözlüğü ve dil algılama
  lib/          Sürüm doğrulama, platform algılama, güvenli depolama
  pages/        Ana sayfa, indirme, yardım ve gizlilik
  config.ts     Site, depo ve model bağlantıları
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
