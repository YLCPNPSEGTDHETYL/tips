### Make操作関数

---

```Igor
Make [flags] waveName [, waveName]…
```

`Make`の場合、/Dフラグを指定しないと倍精度にならないので注意！

| **代表的なフラグ** | **機能** |
| --- | --- |
| /O | 既存Waveを上書き |
| /D | 倍精度 |
| /N=n | nポイントのwaveを作成 |

その他のフラグ、より詳細な使い方はマニュアル参照。

- **例**
  ```Igor
  Make/N=300 xx // 300点、xxという名称のwaveが作成される
  Make/D/N=300 yy // 300点、yyという名称の倍精度waveが作成される
  ```

### Duplicate操作関数

---

あるwaveと同じポイント数の別のwaveを作りたいときはDuplicateも多用します。

もとのwaveが倍精度なら、複製したものも倍精度になるので、単に複製すればよい点が使いやすいです。

例えば、“wave1”という名前のwaveがあったとき、これと同じ点数の倍精度waveとして“wave2”を作りたいときは、次のように書きます。

```Igor
Duplicate wave1, wave2
```

Duplicateについては：[modal-1]

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-1]<!--Waveの複製（Duplicateほか）-->
    </div>