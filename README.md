# fingoCarousel
### Carousel Plugin

---

**Features**
- responsive

**Default Options**
```js
var defaults = {
    'width': 1240,
    'height': 390,
    'margin': 0,
    'count': 1,
    'col': 1,
    'row': 1,
    'infinite': true,
    'index': 0
  };
```

**Options**
- width: carousel width
- height: carousel height
- margin: tabpanel margin
- count: how many tabpanels will move when you click button
- col: how many columns in carousel mask
- row: how many rows in carousel mask
- infinite: infinite carousel or not(true or false)
- index: index of active tabpanel

##시작하기
```html
<!-- Basic Stylesheet -->
<link rel="stylesheet" href="css/fingo.carousel.min.css">
<!-- include radioClass -->
<script src="js/jquery.radioClass.js" charset="utf-8"></script>
<!-- include fingoCarousel -->
<script src="js/fingo.carousel.js"></script>
```

**Markup**

```html
<div id="fingoCarousel">
  <ul>
    <li><a href></a></li>
    <li><a href></a></li>
    <li><a href></a></li>
  </ul>
  <div>
    <figure>
      <img src="/img" alt="carousel 1">
      <img src="/img/icon.svg" class="icon">
    </figure>
    <figure>
      <img src="/img" alt="carousel 2">
    </figure>
    <figure>
      <img src="/img" alt="carousel 3">
    </figure>
    ...
  </div>
</div>
```

**JavaScript**
Call the fingoCarousel plugin
```js
// Default
var $carousel = $('#fingocarousel').fingoCarousel();

// Custom Options
var $carousel = $('#fingocarousel').fingoCarousel({
    'width': 1640,
    'height': 850,
    'infinite': false
  });
```
