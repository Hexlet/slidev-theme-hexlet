setup:
	npm i

# temp fix
# [vite] Internal server error: Preprocessor dependency "sass" not found. Did you install it?
css-build:
	npx sass ./styles/application.scss styles/application.css

start:
	npm run dev

publish:
	npx release-it

.PHONY: setup
