# html-picture
With 767 bytes, this script will make the HTML &lt;picture&gt; work correctly in browsers that do not support the &lt;picture&gt;, &lt;source&gt; and the srcset attribute of &lt;source&gt;.

Usage:
```html
<picture>
  <source media="(min-width: 768px)" srcset="https://placehold.it/768x768">
  <source media="(min-width: 480px) and (max-width: 767px)" srcset="https://placehold.it/480x480">
  <img src="https://placehold.it/290x290">
</picture>
```
