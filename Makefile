.PHONY: git
git:
	git add .
	git commit -m"自动提交 git 代码"
	git push
tag:
	git push --tags
.PHONY: run
run:
	npm run electron:serve
.PHONY: build
build:
	npm run electron:build
.PHONY: win
win:
	npm run electron:build -- --win nsis