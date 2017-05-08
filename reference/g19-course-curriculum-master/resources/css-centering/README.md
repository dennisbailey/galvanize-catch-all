# CSS Centering - primer

## Inline or Inline Block

### Vertical


**Single Line**

- can appear vertically centered due to equal padding above and below
- if padding not an option, make line-height equal to the height to center text

**Multiple Lines**

- can use same equal padding technique as above
- can also use vertical-align property
- is dependent on line height
-applies to elements being aligned, not their parent element
-flex: parent container needs fixed height

  ```javascript
  .flex-center-vertically {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
  }
  ```

- ghost-element technique: places a full-height pseudo element inside the container to vertically center text

**Block-Level Element**

-flexbox is easiest

```javascript
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

### Horizontal

Inline block centering can be centered only by creating a parent div tag that wraps the inline block div with (`text-allign: center;`). This will not work if used within the inline block center div tag.

Inline can be set to center within the inline div tag with (`margin: auto;`).

[CodePen](http://codepen.io/ErikAbrahamson/pen/pJxJow)

## Block

### Vertical

**Flexbox**

The CSS3 Flexible Box, or flexbox, is a layout mode providing for the arrangement of elements on a page such that the elements behave predictably when the page layout must accommodate different screen sizes and different display devices.

```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

http://codepen.io/chriscoyier/pen/FqDyi

**Unknown Height**

This method words by shifting the top of the element down 50% of its parent's height, and then pushing it up half of it's own height.

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(50%);
}
```

http://codepen.io/chriscoyier/pen/lpema

**Known Height**

If you must, you can also center with pixels if the height of your element is known and fixed.

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin: -50px;
}
```

http://codepen.io/chriscoyier/pen/HiydJ

### Horizontal

You can center a block-level element by giving it a margin-left and margin-right of auto (and it has a set width, otherwise it would be full width and wouldn't need centering)

```javascript
margin-left: auto;
margin-right: auto;
```

You can also write it in shorthand:

```javascript
margin: 0 auto;
```

or

```javascript
margin: 0 auto;
```

[CodePen example](http://codepen.io/amerriman/pen/LVgEwM)

