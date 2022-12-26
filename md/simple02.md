---
marp: true
theme: ogimage
# size: github
backgroundColor: "#404040"
#color: rgba(30, 30, 30, .7);
class:
  - gaia
  - clamp
---

<!--![bg](https://github.com/hankei6km/test-marp-ogimage/raw/main/md/assets/bg_image01.png)-->

<!--![bg bottom brightness:0.5](https://github.com/hankei6km/test-marp-ogimage/raw/main/md/assets/bg_image03.jpg)-->

# **Mermaid** で円グラフ

<div class="mermaid">
%%{init: {'theme': 'dark', 'themeVariables': {  'pieSectionTextSize': '32px'} }}%%
pie showData
    "カレー" : 50
    "うどん" : 30
    "カツ丼" : 10
</div>

<!-- mermaid.js -->
<script src="https://unpkg.com/mermaid@9.2.2/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>
