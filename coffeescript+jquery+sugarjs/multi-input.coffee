class @MultiInput
  constructor: (@textarea, options = {}) ->
    @wrapper = $("<div>").insertAfter(@textarea)
    @textarea.hide()
    items = @textarea.val().split(/\r?\n/).exclude("")
    @defaultInput = @createDefaultInput()
    items.forEach (item) => @addItem(item)
    @textarea.closest("form").on "submit", @handleSubmit
    @wrapper.on "click", ".mi-remove-button", @handleRemoveItem
    @typeahead = @initTypeahead(options.typeaheadOptions)
    @defaultInput.on "keydown", @handleKeydown

  createRemovableInput: (item) ->
    wrapper = $("<div class='mi-removable-item'/>").insertBefore(@defaultInput)
    $("<input type='text' class='mi-input mi-removable'>").val(item).appendTo(wrapper)
    $("<button type='button' class='mi-remove-button btn btn-danger btn-mini'>⨉</button>").appendTo(wrapper)

  createDefaultInput: (item) ->
    $("<input type='text' class='mi-input mi-default'>").appendTo(@wrapper)

  initTypeahead: (options) ->
    return unless options
    options.updater ||= (item) =>
      @addItem(item)
      ""
    @defaultInput.typeahead(options)

  addItem: (item) ->
    @createRemovableInput(item)

  addItemForCurrentInput: ->
    value = @defaultInput.val()
    return if value.isBlank()
    @addItem(value)
    @defaultInput.val("")

  currentItems: ->
    @wrapper.find(".mi-input").map(-> $(this).val()).get()

  handleKeydown: (ev) =>
    if ev.keyCode == 13 && !@typeahead?.shown
      ev.preventDefault()
      @addItemForCurrentInput()

  handleRemoveItem: (ev) =>
    ev.preventDefault()
    $(ev.target).closest(".mi-removable-item").hide("fast", -> $(this).remove())

  handleSubmit: (ev) =>
    @textarea.val(@currentItems().join("\n"))
