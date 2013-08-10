build:
	@make install
	@lessc sg-form/sg-form.less > sg-form/sg-form.css
	@component build --dev
	@component build --standalone sgForm --name sgForm --out demo

install:
	@component install --dev > /dev/null

demo:
	@make build
	@open demo/demo.html

.PHONY: build install demo