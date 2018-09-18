COFFEE=node_modules/coffeescript/bin/coffee

default: $(COFFEE) build/multi-input.js

$(COFFEE):
	yarn install

build/multi-input.js: multi-input.coffee
	$(COFFEE) --compile -o build/ multi-input.coffee
