
### DuplicateDataFolder操作関数

---

```Igor
DuplicateDataFolder sourceDataFolderSpec, destDataFolderSpec
```

`DuplicateDataFolder` を使うと、あるデータフォルダ内のすべてのwaveやサブフォルダを新しいフォルダにコピーできます。

コピーされたwaveは元のプロパティ（倍精度やスケールなど）をそのまま引き継ぎます。

| **引数** | **意味** |
| --- | --- |
| `sourceDataFolderSpec` | コピー元のデータフォルダのパス |
| `destDataFolderSpec` | コピー先のデータフォルダのパス |

### **注意点**

---

- コピー先フォルダがすでに存在している場合、エラーになります。
- 適用先が適用元データフォルダ内に含まれているとエラーします。

### 使用例

---

```Igor
// データフォルダ “sourceFolder” を “destinationFolder” にコピー
DuplicateDataFolder root:sourceFolder, root:destinationFolder
```

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-1]<!--Waveの複製（Duplicateほか）-->
    </div>