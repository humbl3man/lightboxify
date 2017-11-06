## Lightboxify - Simple hassle-free lightbox plugin

### Dependencies

* jQuery 1.x.x +

### How to use

Recommended way for structring our lightbox html:
```html
<div class="lightbox">
	<div class="lightbox-item" data-src="/some/image.jpg" data-caption="hello I am image 1">
		<img src="/some/image.jpg">
	</div>
	<div class="lightbox-item" data-src="/some/image.jpg" data-caption="hello I am image 2">
		<img src="/some/image.jpg">
	</div>
	<div class="lightbox-item" data-src="/some/image.jpg" data-caption="hello I am image 3">
		<img src="/some/image.jpg">
	</div>
</div>
```

Optional CSS should be included in the head:
```html
	...
	<link rel="stylesheet" href="your/path/lightboxify.min.css">
	...
```

Load source file after loading jQuery (I recommend adding after body tag):
```html
	...
	</body>
	<!-- jquery -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="...your/path/lightboxify.min.js"></script>
```

Initialize plugin:

```javascript
	$('.lightbox').lightboxify();
```

You are done! Enjoy.

### Version history

v0.1 - initial release

### Future versions
* Remove jQuery dependency
* Animation and settings