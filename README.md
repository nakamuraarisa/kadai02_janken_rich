# ①課題番号-プロダクト名

3-UMBGM search

## ②課題内容（どんな作品か）

- 「梅棒」というダンスグループの公演で使用された楽曲を、アーティスト名から検索できるLINE　botです。
- アーティスト名を送信すると、その曲が使用された公演名・何曲目か・楽曲名がbotから返信されます。
- ダンスオタクの妹から依頼されて作りました。妹が推している「梅棒」というダンスグループは、J-POPの曲を使ってストーリー仕立てのダンスをするグループなのですが、街で流れる曲を耳にしたときに「この曲、どの公演の何曲目だったっけ…?!」と悩むことがよくあるそうです。これまでは家でパンフレットを取り出して探していたそうですが、アーティスト名でスマホ検索できると嬉しいとのことで、今回LINEbotを作りました。

## ③DEMO

- LINE ID：@276pbnnb
- https://liff.line.me/1645278921-kWRPP32q/?accountId=276pbnnb

## ④作ったアプリケーション用のIDまたはPasswordがある場合

なし

## ⑤工夫した点・こだわった点

- LINE側の仕様で、メッセージ（吹き出し）を5つまでしか一度に返信できなかったため、それに合わせたデータ作りをしました。

## ⑥難しかった点・次回トライしたいこと(又は機能)

- 今回のデータは2行のみで、単純に「送信語句がA行のデータに一致したら、B行のデータを返信する」というbotです。
- 複数行のデータを扱うにはどうしたらいいか今は見当もつかないので、今後挑戦したいです。

## ⑦次回ミニ講義で聞きたいこと

- わかりやすいバージョン管理の方法を知りたいです。コードの修正をするたび、うまく動いていた部分が動かなくなって元に戻したり、どこを直したか・どれが最新版かわからなくなってしまったりと、自分の作ったバージョンを整理しておくのに苦労しました。

## ⑧フリー項目（感想、シェアしたいこと等なんでも）

- Google Apps Scriptを初めて使ったので、検索しまくりながら手探りで作りました。全てが難しく、2週間検索してコピペしてはデプロイして試し…の連続でした。何とかやりたいことがギリギリ実現できてホッとしています。
- [参考記事]
  - 1. 【60分で成果物】Google Apps ScriptでLINE BOTを作ろう！　https://add-luck18.com/gas-line-bot/
  - 2. GASのコードをGitHubで管理する https://sayjoyblog.com/gas_github_connection/
