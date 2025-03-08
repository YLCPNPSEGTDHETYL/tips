# https://ylcpnpsegtdhetyl.github.io/tips/


以下自分用メモ

## 画像

```md
![alt](1.png "max-width=900px alt")
```

## aside

```html
<aside class="">
  <div>
  text
  </div>
</aside>
```

```html
<aside class="warning">
  <div>
  text
  </div>
</aside>
```

```html
<aside class="bulb">
  <div>
  text
  </div>
</aside>
```

```html
<aside class="star">
  <div>
  text
  </div>
</aside>
```


## detail

```html
{::nomarkdown}
<details  class= "details" markdown="1">
    <summary class="summary">
    <span class="summary-inner">
    title
    <img class="ic ic-summary" src="{{ '/assets/icon/chevron-down.svg' | relative_url }}" alt="summary" />
    </span>
    </summary>
    <div class="details-content">
    <div class="details-content-inner">
{:/nomarkdown}

md text

{::nomarkdown}
  </div>
  </div>
</details>
{:/nomarkdown}
```

## ボタン風

```html
<span class="wrap-btn-style">➡追加</span>
```


## リンク

```html
<span class="inlink">[text](#header-xxx)</span>
```

```html
<span class="familylink">[text](link.md)</span>
```

```html
<span class="exlink">[text](url)</span>
```


