build:
	@make install
	@lessc sg-form/sg-form.less > sg-form/sg-form.css
	@component build --dev

install:
	@npm install > /dev/null
	@component install --dev > /dev/null

demo:
	@make build
	@open http://localhost:5000/demo.html
	@node demo/server.js

.PHONY: build install demo