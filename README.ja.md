# say.js

Web Speech APIを使用した、軽量でPromiseベースのブラウザ用音声合成ライブラリです。

## デモ

ブラウザで試す: **https://code4fukui.github.io/say.js/**

## 機能

-   **Promiseベース:** `async/await` を使って音声再生のフローを簡単に管理できます。
-   **シンプルなAPI:** 覚える関数は `say(text, lang)` の1つだけです。
-   **言語選択:** 読み上げ言語を指定できます（デフォルトは `ja-JP`）。
-   **依存関係ゼロ:** 単一のESモジュールファイルのみで動作します。
-   **軽量:** ライブラリ全体がWeb Speech APIの最小限のラッパーになっています。

## 使い方

HTMLファイルに直接 `say.js` モジュールをインポートして使用します。インストールは不要です。

以下は、そのまま実行できる完全な例です:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>say.js Demo</title>
</head>
<body>

  <button id="btn1">こんにちは</button>
  <button id="btn2">Hello</button>
  <button id="btn3">This library supports Promises</button>

  <script type="module">
    import { say } from "https://code4fukui.github.io/say.js/say.js";

    // 基本的な使用法（デフォルトは日本語）
    btn1.onclick = () => {
      say("こんにちは");
    };

    // 言語を指定
    btn2.onclick = () => {
      say("hello", "en-US");
    };

    // async/await と組み合わせて使用
    btn3.onclick = async () => {
      btn3.disabled = true;
      await say(btn3.textContent, "en-US");
      btn3.disabled = false;
    };
  </script>

</body>
</html>
```

## API

### `say(text, [lang])`

-   **`text`**: `string`（必須） - 読み上げたいテキスト。
-   **`lang`**: `string`（任意、デフォルト: `"ja-JP"`） - `"en-US"` や `"ja-JP"` などの言語・地域コード。
-   **戻り値**: 読み上げが完了した際に解決（resolve）される `Promise<SpeechSynthesisEvent>`。ブラウザがWeb Speech APIをサポートしていない場合は `null` を返します。

## 必要条件

このライブラリを使用するには、[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)（`SpeechSynthesisUtterance`）をサポートするモダンブラウザが必要です。

## ライセンス

MIT
