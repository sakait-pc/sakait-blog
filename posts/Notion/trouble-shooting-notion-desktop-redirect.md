---
title: "Notionのデスクトップアプリが開かないときの対処法"
date: "2022-06-01"
---

ここ最近Notionのデスクトップアプリがたまに開かない現象が発生したため、対処方法をメモしておきます。

結論から言うと、Notionのデスクトップアプリを一旦終了し、`C:\Users\<USERNAME>\AppData\Roaming` 内にある`Notion`フォルダを削除すればOKです。

Macの方は [MacでNotionのデスクトップアプリが開かないときの対処法](https://sakait-blog.web.app/posts/Notion/mac-troubleshooting-notion-desktop-redirect/) をご参照ください。

## 環境

- Windows 10 Pro 21H1(OSビルド:19043.1706)
- Notion 2.16.23.10.25.19

## 問題

次の手順でNotionデスクトップアプリを開こうとしましたが、うまくいきませんでした。

- Notionデスクトップアプリ起動
- [Googleアカウントでログインする] クリック
- ブラウザにログインページが表示されたらログインする
- [リンクを開く] クリック
- Notionデスクトップアプリがローディング中となり、そのまま変化しない
- [リダイレクトされなかった場合は、ここをクリックしてください。] クリック
- Notionデスクトップアプリがローディング中となり、そのまま変化しない。ずっとグルグルしてる。
- [または、ブラウザで続行します] クリック
- [Googleアカウントでログインする] クリック

これでブラウザではNotionと接続できましたが、デスクトップアプリのほうはいつまでもリダイレクトできませんでした。

## 対処法

冒頭で示した通り、Notionのデスクトップアプリを一旦終了し、`C:\Users\<USERNAME>\AppData\Roaming\Notion` フォルダを削除すればよいです。

`Notion`フォルダを削除したら、上記の手順でNotionデスクトップアプリを起動すれば、リダイレクトが一発で成功するようになるハズです。

ちなみにこの対処法は、Notionのお問い合わせチャットでマリリンさんという方に親切に教えていただきました。

ヘルプにありましたね。

[Reset Notion](https://www.notion.so/help/reset-notion)


以下のようなバッチファイルを作成しておくと、削除する場所を覚えておかなくて済むため、便利かもしれません。

`notion_reset.bat`

```bash
rd /s %userprofile%\AppData\Roaming\Notion
```

自己の責任のもとでご利用ください。

## 参考

[Reset Notion](https://www.notion.so/help/reset-notion)

### その他の記事

- [Notion（ノーション）アプリの地味だけど便利な使い方5選](https://sakait-blog.web.app/posts/Notion/notion-useful-tips/)

- [Windows10にWSLやWSL2をインストールする方法](https://sakait-blog.web.app/posts/WSL/how-to-install-wsl/)

- [初心者向けにNode.jsとは何か説明してみる](https://sakait-blog.web.app/posts/NodeJS/introduction-nodejs/)

- [CLIの導入とLinuxコマンドの練習](https://sakait-blog.web.app/posts/CLI/introduction-command-line-interface/)

- [NFC Port Softwareのインストールが環境変数の設定で失敗する場合の対処法](https://sakait-blog.web.app/posts/etc/troubleshooting-install-nfc-port-software/)
