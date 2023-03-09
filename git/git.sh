#!/bin/sh

# コミット状況を取得する
git fetch origin glitch

# Glitch ローカルの作業データより GitHub 側を優先するためハードリセット
git reset --hard origin/glitch

# Force pull を実行
git pull origin glitch --force