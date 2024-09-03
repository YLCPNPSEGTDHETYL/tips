# 行列(数式)

タグ: package, 数式
追加説明: amsmathパッケージ推奨

### (推奨) amsmath パッケージを使う

---

- **入力**
    
    ```latex
    %丸かっこの場合 
    \begin{align*}
    	\begin{pmatrix}
        a_{11} & \cdots & a_{1i} & \cdots & a_{1n}\\
        \vdots & \ddots &        &        & \vdots \\
        a_{i1} &        & a_{ii} &        & a_{in} \\
        \vdots &        &        & \ddots & \vdots \\
        a_{n1} & \cdots & a_{ni} & \cdots & a_{nn}
    	\end{pmatrix} 
    \end{align*}
    ```
    
- **出力**
    
    ![Untitled](%E8%A1%8C%E5%88%97(%E6%95%B0%E5%BC%8F)%20a41b914eeabb49d0abce7ea5d93b1f5d/Untitled.png)
    
- **括弧の種類一覧**
    
    
    | **環境** | **概要** | **見た目** |
    | --- | --- | --- |
    | matrix | かっこなし |  |
    | pmatrix | 丸かっこ、parentheses | ( ) |
    | bmatrix | 角かっこ、braket | [ ] |
    | vmatrix | 縦棒(行列式)、Vertical bar | | | |
    | Vmatrix | 2本の垂直棒 | || || |

### (非推奨)LaTeX標準機能のみ

---

- **入力**
    
    ```latex
    \begin{align*}
    \left(
    \begin{array}{ccccc}
    a_{11} & \cdots & a_{1i} & \cdots & a_{1n}\\
    \vdots & \ddots &        &        & \vdots \\
    a_{i1} &        & a_{ii} &        & a_{in} \\
    \vdots &        &        & \ddots & \vdots \\
    a_{n1} & \cdots & a_{ni} & \cdots & a_{nn}
    \end{array}
    \right)
    \end{align*}
    ```
    
- **出力**
    
    $$
    \left(\begin{array}{ccccc}a_{11} & \cdots & a_{1i} & \cdots & a_{1n}\\\vdots & \ddots &        &        & \vdots \\a_{i1} &        & a_{ii} &        & a_{in} \\\vdots &        &        & \ddots & \vdots \\a_{n1} & \cdots & a_{ni} & \cdots & a_{nn}\end{array}\right)
    $$
    

<aside>
🚨 array環境+left, rightは汎用的な書き方をできるが、少しごちゃっとする。また、かっことの間や文字間に余計な隙間が生まれてしまう。
amsmathパッケージを導入している場合は、matrix環境を使う方が良い(記述もこっちのほうが簡単)。

</aside>

---

- **関連リンク**
    
    [場合分け(数式中)](%E5%A0%B4%E5%90%88%E5%88%86%E3%81%91(%E6%95%B0%E5%BC%8F%E4%B8%AD)%208f478fc6959c40deab9d062463006c60.md) 
    
    [大きなかっこ(数式)](%E5%A4%A7%E3%81%8D%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%93(%E6%95%B0%E5%BC%8F)%20c1cc7b862ec8485fa907f1c815368142.md)