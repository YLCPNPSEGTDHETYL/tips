<!--26-->
<!--微分記号-->

### LaTeX標準機能のみ
---

- **出力例**
    | **記法**                                  | **表現例**                                      |
    |---------------------------------------|---------------------------------------------|
    | `\frac{\mathrm{d}y}{\mathrm{d}x}`     | $$ \frac{\mathrm{d}y}{\mathrm{d}x} $$ |
    | `\frac{\mathrm{d}^2 y}{\mathrm{d}x^2}`| $$ \frac{\mathrm{d}^2 y}{\mathrm{d}x^2} $$ |
    | `\frac{\partial y}{\partial x}`       | $$ \frac{\partial y}{\partial x} $$ |
    | `f'(x)`                               | $$ f'(x) $$ |
    | `f^{\prime}(x)`                       | $$ f^{\prime}(x) $$ |
    | `f^{\prime\prime\prime}(x)`           | $$ f^{\prime\prime\prime}(x) $$ |
    | `f^{(n)}(x)`                          | $$ f^{(n)}(x) $$ |
    | `\dot{a}`                             | $$ \dot{a} $$ |
    | `\ddot{a}`                            | $$ \ddot{a} $$ |
    | `\dddot{a}`                           | <img  style="width: auto;height: 13px;margin: 1em auto;display: flex;" src="./diff/dddot.svg" alt="dddot"> |
    | `\ddddot{a}`                          | <img  style="width: auto;height: 13px;margin: 1em auto;display: flex;" src="./diff/ddddot.svg" alt="ddddot"> |
    | `\nabla`                          | $$\nabla$$ |
    | `\bm{\nabla}`<br>※\usepackage{bm} が必要| $$\bm{\nabla}$$ |
    | `\vec{\nabla}`                          | $$\vec{\nabla}$$ |
    | `\bm{\vec{\nabla}}`<br>※\usepackage{bm} が必要| $$\bm{\vec{\nabla}}$$ |


### **physicsパッケージを使った書き方**
---

physicsパッケージはデフォルトで`d`がローマン体になる。

イタリックにしたい場合は、プリアンブルで読み込むときに以下のようにする。

```latex
    \usepackage[italicdiff]{physics}
```

さらに、オプションに`arrowdel`を加えると、$\bm{\vec{\nabla}}$のような表現もできる。


- **微分／偏微分**

    | **記法** | **表現例**  |
    | --- | --- | 
    | `\dv*{x}` | $$\mathrm{d}/\mathrm{d}x$$ |
    | `\dv*{f}{x}` | $$\mathrm{d}f/\mathrm{d}x$$ |
    | `\dv{x}` | $$\frac{\mathrm{d}}{\mathrm{d}x}$$ |
    | `\dv{f}{x}` | $$\frac{\mathrm{d}f}{\mathrm{d}x}$$ |
    | `\dv[n]{f}{x}` | $$\frac{\mathrm{d}^nf}{\mathrm{d}x^n}$$ |
    | `\dv{x}(...)` | $$\frac{\mathrm{d}}{\mathrm{d}x}\left(\fbox{\phantom{O}}\right)$$ |
    | `\pdv*{x}` | $$\partial/\partial x$$ |
    | `\pdv*{f}{x}` | $$\partial f/\partial x$$ |
    | `\pdv{x}` | $$\frac{\partial}{\partial x}$$ |
    | `\pdv{f}{x}` | $$\frac{\partial f}{\partial x}$$ |
    | `\pdv[n]{f}{x}` | $$\frac{\partial^n f}{\partial x^n}$$ |
    | `\pdv{f}{x}{y}` | $$	\frac{\partial^2 f}{\partial x\partial y}$$ |
    | `\pdv{x}(...)` | $$\frac{\partial}{\partial x}\left(\fbox{\phantom{O}}\right)$$ |
    | `\grad` | $$\bm{\nabla}$$ |
    | `\laplacian` | $$\nabla^2$$ |

- **汎関数**

    | **記法** | **表現例**  |
    | --- | --- | 
    | `\var{f[g(x)]}` | $$\delta F[g(x)]$$ | 
    | `\var(E-TS)` | $$\delta (E-TS)$$ | 
    | `\fdv*{g}` | $$\delta/\delta g$$ | 
    | `\fdv*{F}{g}` | $$\delta F/\delta g$$ | 
    | `\fdv{g}` | $$\frac{\delta}{\delta g}$$ | 
    | `\fdv{F}{g}` | $$\frac{\delta F}{\delta g}$$ | 
    | `\fdv{V}(E-TS)` | $$\frac{\delta}{\delta V} (E-TS)$$ | 


---

- **関連リンク**

    <div class="related-link-wrapper">
        [modal-25]<!--積分記号-->
    </div>
