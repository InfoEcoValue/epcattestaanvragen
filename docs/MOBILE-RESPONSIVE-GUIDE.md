# Mobile Responsiveness Guide — Belgium Market

Dit document bevat richtlijnen voor mobile responsiveness, gebaseerd op de meest gebruikte toestellen in Belgie.

## Top 10 Toestellen Belgie (2025/2026)

Belgie heeft ~46% Apple, ~34% Samsung, ~6% Xiaomi marktaandeel.

| # | Toestel | Viewport (px) | Scherm |
|---|---------|---------------|--------|
| 1 | iPhone 15/16 | 390 x 844 | 6.1" |
| 2 | iPhone 15/16 Pro Max | 430 x 932 | 6.7" |
| 3 | iPhone 15/16 Pro | 393 x 852 | 6.1" |
| 4 | iPhone SE (3e gen) | 375 x 667 | 4.7" |
| 5 | Samsung Galaxy S24 | 360 x 780 | 6.2" |
| 6 | Samsung Galaxy S24 Ultra | 384 x 824 | 6.8" |
| 7 | Samsung Galaxy A55 | 360 x 800 | 6.6" |
| 8 | Samsung Galaxy A15 | 360 x 800 | 6.5" |
| 9 | Xiaomi Redmi Note 13 | 393 x 873 | 6.67" |
| 10 | Google Pixel 8 | 412 x 915 | 6.2" |

## Kritieke Viewport Breedtes

```
320px  — absolute minimum (oudere toestellen)
360px  — Samsung budget/mid-range (Galaxy A-serie)
375px  — iPhone SE
384px  — Samsung Ultra modellen
390px  — iPhone 15/16 standaard
393px  — iPhone Pro / Xiaomi
412px  — Pixel / OnePlus
430px  — iPhone Pro Max
```

**Prioriteit**: 360px–430px moet foutloos werken. Dit dekt 95%+ van het mobiele verkeer in Belgie.

## Tailwind CSS Breakpoints

Het project gebruikt de standaard Tailwind breakpoints:

```
sm:  640px   — grote telefoons in landscape / kleine tablets
md:  768px   — tablets
lg:  1024px  — kleine laptops
xl:  1280px  — desktops
2xl: 1536px  — grote schermen
```

**Mobile-first**: schrijf altijd eerst de mobile stijl (geen prefix), gebruik `sm:` en `md:` voor grotere schermen.

## Checklist per Component

### Layout
- [ ] Geen vaste breedtes (`w-[500px]`) zonder responsive alternatief
- [ ] `flex-wrap` op containers met meerdere items
- [ ] `w-full sm:w-fit` voor tab-bars en navigatie
- [ ] `overflow-x-auto` op tabellen en brede content
- [ ] Padding responsief: `p-2 sm:p-4` of `p-3 sm:p-6`
- [ ] Gap responsief: `gap-1.5 sm:gap-2` of `gap-2 sm:gap-3`

### Tekst
- [ ] Tekst schaalt: `text-xs sm:text-sm` of `text-sm sm:text-base`
- [ ] Lange teksten: `truncate` of `line-clamp-2` waar nodig
- [ ] Geen `whitespace-nowrap` zonder `truncate` fallback
- [ ] Labels in min. `text-[10px]` op mobile (leesbaar op 360px)

### Touch Targets
- [ ] Klikbare elementen minimaal 44x44px (Apple HIG)
- [ ] Buttons: minimaal `py-2 px-3` voor voldoende raakvlak
- [ ] Voldoende ruimte tussen klikbare elementen (`gap-2` minimum)

### Modals / Dialogs
- [ ] `max-h-[85vh] overflow-y-auto` op dialogen
- [ ] Content past binnen 360px breedte
- [ ] Geen horizontale scroll in modals
- [ ] Gebruik NOOIT `overflow-x-hidden` op de `DialogContent` wrapper — dit clipt de absolute-positioned X-knop. Plaats `overflow-x-hidden` op de inner content `<div>` in plaats daarvan.

### Grids
- [ ] Kalender grids: `grid-cols-[32px_repeat(7,1fr)] sm:grid-cols-[40px_repeat(7,1fr)]`
- [ ] Summary cards: `gap-2 sm:gap-3`, kleiner tekst op mobile
- [ ] Form grids: `grid-cols-1 sm:grid-cols-2` waar nodig

### Formulieren
- [ ] Inputs vullen volle breedte: `w-full`
- [ ] Select dropdowns leesbaar op 360px
- [ ] Date/time pickers responsief

## Test Procedure

### Minimale Test Matrix

Test altijd op deze 4 viewports (dekt alle kritieke breedtes):

| Viewport | Vertegenwoordigt |
|----------|-----------------|
| 360px | Samsung Galaxy A-serie (budget) |
| 390px | iPhone 15/16 (mainstream) |
| 430px | iPhone Pro Max (groot) |
| 768px | iPad / tablet |

### Chrome DevTools Sneltest

1. Open Chrome DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test op 360px, 390px, 430px breedte
4. Controleer:
   - Geen horizontale scroll op de pagina
   - Tekst is leesbaar (niet afgesneden)
   - Buttons zijn aanraakbaar (44px+)
   - Modals passen op scherm
   - Tab-bars wrappen correct

### Pagina's om te Testen

| Pagina | Route | Focus |
|--------|-------|-------|
| Homepage | `/` | Hero form, postcode zoeker |
| Booking form | `/customform` | Multi-step form, datum/tijd pickers |
| Expert dashboard | `/expert/dashboard` | Tabs, kalender, opdrachten |
| Admin dashboard | `/admin/dashboard` | Tabel, kalender, expert lijst |
| Admin expert detail | `/admin/experts/[id]` | 4 tabs, kalenders, profiel |

## Veelgemaakte Fouten

| Fout | Oplossing |
|------|-----------|
| `w-fit` op tab-bar | `w-full sm:w-fit` + `flex-wrap` |
| `min-w-[600px]` op tabel | Wrap in `overflow-x-auto` |
| `whitespace-nowrap` op titels | Gebruik `truncate` |
| Vaste `p-4` padding | `p-2 sm:p-4` |
| `grid-cols-3` zonder scaling | Kleinere tekst/padding op mobile |
| Buttons `px-4 py-2` altijd | `px-3 py-1.5 sm:px-4 sm:py-2` |
| `overflow-x-hidden` op DialogContent | Zet het op de inner content div, niet de wrapper |
| `w-[340px]` vaste breedte | `w-full sm:w-[340px] max-w-full` |
| Touch targets `size-6` / `h-6` | Minimaal `size-8` / `h-8` (32px) |

## Bronnen

- [StatCounter Mobile Screen Resolution Belgium](https://gs.statcounter.com/screen-resolution-stats/mobile/belgium)
- [StatCounter Mobile Vendor Market Share Belgium](https://gs.statcounter.com/vendor-market-share/mobile/belgium)
- [BrowserStack Common Screen Resolutions 2026](https://www.browserstack.com/guide/common-screen-resolutions)
- [Statista Belgium Mobile Phone Brands](https://www.statista.com/statistics/1059178/mobile-phone-brands-used-in-belgium/)
