---
title: "MacでNotionのデスクトップアプリが開かないときの対処法"
date: "2022-11-11"
---

MacでNotionのデスクトップアプリが開かないときの対処方法をメモしておきます。

結論から言うと、Notionのデスクトップアプリが起動している状態で、上部メニュー > [Notion] > [アプリをリセットしてローカルデータを消去する] を押せばOKです。

![](https://i.gyazo.com/6a1ead3c4b41765c4d530ac4b2d8433f.png)

こちらの対処方法はNotionの公式ヘルプで紹介されています。

[Reset Notion](https://www.notion.so/help/reset-notion#desktop-apps)

問題が発生する状況はおおよそ次のようなものが予想されます。

- Notionデスクトップアプリ起動
- [Googleアカウントでログインする] クリック
- ブラウザにログインページが表示されたらログインする
- [リンクを開く] クリック
- Notionデスクトップアプリがローディング中となり、そのまま変化しない
- [リダイレクトされなかった場合は、ここをクリックしてください。] クリック
- Notionデスクトップアプリがローディング中となり、そのまま変化しない。ずっとグルグルしてる。

このような状況になったら冒頭の対処方法を試してみてください。

なお、以下の筆者の環境では問題が再現しませんでした。

## 環境

- チップ：Apple M1 Pro
- macOS：Ventura 13.0
- Notion 2.18.23.10.26.76

## 参考

[Reset Notion](https://www.notion.so/help/reset-notion)

[Notionのデスクトップアプリが開かないときの対処法](https://sakait-blog.web.app/posts/Notion/trouble-shooting-notion-desktop-redirect/)