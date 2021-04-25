
.PHONY: build clean

publish: build
	npm version patch
	npm run publish
	git push

clean:
	rm -rf dist