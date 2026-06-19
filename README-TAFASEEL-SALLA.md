# Tafaseel Decor Luxury Salla Theme

ثيم Twilight مخصص لمتجر تفاصيل الديكور، مبني فوق قالب سلة الرسمي Theme Raed مع طبقة هوية فاخرة للصفحة الرئيسية وبطاقات المنتجات.

## ما تم تخصيصه

- واجهة رئيسية سينمائية للمتجر مع صور تفاصيل الديكور.
- شريط تصنيفات سريع: الورد، تجريدي، خيول، ورق الحائط، لوحات حجم كبير.
- أقسام ثقة ومحتوى مبيعات عربي مناسب للمتجر.
- تحسين مظهر الهيدر وبطاقات المنتجات وأزرار الإضافة للسلة.
- Motion خفيف باستخدام `IntersectionObserver` واحترام `prefers-reduced-motion`.
- SEO للصفحة الرئيسية مع Open Graph و JSON-LD Store schema.
- إعداد داخل `twilight.json` باسم `tafaseel_hero_enabled` لتفعيل أو إيقاف الواجهة السينمائية.

## التشغيل المحلي

```bash
cd /Users/ali/Documents/tafaseel-decor-luxury-salla
pnpm install
pnpm production
```

## Preview على سلة

حسب توثيق سلة الرسمي، أوامر الثيم تحتاج تسجيل دخول Salla Partners وربط GitHub عبر PAT:

```bash
npx @salla.sa/cli login
npx @salla.sa/cli theme preview --with-editor --browser=chrome
```

## النشر

بعد تسجيل الدخول وربط GitHub وتشغيل المعاينة بنجاح:

```bash
npx @salla.sa/cli theme publish
```

لا تحفظ أي مفاتيح أو توكنات داخل ملفات الثيم.
