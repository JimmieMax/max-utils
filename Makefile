
.PHONY: build clean

publish: build
	npm version patch
	npm publish
	git push

clean:
	rm -rf dist