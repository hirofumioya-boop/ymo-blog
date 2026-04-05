#!/bin/bash

# GitHubプッシュ自動化スクリプト
# コミット後に自動でプッシュする

echo "Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "Push successful!"
else
    echo "Push failed. Please check your connection or credentials."
fi