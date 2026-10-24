<div align="center">

<img src="https://gothwadtech.github.io/profile-banner.svg" alt="Gothwad Tech — official profile banner" width="100%" />

<br />

### GOTHWAD TECH

Identity, web products and Android software, built in India.

[**Website**](https://gothwadtech.com) &nbsp;·&nbsp; [**Showcase**](https://gothwadtech.github.io/) &nbsp;·&nbsp; [**Developer docs**](https://docs.gothwadtech.com) &nbsp;·&nbsp; [**Public repositories**](https://github.com/GothwadTech?tab=repositories)

</div>

---

## What this organization builds

Three threads run through the work published here.

- **A shared identity layer.** [Gothwad Accounts](https://github.com/GothwadTech/accounts) is the single sign-on and OAuth 2.0 hub the ecosystem signs in with — one account, many products, several sessions side by side.
- **Edge-first web products.** Mail, Drive, Meet, Store and Remote Desktop are built on Cloudflare Workers, Pages and D1 rather than on long-running servers.
- **Native Android and TV software.** Kotlin applications where a remote control, a keyboard, or a file manager is a first-class input, alongside launchers and utilities for Android TV.

---

## Selected work

| Project | What it is | Built with |
| :-- | :-- | :-- |
| **[Gothwad Accounts](https://github.com/GothwadTech/accounts)** | Central identity for the ecosystem: multi-account SSO across Gothwad apps, plus an OAuth 2.0 hub other products integrate against — see the published [OAuth and PKCE guide](https://docs.gothwadtech.com/docs/oauth). | Cloudflare Workers · D1 · WebCrypto |
| **[PlusTube](https://github.com/GothwadTech/tubeapp)** | YouTube and YouTube Music client for Android with an on-device recommendation engine. GPL-3.0, distributed as [APK releases](https://github.com/GothwadTech/tubeapp/releases) with a nightly channel. | Kotlin · Jetpack Compose |
| **[Gothwad Browser](https://github.com/GothwadTech/browser)** | Chromium-WebView browser aimed at Android TV, tablets and phones, where remote, keyboard and mouse input all matter. Its README records a pre-release hardening pass and an open licence and attribution question. | Kotlin · Android WebView |
| **[Kiwi Store](https://github.com/GothwadTech/store)** | Android app store: public storefront, developer console, moderation admin and app landing page behind one edge API, with a [native client](https://github.com/GothwadTech/storeapp). | TypeScript · Workers · D1 |
| **[GrixChat](https://github.com/GothwadTech/grixchat)** | Messaging and private-calling application, shipped as a PWA and a Play Store TWA build. | React · TypeScript · PWA |
| **[Gothwad Mail](https://github.com/GothwadTech/mail)** | Webmail where the address comes from the Gothwad username; its Worker serves the REST API and also receives inbound mail. | React · Worker · D1 · Resend |
| **[Gothwad Drive](https://github.com/GothwadTech/drive)** | Cloud drive that streams file bytes between the browser and Telegram storage, with an encrypted session vault kept at the edge. MIT-licensed. | TypeScript · MTProto · Workers |
| **[Gothwad Meet](https://github.com/GothwadTech/meet)** | Video and audio conferencing over a WebRTC mesh, deployed as a static site with no backend of its own. | React · WebRTC · PeerJS |
| **[Gothwad Remote Desktop](https://github.com/GothwadTech/remotedesk)** | Browser-based remote desktop to a Windows host over WebRTC peer-to-peer, deliberately backed by no database. | TypeScript · WebRTC · Pages |

**Also public:** the [documentation portal](https://github.com/GothwadTech/docs) (12 product guides across 21 MDX pages), the sources for [this showcase](https://github.com/GothwadTech/gothwadtech.github.io) and the [official website](https://github.com/GothwadTech/website), an AGPL-3.0 [school management and learning platform](https://github.com/GothwadTech/education), and the Android TV set — [Launcher](https://github.com/GothwadTech/launcher) (Apache-2.0), [Manager](https://github.com/GothwadTech/manager) (file manager) and [Computer](https://github.com/GothwadTech/computer) (TV and desktop launcher).

---

## Before you rely on anything here

> These projects sit at very different stages. Each repository's own README and docs are the authoritative description of what it does today, what is still being built, and which licence applies — some are mid-hardening or pre-release, and licences differ by repository (MIT, Apache-2.0, GPL-3.0, AGPL-3.0, or none stated). Forked upstream projects such as Cromite and Telegram Web A keep their upstream licences. A public repository or product URL is not a claim of production availability, support, or fitness for a particular use.

<sub>Gothwad Tech Private Limited · India · [Website](https://gothwadtech.com) · [Docs](https://docs.gothwadtech.com) · [Repositories](https://github.com/GothwadTech?tab=repositories)</sub>
