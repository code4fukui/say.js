# say.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight, Promise-based text-to-speech library for the browser using the Web Speech API.

## Demo

Try it live: **https://code4fukui.github.io/say.js/**

## Features

-   **Promise-based:** Easily use `async/await` to manage speech flow.
-   **Simple API:** A single function to learn: `say(text, lang)`.
-   **Language Selection:** Specify the language for the voice (defaults to `ja-JP`).
-   **Zero Dependencies:** Just one ES module file.
-   **Lightweight:** The entire library is a minimal wrapper around the Web Speech API.

## Usage

Import the `say.js` module directly into your HTML file. No installation is required.

Here is a complete, runnable example:

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

    // Basic usage (defaults to Japanese)
    btn1.onclick = () => {
      say("こんにちは");
    };

    // Specify a language
    btn2.onclick = () => {
      say("hello", "en-US");
    };

    // Use with async/await
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

-   **`text`**: `string` (required) - The text you want to be spoken.
-   **`lang`**: `string` (optional, default: `"ja-JP"`) - The language and region code, such as `"en-US"` or `"ja-JP"`.
-   **Returns**: `Promise<SpeechSynthesisEvent>` which resolves when the speech is finished. Returns `null` if the browser doesn't support the Web Speech API.

## Requirements

This library requires a modern browser that supports the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) (`SpeechSynthesisUtterance`).

## License

MIT