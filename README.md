# Polyglot HTML “Multi Input” Component

The task: Implement a very simple “multi input” component using your language and framework of choice.

## Specification

The component should work like this:

 * Assume that the page contains a form including one or more textareas with the attribute `data-multi-input`. The textareas might be empty, or they might contain one or more (short) lines of text.
 * For each of these textareas:
   * The component must (optically) replace the textarea with a series of single line input fields, each pre-populated with one line of content from the textarea. (If the textarea is empty, zero input fields will be generated).
   * The component must then add one additional empty input field.
   * Everytime the user fills in this additional input field and presses enter, a new empty input field is generated and receives focus. (If the additional input field is empty or contains whitespace only, pressing return simply does nothing.) Also, pressing enter in this field must not submit the form.
   * Each input field except for the last one must have a “delete” next to it. If this button is pressed, the according input field is removed. It is possible to remove all input fields except for the last one.
   * When the form is submitted, the data must be sent exactly as if the component wouldn’t exist and the user had interacted with the textarea instead. I.e. there must be a parameter with the textarea’s name and containing a multiline string, constructed by joining the values of the all individual input fields (including the last input field – the one that does not have a “delete” button). Rule: If the component is initialized again from the textarea’s value after form redisplay, it should look exactly like before submitting the form – with one exception: If the last input field contained a value, submitting and redisplaying the form must have the same effect as if the user had pressed enter: A new empty input field is added at the end.

## Implementations

For each implementation:

 * Create a directory with a meaningful name.
 * Add whatever source files you need.
 * Create a `Makefile` that invokes whatever build process is necessary to generate the final javascript file(s) from your sources.
 * Create a file named `component.html` where you include your final javascript file(s). Simply refer to them using their relative paths inside your component directory (`example-implementation/build/foo.js` should be referred to `build/foo.js`). Inline scripts are allowed, too. The content of this file will later be included in the HEAD part of the template.

The server will execute the Makefile eacht time the example page for your component is requested. This is meant to work as very general build tool that should allow to work with whatever specific build toolchain is necessary for any implementation.

## Server

To run the server:

 * `bundle` (only needed once)
 * `bin/server`
 * Visit http://localhost:4567 in your browser.
