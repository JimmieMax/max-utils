
.PHONY: build clean

build:
	npm run build

publish: build
	npm version patch
	npm publish
	git push

clean:
	rm -rf dist