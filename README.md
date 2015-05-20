# Backbone Normalize Hash

```js
var Backbone = require('backbone');
var normalizeHash = require('backbone-normalize-hash');

Backbone.View.extend({
  initialize() {
    this.listenTo(this.model, normalizeHash(this, 'modelEvents'))
  },

  modelEvents: {
    change: 'render'
  }
});
```
