# sg-form

Form validation

## Installation

```sh
bower install sg-form
```

## API

### Markup

Wrap inputs with an element that has a class **required**. Optionally place an &lt;aside class="sg-form-badge"&gt;&lt;/aside&gt; directly after the input to show the invalid circle before the form is submitted.

```html
<span class="required">
  <input type="text" name="firstName" required>
  <aside class="sg-form-badge"></aside>
</span>
```

To make the field valid the wrapper with the class **required** must also have the class **valid**.

```html
<span class="required valid">
  <input type="text" name="firstName" required>
  <aside class"sg-form-badge"></aside>
</span>
```

The logic that makes this field valid is up to you. Below is an example of how this might be implemented with AngularJS.

```html
<span class="required" ng-class="{valid: myForm.firstName.$valid}">
  <input type="text" name="firstName" required>
  <aside class"sg-form-badge"></aside>
</span>
```

### JavaScript

Hook into the forms **submit** event and return the following.

```javascript
sgForm($('#myel')).invalid() // returns a boolean
sgForm(document.querySelector('#myel')).invalid() // returns a boolean
```

## Notes

Yes, there is still a lot to do from your perspective, however there are too many libraries to that take of too much thus making it difficult to implement into existing solutions.

## License

MIT
