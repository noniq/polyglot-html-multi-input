SRC=$(shell find src/ -type f)
default: node_modules public/index.js

node_modules: package.json
	yarn install

public/index.js: webpack.config.js $(SRC)
	yarn prod
