---
title: 'CLIの導入とLinuxコマンドの練習'
date: '2021-06-19'
---

今回は、コマンドライン・インターフェイス(CLI)とLinuxコマンドについて簡単に紹介します。イメージとしては、映画などで黒い画面に向かって凄腕エンジニアがｶﾀｶﾀ打ってるあの感じです。使う機会もあると思うので、参考にしてみてください。

## コマンド操作とは

コマンド操作とは、簡単に言うと、キーボードからの文字入力でコンピュータに命令を出す操作のことです。

黒い画面のようなツールは、総称してCommand Line Interface(CLI)と呼ばれています。WindowsならコマンドプロンプトやPowerShell、MacならターミナルがCLIとして標準で付属しています。

分野にもよりますが、コマンド操作を使うこともあると思うので、覚えておくことをオススメします。例えばWebサイトやWordPressサイトを公開する際に、Linuxサーバーでフォルダやファイルの配置を確認したり、Node.jsとnpm、Git管理を用いた開発において、それぞれに固有のコマンドを使用したりします。

## CLIの準備

Macならターミナルを起動すれば準備OKです。

WindowsでLinuxコマンドを試す方法として、今回はGit for Windowsを紹介します。Gitはファイルのバージョン管理システムで、GitBashを介して操作できます。このGitBashというツールでLinuxコマンドが実行できます。

インストール方法は基本的に以下の記事に沿って進めればよいでしょう。

[Gitインストール手順＜Windows向け＞](https://sukkiri.jp/technologies/devtools/git/git_win.html)

インストール途中の選択オプションの詳細については、以下の記事が参考になります。Git操作やGitHubなどは省略しても大丈夫です。

[いまさらGit for Windowsのインストール、GitHubに接続してみた。](https://qiita.com/manabu-watanabe/items/ecf1b434baf305adaa00)

インストールが完了したら、どこか適当な場所に練習用のフォルダを作成しておきましょう。フォルダ名は`test`としておきます。

## プロンプト記号について

ターミナルやGitBashを起動すると、「$」記号に気付くと思います。これを「プロンプト」と呼び、「ここから入力してください」という意味になります。

プロンプトには他にも「>」「#」など、環境やツール、権限などによっていくつかの記号が用いられます。

技術記事でこれらの記号とコマンドを見つけたら、CLIでの操作と読み取ることができます（プロンプトが省略されていることもあります）。また、プロンプト自体は入力しない点も覚えておきましょう。

## Linuxコマンドを練習してみよう

実際に操作するとすぐ覚えるので、ぜひ一緒に手を動かしてみましょう。

### pwd

pwdはカレントディレクトリを表示します。カレントディレクトリとは、現在、操作対象になっているフォルダのことです。自分がどこにいるのか、どこを操作しようとしているのか確認するときによく使います。

CLIで次のように`pwd`と入力してEnterキーを押します。$は入力しません。

```$ pwd```

結果は作業環境によって変わります。画像ではカレントディレクトリがWindowsの「C:\ユーザー」のため、`/c/users`と表示されています。

![pwd](https://gyazo.com/21ac046e6aa3415f767f49f7e2231ef7.png)

### ls

lsはカレントディレクトリ内に存在するフォルダやファイルを表示します。これも状況を確認するために使えます。

```$ ls```

![ls](https://gyazo.com/d2dea026aac816c8d51e83002a34cfcd.png)

※All Users, Default User, desktop.iniはOSの大切なフォルダやファイルで、通常は表示されていません。無闇に操作しないようにしましょう。

### cd

cdはカレントディレクトリを切り替えて、移動することができるコマンドです。

cd *フォルダ名*

例えばさきほどのOwner（ご自身のPCの名前）に移動したいなら、以下のようなコマンドになります。

```$ cd owner```

![cd](https://gyazo.com/1c1e051f126f5ab99f90589768a0154b.png)

#### ひとつ上に戻る

cdで一階層上に戻ることもできます。ドットを2つ指定します。

```$ cd ..```

![cdで1つ戻る](https://gyazo.com/bd0393cc83ce1ff12f3b1502b4bf63e8.png)

再びOwnerに移動後、`cd ../..`とすれば2つ上まで戻ることができます。

![cdで2つ戻る](https://gyazo.com/f66548193918c55e20d0b6cbc931e134.png)

#### ドライブを切り替える

Dドライブに切り替えたいときは、以下のようにします。

```$ cd /d```

![ドライブを切り替える](https://gyazo.com/597ead9661489ace546c80a45f67f4c1.png)

### 練習用フォルダtestに移動する

ここまで紹介したpwd, ls, cdを使えば、testフォルダまで移動することができるはずです。

※これ以降の操作では、ファイルの削除なども紹介します。大切なファイルを誤って削除しないためにも、練習用フォルダまでカレントディレクトリを切り替えておきましょう。

### mkdir

mkdirはフォルダを作成するコマンドです。testフォルダ内にsampleフォルダを作成してみましょう。

mkdir *フォルダ名*

```$ mkdir sample```

![mkdir](https://gyazo.com/3139793fb8aa7c99a6cfa0205c1e1c27.png)

### touch

touchはファイルを作成するコマンドです。testフォルダ内にtext.txtファイルを作成してみましょう。

touch *ファイル名*

```$ touch text.txt```

![touch](https://gyazo.com/3ab071938270f420811b15878a3730a6.png)

### rm

rmはファイルやフォルダを削除するコマンドです。text.txtファイルを削除してみましょう。

※名前を間違えないように注意！

rm *ファイル名*

```$ rm text.txt```

![rm](https://gyazo.com/c52bd4ee8db86507c76962c91a5862f0.png)

フォルダを削除するときは、`-r`オプションを付けます。

rm -r *フォルダ名*

```$ rm -r sample```

![rm -r](https://gyazo.com/8bb369a3f77375884cb48554e2c0c843.png)

## まとめ

今回はCLIとLinuxコマンドについて簡単に紹介しました。Macであればターミナル、WindowsであればGitBashを使うとLinuxコマンドが使えます。基礎的な操作として、pwd, ls, cd, mkdir, touch, rmなどがあります。

他にどんなコマンドやオプションがあるか、「linux コマンド 基本」「linux コマンド rm オプション」などで調べてみましょう。

### その他の記事

- [Windows10にWSLやWSL2をインストールする方法](https://sakait-blog.web.app/posts/WSL/how-to-install-wsl/)

- [初心者向けにNode.jsとは何か説明してみる](https://sakait-blog.web.app/posts/NodeJS/introduction-nodejs/)

- [Notionのデスクトップアプリが開かないときの対処法](https://sakait-blog.web.app/posts/Notion/trouble-shooting-notion-desktop-redirect/)

- [MacでNotionのデスクトップアプリが開かないときの対処法](https://sakait-blog.web.app/posts/Notion/mac-troubleshooting-notion-desktop-redirect/)

- [NFC Port Softwareのインストールが環境変数の設定で失敗する場合の対処法](https://sakait-blog.web.app/posts/etc/troubleshooting-install-nfc-port-software/)
